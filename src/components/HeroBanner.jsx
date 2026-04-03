import './HeroBanner.css';

function HeroBanner() {
  return (
   
   <div id="hero-banner">

        <img src="/img/logo/logo4.png" alt="B7 Logo" id="hero-banner-logo" />
        <div className="color-band" id="hero-sub-banner-1">
            <h1>Die Zeche</h1>
        </div>
        <div className="color-band" id="hero-sub-banner-2">
            <h2>zum Mitmachen</h2>
        </div>

        <a href="/" className="banner-link" aria-label="Zur Startseite"></a>

        <div className="banner-buttons">
            <a href="/mitglied-werden" id="join-button" className="banner-button">
                <span className="banner-btn-icon">
                    <img className="banner-btn-icon" src="/img/icon/schlaegel-und-eisen_icon.png" alt="schlaegel-und-eisen_icon" />                
                </span>
                <span className="banner-btn-gap"></span>
                <span className="banner-btn-label">Mitglied werden</span>
            </a>
            <a href="/spenden" id="donate-button" className="banner-button">
                <span className="banner-btn-icon">
                    <img className="banner-btn-icon" src="/img/icon/heart_icon.png" alt="heart_icon" />                
                </span>               
                <span className="banner-btn-gap"></span>
                <span className="banner-btn-label">Jetzt spenden</span>
            </a>
        </div>
    </div>
)};

export default HeroBanner;