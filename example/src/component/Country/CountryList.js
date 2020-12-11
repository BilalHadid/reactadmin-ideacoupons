import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Filter,
  SearchInput,
  ReferenceInput,
  SelectInput,
  SimpleShowLayout,
} from "react-admin";
import DeleteWithCustomConfirmButton from "ra-delete-with-custom-confirm-button";
import Delete from "@material-ui/icons/Delete";
import ErrorOutline from "@material-ui/icons/ErrorOutline";
const ProductFilter = (props) => {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn />
      <ReferenceInput
        source="id"
        reference="country"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput source="Name" />
      </ReferenceInput>
    </Filter>
  );
};
const DeleteConfirmTitle = "Are you sure you want to delete this post?";
const DeleteConfirmContent = (props) => {
  return (
    <SimpleShowLayout {...props}>
      <TextField source="id" label="id" />
      <TextField source="Name" label="Name" />
    </SimpleShowLayout>
  );
};
const CountryList = (props) => {
  return (
    <List {...props} filters={<ProductFilter />}>
      <Datagrid>
        <TextField source="id" />

        <TextField source="Name" />

        <EditButton basePath="/country" />
        {/* <DeleteButton basePath="/country" /> */}
        <DeleteWithCustomConfirmButton
          title={DeleteConfirmTitle} // your custom title of delete confirm dialog
          content={DeleteConfirmContent} // your custom contents of delete confirm dialog
          label="Delete" // label of delete button (default: 'Delete')
          confirmColor="warning" // color of delete button ('warning' or 'primary', default: 'warning')
          ConfirmIcon={Delete} // icon of delete button (default: 'Delete')
          cancel="Cancel" // label of cancel button (default: 'Cancel')
          CancelIcon={ErrorOutline} // icon of cancel button (default: 'ErrorOutline')
          undoable={true} // undoable (default: true)
        />
      </Datagrid>
    </List>
  );
};

export default CountryList;
