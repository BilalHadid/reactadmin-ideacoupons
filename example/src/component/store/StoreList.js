import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  // ImageField,
  BooleanField,
  // UrlField,
  Filter,
  SearchInput,
  ReferenceField,
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  ReferenceInput,
  SelectInput,
  SimpleShowLayout,
} from "react-admin";
import DeleteWithCustomConfirmButton from "ra-delete-with-custom-confirm-button";
import Delete from "@material-ui/icons/Delete";
import ErrorOutline from "@material-ui/icons/ErrorOutline";
import { Card as MuiCard, CardContent, withStyles } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOnOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import LocalOfferIcon from "@material-ui/icons/LocalOfferOutlined";

import "../user.css";

const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="title" resettable alwaysOn />
  </Filter>
);
const Card = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      order: -1, // display on the left rather than on the right of the list
      width: "15em",
      marginRight: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))(MuiCard);
const DeleteConfirmTitle = "Are you sure you want to delete this post?";
const DeleteConfirmContent = (props) => {
  return (
    <SimpleShowLayout {...props}>
      <TextField source="id" label="id" />
      <TextField source="name" label="Store Name" />
    </SimpleShowLayout>
  );
};
const FilterSidebar = () => (
  <Card style={{ width: "500px" }}>
    <CardContent>
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Id</p>
        <FilterLiveSearch
          source="id"
          label="Enter Store id"
          style={{ width: "400%" }}
        />
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>URL</p>
        <FilterLiveSearch
          source="url"
          label="Enter Store url"
          style={{ width: "400%" }}
        />
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>name</p>
        <FilterLiveSearch
          source="name"
          label="Enter Store name"
          style={{ width: "400%" }}
        />
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Address</p>
        <FilterLiveSearch
          source="Address"
          label="Enter Store Address"
          style={{ width: "450%" }}
        />
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Network</p>

        <FilterLiveSearch
          source="SelectNetwork"
          label="Enter Network Name"
          style={{ width: "450%" }}
        />
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Category</p>

        <FilterLiveSearch
          source="category"
          label="Enter Category Name"
          style={{ width: "450%" }}
        />
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Add By</p>

        <FilterLiveSearch
          source="AddBy"
          label="Enter Add by"
          style={{ width: "450%" }}
        />
      </div>{" "}
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Updated By</p>

        <FilterLiveSearch
          source="edit"
          label="Enter Updated By"
          style={{ width: "450%" }}
        />
      </div>
      {/* <LastVisitedFilter />
          <HasOrderedFilter />
          <HasNewsletterFilter />
          <SegmentFilter /> */}
    </CardContent>
  </Card>
);
const StoreList = (props) => {
  return (
    <List {...props} filters={<PostFilter />} aside={<FilterSidebar />}>
      <Datagrid>
        {/* <TextField source="id" label="#" /> */}

        {/* <TextField source="title" label="Title"  /> */}
        <TextField source="name" label="Store Name" />

        {/* <UrlField source="" /> */}
        <ReferenceField
          label="Networks Name"
          source="SelectNetwork"
          reference="networks"
        >
          <TextField source="name" label="Networks" />
        </ReferenceField>
        <ReferenceField
          label="Category Name"
          source="category"
          reference="posts"
        >
          <TextField source="title" label="Category" />
        </ReferenceField>
        <TextField source="Address" />
        {/* <BooleanField source="featured" /> */}
        {/* <BooleanField source="status" /> */}
        <TextField source="AddBy" label="Added By" />
        <TextField source="adddate" label="Added Date" />
        <TextField source="edit" label="Edit By" />
        <TextField source="editby" label="Edit Date" />

        <EditButton basePath="/store" />
        {/* <DeleteButton basePath="/store" /> */}
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

export default StoreList;
