<script lang="ts">
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';
	import H2 from '$lib/components/ui/typography/H2.svelte';
	import H3 from '$lib/components/ui/typography/H3.svelte';
	import H4 from '$lib/components/ui/typography/H4.svelte';
	import P from '$lib/components/ui/typography/P.svelte';

	const linkClass = 'text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary transition-colors';
</script>

<TitledPage title="Privacy Policy">
	<ResponsiveContainer className="flex flex-col justify-center flex-1 leading-relaxed sm:mx-8 md:mx-12 lg:mx-20">
		<H2 className="mt-8 mb-4 text-2xl font-semibold">Datenschutz&shy;erkl&auml;rung</H2>
		<H2 className="mt-8 mb-4 text-2xl font-semibold">1. Datenschutz auf einen Blick</H2>
		<H3 className="text-xl font-medium">Allgemeine Hinweise</H3>
		<P className="mb-4 text-foreground/80">
			Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren
			personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind
			alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche
			Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten
			Datenschutzerkl&auml;rung.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Datenerfassung auf dieser Website</H3>
		<H4>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</H4>
		<P className="mb-4 text-foreground/80">
			Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
			Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo;
			in dieser Datenschutzerkl&auml;rung entnehmen.
		</P>
		<H4>Wie erfassen wir Ihre Daten?</H4>
		<P className="mb-4 text-foreground/80">
			Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
			sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
		</P>
		<P className="mb-4 text-foreground/80">
			Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
			unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
			Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
			automatisch, sobald Sie diese Website betreten.
		</P>
		<H4>Wof&uuml;r nutzen wir Ihre Daten?</H4>
		<P className="mb-4 text-foreground/80">
			Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
			gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet
			werden. Sofern &uuml;ber die Website Vertr&auml;ge geschlossen oder angebahnt werden
			k&ouml;nnen, werden die &uuml;bermittelten Daten auch f&uuml;r Vertragsangebote, Bestellungen
			oder sonstige Auftragsanfragen verarbeitet.
		</P>
		<H4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</H4>
		<P className="mb-4 text-foreground/80">
			Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und
			Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
			Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine
			Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
			f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten
			Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
			verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen
			Aufsichtsbeh&ouml;rde zu.
		</P>
		<P className="mb-4 text-foreground/80">
			Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns
			wenden.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Analyse-Tools und Tools von Dritt&shy;anbietern</H3>
		<P className="mb-4 text-foreground/80">
			Beim Besuch dieser Website kann Ihr Surf- Verhalten statistisch ausgewertet werden. Das
			geschieht vor allem mit sogenannten Analyseprogrammen.
		</P>
		<P className="mb-4 text-foreground/80">
			Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
			Datenschutzerkl&auml;rung.
		</P>


		<H2 className="mt-8 mb-0 text-2xl font-semibold">2. Hosting</H2>
		<P className="mb-0">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Strato</H3>
		<P className="mb-4 text-foreground/80">
			Anbieter ist die Strato AG, Otto-Ostrowski-Stra&szlig;e 7, 10249 Berlin (nachfolgend
			&bdquo;Strato&ldquo;). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles
			inklusive Ihrer IP- Adressen.
		</P>
        <P className="mb-4 text-foreground/80">
            Weitere Informationen entnehmen Sie der Datenschutzerkl&auml;rung von Strato: <a
                href="https://www.strato.de/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
                class={linkClass}>https://www.strato.de/datenschutz/</a
            >.
        </P>
		<P className="mb-4 text-foreground/80">
			Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
			berechtigtes Interesse an einer m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website.
			Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
			ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG,
			soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
			Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
			Einwilligung ist jederzeit widerrufbar.
		</P>
		<H2 className="mt-8 mb-4 text-2xl font-semibold">3. Allgemeine Hinweise und Pflicht&shy;informationen</H2>
		<H3 className="mt-6 mb-3 text-xl font-medium">Datenschutz</H3>
		<P className="mb-4 text-foreground/80">
			Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir
			behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
			Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
		</P>
		<P className="mb-4 text-foreground/80">
			Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
			Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden
			k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir
			erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
			geschieht.
		</P>
		<P className="mb-4 text-foreground/80">
			Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der
			Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
			der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Hinweis zur verantwortlichen Stelle</H3>
		<P className="mb-4 text-foreground/80">
			Die verantwortliche Stelle f&uuml;r die Datenverarbeitung finden sie <a href="/contact"
				>hier</a
			>.
		</P>
		<P className="mb-4 text-foreground/80">
			Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder
			gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen
			Daten (z.&nbsp;B. Namen, E-Mail- Adressen o. &Auml;.) entscheidet.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Speicherdauer</H3>
		<P className="mb-4 text-foreground/80">
			Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt
			wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
			Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen
			oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
			sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer
			personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche
			Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser
			Gr&uuml;nde.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</H3>
		<P className="mb-4 text-foreground/80">
			Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen
			Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
			besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer
			ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener Daten in
			Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1
			lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen
			in Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die
			Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TDDDG. Die Einwilligung
			ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur
			Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten
			auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern
			diese zur Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von
			Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres
			berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im
			Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser
			Datenschutzerkl&auml;rung informiert.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Empf&auml;nger von personenbezogenen Daten</H3>
		<P className="mb-4 text-foreground/80">
			Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit verschiedenen externen Stellen
			zusammen. Dabei ist teilweise auch eine &Uuml;bermittlung von personenbezogenen Daten an diese
			externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen
			weiter, wenn dies im Rahmen einer Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich
			hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbeh&ouml;rden), wenn wir
			ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn
			eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
			Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines
			g&uuml;ltigen Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
			Verarbeitung wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Widerruf Ihrer Einwilligung zur Datenverarbeitung</H3>
		<P className="mb-4 text-foreground/80">
			Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung
			m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die
			Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
			unber&uuml;hrt.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">
			Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung
			(Art. 21 DSGVO)
		</H3>
		<P className="mb-4 text-foreground/80">
			WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN
			SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
			GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH
			F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE,
			AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE
			WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
			VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R
			DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER
			DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
			RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
		</P>
		<P className="mb-4 text-foreground/80">
			WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE
			DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER
			DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT
			ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE
			PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
			(WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</H3>
		<P className="mb-4 text-foreground/80">
			Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht
			bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
			Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das
			Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
			Rechtsbehelfe.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</H3>
		<P className="mb-4 text-foreground/80">
			Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung
			eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem
			g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
			&Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
			soweit es technisch machbar ist.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Auskunft, Berichtigung und L&ouml;schung</H3>
		<P className="mb-4 text-foreground/80">
			Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
			unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft
			und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
			oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
			Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">Recht auf Einschr&auml;nkung der Verarbeitung</H3>
		<P className="mb-4 text-foreground/80">
			Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
			verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf
			Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:
		</P>
		<ul>
			<li class="text-foreground/80">
				Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
				ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
				der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
				personenbezogenen Daten zu verlangen.
			</li>
			<li class="text-foreground/80">
				Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig
				geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der
				Datenverarbeitung verlangen.
			</li>
			<li class="text-foreground/80">
				Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur
				Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen,
				haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer
				personenbezogenen Daten zu verlangen.
			</li>
			<li class="text-foreground/80">
				Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
				Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht
				feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung
				der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
			</li>
		</ul>
		<P className="mb-4 text-foreground/80">
			Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen
			diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder
			zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz
			der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines
			wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats
			verarbeitet werden.
		</P>
		<H3 className="mt-6 mb-3 text-xl font-medium">SSL- bzw. TLS-Verschl&uuml;sselung</H3>
		<P className="mb-4 text-foreground/80">
			Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung
			vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als
			Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte
			Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf
			&bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
		</P>
		<P className="mb-4 text-foreground/80">
			Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an
			uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.
		</P>
		<H2 className="mt-8 mb-4 text-2xl font-semibold">4. Datenerfassung auf dieser Website</H2>
		<H3 className="mt-6 mb-3 text-xl font-medium">Cookies</H3>
		<P className="mb-4 text-foreground/80">
			Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine
			Datenpakete und richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden entweder
			vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
			(permanente Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden nach Ende
			Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf Ihrem Endger&auml;t
			gespeichert, bis Sie diese selbst l&ouml;schen oder eine automatische L&ouml;schung durch
			Ihren Webbrowser erfolgt.
		</P>
		<P className="mb-4 text-foreground/80">
			Cookies k&ouml;nnen von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog.
			Third-Party-Cookies). Third-Party-Cookies erm&ouml;glichen die Einbindung bestimmter
			Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.&nbsp;B. Cookies zur
			Abwicklung von Zahlungsdienstleistungen).
		</P>
		<P className="mb-4 text-foreground/80">
			Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da
			bestimmte Webseitenfunktionen ohne diese nicht funktionieren w&uuml;rden (z.&nbsp;B. die
			Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies k&ouml;nnen zur Auswertung des
			Nutzerverhaltens oder zu Werbezwecken verwendet werden.
		</P>
		<P className="mb-4 text-foreground/80">
			Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs, zur
			Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (z.&nbsp;B. f&uuml;r die
			Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung des
			Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1
			lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der
			Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur
			technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung
			zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde,
			erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1
			lit. a DSGVO und &sect; 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
		</P>
		<P className="mb-4 text-foreground/80">
			Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies
			informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r
			bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der
			Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der Deaktivierung von Cookies kann
			die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.
		</P>
		<P className="mb-4 text-foreground/80">
			Welche Cookies und Dienste auf dieser Website eingesetzt werden, k&ouml;nnen Sie dieser
			Datenschutzerkl&auml;rung entnehmen.
		</P>
		<H3>Rybbit Analytics</H3>
		<P className="mb-4 text-foreground/80">
			Wir nutzen Rybbit Analytics, ein Open-Source-Tool unter der AGPL-3.0-Lizenz für cookieless
			Web-Analyse.
		</P>
		<P className="mb-4 text-foreground/80">
			Die Einbindung erfolgt über ein JavaScript-Snippet im <code>&lt;head&gt;</code> der Website.
		</P>
		<P className="mb-4 text-foreground/80">
			Rybbit erhebt keine Cookies oder Local Storage zur Datenerfassung. Sämtliche Analysedaten
			verbleiben auf unserem eigenen Server und werden nicht an Dritte weitergegeben. Die Erfassung
			erfolgt pseudonymisiert durch Hashing von IP-Adresse und User-Agent zur Generierung einer
			anonymen Session-ID. Die Verarbeitung basiert auf unserem berechtigten Interesse gemäß Art. 6
			Abs. 1 lit. f DSGVO zur Optimierung und Sicherheit unserer Website.
		</P>
		<P className="mb-4 text-foreground/80">
			Speicherdauer: Die pseudonymisierten Daten werden für maximal 30 Tage gespeichert und
			anschließend automatisch gelöscht.
		</P>
		<P className="mb-4 text-foreground/80">
			Wie Sie die Datenerfassung deaktivieren, können Sie <a
				href="https://www.rybbit.io/docs/hiding-own-traffic"
				target="_blank"
				rel="noopener">hier</a
			> erfahren.
		</P>
		<H3>Server-Log-Dateien</H3>
		<P className="mb-4 text-foreground/80">
			Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
			Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:
		</P>
		<ul>
			<li class="text-foreground/80">Browsertyp und Browserversion</li>
			<li class="text-foreground/80">verwendetes Betriebssystem</li>
			<li class="text-foreground/80">Referrer URL</li>
			<li class="text-foreground/80">Hostname des zugreifenden Rechners</li>
			<li class="text-foreground/80">Uhrzeit der Serveranfrage</li>
			<li class="text-foreground/80">IP-Adresse</li>
		</ul>
		<P className="mb-4 text-foreground/80">Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</P>
		<P className="mb-4 text-foreground/80">
			Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
			Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und
			der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst werden.
		</P>
		<H2 className="mt-8 mb-4 text-2xl font-semibold">5. Plugins und Tools</H2>
		<H3>Spotify</H3>
		<P className="mb-4 text-foreground/80">
			Auf dieser Website sind Funktionen des Musik-Dienstes Spotify eingebunden. Anbieter ist die
			Spotify AB, Birger Jarlsgatan 61, 113 56 Stockholm in Schweden. Die Spotify Plugins erkennen
			Sie an dem gr&uuml;nen Logo auf dieser Website. Eine &Uuml;bersicht &uuml;ber die
			Spotify-Plugins finden Sie unter: <a
				href="https://developer.spotify.com"
				target="_blank"
				rel="noopener
noreferrer">https://developer.spotify.com</a
			>.
		</P>
		<P className="mb-4 text-foreground/80">
			Dadurch kann beim Besuch dieser Website &uuml;ber das Plugin eine direkte Verbindung zwischen
			Ihrem Browser und dem Spotify-Server hergestellt werden. Spotify erh&auml;lt dadurch die
			Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Spotify
			Button anklicken, w&auml;hrend Sie in Ihrem Spotify-Account eingeloggt sind, k&ouml;nnen Sie
			die Inhalte dieser Website auf Ihrem Spotify Profil verlinken. Dadurch kann Spotify den Besuch
			dieser Website Ihrem Benutzerkonto zuordnen.
		</P>
		<P className="mb-4 text-foreground/80">
			Wir weisen darauf hin, dass bei der Nutzung von Spotify Cookies von Google Analytics
			eingesetzt werden, sodass Ihre Nutzungsdaten bei der Nutzung von Spotify auch an Google
			weitergegeben werden k&ouml;nnen. Google Analytics ist ein Tool des Google-Konzerns zur
			Analyse des Nutzerverhaltens mit Sitz in den USA. F&uuml;r diese Einbindung ist allein Spotify
			verantwortlich. Wir als Websitebetreiber haben auf diese Verarbeitung keinen Einfluss.
		</P>
		<P className="mb-4 text-foreground/80">
			Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
			Der Websitebetreiber hat ein berechtigtes Interesse an der ansprechenden akustischen
			Ausgestaltung seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
			die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect;
			25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
			Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des
			TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
		</P>
		<P className="mb-4 text-foreground/80">
			Weitere Informationen hierzu finden Sie in der Datenschutzerkl&auml;rung von Spotify: <a
				href="https://www.spotify.com/de/legal/privacy-policy/"
				target="_blank"
				rel="noopener
noreferrer">https://www.spotify.com/de/legal/privacy-policy/</a
			>.
		</P>
		<P className="mb-4 text-foreground/80">
			Wenn Sie nicht w&uuml;nschen, dass Spotify den Besuch dieser Website Ihrem Spotify-Nutzerkonto
			zuordnen kann, loggen Sie sich bitte aus Ihrem Spotify-Benutzerkonto aus.
		</P>
		<H3 id="cloudflare-datenschutzerklarung">Cloudflare</H3>
		<P className="mb-4 text-foreground/80">
			Wir verwenden auf unserer Seite den Dienst CloudFlare des Unternehmens Cloudflare, Inc., 101
			Townsend St, 94107 San Francisco, Vereinigte Staaten, E-Mail: support@cloudflare.com, Website:
			<a href="https://www.cloudflare.com/de-de/">https://www.cloudflare.com/de-de/</a>. Die
			Verarbeitung erfolgt auch in einem Drittstaat, für den kein Angemessenheitsbeschluss der
			Kommission vorliegt. Daher kann das für die DSGVO übliche Schutzniveau bei der Übermittlung
			nicht gewährleistet werden, da nicht auszuschließen ist, dass im Drittland z.B. Behörden
			Zugriff auf die erhobenen Daten nehmen können.
		</P>
		<P className="mb-4 text-foreground/80">
			Rechtsgrundlage für die Übermittlung der personenbezogenen Daten stellt gem. Art. 6 Abs. 1
			lit. f DSGVO unser berechtigtes Interesse an der Verarbeitung dar. Unser berechtigtes
			Interesse liegt in der Erreichung des nachfolgend geschilderten Zwecks.
		</P>
		<P className="mb-4 text-foreground/80">
			Bei Cloudflare handelt es sich um ein so genanntes Content Delivery Network, das neben der
			Aufteilung der Website auf mehrere Server auch Sicherheitsfunktionen bereitstellt. Zudem
			fungiert Cloudflare als Reverse Proxy für unsere Website.
		</P>
		<P className="mb-4 text-foreground/80">
			Im Hinblick auf die Verarbeitung steht Ihnen das in Art. 21 aufgeführte Widerspruchsrecht zu.
			Nähere Informationen finden Sie am Ende dieser Datenschutzerklärung.
		</P>
		<P className="mb-4 text-foreground/80">
			Weitere Informationen zum Handling der übertragenen Daten finden Sie in der
			Datenschutzerklärung des Anbieters unter https://www.cloudflare.com/privacypolicy.
		</P>

		<P className="mb-4 text-foreground/80">Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></P>
	</ResponsiveContainer>
</TitledPage>
