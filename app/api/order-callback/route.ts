import Service from '@/service';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const data = await request.formData();

  const name = data.get('first_name');
  const surName = data.get('last_name');
  const phone = data.get('phone');
  const email = data.get('email');
  const message = data.get('message');

  if (name && surName && phone && email && message) {
    // TODO: Armen add template here
    const text = `${name} ${surName} requests a callback.\n  Phone\` ${phone} \n  Email\` ${email}\n  Message\` ${message} `;
    Service.sendMail(text);

    return NextResponse.json(
      { message: 'We have recievd your request, we will contact you' },
      { status: 200 }
    );
  }

  return NextResponse.json(
    {
      message: 'Missing required parameters, pls fill all the required fields',
    },
    { status: 400 }
  );
};
