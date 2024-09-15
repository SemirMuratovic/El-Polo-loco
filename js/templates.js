/**
 * Template that fills the story container
 * @returns Inner html
 */
function storyTemplate() {
  return /*html*/ `
        <img id="story-close" class="close-icon" onclick="closeSubInfo()"
        src="./img/10_style_images/close-icon.svg" alt="">
        <h3>STORY</h3>
        <p>In einem kleinen mexikanischen Dorf namens San José lebte Pepe, ein bescheidener Bauer mit einem
            ausgeprägten Sinn für Humor und eine Liebe für seine Hühner. Doch eines Tages geriet sein
            idyllisches Leben außer Kontrolle. <br> <br>

            Es begann mit einem Beutel speziellem Hühnerfutter, den Pepe versehentlich kaufte. Was als
            harmlose Verbesserung gedacht war, verwandelte sich schnell in eine Katastrophe. Senora Gallina,
            die mächtigste und eigenwilligste Henne auf Pepe's Hof, schnappte sich den Großteil des Futters
            und verschlang es gierig. <br> <br>

            In den folgenden Tagen begann Senora Gallina eine ungeahnte Größe anzunehmen. Bald schon
            überragte sie Pepe und die anderen Hühner bei weitem. Doch das war nicht das einzige Problem.
            Das spezielle Futter schien sie auch mächtiger und aggressiver zu machen. <br> <br>

            Eines Morgens, als Pepe aus der Tür trat, um seine üblichen Pflichten zu erledigen, wurde er von
            einem unheilvollen Hahnenschrei begrüßt. Vor ihm stand Senora Gallina, monströs und mit einem
            bedrohlichen Glanz in den Augen. Die anderen Hühner folgten ihr in einer ominösen Formation,
            ihre Schnäbel und Klauen bereit, Pepe anzugreifen. <br> <br>

            Pepe erkannte, dass er keine andere Wahl hatte, als sich dem Kampf zu stellen. Ohne ein Schild
            zur Verteidigung, griff er stattdessen nach einem Glas seiner berühmten Chilisauce. Mit einem
            geschickten Wurf gelang es ihm, Senora Gallina zu treffen und sie vor Schmerzen krähen zu
            lassen. Die anderen Hühner, von der Schärfe der Sauce abgeschreckt, zögerten einen Moment. <br>
            <br>

            Dies war Pepe's Chance. Mit geschickten Bewegungen und einem weiteren Glas Chilisauce gelang es
            ihm, die rebellischen Hühner zu dezimieren und die Kontrolle über seinen Hof zurückzugewinnen.
            Als die letzten Federn fielen und der Staub sich legte, war San José wieder sicher. <br> <br>

            Von diesem Tag an erzählten sich die Bewohner von San José die Geschichte von Pepe, dem tapferen
            Bauern, der seine Hühnerarmee mit nichts als seiner Chilisauce besiegte und ihr Dorf verteidigte
            - eine Legende, die noch lange in Erinnerung bleiben würde.
        </p>
    `;
}

/**
 * Template that fills the controls container
 * @returns Inner html
 */
function ctrlTemplate() {
  return /*html*/ `
        <img id="story-close" class="close-icon" onclick="closeSubInfo()"
        src="./img/10_style_images/close-icon.svg" alt="">
        <h3>BEDIENUNG</h3>
        <div class="controls-wrapper">
            <div class="controls">
                <div class="arrow">
                    <img src="./img/10_style_images/up-arrow.png" alt="">
                    <p>- Springen</p>
                </div>
                <div class="arrow">
                    <img class="rot-l" src="./img/10_style_images/up-arrow.png" alt="">
                    <p>- Links bewegen</p>
                </div>
                <div class="arrow">
                    <img class="rot-r" src="./img/10_style_images/up-arrow.png" alt="">
                    <p>- Rechts bewegen</p>
                </div>
                <div class="arrow">
                    <img src="./img/10_style_images/letter.png" alt="">
                    <p>oder</p>
                    <img class="bottle" src="./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
                        alt="">
                    <p>- Flasche werfen</p>
                </div>
            </div>
        </div>
    `;
}

/**
 * Template that fills the rights container
 * @returns Inner html
 */
