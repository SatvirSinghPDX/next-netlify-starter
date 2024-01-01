import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
<body>
    <header>
        <h1>Privacy Policy</h1>
    </header>
    <main>
        <section>
            <h2>1. Information We Collect:</h2>
            <p>We do not collect any personally identifiable information (PII) or personal data from users through the app.</p>
        </section>
        <section>
            <h2>2. Automatically Collected Information:</h2>
            <p>Our app does not collect any automatic or passive information about you or your device.</p>
        </section>
        <section>
            <h2>3. Use of Information:</h2>
            <p>Since we do not collect any information from users, we do not use or share any information for any purpose.</p>
        </section>
        <section>
            <h2>4. Third-Party Services:</h2>
            <p>Our app does not utilize any third-party services or integrate with any external platforms that would involve data collection or sharing.</p>
        </section>
        <section>
            <h2>5. Security:</h2>
            <p>We prioritize the security of your information, and as we do not collect any data, we have implemented appropriate measures to ensure the protection of your privacy.</p>
        </section>
        <section>
            <h2>6. Children's Privacy:</h2>
            <p>Our app is not intended for children under the age of 13. We do not knowingly collect any personal information from children under 13 years of age. If a parent or guardian becomes aware that their child has provided us with personal information without their consent, they should contact us, and we will delete such information from our servers.</p>
        </section>
        <section>
            <h2>7. Changes to this Privacy Policy:</h2>
            <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected in the updated version of the app, and your continued use of the app after any modifications indicate your acceptance of the updated Privacy Policy.</p>
        </section>
        <section>
            <h2>8. Contact Us:</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy or our app's privacy practices, please contact us at [contact email].</p>
        </section>
    </main>
</body>

  )
}
