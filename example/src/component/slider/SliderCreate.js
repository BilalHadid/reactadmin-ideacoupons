import React from "react";
import {
  Create,
  SimpleForm,
  ImageInput,
  ImageField,
  TextInput,
} from "react-admin";
const SliderCreate = (props) => {
  return (
    <Create title="Create a Event" {...props}>
      <SimpleForm>
        <TextInput source="url" />
        <ImageInput
          source=""
          label="title"
          accept="image/png, image/jpg, image/jpeg"
          maxSize={5000000}
          placeholder={
            <p>
              Upload Image
              <span>*File size should not exceed 5MB</span>
            </p>
          }
        >
          <ImageField source="image" title="images" />
        </ImageInput>
        <span>OR</span>
        <TextInput source="image" label="URL IMAGE ENTER" />
      </SimpleForm>
    </Create>
  );
};

export default SliderCreate;
