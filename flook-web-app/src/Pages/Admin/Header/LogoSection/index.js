import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import namePage from '../../../../Constants/NamePage';
import Logo from '../../../../Components/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
  <ButtonBase disableRipple component={Link} to={namePage.home}>
    <Logo />
  </ButtonBase>
);

export default LogoSection;
