// @flow

import * as React from "react";

class MiniForm extends React.Component {
  state = {
    values: this.props.initialValues || {},
    errors: null
  };

  render() {
    let { render, children } = this.props;
    let setValue = this._setValue;
    if (render) {
      return render({ ...this.state, setValue });
    } else if (children) {
      return children({ ...this.state, setValue });
    } else {
      return null;
    }
  }

  /*
    @private
    setValues is trigged right after user changes the input
  */

  _setValue = (key, value) => {
    let isValid = this._runValidation(key, value);
    if (isValid || value.length === 0) {
      this.setState(state => ({
        ...state,
        values: {
          ...state.values,
          [key]: value
        },
        errors: {
          ...state.errors,
          [key]: null
        }
      }));
    } else {
      this.setState(state => ({
        ...state,
        values: {
          ...state.values,
          [key]: value
        },
        errors: {
          ...state.errors,
          [key]: `${key} is invalid`
        }
      }));
    }
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

export default MiniForm;
