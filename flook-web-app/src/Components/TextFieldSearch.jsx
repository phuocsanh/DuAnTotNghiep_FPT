import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const countries= [
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  { code: 'BB', label: 'Barbados', phone: '1-246' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { code: 'BM', label: 'Bermuda', phone: '1-441' },
  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BZ', label: 'Belize', phone: '501' },

];

export default function TextFieldSearch(props) {

  const { field, label, placeholder, options, register, setValue, className } = props;
  const [selectedCaste, setSelectedCaste] = useState([]);

  console.log('selectedCaste', selectedCaste)
  useEffect(() => {
    register(field);
  }, [register]);
  
  const RenderInput = (params) => {  
    return (
      <TextField 
        {...params}
        id={field} 
        label={label} 
        placeholder={placeholder}
        inputProps={{
          ...params.inputProps, 
          autoComplete: 'new-password'
        }}
      />
    )
  }

  return (
    <Autocomplete
      className={className}
      id={field}
      sx={{width:'100%'}}
      options={options}
      multiple
      autoHighlight
      value={selectedCaste}
      onChange={(_, values) => {
        setSelectedCaste([...values]);
        setValue(field, [...values]);
      }}
      getOptionLabel={(option) => option?.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {/* <img loading="lazy" width="20" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`} alt="" /> */}
          {option?.name}
        </Box>
      )}
      renderInput={RenderInput}  
    />
  );
}
