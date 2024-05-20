import { List, ListItem, ListItemText } from "@mui/material";

const NestedList = () => {
  return (
    <List component="nav">
      <ListItem button>
        <ListItemText primary="Item 1" />
      </ListItem>
      <List component="div" disablePadding>
        <ListItem button>
          <ListItemText primary="Sub Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Sub Item 2" />
        </ListItem>
      </List>
      <ListItem button>
        <ListItemText primary="Item 2" />
      </ListItem>
    </List>
  );
};

export default NestedList;
