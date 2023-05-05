import React from "react";
import styles from "./Form.module.css";


interface FormInputProps {
  type: string;
  required?: boolean;
  name: string;
  placeHolder?: string;
  value: string | number;
  label: string;
  id: string;
  onChange: (name: string, value: string | number) => void;
}
const FormInput: React.FC<FormInputProps> = ({
  type,
  required,
  name,
  placeHolder,
  value,
  onChange,
  label,
  id,
}) => {
  return (
    <div className={`${styles.padding} ${styles.center}`}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input
        type={type}
        required={required}
        name={name}
        className={styles.input}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  );
};

export default FormInput;
