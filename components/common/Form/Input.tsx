'use client';

import React, { ChangeEvent, FocusEvent } from 'react';

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
const Input: React.FC<InputProps> = (props: InputProps) => {
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
      <input
        type={type}
        className={`w-full bg-gray-50 text-gray-800 text-[16px] font-normal font-poppins leading-[20px] border border-gray-200 focus:ring-0 rounded outline-none transition duration-100 px-6 py-2 ${className}`}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        readOnly={readonly}
      />
      {touched && error && (
        <p className="w-full mt-1 mb-1 text-red-500  text-base font-mono font-semibold antialiased">
          {error}
        </p>
      )}
    </>
  );
};

<Input />;
export default Input;
