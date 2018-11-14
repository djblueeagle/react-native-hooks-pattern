import React, { useState } from "react";
import ReactDOM from "react-dom";
import Input from "./Input";

import {
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  Animated
} from "react-native";
import MiniForm from "./MiniForm/example.js";
import FormContextRenderProps from "./FormContextRenderProps/example.js";
import FormContext from "./FormContext/example.js";
import WithForm from "./withForm/example.js";
import FormHooks from "./FormHooks/example.js";

import { validateEmail } from "./utils";

import "./styles.css";

function Page(props) {
  let [page, setPage] = useState(0);
  let pages = React.Children.count(props.children) - 1;
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => setPage(page === 0 ? page : page - 1)}
        style={{ flex: 1 }}
      />
      {props.children[page]}
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => setPage(page === pages ? page : page + 1)}
      />
    </View>
  );
}

function App(props) {
  return (
    <Page>
      <MiniForm />
      <FormContextRenderProps />
      <FormContext />
      <WithForm />
      <FormHooks />
    </Page>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
