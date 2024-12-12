'use client';

import React, { FocusEvent } from 'react';
import { Icon } from '@/components/ui';

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string | number | readonly string[];
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  className?: string;
}

/**
 * An input element
 */
const InputSearch: React.FC<InputProps> = (props: InputProps) => {
  const {
    type = 'text',
    placeholder = '',
    name = '',
    value = '',
    required = false,
    disabled = false,
    readonly = false,
    onChange = () => null,
    onBlur,
    error,
    touched,
    className
  } = props;

  return (
    <>
      <div className="relative">
        <div className="h-[48px] absolute top-1 left-2 inset-y-0 start-0 flex justify-center items-center ps-3">
          <div className="w-[24px] h-[24px]">
            <Icon name="search" color="gray-1" size="18" />
          </div>
        </div>
        <input
          type={type}
          className={`w-full bg-gray-50 text-gray-800 text-[16px] font-normal font-poppins leading-[20px] border border-gray-200 focus:ring-0 rounded outline-none transition duration-100 px-11 ${className}`}
          value={value}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          readOnly={readonly}
        />
      </div>

      {touched && error && (
        <p className="w-full mt-1 mb-1 text-red-500 text-base font-poppins font-semibold antialiased">
          {error}
        </p>
      )}
    </>
  );
};

export default InputSearch;
