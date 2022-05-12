import { useState } from 'react'
import { Formik } from 'formik';
import { FogotPasswordSchema } from '../../Utils/Validator';
import Action from '../../Shop/Action'
import useScriptRef from '../../hooks/useScriptRef';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { SubmitForm } from '../../Utils/GlobalFunc'

import InputCustom from '../../Components/InputCustom';
import { useDispatch } from 'react-redux';

const FormFogotPass: React.FC = () => {
  const scriptedRef = useScriptRef();
  const [ checked, setChecked ] = useState(true);

  const dispatch = useDispatch()

  const Submit = async (values: any, { setErrors , setStatus, setSubmitting }: any) => {
		try {
			console.log('values', values)
			if (scriptedRef.current) {
				setStatus({ success: true });
				setSubmitting(false);
			}
		} catch (err: any) {
			console.error(err);
			if (scriptedRef.current) {
				setStatus({ success: false });
				setErrors({ submit: err.message });
				setSubmitting(false);
			}
		}
	};

  return (
    <Formik
      initialValues={{email: '',submit: null}}
      validationSchema={FogotPasswordSchema}
      onSubmit={SubmitForm(dispatch, scriptedRef, 'FORGOTPASS')}>			
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={1}>
						<Grid item xs={12} sm={12}>
              <InputCustom handleBlur={handleBlur} handleChange={handleChange} touched={touched.email} values={values.email} errors={errors.email} field='email' label='Email'/>
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
              disableElevation
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="secondary"
            >
            Submit
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default FormFogotPass
