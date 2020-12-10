import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
} from "react-admin";
const SliderEdit = (props) => {
  return (
    <Edit title="Edit a Forum & Categories" {...props}>
      <SimpleForm>
        <TextInput source="url" />
        <TextInput disabled source="id" />
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

        <TextInput source="image" label="Enter URL For SLider" />
      </SimpleForm>
    </Edit>
  );
};

export default SliderEdit;
