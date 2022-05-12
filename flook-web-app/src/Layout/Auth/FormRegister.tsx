import { useState } from 'react'
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { RegisterSchema } from '../../Utils/Validator';
import useScriptRef from '../../hooks/useScriptRef';
import Action from '../../Shop/Action'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { SubmitForm } from '../../Utils/GlobalFunc'

import InputCustom from '../../Components/InputCustom';

const initialValues = { userName: '', password: '', phoneNumber: '',email: '', passwordComfirm: '', submit: null }
const FormRegister: React.FC = props => {
  const [ checked, setChecked ] = useState(true);
  const scriptedRef = useScriptRef();
  const dispatch = useDispatch()
  
  return (
    <Formik initialValues={initialValues} validationSchema={RegisterSchema} onSubmit={SubmitForm(dispatch, scriptedRef, 'REGISTER')}>			
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
					<Grid container spacing={1}>
						<Grid item xs={12} sm={12}>
							<InputCustom 
								handleBlur={handleBlur} 
								handleChange={handleChange} 
								touched={touched.email} 
								values={values.email} 
								errors={errors.email} 
								field='email' 
								label='Email'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputCustom 
								handleBlur={handleBlur} 
								handleChange={handleChange} 
								touched={touched.userName} 
								values={values.userName} 
								errors={errors.userName} 
								field='userName' 
								label='User Name'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputCustom 
								handleBlur={handleBlur} 
								handleChange={handleChange} 
								touched={touched.phoneNumber} 
								values={values.phoneNumber} 
								errors={errors.phoneNumber} 
								field='phoneNumber' 
								label='Phone Number'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputCustom 
								handleBlur={handleBlur} 
								handleChange={handleChange} 
								touched={touched.password} 
								values={values.password}
								errors={errors.password} 
								field='password' 
								label='Password'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputCustom 
								handleBlur={handleBlur} 
								handleChange={handleChange} 
								touched={touched.passwordComfirm} 
								values={values.passwordComfirm} 
								errors={errors.passwordComfirm} 
								field='passwordComfirm' 
								label='Password Comfirm'/>
						</Grid>
					</Grid>
					<Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
						<FormControlLabel label="Remember me" control={
							<Checkbox checked={checked} onChange={(event: any) => setChecked(event.target.checked)}
								name="checked"
								color="primary"
							/>}
						/>
						{/* <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
							Forgot Password?
						</Typography> */}
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
						Sign up
						</Button>
					</Box>
        </form>
      )}
    </Formik>
  );
}
export default FormRegister