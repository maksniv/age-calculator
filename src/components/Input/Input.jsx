import styles from './Input.module.scss';

const Input = ({
  description,
  value,
  onChange,
  errors,
  maxLength,
  placeholder,
}) => {
  return (
    <>
      <div className={styles.input__wrapper}>
        <label className={styles.input__label}>{description}</label>
        <input
          id={description}
          type="text"
          className={styles.input__input}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={onChange}
        />
        {errors && <p className={styles.input__errors}>{errors}</p>}
      </div>
    </>
  );
};

export default Input;
