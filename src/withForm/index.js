import * as React from "react";
import MiniForm from "../MiniForm/index.js";

function withForm(config) {
  return C => props => (
    <MiniForm {...config} {...props}>
      {state => <C {...state} />}
    </MiniForm>
  );
}

export default withForm;
