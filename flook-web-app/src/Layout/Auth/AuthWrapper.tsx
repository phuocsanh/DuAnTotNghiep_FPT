import { Link } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';

import Google from '../../Assets/Icons/social-google.svg';
import FaceBook from '../../Assets/Icons/icons8-facebook.svg';
// Components

interface AuthWrapperProps {
  title?: string | undefined;
  hidden?: boolean | undefined;
  Component: any;
}

const AuthWrapper: React.FC<AuthWrapperProps> = props => {
  const { Component, title, hidden } = props;
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state: RootStateOrAny) => state.customizationReducer);

  const googleHandler = async () => {
    console.error('Login');
  };

  return (
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
            <Grid item>
              <Stack alignItems="center" justifyContent="center" spacing={1}>
                {/* <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                  Hi, Welcome Back
                </Typography>
                <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                  Enter your credentials to continue
                </Typography> */}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        {!hidden && <> 
          <Grid item xs={12} md={12}>
            <Grid container spacing={1} >
              <Grid md={6} sx={{p:1}}>
                <Button
                  disableElevation
                  fullWidth
                  onClick={googleHandler}
                  size="medium"
                  variant="outlined"
                  sx={{
                    p:1, color: 'grey.700', backgroundColor: theme.palette.grey[50], borderColor: theme.palette.grey[100],
                  }}
                >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 10 } }}>
                <img src={Google} alt="google" width={18} height={18} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              Sign in with Google
            </Button>
            </Grid>
            <Grid md={6} sx={{p:1}}>
            <Button
              disableElevation
              fullWidth
              onClick={googleHandler}
              size="medium"
              // variant="outlined"
              sx={{
                // mb:1,
                p:1,
                color: 'white',
                backgroundColor: '#4267b2',
                borderColor: theme.palette.grey[100],
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 10 } }}>
                <i className='bx bxl-facebook'></i>

                {/* <img src={Google} alt="google" width={18} height={18} style={{ marginRight: matchDownSM ? 8 : 16 }} /> */}
              
              </Box>
              Sign in with FaceBook

            </Button>
            </Grid>

            
            
          </Grid>
          </Grid>
      
          <Grid item xs={12}>
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
              <Button
                variant="outlined"
                disableRipple
                disabled
                sx={{
                  cursor: 'unset',
                  m: 2,
                  py: 0.5,
                  px: 7,
                  borderColor: `${theme.palette.grey[100]} !important`,
                  color: `${theme.palette.grey[900]}!important`,
                  fontWeight: 500,
                  borderRadius: `${customization.borderRadius}px`,
                }}
              >
                OR
              </Button>
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            </Box>
          </Grid>
          </>
        }
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box>
            <Typography variant="subtitle1">{title}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Component matchDownSM={matchDownSM}/>
				</Grid>
        <Grid item xs={12}>
          <Divider orientation="horizontal" />
        </Grid>
        <Grid item xs={12}>
          <Grid item container direction="column" alignItems="center" xs={12}>
            {/* <Typography component={Link} to="/pages/register/register3" variant="subtitle1" sx={{ textDecoration: 'none' }}>
              Don&apos;t have an account?
            </Typography> */}
          </Grid>
        </Grid>
      </Grid>
  );
};

export default AuthWrapper;
