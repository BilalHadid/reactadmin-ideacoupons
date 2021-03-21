import React, { useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  ImageField,
  RadioButtonGroupInput,
  DateInput,
  SelectInput,
  ReferenceInput,
  required,
  email,
  minLength,
  maxLength,
  AutocompleteInput,
} from "react-admin";
// import { Card } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
import "../user.css";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const validateFirstName = [required(), maxLength(35)];
const StoreCreate = (props) => {
  const [img, setImg] = useState();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imgs = e.target.files[0];
      setImg(URL.createObjectURL(imgs));
    }
  };
  return (
    <Create title="Create a Store" {...props}>
      <SimpleForm
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Please Enter Store";
          }
          if (!values.title) {
            errors.title = "Please Enter title";
          }
          if (!values.url) {
            errors.url = "Please Enter url";
          }
          return errors;
        }}
      >
        <div
          style={{
            marginBottom: "-55px",
            marginTop: "-55px",
            marginLeft: "-55px",
          }}
        >
          <h1 class="second">
            <span>Add Store</span>
          </h1>
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Store Name *</p>
          <TextInput
            source="name"
            label="Enter Store Name"
            autoFocus
            validate={required()}
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Store title *</p>
          <TextInput
            source="title"
            label="Enter Store title"
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Store WebAddress*</p>
          <TextInput
            source="url"
            label="Enter Store WebAddress"
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Country*</p>

          <ReferenceInput
            label="Country"
            source="countries"
            reference="country"
            validate={required()}
          >
            <SelectInput optionText="Name" style={{ width: "380%" }} />
          </ReferenceInput>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <p style={{ color: "black", width: "20%" }}>Networks*</p>
          <div
            className="Rasdio"
            style={{ width: "20%", overflow: "scroll", maxHeight: "150px" }}
          >
            {/* <RadioButtonGroupInput
            source="SelectNetwork"
            choices={[
              { id: "programming", name: "Paid On Result" },
              { id: "photography", name: "ClickWise" },
            ]}
          /> */}
            <ReferenceInput
              label="Networks"
              source="SelectNetwork"
              reference="networks"
            >
              <RadioButtonGroupInput optionText="name" />
            </ReferenceInput>
          </div>
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Tracking Link*</p>
          <TextInput
            source="TrackingLink"
            label="Enter Store Tracking Link"
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Meta Title*</p>
          <TextInput
            source="metatitle"
            label="Enter Store Meta Title"
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Meta Keywords*</p>

          <TextInput
            source="metaKeywords"
            label="Enter Store metaKeyword"
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Meta Disc</p>
          <TextInput source="metaDisc" style={{ width: "380%" }} />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "20%" }}>Categories*</p>

          <ReferenceInput
            label="Category"
            source="category"
            reference="posts"
            filterToQuery={(searchText) => ({ title: searchText })}
          >
            <AutocompleteInput optionText="title" resettable />
          </ReferenceInput>
        </div>

        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Description</p>
          <TextInput source="Description" style={{ width: "380%" }} />
        </div>

        {/* <MarkdownInput source="Description" /> */}

        {/* <DateInput source="leftTime" /> */}
        {/* <ImageInput source="image" label="desc" accept="">
          <ImageField source="image" src="url" title="desc" />
        </ImageInput> */}
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Enter Image URL*</p>
          <TextInput
            source="images"
            label="Enter Url for Image"
            defaultValue={img}
            style={{ width: "380%" }}
          />
        </div>

        <span>OR another </span>
        <span>
          <img src={img} width="200px" height="200px" />
          <h1>Select Image</h1>
          <input type="file" name="myImage" onChange={onImageChange} />
        </span>
        {/* <ImageInput
          source=""
          label="title"
          accept="image/*"
          maxSize={5000000}
          placeholder={
            <p>
              Upload Image
              <span>*File size should not exceed 5MB</span>
            </p>
          }
        >
          <ImageField source="images" title="image" />
        </ImageInput> */}

        <BooleanInput source="featured" />
        <BooleanInput source="status" />
        <TextInput
          source="adddate"
          defaultValue={new Date().toUTCString()}
          disabled
        />
        <TextInput
          source="AddBy"
          label="Added by"
          defaultValue="faizan"
          disabled
        />

        {/* <input
          type="file"
          id="file1"
          name="image"
          accept="image/*"
          capture
          onChange={(e) => console.log(e.target.value)}
        /> */}
      </SimpleForm>
    </Create>
  );
};

export default StoreCreate;
