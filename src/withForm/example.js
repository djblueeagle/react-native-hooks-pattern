import * as React from "react";
import { View, Text } from "react-native";
import withForm from "./index.js";
import Input from "../Input";
import { validateEmail } from "../utils";

const config = {
  initialValues: { email: null, password: null },
  validation: {
    email: validateEmail,
    password: password => password.length > 5
  }
};

function Example(props) {
  let { values, setValue, errors } = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>with Form</Text>
      <Input
        type="email"
        value={values.email}
        onChangeText={setValue}
        error={errors && errors.email && "Email is not valid"}
      />
      <Input
        type="password"
        value={values.password}
        onChangeText={setValue}
        error={errors && errors.password && "Password is not strong"}
      />
    </View>
  );
}

export default withForm(config)(Example);
