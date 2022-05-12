import { Formik } from 'formik';
import { SubmitForm } from '../../Utils/GlobalFunc';
import { ChangePasswordSchema } from '../../Utils/Validator';
import useScriptRef from '../../hooks/useScriptRef';
import InputCustom from '../../Components/InputCustom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Cookie from '../../hooks/Cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const FormChangePass: React.FC = () => {
  const scriptedRef = useScriptRef();
  const initialValues = {
    password: '', password_New: '', password_NewComfirm: '', submit: null
  }

  const dispatch = useDispatch();

  const readCookie = Cookie.getCookie('usrin')

  console.log("token", readCookie)

  return (
    <Formik initialValues={initialValues} validationSchema={ChangePasswordSchema} onSubmit={SubmitForm(dispatch, scriptedRef, 'CHANGEPASS')}>			
      {({handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, errors}) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
						<Grid item xs={12} sm={12}>
              <InputCustom 
                handleBlur={handleBlur} 
                handleChange={handleChange} 
                touched={touched.password} 
                values={values.password} 
                errors={errors.password} 
                field='password'
                label='Current Password'
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputCustom 
                handleBlur={handleBlur} 
                handleChange={handleChange}
                touched={touched.password_New} 
                values={values.password_New} 
                errors={errors.password_New} 
                field='password_New' 
                label='New Password'
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputCustom 
                handleBlur={handleBlur} 
                handleChange={handleChange} 
                touched={touched.password_NewComfirm} 
                values={values.password_NewComfirm} 
                errors={errors.password_NewComfirm} 
                field='password_NewComfirm' 
                label='New Password Comfirm'
              />
            </Grid>
          </Grid>
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

export default FormChangePass
