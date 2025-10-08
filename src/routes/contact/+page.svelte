<script lang="ts">
	// import CommonPage from '$lib/components/CommonPage.svelte';
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	let showPersonalData = false;

	const char_array = [
		90, 110, 74, 120, 100, 50, 82, 109, 100, 48, 78, 118, 101, 71, 104, 110, 97, 72, 86, 50, 77, 87,
		100, 111, 101, 81, 61, 61
	]; // Example encrypted email

	function decryptEmail(charCodes: number[]): string {
		let shifted = '';
		for (let i = 0; i < charCodes.length; i++) {
			shifted += String.fromCharCode(charCodes[i]);
		}

		const decoded = atob(shifted);

		let result = '';
		for (let i = 0; i < decoded.length; i++) {
			result += String.fromCharCode(decoded.charCodeAt(i) - 3);
		}

		return result;
	}

	function encryptEmail(email: string): number[] {
		let result = '';
		for (let i = 0; i < email.length; i++) {
			result += String.fromCharCode(email.charCodeAt(i) + 3);
		}

		const encoded = btoa(result);

		const charCodes: number[] = [];
		for (let i = 0; i < encoded.length; i++) {
			charCodes.push(encoded.charCodeAt(i));
		}

		return charCodes;
	}

	function togglePersonalData() {
		showPersonalData = !showPersonalData;
	}
</script>

<TitledPage title="Contact">
	<div class="mx-4 sm:mx-8 md:mx-12 lg:mx-20">
		<!-- <h2>Contact</h2> -->
		<div class="contact-info mb-6 rounded-lg border-l-4 border-primary bg-secondary p-4">
			<address>
				{#if showPersonalData}
					<!-- <p><strong>Name:</strong> [Ihr Name]</p> -->
					<!-- <p>
						<strong>Adresse:</strong><br />
						[Ihre Straße und Hausnummer]<br />
						[Ihre Postleitzahl und Stadt]<br />
						Deutschland
					</p> -->
					<p>
						<strong>Kontakt:</strong><br />
						<!-- Telefon: [Ihre Telefonnummer]<br /> -->
						E-Mail:
						<a href="mailto:{decryptEmail(char_array)}">{decryptEmail(char_array)}</a>
					</p>
				{:else}
					<p><strong>Kontaktdaten anzeigen</strong></p>
					<p>Klicken Sie auf den Button unten, um die Kontaktdaten anzuzeigen.</p>
				{/if}
			</address>

			<Button
				class="toggle-button mt-4 bg-primary text-primary-foreground"
				on:click={togglePersonalData}
				aria-label={showPersonalData ? 'Kontaktdaten ausblenden' : 'Kontaktdaten anzeigen'}
			>
				{#if showPersonalData}
					<span class="button-icon">🔒</span>
					Kontaktdaten ausblenden
				{:else}
					<span class="button-icon">📧</span>
					Kontaktdaten anzeigen
				{/if}
			</Button>
		</div>

		<!-- <h2>Haftungsausschluss</h2>

		<h3>Haftung für Inhalte</h3>
		<p>
			Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
			den Allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
			jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
			oder nach Ursachen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
		</p>
		<p>
			Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
			allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
			dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
			entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
		</p>

		<h3>Haftung für Links</h3>
		<p>
			Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
			Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für
			die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
			verantwortlich.
		</p>
		<p>
			Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
			überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
			permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
			einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
			derartige Links umgehend entfernen.
		</p>

		<h3>Urheberrecht</h3>
		<p>
			Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
			deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
			Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
			jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
			privaten, nicht kommerziellen Gebrauch gestattet.
		</p>
		<p>Die kommerzielle Nutzung unserer Inhalte ohne Zustimmung des Urhebers ist untersagt.</p>
		<p>
			Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
			Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
			aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
			Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
		</p> -->
	</div>
</TitledPage>
