import ContactForm from '../contact-us/ContactForm';

const ContactUsSection = () => {
  return (
    <div className='mx-auto mb-0 flex max-w-1440 flex-col gap-8 px-4 pt-8 transition-all lg:flex-row lg:px-8 lg:pb-16 lg:pt-16'>
      <ContactForm />

      <div className='-mx-4 flex overflow-hidden rounded-none lg:mx-0 lg:rounded'>
        <iframe
          src='https://maps.google.com/maps?q=SHAMS%20dental%20clinic,%20Armenia&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed'
          frameBorder='0'
          scrolling='no'
          className='h-[384px] w-full lg:h-full lg:w-[768px]'
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsSection;
