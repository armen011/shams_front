import Image from 'next/image';

const FirstSection = () => {
  return (
    <div className='h-[calc(100vh-80px)] w-full overflow-hidden'>
      <Image
        className='w-full'
        src='/images/image.png'
        alt='Dentists'
        width={1440}
        height={960}
      />
    </div>
  );
};

export default FirstSection;
