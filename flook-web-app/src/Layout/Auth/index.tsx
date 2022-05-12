import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import AuthWrapper from './AuthWrapper';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import FormFogotPass from './FormFogotPass';
import FormChangePass from './FormChangePass';
import FormAppyAuthor from './FormAppyAuthor';
import FormAppyDub from './FormAppyDub';


export interface IAppProps {

}

const AuthDiaLog: React.FC = props => {

  const [ value, setValue] = useState('1');

  const styleTabPanel = { height: 'auto', maxWidth:450 }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Login" value="1" />
            <Tab label="Register" value="2" />
            <Tab label="Forgot Password" value="3" />
            <Tab label="Change Password" value="4" />
            {/* <Tab label="Apply Author" value="5" />
            <Tab label="Apply Dub" value="6" /> */}
          </TabList>
        </Box>
        <TabPanel value="1" sx={styleTabPanel}><AuthWrapper Component={FormLogin}/></TabPanel>
        <TabPanel value="2" sx={styleTabPanel}><AuthWrapper Component={FormRegister}/></TabPanel>
        <TabPanel value="3" sx={styleTabPanel}><AuthWrapper Component={FormFogotPass} hidden={true}/></TabPanel>
        <TabPanel value="4" sx={styleTabPanel}><AuthWrapper Component={FormChangePass} hidden={true}/></TabPanel>
        {/* <TabPanel value="5" sx={{height: 600, width:450}}>
          <AuthWrapper Component={FormAppyAuthor}/>
        </TabPanel>
        <TabPanel value="5" sx={{height: 600, width:450}}>
          <AuthWrapper Component={FormAppyDub}/>
        </TabPanel> */}
      </TabContext>
    </Box>
  );
}

export default AuthDiaLog