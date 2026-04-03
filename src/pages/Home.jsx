import "./Home.css";
import HeroBanner from '../components/HeroBanner';
//import AnimatedB7Logo from '../components/AnimatedB7Logo';

function HomePage() {
  return (
    <>

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



    </>
  );
}

export default HomePage;