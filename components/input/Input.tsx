import InputProps from './Input.types';

import Style from './Input.module.scss';

const Input: React.FC<InputProps> = ({
  type = 'text',
  id,
  name,
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  disabled,
  readOnly,
  required,
  autoFocus,
  maxLength,
  minLength,
  pattern,
  className,
  label,
  error,
  ...rest
}) => {
  return (
    <div className={Style.input_wrapper}>
      {label && (
        <label className={Style.input_label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={Style.input}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        autoFocus={autoFocus}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        {...rest}
      />
      {error && <p className={Style.error_message}>{error}</p>}
    </div>
  );
};

export default Input;
