import { useContext, useState } from "react";
import { FormContext } from "./FormContext";
import FormInput from "./FormInput";
import Form from "./Form";
import styles from "./Form.module.css";

const FormPage = () => {
  const { state } = useContext(FormContext);
  const [userInfo, setUserInfo] = useState({
    email: "example@alea.com",
    age: 30,
    name: "John Doe",
    phone: {
      ext: "00387",
      number: "65/123-456",
    },
  });

  const handleChange = (fieldName: string, value: string | number) => {
    if (fieldName.includes("phone")) {
      const phoneField = fieldName.split(".");
      const phoneNumber = phoneField[1];
      setUserInfo({
        ...userInfo,
        phone: {
          ...userInfo.phone,
          [phoneNumber]: value,
        },
      });
      return;
    }
    console.log(userInfo);
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const renderFormInputs = () => {
    return (
      <div className={styles.center}>
        <FormInput
          label="Email"
          id="email"
          type="email"
          required
          name="email"
          placeHolder="your@email.com"
          value={userInfo.email}
          onChange={handleChange}
        />
        <FormInput
          label="Age"
          id="age"
          onChange={handleChange}
          type="number"
          name="age"
          value={userInfo.age}
        />
        <FormInput
          label="Name"
          id="name"
          onChange={handleChange}
          type="text"
          required
          name="name"
          value={userInfo.name}
        />
        <FormInput
          label="Phone ext"
          id="phone.ext"
          onChange={handleChange}
          type="text"
          name="phone.ext"
          value={userInfo.phone.ext}
        />
        <FormInput
          label="Phone number"
          id="phone.number"
          onChange={handleChange}
          type="text"
          name="phone.number"
          value={userInfo.phone.number}
        />
      </div>
    );
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Form Demo</h1>
      <div>
        <Form initialValues={userInfo}>
          {renderFormInputs()}
          <button className={styles.submit} type="submit" value="Submit">
            Submit
          </button>
        </Form>
      </div>
      {state.formSubmited && (
        <div>
          <p>Email: {userInfo.email}</p>
          <p>Age: {userInfo.age}</p>
          <p>Name: {userInfo.name}</p>
          <p>
            Phone: {userInfo.phone.ext} {userInfo.phone.number}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormPage;
