import { useState } from "react";

function MiniFormHooks(props) {
  let [values, setValues] = useState({ ...(props.initialValues || {}) });
  let [errors, setError] = useState({});
  let isValid = (key, value) => {
    let { validation } = props;
    if (validation[key]) {
      return validation[key](value);
    } else {
      return true;
    }
  };
  let setValue = (key, value) => {
    let validation = isValid(key, value);
    if (validation) {
      setValues({ ...values, [key]: value });
      setError({ ...errors, [key]: null });
    } else {
      setError({ ...errors, [key]: `${key} is invalid` });
    }
  };

  return props.children({ values, setValue, errors });
}

export default MiniFormHooks;
