import "./Home.css";
import HeroBanner from '../components/HeroBanner';
//import AnimatedB7Logo from '../components/AnimatedB7Logo';

function HomePage() {
  return (
    <>

        <header id="main-header">
        <div id="sponsors">
            <p>Gefördert durch</p>
            <div className="sponsor-logos">
                <img src="../../img/sponsor/sponsor1.png" alt="Sponsor 1" />
                <img src="../../img/sponsor/sponsor2.png" alt="Sponsor 2" />
                <img src="../../img/sponsor/sponsor3.png" alt="Sponsor 3" />
                <img src="../../img/sponsor/sponsor4.png" alt="Sponsor 4" />
                <img src="../../img/sponsor/sponsor5.png" alt="Sponsor 5" />
            </div>
        </div>

        <div id="menu-container">
            <div className="burger-menu">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <nav className="menu" id="mainMenu">
            <ul className="menu-list">
                <li><a href="/">Home</a></li>
                <li><a href="/mitglied-werden">Mitglied werden</a></li>
                <li><a href="/spenden">Spenden</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
                <li><a href="/impressum">Impressum</a></li>
                <li><a href="/datenschutz">Datenschutz</a></li>
            </ul>
            </nav>
        </div>
    </header>

      <main>
        <HeroBanner />

          <div className="content-container" id="landing-page-content">
              <h2>Überschrift Einstieg</h2>
              <p>
                  Das Industriedenkmal der ehemaligen Zeche Blumenthal 7 verwandelt sich Schritt für Schritt zu einem
                  lebendigen Ort für eine bunte Palette an interessierten Menschen.
              </p>
              <br />
              <p>
                  <b>Auf vielfältige Art und Weise darfst auch du dich gerne einbringen.</b>
              </p>   
          </div>

          <div className="teaser-container">
              <section id="teaser">
                  <div id="teaser-box1" className="teaser-box">
                      <a href="/vision">
                          <div className="teaser-box-content">Vision</div>
                      </a>
                  </div>
                  <div id="teaser-box2" className="teaser-box">
                      <a href="/umbauarbeiten">
                          <div className="teaser-box-content">Umbauarbeiten</div>
                      </a>
                  </div>
                  <div id="teaser-box3" className="teaser-box">
                      <a href="/veranstaltungen">
                          <div className="teaser-box-content">Veranstaltungen</div>
                      </a>
                  </div>
                  <div id="teaser-box4" className="teaser-box">
                      <a href="/fotogalerie">
                          <div className="teaser-box-content">Fotogalerie</div>
                      </a>
                  </div>
                  <div id="teaser-box5" className="teaser-box">
                      <a href="/rundgang">
                          <div className="teaser-box-content">Virtueller Rundgang</div>
                      </a>
                  </div>
                  <div id="teaser-box6" className="teaser-box">
                      <a href="/kooperationspartner_innen">
                          <div className="teaser-box-content">Kooperationspartner:innen</div>
                      </a>
                  </div>
              </section>
          </div>
          
      </main>

          <footer id="main-footer">
        <div className="color-band" id="footer-color-band">
            <div className="container">
                <div id="footer-links">
                    <ul>
                        <li><a href="/kontakt">Kontakt</a></li>
                        <li><a href="/datenschutz">Datenschutz</a></li>
                        <li><a href="/impressum">Impressum</a></li>
                        <li>
                            <a href="https://facebook.com" target="_blank">
                                <img src="../../img/icon/facebook-icon_800x800.svg" alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank">
                                <img src="../../img/icon/instagram-icon_800x800.svg" alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
        <div id="footer-copyright">
                <p>&copy; 2025 Blumenthal 7 e.V. Alle Rechte vorbehalten.</p>
        </div>
    </footer>



    </>
  );
}

export default HomePage;