import * as React from "react";

let { Provider, Consumer } = React.createContext({});

class FormContextProvider extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      values: this.props.initialValues || {},
      errors: null,
      setValue: this._setValue
    };
  }

  render() {
    // let setValue = this._setValue;
    let { children } = this.props;
    return <Provider value={{ ...this.state }}>{children}</Provider>;
  }
  _setValue = (key, value) => {
    let isValid = this._runValidation(key, value) || value.length > 0;
    this.setState(state => ({
      ...state,
      values: { ...state.values, [key]: value },
      errors: { ...state.errors, [key]: isValid ? null : `${key} is invalid` }
    }));
  };

  _runValidation = (key, value) => {
    let { validation } = this.props;
    if (validation[key]) {
      return validation[key](value);
    } else {
      return value;
    }
  };
}

export { FormContextProvider as FormProvider, Consumer as FormConsumer };
