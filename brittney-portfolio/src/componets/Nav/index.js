import React from "react";
import "../../App.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function NavTabs({currentPage, handlePageChange }) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <> 
    <h1>Brittney, Full Stack Web Developer </h1>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Home" onClick={() => handlePageChange("Home")}/>
        <Tab value="two" label="Projects" onClick={() => handlePageChange("Projects")}/>
        <Tab value="three" label="Skills and Resume" onClick={() => handlePageChange("Resume")} />
      </Tabs>
    </Box>
</>
  );
}
