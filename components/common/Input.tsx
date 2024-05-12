import { merge } from '@/utils/helpers';
import { ComponentProps, FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = ComponentProps<'input'> & {
  isError: boolean;
  fieldProps: UseFormRegisterReturn;
};

const Input: FC<InputProps> = ({
  name,
  type = 'text',
  placeholder,
  fieldProps,
  className,
  isError,
}) => {
  return (
    <label htmlFor={name} className={merge('flex w-full', className)}>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={merge(
          'h-12 grow rounded border border-blue-light-700 py-3 pl-4 pr-2 text-base transition-all placeholder:text-gray-400 focus:border-blue-light-400 focus:outline-none',
          {
            'border-red': isError,
          }
        )}
        {...fieldProps}
      />
    </label>
  );
};

export default Input;
