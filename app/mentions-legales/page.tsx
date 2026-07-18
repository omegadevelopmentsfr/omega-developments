import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales"
};

export default function LegalNoticePage() {
  return (
    <main className="site-container py-24 text-text-secondary">
      <h1 className="section-title mb-8 text-text-primary">Mentions légales</h1>

      <div className="max-w-none space-y-8">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">Éditeur du site</h2>
          <p>
            {siteConfig.name} est un collectif de développeurs à but non lucratif, non déclaré en
            tant que structure juridique (pas de société ni d&apos;association enregistrée).
            <br />
            Adresse : {siteConfig.location}
            <br />
            Email :{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-3">
            Responsable de la publication : Arthur BRENAS
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">Hébergement</h2>
          <p>
            Ce site est hébergé par GitHub Pages, un service de GitHub, Inc.
            <br />
            Nom de l&apos;hébergeur : GitHub, Inc.
            <br />
            Adresse : 88 Colin P. Kelly Jr Street, San Francisco, CA 94107, United States
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, logos, code) est la
            propriété de {siteConfig.name}, sauf mention contraire, et ne peut être reproduit sans
            autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-text-primary">Données personnelles</h2>
          <p>
            Pour toute information sur le traitement de vos données personnelles, consultez notre{" "}
            <a href="/politique-de-confidentialite" className="underline">
              politique de confidentialité
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
