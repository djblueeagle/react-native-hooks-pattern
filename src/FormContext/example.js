import * as React from "react";
import { View, Text } from "react-native";
import { FormProvider, FormConsumer } from "./index.js";
import Input from "../Input";
import { validateEmail } from "../utils";

const config = {
  initialValues: { email: null, password: null, sex: null },
  validation: {
    email: validateEmail,
    password: password => password.length > 5,
    sex: sex => (sex === "Male" ? true : false)
  }
};

function Example(props) {
  return (
    <FormProvider {...config}>
      <FormConsumer>
        {state => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text>Form Context</Text>
              <Input
                type="email"
                value={state.values.email}
                onChangeText={state.setValue}
                error={
                  state.errors && state.errors.email && "Email is not valid"
                }
              />
              <Input
                type="password"
                value={state.values.password}
                onChangeText={state.setValue}
                error={
                  state.errors &&
                  state.errors.password &&
                  "Password is not strong"
                }
              />
              <Input
                type="sex"
                value={state.values.sex}
                onChangeText={state.setValue}
                error={state.errors && state.errors.sex && "sex is not male"}
              />
            </View>
          );
        }}
      </FormConsumer>
    </FormProvider>
  );
}

export default Example;
