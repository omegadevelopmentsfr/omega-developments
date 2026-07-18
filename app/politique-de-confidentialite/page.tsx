import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité"
};

export default function PrivacyPolicyPage() {
  return (
    <main className="site-container py-24 text-text-secondary">
      <h1 className="section-title mb-8 text-text-primary">Politique de confidentialité</h1>

      <div className="max-w-none space-y-8">
        <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">1. Responsable du traitement</h2>
          <p>
            {siteConfig.name}, dont le contact est disponible à l&apos;adresse{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
            , est responsable du traitement des données collectées sur ce site.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">2. Données collectées</h2>
          <p>
            Lorsque vous utilisez notre formulaire de contact, nous collectons uniquement les
            informations que vous nous transmettez volontairement : votre nom, votre adresse
            email et le contenu de votre message. Aucune autre donnée personnelle n&apos;est
            collectée automatiquement sur ce site (pas de cookies, pas de traceurs publicitaires,
            pas d&apos;outils d&apos;analyse d&apos;audience).
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">3. Finalité du traitement</h2>
          <p>
            Les données collectées via le formulaire de contact sont utilisées uniquement pour
            répondre à votre demande. Elles ne sont ni revendues, ni utilisées à des fins
            commerciales ou publicitaires.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">4. Base légale</h2>
          <p>
            Le traitement de vos données repose sur votre consentement explicite, recueilli au
            moment de l&apos;envoi du formulaire de contact.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">5. Destinataires et transferts de données</h2>
          <p>
            Le formulaire de contact utilise le service tiers{" "}
            <a
              href="https://web3forms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Web3Forms
            </a>{" "}
            pour l&apos;acheminement des messages vers notre boîte email. Ce service peut
            impliquer un transfert de données en dehors de l&apos;Union européenne. Nous vous
            invitons à consulter la politique de confidentialité de Web3Forms pour en savoir plus
            sur leurs pratiques de traitement des données.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">6. Durée de conservation</h2>
          <p>
            Les données transmises via le formulaire de contact sont conservées le temps
            nécessaire au traitement de votre demande, puis supprimées, sauf obligation légale de
            conservation plus longue.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">7. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
            d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, et
            d&apos;opposition concernant vos données personnelles. Vous pouvez exercer ces droits
            en nous contactant à l&apos;adresse{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
            . Vous disposez également du droit d&apos;introduire une réclamation auprès de la
            CNIL (www.cnil.fr).
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">8. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques raisonnables pour protéger vos données
            contre tout accès, modification ou divulgation non autorisés.
          </p>
        </section>
      </div>
    </main>
  );
}
