import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export interface InputCustomProps {
  field: string;
  label?: string | undefined;
  touched?: any | undefined;
  errors?: any | undefined;
  values?: string | undefined;
  handleBlur?: any | undefined;
  handleChange?: any | undefined;
}

const InputCustom: React.FC<InputCustomProps> = (props) => {
  const { field, label, values, errors, touched, handleBlur, handleChange } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const typeInput = () => { 
    if(showPassword && (field === 'password' || field === 'passwordComfirm' || field === 'password_New' || field === 'password_NewComfirm' || field === 'password_Current')){
      return 'text'
    }else if(!showPassword && (field === 'password' || field === 'passwordComfirm' || field === 'password_New' || field === 'password_NewComfirm' || field === 'password_Current')){
      return 'password'
    }else {
      return 'text'
    }
  }

  return (
    <FormControl sx={{width: '100%'}} error={Boolean(touched && errors)} >
      <InputLabel> <label>{label}<span style={{color: 'red'}}>*</span></label></InputLabel>
      <OutlinedInput
        type={typeInput()}
        value={values}
        name={field}
        onBlur={handleBlur}
        onChange={handleChange}
        endAdornment={(field === 'password' || field === 'passwordComfirm' || field === 'password_New' || field === 'password_NewComfirm' || field === 'password_Current') &&
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" size="large">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label={label + ' ab '}
        inputProps={{}}
      />
      {touched && errors && <FormHelperText error >{errors}</FormHelperText>}
    </FormControl>
  );
};

export default InputCustom;
