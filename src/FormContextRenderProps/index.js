import * as React from "react";
import MiniForm from "../MiniForm/index.js";

let { Provider, Consumer } = React.createContext({});

function FormProviderRenderProps(props) {
  let { initialValues, validation, children } = props;
  return (
    <MiniForm initialValues={initialValues} validation={validation}>
      {state => <Provider value={state}>{children}</Provider>}
    </MiniForm>
  );
}

export { FormProviderRenderProps, Consumer as FormConsumerRenderProps };
