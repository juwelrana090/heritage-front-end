'use client';

import React, { ChangeEvent, FocusEvent } from 'react';

interface InputProps {
  placeholder?: string;
  name?: string;
  value?: string | number | readonly string[];
  options?: any;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: FocusEvent<HTMLElement>) => void;
  error?: string;
  touched?: boolean;
  className?: string;
}

/**
 * An input element
 */
const InputSelect: React.FC<InputProps> = (props: InputProps) => {
  const {
    placeholder = '',
    name = '',
    value = '',
    options = [],
    required = false,
    disabled = false,
    onChange = () => null,
    onBlur,
    error,
    touched,
    className
  } = props;

  return (
    <>
      <select
        className={`w-full bg-gray-50 text-gray-800 text-[16px] font-normal font-poppins leading-[20px] border border-gray-200 !focus:ring-0 !rounded !outline-none !transition !duration-100 !px-8 select ${className}`}
        name={name}
        value={value}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event)}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options &&
          options.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>

      {touched && error && (
        <p className="w-full mt-1 mb-1 text-red-500 text-base font-poppins font-semibold antialiased">
          {error}
        </p>
      )}
    </>
  );
};

export default InputSelect;
