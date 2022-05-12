import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { IconMenu2 } from '@tabler/icons';
import { Avatar, ButtonBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Logo from '../../Assets/Images/logo.png'
import Carousel from "../Carousel"
import styledComponents from "styled-components"
import Navigator from "./Components/Navigator"
import NotificationSection from "./NotificationSection";
import ProfileSection from "./ProfileSection";
import namePage from "../../Constants/NamePage";
import Dialog from '../../Components/DiaLog'
import AuthDiaLog from '../Auth'

const Header = props => {
  const { carousel } = props
  const [ scroll, setScroll ] = useState ('')
  const [ openNav, setOpenNav ]= useState('')
  const [ animate, setAnimaie ] = useState('')

  const theme = useTheme();
  
  const HomeHeader = styledComponents.section`
    &::after { height: ${carousel ? '200px' : '0px'}}
  `



  useEffect(() => {
    window.addEventListener('scroll',() => {
      setScroll(window.pageYOffset > .1 ? 'is-sticky' : '');
      setAnimaie(window.pageYOffset > .1 ? 'animate__animated animate__fadeInDown animate__faster' : '')
    })
    return ''
  },[]);

  return (
    <HomeHeader className="home-header">
      <header className={`tornado-header stdone ${scroll} ${animate}`} data-sticky="absolute">
        <main className="container">
          <form className="form-ui search-box">
            <i className='bx bx-search-alt-2'></i>
            <input type="text" placeholder="Write Search Keyword Here" />
          </form>
          <Link className="logo" to={namePage.home}><img src={Logo} alt=''/></Link>
          <section className="action-btns">
            <ButtonBase sx={{ borderRadius: '5px', overflow: 'hidden' }}>
              <Avatar
                onClick={()=> alert('menu')}
                color="inherit"
                variant="rounded"
                sx={{
                  ...theme.typography.commonAvatar,
                  ...theme.typography.mediumAvatar,
                  transition: 'all .2s ease-in-out',
                  background: theme.palette.secondary.light,
                  color: theme.palette.secondary.dark,
                  '&:hover': {
                    background: theme.palette.secondary.dark,
                    color: theme.palette.secondary.light,
                  },
                }}
              >
                <IconMenu2 stroke={1.5} size="1.3rem" />
              </Avatar>
            </ButtonBase>
            <NotificationSection/>
            <ProfileSection showAt='APP'/>
          </section>
        </main>
        {scroll === '' && <hr />}
        <Navigator stringClass={openNav}/>
      </header>
      {carousel && <Carousel/>}
      <Dialog Component={AuthDiaLog}/>
    </HomeHeader>
  )
}

export default Header