import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageField,
  ImageInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  required,
  RadioButtonGroupInput,
} from "react-admin";
const CouponEdit = (props) => {
  return (
    <Edit title="Edit a Forum & Categories" {...props}>
      <SimpleForm>
        {/* <SelectInput source="user" choices={[{ id: "jhon", name: "Jhon" }]} /> */}
        <div
          style={{
            marginBottom: "-55px",
            marginTop: "-55px",
            marginLeft: "-25px",
          }}
        >
          <h1 class="second">
            <span>Add Coupons</span>
          </h1>
        </div>

        <TextInput disabled source="id" />
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Coupon Title*</p>
          <TextInput
            source="title"
            label="Enter Coupon Title"
            validate={required()}
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Coupon Description*</p>
          <TextInput
            source="type"
            label="Description"
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Coupon URL*</p>
          <TextInput
            source="dealURL"
            label="Enter Coupon URL"
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Coupon Code</p>
          <TextInput
            source="couponscode"
            label="Coupons Code"
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Starting Date</p>
          <DateInput
            source="dealStart"
            // defaultValue={new Date()}
            // defaultValue={new Date()}
            label="Starting Date"
            style={{ width: "380%" }}
          />
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Expiry Date</p>
          <DateInput
            source="dealexpire"
            label="Expire Date"
            style={{ width: "380%" }}
          />
        </div>

        {/* <ReferenceInput
          label="Forum & Category"
          source="ForumCategory"
          reference="forumcategory"
        >
          <SelectInput optionText="title" />
        </ReferenceInput> */}
        {/* <SelectInput source="user" choices={[{ id: "jhon", name: "Jhon" }]} /> */}
        {/* <ReferenceInput label="users" source="user" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput> */}
        {/* <SelectInput  
          source="ForumCategory"
          choices={[{ id: "coupon", name: "General Coupon" }]}
        /> */}
        <div style={{ display: "flex", width: "100%" }}>
          <p style={{ color: "black", width: "20%" }}>Networks*</p>
          <div className="Rasdio" style={{ width: "20%" }}>
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
          <p style={{ color: "black", width: "100%" }}>Store</p>
          <ReferenceInput
            label="store"
            source="store"
            reference="store"
            style={{ width: "380%" }}
          >
            <SelectInput multiple native optionText="title" />
          </ReferenceInput>
        </div>

        {/* <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          onChange={handleChangeMultiple}
          inputProps={{
            id: 'select-multiple-native',
          }}
        > 
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select> */}
        {/* <SelectInput
          source="store"
          choices={[
            { id: "1", name: "BathroomWall T-shirt" },
            { id: "2", name: "Daisy Baby Shop" },
            { id: "3", name: "DB3 Online" },
            { id: "4", name: "Dead Good Undies" },
            { id: "5", name: "Envie4u" },
            { id: "6", name: "Mega T-shirt store" },
            { id: "7", name: "Nazz Collection" },
            { id: "8", name: "Opera Cambi" },
            { id: "9", name: "Rock n Romance" },
            { id: "10", name: "Snide London" },
          ]}
        /> */}
        {/* <SelectInput
          source="category"
          choices={[
            { id: "Apperal", name: "Gift" },
            { id: "Health", name: "Fashion" },
            { id: "3", name: "Accessories" },
          ]}
        /> */}
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Categories</p>

          <ReferenceInput
            label="Category"
            source="category"
            reference="posts"
            style={{ width: "380%" }}
          >
            <SelectInput optionText="title" />
          </ReferenceInput>
        </div>
        {/* <ReferenceInput label="Category" source="category" reference="posts">
          <SelectInput optionText="title" />
        </ReferenceInput> */}
        {/* <ImageInput source="image" label="title" accept="image/*"></ImageInput> */}
        <div style={{ display: "flex", width: "80%" }}>
          <p style={{ color: "black", width: "100%" }}>Image URL</p>

          <TextInput
            source="image"
            label="Enter URL Image"
            style={{ width: "380%" }}
          />
        </div>

        <span>OR</span>
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

        <BooleanInput source="fetured" />
        <BooleanInput source="dealExclusive" />
        <BooleanInput source="Verified" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default CouponEdit;
