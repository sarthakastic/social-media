import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ExploreIcon from '@mui/icons-material/Explore';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ClearIcon from '@mui/icons-material/Clear';

const SidebarMobile = (props) => {
  return (
    <Box
    zIndex={"100"}
      width={"100%"}
      flex={1}
      pr={20}
      alignItems="center"
     bgcolor="gray"
    >
         <Box
      position="fixed">
        <Button onClick={props.handleClicked}  >
                <ClearIcon color="error"/>CLOSE
            </Button>

    <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#/">
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#/">
                <ListItemIcon>
                    <AddIcon/>
                </ListItemIcon>
                <ListItemText primary="New Post" />
            </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
            <ListItemButton component="a" href="#/">
                <ListItemIcon>
                    <StoreIcon/>
                </ListItemIcon>
                <ListItemText primary="Store" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#/">
                <ListItemIcon>
                    <GroupsIcon/>
                </ListItemIcon>
                <ListItemText primary="Groups" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#/">
                <ListItemIcon>
                    <ExploreIcon/>
                </ListItemIcon>
                <ListItemText primary="Explore" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#/">
                <ListItemIcon>
                    <HandshakeIcon/>
                </ListItemIcon>
                <ListItemText primary="Friends" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#/">
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#/">
                <ListItemIcon>
                    <ModeNightIcon/>
                </ListItemIcon>
                <Switch onChange={props.darktheme} />
            </ListItemButton>
        </ListItem>
    </List>
    </Box>
    </Box>
  );
};

export default SidebarMobile;
