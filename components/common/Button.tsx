import { merge } from '@/utils/helpers';
import { ComponentProps, FC, ReactNode } from 'react';
import Text from './Text';

type ButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
} & ComponentProps<'button'>;

const Button: FC<ButtonProps> = ({
  className,
  children,
  isLoading,
  ...other
}) => {
  return (
    <button
      aria-label='burger menu'
      className={merge(
        'flex w-fit items-center justify-center gap-2 rounded bg-blue px-8 py-3 text-base font-extrabold text-white transition-colors hover:bg-blue-dark-200 disabled:cursor-not-allowed disabled:bg-gray-100',
        {
          'pointer-events-none cursor-not-allowed bg-green md:hover:bg-green':
            isLoading,
        },
        className
      )}
      {...other}
    >
      {!isLoading ? (
        children
      ) : (
        <>
          <div className='loading-anim'>
            <span className='bg-white' />
            <span className='bg-white' />
            <span className='bg-white' />
            <span className='bg-white' />
            <span className='bg-white' />
            <span className='bg-white' />
          </div>
          <Text className='text-inherit'>Loading</Text>
        </>
      )}
    </button>
  );
};

export default Button;
