import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import styles from "./Form.module.css";


interface UserInfo {
  email: string;
  age: number;
  name: string;
  phone: {
    ext: string;
    number: string;
  };
}
interface FormProps {
  initialValues: UserInfo;
  children: React.ReactNode;
}
const Form: React.FC<FormProps> = ({ initialValues, children }) => {
  const { handleSubmited } = useContext(FormContext);

  return (
    <form className={styles.center} onSubmit={handleSubmited}>
      {children}
    </form>
  );
};

export default Form;
