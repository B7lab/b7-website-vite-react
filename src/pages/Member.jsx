import "./Home.css";
import HeroBanner from '../components/HeroBanner';

function MemberPage() {

return(

<main>

    <HeroBanner />
    <div className="content-container">
        <h2 className="block-heading">So, wie es zu dir passt</h2>
        <p>
        Ob als Fördermitglied, helfende Hand auf der Baustelle, kreativer Unterstützerin oder mit organisatorischem Know-how 
        - bei uns kann sich jede*r auf eigene Weise einbringen. Du entscheidest selbst, wie viel Zeit und Energie Du investieren 
        möchtest.<br />
        
        Füll einfach das Formular aus und werde Teil des Projekts!
        </p>

        <p>
            [Platzhalter für Mitgliedsantrag]
        </p>
    </div>  
    
</main>

)};

export default MemberPage;