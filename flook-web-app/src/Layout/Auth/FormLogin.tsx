import { Formik } from 'formik';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { LoginSchema } from '../../Utils/Validator';
import { SubmitForm } from '../../Utils/GlobalFunc'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import useScriptRef from '../../hooks/useScriptRef';
import FormControlLabel from '@mui/material/FormControlLabel';

import InputCustom from '../../Components/InputCustom';


const FormLogin: React.FC = () => {
  const [ checked, setChecked ] = useState(true);

  const scriptedRef = useScriptRef();

  const initialValues = {userName: '',password: '',submit: null}

  const dispatch = useDispatch()

  return (
    <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={SubmitForm(dispatch, scriptedRef, 'LOGIN')}>			
      {({ handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, errors }) => (
        
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={1}>
						<Grid item xs={12} sm={12}>
              <InputCustom 
                handleBlur={handleBlur} 
                handleChange={handleChange} 
                touched={touched.userName} 
                values={values.userName} 
                errors={errors.userName} 
                field= 'userName' 
                label='User Name'
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputCustom 
                handleBlur={handleBlur} 
                handleChange={handleChange} 
                touched={touched.password} 
                values={values.password} 
                errors={errors.password} 
                field= 'password' 
                label='Password'
              />
            </Grid>
          </Grid>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
            <FormControlLabel label="Remember me" control={
              <Checkbox 
                checked={checked}
                onChange={(event: any) => setChecked(event.target.checked)}
                name="checked"
                color="primary"
              />}
            />
            <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
              Forgot Password?
            </Typography>
          </Stack>
          
          <Box sx={{ mt: 2 }}>
            <Button 
              size="large" 
              type="submit" 
              color="secondary"
              variant="contained" 
              fullWidth
              disableElevation 
              disabled={isSubmitting}>
              Submit
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default FormLogin
