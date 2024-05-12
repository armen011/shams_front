import { TContactForm } from './ContactForm';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export const orderCallback = async (data: TContactForm) => {
  const formdata = new FormData();

  Object.entries(data).forEach(([key, data]) => {
    formdata.append(key, data);
  });

  const requestOptions = {
    method: 'POST',
    body: formdata,
  };
  try {
    const response = await fetch(
      `${baseUrl}/api/order-callback`,
      requestOptions
    );
    const { message } = await response.json();

    return message;
  } catch (err) {
    return 'Unable to order callback.';
  }
};
