import { AppBar, Toolbar, styled, Typography, InputBase, Box, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { Mail, Notifications } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';




const StyledToolBar = styled(Toolbar) ({
    display:"flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({theme})=>({
    border: "2px solid skyblue",
    display: "flex",
    backgroundColor:"primary",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    
}))

const Icons = styled(Box)(({theme})=>({
    display: "none",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))

const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}))




const Navbar = () => {

const [open,setOpen] = useState(false);





  return (
    <AppBar position='sticky'>
        <StyledToolBar >
             <FormatBoldIcon  sx={{display:{xs:"block", sm:"none"}}} />
            <Typography variant='h6'  sx={{display:{xs:"none", sm:"block"}}} >Bingo</Typography>
            <Search >
                <InputBase placeholder="search"/>
                <SearchIcon/>
            </Search>
            
            
            
            <Icons >
                <Badge  badgeContent={4} color="error">
                    <Mail/>
                </Badge>
                <Badge  badgeContent={5} color="error">
                    <Notifications/>
                </Badge>
                <Avatar onClick={e=>setOpen(true)}  src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
            </Icons>
            <UserBox  onClick={e=>setOpen(true)}>
            <Avatar   src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
            
            </UserBox>
        </StyledToolBar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        
        
        </AppBar>
  )
}

export default Navbar