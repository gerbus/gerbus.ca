import React, {
  Component,
} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Images
import stars from './img/stars_1920.jpg';
import clouds from './img/clouds.png';
import treeline from './img/treeline-sillouette-100.svg';
import bird from './img/crow-sprite-9-20px.png';

import Gerb from './img/Gerb-38frame_blink.gif';
import GitHub from './img/GitHub_Logo_White.png';
import StackExchange from './img/stackexchange-logo.png';
import LinkedIn from './img/logo_linkedin_flat_white_93x21.png';
import Tumblr from './img/tumblr-logo.png';
import LetterBoxd from './img/letterboxd-logo-153.png';
import Twitter from './img/Twitter_logo_blue_48.png';
import SoundCloud from './img/soundcloud-logo.jpg';
import WordPress from './img/wordpress.png';


class App extends Component {
  render() {
    return (
      <div className="parallax">
        <div className="parallax-group">
          <div className="stars parallax-layer">
            <div className="bg" style={{ backgroundImage: "url(" + stars + ")"}} />
          </div>

          <div className="clouds parallax-layer">
            <div className="bg" style={{ backgroundImage: "url(" + clouds + ")"}} />
          </div>

          <div className="trees parallax-layer">
            <img className="treeline" src={treeline} />
            <div className="black"></div>
            <div className="bird" style={{backgroundImage: "url(" + bird + ")"}}></div>
            <div className="bird bird-2" style={{backgroundImage: "url(" + bird + ")"}}></div>
          </div>

          <Content />

        </div>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="content">
        <header>
          <h1>Christopher X Gerber</h1>
          <h2>Developer</h2>
        </header>

        <div className="visible-xs heels">
          <center>
            {
            //<!--img className="img-responsive" src="/sites/gerbus.ca/img/christopher-x-gerber_light-bw.jpg" /-->
            }
            <img className="img-responsive" src={Gerb} />
            <div className="from">Vancouver, BC</div>
          </center>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-3 col-md-offset-1 hair heels div-links">
            <h3 className="pull-top text-center">Professional</h3>
            <ul className="iconLinks">
              <li title="My Github">
                <a href="https://github.com/gerbus" target="_blank" rel="noopener">
                  <img src={GitHub} height='40' />
                </a>
              </li>
              <li title="My StackExchange">
                <a href="http://stackexchange.com/users/115692/gerbus?tab=accounts" target="_blank" rel="noopener">
                  <img src={StackExchange} />
                </a>
              </li>
              <li title="My Career">
                <a href="https://www.linkedin.com/in/chris-gerber-7b757b1b/" target="_blank" rel="noopener">
                  <img src={LinkedIn} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 heels hidden-xs">
          <center>
            {
            //<!--img className="img-responsive" src="/sites/gerbus.ca/img/christopher-x-gerber_light-bw.jpg" /-->
            }
            <img className="img-responsive" src={Gerb} width="400px" />
            <div className="from">Vancouver, BC</div>
          </center>
          </div>
          <div className="col-sm-3 col-md-3 hair heels div-links">
            <h3 className="pull-top text-center">Personal</h3>
            <ul className="iconLinks">
              <li title="My Animations">
                <a href="http://gerbus.tumblr.com/" target="_blank" rel="noopener">
                  <img src={Tumblr} />
                </a>
              </li>
              <li title="My Movie Reviews">
                <a href="http://letterboxd.com/gerbus/" target="_blank" rel="noopener">
                  <img src={LetterBoxd} />
                </a>
              </li>
              <li title="My Tweets">
                <a href="https://twitter.com/Gerbus3" target="_blank" rel="noopener">
                  <img src={Twitter} width='24' />
                </a>
              </li>
              <li title="My Music as SuperSymmetry">
                <a href="https://soundcloud.com/supersymmetry" target="_blank" rel="noopener">
                  <img src={SoundCloud} width='40' />
                </a>
              </li>
              {
              //<!--li className="soundcloud-mp" title="My Sounds as MaxPepTalk ~ 2012"><a href="https://soundcloud.com/max-peptalk"></a></li-->
              }
              <li className="wordpress" title="My Blog">
                <a href="https://fractalsinlaughter.wordpress.com" target="_blank" rel="noopener">
                  <img src={WordPress} width="170" />
                </a>
              </li>
              {
              //<!--li className="wordpress" title="My Travel Blog ~ 2015"><a href="https://thegerberklompas.wordpress.com/"></a></li>
              //<li className="footstops" title="My Travel Blogs ~ 2009, 2011"><a href="http://www.footstops.com/gerbus/trips/"></a></li-->
              }
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 hair heels hair-none-sm">
            <h3 className="pull-top text-center">Entrepreneurial</h3>
            <ul className="links">
              <li title="A productivity app and website"><a href="http://sixinarow.io" target="_blank" rel="noopener">Six In A Row (2018-Nov)</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-sm-offset-3 hair heels hair-none-sm heels-none-sm">
            <h3 className="pull-top text-center">Hobby</h3>
            <ul className="links">
              <li title="A statistically generated color spectrum"><a href="http://spectrum.gerbus.ca" target="_blank" rel="noopener">Statistical CSS Color Spectrum (2019-Aug)</a></li>
              <li title="A calculator for compounding interest with regular contributions"><a href="http://savingscalculator.gerbus.ca" target="_blank" rel="noopener">Savings Calculator (2018-Oct)</a></li>
              <li title="A calendar for the eight season year"><a href="http://8seasons.gerbus.ca" target="_blank" rel="noopener">The Eight Season Year (2018-Mar)</a></li>
              <li title="Compare bitcoin price history with google search history"><a href="http://bitcoin.gerbus.ca" target="_blank" rel="noopener">Bitcoin Price vs Internet Searches (2017-Nov)</a></li>
              <li title="A low tide predictor for Vancouver, BC"><a href="http://lowtide.gerbus.ca" target="_blank" rel="noopener">Low-tide Predictor for Vancouver (2017-Aug)</a></li>
              <li title="A craigslist front-end and enhanced filter"><a href="http://old.gerbus.ca/craigslist" target="_blank" rel="noopener">(broken) The Gerbus Craigslist Front End (2015-Jun)</a></li>
              <li title="Our wedding rsvp website"><a href="http://old.gerbus.ca/sites/ourwedding/index.php" target="_blank" rel="noopener">Chris Gerber + Laura Klompas (2014)</a></li>
              <li title="A different take on blogging"><a href="http://old.gerbus.ca/newmemory/index.php?n=&filter=" target="_blank" rel="noopener">(ancient) Computer is the New Memory (2010-Jul)</a></li>
              <li title="A get-rich-quick idea">(deleted) Spheres of the Web (2009-Sep)</li>
              <li title="A gallery I built"><a href="http://old.gerbus.ca/photography/index.php" target="_blank" rel="noopener">Photography by Chris Gerber (2009-Jul)</a></li>
              <li title="A phpBB forum I built and ran">(lost) The Gerbus Forum "gerbus dot ca" (2003)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
