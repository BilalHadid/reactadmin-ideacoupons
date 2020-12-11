import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
  ImageField,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceField,
  FilterLiveSearch,
  Pagination,
  Confirm,
  SimpleShowLayout,
} from "react-admin";
import DeleteWithCustomConfirmButton from "ra-delete-with-custom-confirm-button";
import Delete from "@material-ui/icons/Delete";
import ErrorOutline from "@material-ui/icons/ErrorOutline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

import { Card as MuiCard, CardContent, withStyles } from "@material-ui/core";

import "../user.css";
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="type" alwaysOn />
  </Filter>
);
const Card = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      order: -1, // display on the left rather than on the right of the list
      width: "15em",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))(MuiCard);
const PostPagination = (props) => (
  <Pagination rowsPerPageOptions={[5, 10, 25, 50, 100]} {...props} />
);
const FilterSidebar = () => (
  <Card style={{ width: "500px" }}>
    <CardContent>
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Store Name</p>
        <FilterLiveSearch
          source="store"
          label="Enter Store Name"
          style={{ width: "400%" }}
        />
      </div>

      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Type</p>
        <FilterLiveSearch
          source="type"
          label="Enter Coupon type"
          style={{ width: "400%" }}
        />
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Title</p>
        <FilterLiveSearch
          source="title"
          label="Enter Coupon Title"
          style={{ width: "400%" }}
        />
      </div>

      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Network</p>
        <FilterLiveSearch
          source="SelectNetwork"
          label="Enter Network"
          style={{ width: "450%" }}
        />
      </div>

      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Country</p>
        <FilterLiveSearch
          source="Country"
          label="Enter Country Name"
          style={{ width: "400%" }}
        />
      </div>

      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Add by</p>
        <FilterLiveSearch
          source="AddBy"
          label="Enter Add By"
          style={{ width: "400%" }}
        />
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <p style={{ color: "black", width: "100%" }}>Update by</p>
        <FilterLiveSearch
          source="edit"
          label="Enter Update by"
          style={{ width: "400%" }}
        />
      </div>
      {/* <LastVisitedFilter />
          <HasOrderedFilter />
          <HasNewsletterFilter />
          <SegmentFilter /> */}
    </CardContent>
  </Card>
);
const DeleteConfirmTitle = "Are you sure you want to delete this post?";
const DeleteConfirmContent = (props) => {
  return (
    <SimpleShowLayout {...props}>
      <TextField source="id" label="id" />
      <TextField source="title" label="title" />
    </SimpleShowLayout>
  );
};
const CouponList = (props) => {
  const classes = useStyles();
  return (
    <List
      {...props}
      filters={<PostFilter />}
      aside={<FilterSidebar />}
      pagination={<PostPagination />}
    >
      <Datagrid>
        <TextField source="id" />
        <ImageField source="image" label="images" className="thumbNail" />
        <TextField source="type" />
        <ReferenceField
          label="Forum & Category"
          source="ForumCategory"
          reference="forumcategory"
          link={false}
        >
          <TextField source="title" />
        </ReferenceField>
        {/* <TextField source="ForumCategory" /> */}
        <TextField source="title" />
        <ReferenceField
          label="store"
          source="store"
          reference="store"
          link={false}
        >
          <TextField source="title" />
        </ReferenceField>
        <ReferenceField
          label="Category"
          source="category"
          reference="posts"
          link={false}
        >
          <TextField source="title" />
        </ReferenceField>
        {/* <ReferenceField
          label="users"
          source="user"
          reference="users"
          link={false}
        >
          <TextField source="name" />
        </ReferenceField>
        <BooleanField source="fetured" />
        <BooleanField source="Verified" />
        <BooleanField source="status" /> */}
        <TextField source="AddBy" label="Added By" />
        <TextField source="adddate" label="Added Date" />
        <TextField source="edit" label="Edit By" />
        <TextField source="editby" label="Edit Date" />
        <EditButton basePath="/CouponDeal" />
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
        {/* <DeleteButton basePath="/CouponDeal" /> */}
      </Datagrid>
    </List>
  );
};

export default CouponList;
