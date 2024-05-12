'use client';

import { Input, Text, Textarea, Button } from '@/components/common';
import { useI18n } from '@/i18n/client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { orderCallback } from './utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchem } from './schema';

export type TContactForm = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { t } = useI18n();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactForm>({
    mode: 'onTouched',
    resolver: yupResolver(contactFormSchem),
  });

  const firstName = register('first_name', {
    required: true,
  });
  const lastName = register('last_name', {
    required: true,
  });
  const phone = register('phone', {
    required: true,
  });
  const email = register('email', {
    required: true,
  });
  const message = register('message', {
    required: true,
  });

  const onSubmit: SubmitHandler<TContactForm> = async (data) => {
    orderCallback(data).then((msg) => {
      console.log('msg', msg);
    });
  };

  return (
    <div className='flex w-full max-w-full grow flex-col lg:max-w-xl'>
      <Text as='h4' sz='24' className='mb-8 text-center font-medium'>
        {t('get_in_touch_with_us')}
      </Text>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex h-fit grow flex-col gap-4 transition-all lg:h-[456px]'
      >
        <div className='flex flex-col gap-4 md:flex-row'>
          <Input
            name={firstName.name}
            fieldProps={firstName}
            placeholder={t('first_name')}
            isError={!!errors.first_name}
          />
          <Input
            name={lastName.name}
            placeholder={t('last_name')}
            fieldProps={lastName}
            isError={!!errors.last_name}
          />
        </div>
        <div className='flex flex-col gap-4 md:flex-row'>
          <Input
            name={phone.name}
            type='tel'
            fieldProps={phone}
            placeholder={t('phone_number')}
            isError={!!errors.phone}
          />
          <Input
            name={email.name}
            type='email'
            fieldProps={email}
            placeholder={t('email_address')}
            isError={!!errors.email}
          />
        </div>

        <Textarea
          name={message.name}
          fieldProps={message}
          placeholder={t('enter_you_message')}
          isError={!!errors.message}
          className='grow'
        />
        <Button
          aria-label='contact us'
          type='submit'
          className='mx-auto mt-4 w-full md:w-6/12'
          disabled={Object.keys(errors).length > 0}
        >
          {t('send_message')}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
