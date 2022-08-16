import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Feed from './components/Feed';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import SidebarMobile from './components/SidebarMobile';

function App() {

  const [mode,setMode] = useState("light")


  const themedark= () => {
    setMode(mode==="light"?"dark":"light")
  }
  
  const darkTheme = createTheme ({

    

    palette:{
      mode: mode
    }
  })
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(true);
  };

  const handleClicked = event => {
    setIsShown(false);
  };



  return (

    

    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar handleClick={handleClick} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      {/* <Sidebar  darktheme={themedark}   /> */}
      {!isShown && <Sidebar  darktheme={themedark}/>}
      {isShown && <SidebarMobile handleClicked={handleClicked} darktheme={themedark}/>}
      {/* {!isShown && <Feed/>} */}
      <Feed/>
      <Rightbar/>
      </Stack>
    </Box>
    </ThemeProvider>
  );
}

export default App;
