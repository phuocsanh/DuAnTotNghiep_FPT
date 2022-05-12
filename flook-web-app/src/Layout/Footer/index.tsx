import * as React from 'react';
import { arrayItemMenu } from '../Header/Components/Navigator';
import Logo from '../../Assets/Images/Footer/logo.png';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <section className="main-footer">
        <div className="container">
          {/* Grid */}
          <div className="row">
            {/* Puplare Anime */}
            <div className="col">
              <h3>Puplare Anime</h3>
              <ul className="puplare-list">
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1647240338/Flex-ticket/ImageBook/1_urkjlm.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>Berserk 2021</h3>
                    </a>
                    <h4>Launch Date : 2021</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Watch Now
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1647691337/Flex-ticket/ImageBook/46_vnwbxo.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>Fullmetal Alchemist</h3>
                    </a>
                    <h4>Launch Date : 2021</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Watch Now
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1647690957/Flex-ticket/ImageBook/44_fhrn2t.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>Death Note</h3>
                    </a>
                    <h4>Launch Date : 2021</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Watch Now
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* Puplare Manga */}
            <div className="col">
              <h3>Puplare Manga</h3>
              <ul className="puplare-list">
                <li className="small-media">
                  <a href="manga-details.html" className="image">
                    <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1647690188/Flex-ticket/ImageBook/39_efldzr.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="manga-details.html">
                      <h3>D.Gray-Man 2016</h3>
                    </a>
                    <h4>Launch Date : 2021</h4>
                    <a href="manga-stream.html" className="more-btn">
                      Watch Now
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="manga-details.html" className="image">
                    <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1647690094/Flex-ticket/ImageBook/38_t6nto2.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="manga-details.html">
                      <h3>Bleach</h3>
                    </a>
                    <h4>Launch Date : 2021</h4>
                    <a href="manga-stream.html" className="more-btn">
                      Watch Now
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="manga-details.html" className="image">
                    <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1647689294/Flex-ticket/ImageBook/30_ffqafx.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="manga-details.html">
                      <h3>Shingeki no Kyojin</h3>
                    </a>
                    <h4>Launch Date : 2021</h4>
                    <a href="manga-stream.html" className="more-btn">
                      Watch Now
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* Puplare Movies */}
            <div className="col">
              <h3>Puplare Movies</h3>
              <ul className="puplare-list">
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1647243616/Flex-ticket/ImageBook/14_pg8mcf.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>One Piece Film Gold</h3>
                    </a>
                    <h4>Launch Date : 2021</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Watch Now
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1647241311/Flex-ticket/ImageBook/4_ey81ks.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>Trinity Seven Movie</h3>
                    </a>
                    <h4>Launch Date : 2021</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Watch Now
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1647241713/Flex-ticket/ImageBook/6_i6lcr3.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>Garo Divine Flame</h3>
                    </a>
                    <h4>Launch Date : 2021</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Watch Now
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* Anime of the Day */}
            <div className="col">
              <h3>Anime Of The Day</h3>
              <a href="#" className="banner">
                <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1647692474/Flex-ticket/ImageBook/51_ixvk57.jpg" alt="" />
              </a>
            </div>
          </div>
          {/* Footer Menu */}
          <div className="navigation-menu">
            <ul>{arrayItemMenu.map((item, index) => {
              return <li key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
              })}
            </ul>
          </div>
        </div>
      </section>
      {/* // Main Footer */}
      {/* Copyrights */}
      <section className="copyrights">
        <div className="container">
          <p>all copyrights reserved for Animtora | Online Anime and Manga Community</p>
          <a href="#" className="tooltip" data-title="Designed by Phoenix Themes">
            <img src={Logo} alt="Phoenix Themes" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
