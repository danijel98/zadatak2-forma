import React from "react";

interface FormContextState {
  formSubmited: boolean;
  initialData: Object;
}

interface FormContextStateProps {
  state: FormContextState;
  handleSubmited: (e: any) => void;
}

const FormContext = React.createContext<FormContextStateProps>({
  state: { formSubmited: false, initialData: {} },
  handleSubmited: () => {},
});

function FormContextProvider(props: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<FormContextState>({
    formSubmited: false,
    initialData: {},
  });

  const handleSubmited = (e: SubmitEvent) => {
    setState((prevState) => ({ ...prevState, formSubmited: true }));
    e.preventDefault();
  };

  return (
    <FormContext.Provider
      value={{
        state,
        handleSubmited,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}

export { FormContext, FormContextProvider };