function rightsTemplate() {
  return /*html*/ `
        <img id="story-close" class="close-icon" onclick="closeSubInfo()"
        src="./img/10_style_images/close-icon.svg" alt="">
        <h3>IMPRESSUM</h3>
        Angaben gemäß § 5 TMG<br><br>
        unterstützt von der:<br>
        <br>Developer Akademie GmbH<br>
        Rosenheimer Str. 139<br>
        81671 München<br><br>
        <strong>Entwickler</strong><br>

        Semir Muratovic<br>
        <br>
        Created my free logo at <a href="https://logomakr.com" target="_blank">LogoMakr.com</a>
        <br>
        The icons are provided by <a href="https://fontawesome.com/" rel="nofollow"
            target="_blank">FontAwesome</a> under
        the <a href="https://fontawesome.com/license" target="_blank" rel="nofollow">Creative Commons
            Attribution 4.0
            International license.</a><br>
        The images are provided by <a href="https://pixabay.com/" rel="nofollow"
            target="_blank">Pixabay<br></a><br>

        <h3>Datenschutz</h3>
        <div class="privacy">
            Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung
            (DSGVO), ist: <br>
            Semir Muratovic
            <hr>
            <h4>Ihre Betroffenenrechte</h4> <br>
            Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende
            Rechte ausüben:
            <ul>
                <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),
                </li>
                <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher
                    Pflichten
                    noch nicht löschen dürfen (Art. 18 DSGVO),</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
                <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen
                    Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
            </ul>
            Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die
            Zukunft widerrufen.
            Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die
            zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als
            verantwortliche Stelle zuständige Behörde.
            Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie
            unter: <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
                target="_blank" rel="noopener nofollow">diesem Link</a>.
            <hr>
            <h4>Erfassung allgemeiner Informationen beim Besuch unserer Website</h4> <br>
            <h4>Art und Zweck der Verarbeitung:</h4> <br>
            Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig
            Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese
            Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete
            Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.

            Sie werden insbesondere zu folgenden Zwecken verarbeitet:
            <ul>
                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
                <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                <li>zur Optimierung unserer Website.</li>
            </ul>
            Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser
            Art werden von uns ggfs. anonymisiert statistisch ausgewertet, um unseren Internetauftritt und
            die dahinterstehende Technik zu optimieren.
            <h4>Rechtsgrundlage und berechtigtes Interesse:</h4> <br>
            Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten
            Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.
            <h4>Empfänger:</h4> <br>
            Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung
            unserer Webseite als Auftragsverarbeiter tätig werden.

            <h4>Speicherdauer:</h4> <br>
            Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind.
            Dies ist für die Daten, die der Bereitstellung der Website dienen, grundsätzlich der Fall, wenn
            die jeweilige Sitzung beendet ist.
            Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens 14 Tagen der Fall. Eine
            darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer
            anonymisiert, sodass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.

            <h4>Bereitstellung vorgeschrieben oder erforderlich:</h4> <br>
            Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch
            vertraglich
            vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer
            Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder
            eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.
            <hr>
            <h4>Kontaktformular</h4> <br>
            <h4>Art und Zweck der Verarbeitung:</h4> <br>
            Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen
            gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens
            erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung
            derselben. Die Angabe weiterer Daten ist optional.
            <h4>Rechtsgrundlage:</h4> <br>
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines
            berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
            Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme
            ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für
            mögliche Anschlussfragen gespeichert.
            Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der
            in
            das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs.
            1 lit. b DSGVO).
            <h4>Empfänger:</h4> <br>
            Empfänger der Daten sind ggf. Auftragsverarbeiter.

            <h4>Speicherdauer:</h4> <br>
            Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.
            Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen
            Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen.
            <h4>Bereitstellung vorgeschrieben oder erforderlich:</h4> <br>
            Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage
            jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage
            mitteilen.

            <h4>Verwendung von Scriptbibliotheken (Google Webfonts)</h4> <br>
            Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden
            wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain
            View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.
            Weitere Informationen zu Google Web Fonts finden Sie unter <a
                href="https://developers.google.com/fonts/faq" rel="noopener nofollow"
                target="_blank">diesem Link</a> und in der Datenschutzerklärung von Google: <a
                href="https://www.google.com/policies/privacy/" rel="noopener nofollow"
                target="_blank">diesem Link</a>.

            <hr>
            <h4>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h4> <br>
            <h4>Einzelfallbezogenes Widerspruchsrecht</h4> <br>
            Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
            gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit.
            f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch
            einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4
            Nr. 4 DSGVO.
            Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es
            sei
            denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
            Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung,
            Ausübung oder Verteidigung von Rechtsansprüchen.
            <h4>Empfänger eines Widerspruchs</h4> <br>
            Semir Muratovic
            <hr>
            <h4>Änderung unserer Datenschutzbestimmungen</h4> <br>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
            rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der
            Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten
            Besuch gilt dann die neue Datenschutzerklärung.
            <h4>Fragen an den Datenschutzbeauftragten</h4> <br>
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich
            direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:

            <em>Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für <a
                    href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" target="_blank"
                    rel="noopener">externe Datenschutzbeauftragte</a> (Version #2020-09-30).</em>
            <br><br>
        </div>
    `;
}
