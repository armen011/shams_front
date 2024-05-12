import { merge } from '@/utils/helpers';
import { ComponentProps, FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type TextAreaProps = ComponentProps<'textarea'> & {
  fieldProps: UseFormRegisterReturn;
  isError: boolean;
};

const Textarea: FC<TextAreaProps> = ({
  name,
  placeholder,
  rows,
  cols,
  isError,
  className,
  fieldProps,
}) => {
  return (
    <label htmlFor={name} className={merge('flex w-full', className)}>
      <textarea
        id={name}
        className={merge(
          'h-40 w-full resize-none rounded border border-blue-light-800 py-3 pl-4 pr-2 text-base transition-all placeholder:text-gray-400 focus:border-blue focus:outline-none lg:h-auto',
          {
            'border-red': isError,
          }
        )}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        {...fieldProps}
      />
    </label>
  );
};

export default Textarea;
