import React from "react";
import { Create, SimpleForm, TextInput, BooleanInput } from "react-admin";
// import IconPickers from "./IconPicker";
import IconPicker from "react-icon-picker";

const icons = [
  "fa fa-amazon",
  "fa fa-adn",
  "fa fa-androidroid",
  "fa fa-area-chart",
  "fa fa-file-picture-o",
  "fa fa-plus-square",
  "fa fa-genderless",
  "fa fa-intersex",
  "fa fa-hand-o-down",
  "fa fa-rocket",
  "fa fa-ambulance",
  "fa fa-heartbeat",
  "fa fa-hospital-o",
  "fa fa-rocket",
  "fa fa-plane",
  "fa fa-ship",
  "fa fa-taxi",
  "fa fa-address-book",
  "fa fa-adjust",
  "fa fa-bank",
  "fa fa-book",
  "fa fa-camera",
  "fa fa-gift",
  "fa fa-heart",
  "fa fa-align-center",
  "fa fa-align-justify",
  "fa fa-align-left",
];
const id = [
  "fa fa-amazon",
  "fa fa-adn",
  "fa fa-androidroid",
  "fa fa-area-chart",
  "fa fa-file-picture-o",
  "fa fa-plus-square",
  "fa fa-genderless",
  "fa fa-intersex",
  "fa fa-hand-o-down",
  "fa fa-rocket",
  "fa fa-ambulance",
  "fa fa-heartbeat",
  "fa fa-hospital-o",
  "fa fa-rocket",
  "fa fa-plane",
  "fa fa-ship",
  "fa fa-taxi",
  "fa fa-address-book",
  "fa fa-adjust",
  "fa fa-bank",
  "fa fa-book",
  "fa fa-camera",
  "fa fa-gift",
  "fa fa-heart",
  "fa fa-align-center",
  "fa fa-align-justify",
  "fa fa-align-left",
];

const PostCreate = (props) => {
  const [state, setState] = React.useState({
    id: "fa fa-camera",
    icon: "fa fa-camera",
  });
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <span>{state.icon}</span>
        <IconPicker
          {...props}
          icons={icons}
          defaultValue="fa fa-camera"
          resource={state.icon}
          onChange={(icon) => {
            setState({
              ...state,
              id,
              icon,
            });
          }}
        />
        <span>{"  "}</span>
        <span>OR</span>
        <TextInput
          source="icon"
          defaultValue={state.icon}
          label="Enter icons"
        />
        {/* </ImageInput> */}
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
