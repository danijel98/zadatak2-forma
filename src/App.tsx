import React from "react";
import { FormContextProvider } from "./components/FormContext";
import FormPage from "./components/FormPage";


export const App = () => {
  return (
    <FormContextProvider>
      <FormPage />
    </FormContextProvider>
  );
};

export default App;