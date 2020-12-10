import React from "react";

import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  BooleanField,
  ImageField,
  DateField,
  RichTextField,
  Filter,
  TextInput,
  Admin,
} from "react-admin";
import "./user.css";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="search" source="name" resettable alwaysOn />
  </Filter>
);

// const ListActions = (props) => {
//   const { className, exporter, filters, maxResults, ...rest } = props;
//   const {
//     currentSort,
//     resource,
//     displayedFilters,
//     filterValues,
//     hasCreate,
//     basePath,
//     selectedIds,
//     showFilter,
//     total,
//   } = useListContext();
//   return (
//     <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
//       {filters &&
//         cloneElement(filters, {
//           resource,
//           showFilter,
//           displayedFilters,
//           filterValues,
//           context: "button",
//         })}
//       <CreateButton basePath={basePath} />
//       <ExportButton
//         disabled={total === 0}
//         resource={resource}
//         sort={currentSort}
//         filterValues={filterValues}
//         maxResults={maxResults}
//       />
//       {/* Add your custom actions */}
//       <Button
//         onClick={() => {
//           alert("Your custom action");
//         }}
//         label="Show calendar"
//       >
//         <IconEvent />
//       </Button>
//     </TopToolbar>
//   );
// };

const UserList = ({ permissions, ...props }) => {
  return (
    <List
      {...props}
      filters={<PostFilter />}
      sort={{ field: "name", order: "DESC" }}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="password" />
        <BooleanField source="administrator" />
        {permissions === Admin ? (
          <DeleteButton basePath="/users" />
        ) : (
          <EditButton basePath="/users" />
        )}
      </Datagrid>
    </List>
  );
};

export default UserList;
