"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Github, Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [consentError, setConsentError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const consent = formData.get("consent") === "on";

    if (!consent) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    setSubmitState("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Submission failed");
      }

      form.reset();
      setSubmitState("success");
      window.setTimeout(() => setSubmitState("idle"), 5000);
    } catch {
      setSubmitState("error");
    }
  };

  const loading = submitState === "loading";

  return (
    <section id="contact" className="section-shell bg-bg-secondary/72">
      <div className="site-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <span className="section-kicker">Contact</span>
          <h2 className="section-title mt-5">Parlons de votre projet</h2>
          <p className="muted-copy mt-6">
            Vous avez une idée ? Nous sommes là pour la concrétiser. Contactez-nous pour discuter
            de votre prochain projet.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-text-secondary transition hover:text-text-primary"
            >
              <Mail size={20} className="text-accent-cyan" aria-hidden />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 text-text-secondary">
              <MapPin size={20} className="text-accent-cyan" aria-hidden />
              {siteConfig.location}
            </div>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-text-secondary transition hover:text-text-primary"
            >
              <Github size={20} className="text-accent-cyan" aria-hidden />
              GitHub
            </a>
          </div>
        </div>

        <form className="surface-panel p-5 sm:p-8" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
          />
          <input
            type="hidden"
            name="subject"
            value="Nouveau message depuis le site Omega Developments"
          />

          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-text-primary">
              Votre nom
              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                className="min-h-12 rounded-lg border border-border-subtle bg-bg-tertiary px-4 text-base font-normal text-text-primary transition placeholder:text-text-muted focus:border-accent-cyan"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-text-primary">
              Votre email
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="min-h-12 rounded-lg border border-border-subtle bg-bg-tertiary px-4 text-base font-normal text-text-primary transition placeholder:text-text-muted focus:border-accent-cyan"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-text-primary">
              Votre message
              <textarea
                required
                name="message"
                rows={5}
                className="min-h-36 resize-none rounded-lg border border-border-subtle bg-bg-tertiary px-4 py-3 text-base font-normal text-text-primary transition placeholder:text-text-muted focus:border-accent-cyan"
              />
            </label>

            <label className="flex items-start gap-3 text-sm text-text-secondary">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 h-4 w-4 shrink-0 rounded border-border-subtle bg-bg-tertiary accent-accent-cyan"
                aria-invalid={consentError}
              />
              <span>
                J&apos;accepte que mes données (nom, email, message) soient utilisées pour me
                répondre, conformément à la{" "}
                <a href="/politique-de-confidentialite" className="underline hover:text-text-primary">
                  politique de confidentialité
                </a>
                .
              </span>
            </label>
            {consentError && (
              <p className="text-sm text-red-600" role="alert">
                Merci de cocher la case de consentement pour envoyer le formulaire.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={cn(buttonStyles({ className: "w-full" }), loading && "cursor-wait opacity-75")}
            >
              {submitState === "success" ? (
                <CheckCircle2 size={18} aria-hidden />
              ) : submitState === "error" ? (
                <AlertCircle size={18} aria-hidden />
              ) : (
                <Send size={18} aria-hidden />
              )}
              {loading
                ? "Envoi en cours..."
                : submitState === "success"
                  ? "Message envoyé"
                  : submitState === "error"
                    ? "Réessayer"
                    : "Envoyer le message"}
            </button>

            <p className="min-h-6 text-sm text-text-secondary" aria-live="polite">
              {submitState === "success" && "Merci, votre message a bien été envoyé."}
              {submitState === "error" && "Une erreur est survenue. Veuillez réessayer."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
