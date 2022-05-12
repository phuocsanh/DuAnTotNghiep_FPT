import React, {useState, useRef, useEffect} from 'react'
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import CardContent from '@mui/material/CardContent';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import FirebaseLogin from '../../../Pages/Auth/SignIn';
import { MaterialUISwitch } from "../../../Assets/Theme/AppStyle";
import { IconLogout, IconSettings, IconUser } from '@tabler/icons';



export default function DropProfile() {
  const descriptionElementRef = useRef(null);
  const [ open, setOpen] = useState(false);
  const [ scroll, setScroll ] = useState();

  const handleClickOpen = () => {
    setOpen(true);
    setScroll('paper');
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <section className="dropdown user-menu dd-done" tabIndex={0} role="button" aria-pressed="false">
      <a href="#" className="dropdown-btn icon-btn ti-user" />
      <ul className="dropdown-list">
        <li className="goPremium">
          <div className="goPremiumContent">
            <h3>Update Premium</h3>
            <p>70% discount for 1 years subcriptions</p>
            <button>Go Premium</button>
          </div>
        </li>
    
        {/* //==============================|| Button ||=====================================// */}
        <Box sx={{ p: 2 }}>
          <Card sx={{bgcolor: '#90caf975', my: 2,borderRadius: `10px`  }}>                                                                                                                               
            <CardContent>
              <Grid container spacing={2} direction="column">
                <Grid item container alignItems="center" justifyContent="space-between">
                  <FormControlLabel
                    label="Allow Notifications"
                    control={<MaterialUISwitch sx={{ m: 1 }} />}
                  />
                </Grid>
                <Grid item container alignItems="center" justifyContent="space-between">
                  <FormControlLabel
                    label="Allow Dark Mode"
                    control={<MaterialUISwitch sx={{ m: 1 }} />}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Divider />
          <ListItemButton sx={{ borderRadius: `10px`, mt:1 }}  onClick={handleClickOpen}>
            <ListItemIcon>
              <IconSettings className='bx-spin' stroke={1.5} size="1.3rem" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: `10px` }}>
            <ListItemIcon>
              <IconUser stroke={1.5} size="1.3rem" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: `10px` }}>
            <ListItemIcon>
              <IconLogout stroke={1.5} size="1.3rem" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
          </ListItemButton>
        </Box>


        {/* //==============================|| Dialog ||=====================================// */}
        <ShowDialog open={open} scroll={scroll}/>
      </ul>
    </section>
  )
}

function ShowDialog(props) {
  const { open, scroll } = props;
  const [ value, setValue ] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return(
    <Dialog
      open={open}
      // onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description">
      <DialogContent dividers={scroll === 'paper'}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Login" value="1" />
                <Tab label="Register" value="2" />
                <Tab label="Forgot password" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{height: 600, width:450}}><FirebaseLogin/></TabPanel>
            <TabPanel value="2" sx={{height: 600, width:450}}>Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
