import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Star } from "lucide-react";

import heroMockup from "@/assets/hero-mockup.jpg";
import packBasic from "@/assets/pack-basic.jpg";
import packComplete from "@/assets/pack-complete.jpg";
import {
  gallery,
  pills,
  features,
  audience,
  benefits,
  bonuses,
  testimonials,
  basicList,
  completeList,
  faqs,
} from "@/components/landing/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+500 Dinámicas para Evangelización Católica Infantil" },
      {
        name: "description",
        content:
          "Más de 500 dinámicas, juegos y actividades para la catequesis y evangelización infantil católica con 6 bonos exclusivos y acceso de por vida.",
      },
      { property: "og:title", content: "+500 Dinámicas para Evangelización Católica Infantil" },
      {
        property: "og:description",
        content:
          "Dinámicas listas para aplicar hoy mismo, con 6 bonos exclusivos y acceso de por vida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-softblue px-4 py-2 text-sm font-semibold text-navy">
      {children}
    </span>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function GreenCheck() {
  return (
    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success text-[11px] font-bold text-white">
      <Check className="h-3.5 w-3.5" strokeWidth={3} />
    </span>
  );
}

function Index() {
  return (
    <main className="font-sans text-navy">
      {/* 1. Top bar */}
      <div className="bg-navy px-4 py-3 text-center text-sm font-medium text-white">
        🕊️ Oferta especial por tiempo limitado — acceso inmediato después de la compra
      </div>

      {/* 2. Hero */}
      <section className="bg-softgray px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <Badge>🕊️ Material digital para catequistas y familias</Badge>
          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            +500 Dinámicas para <span className="text-brand">Evangelización Católica Infantil</span>{" "}
            listas para aplicar hoy mismo
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Más de 500 dinámicas, juegos y actividades organizadas por edad y tema para enseñar la
            fe católica con amor, creatividad y ligereza en la catequesis e infancia.
          </p>
          <div className="mt-10 rounded-3xl bg-white p-4 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] sm:p-10">
            <img
              src={heroMockup}
              alt="+500 Dinámicas para Evangelización Católica Infantil"
              width={1200}
              height={912}
              className="mx-auto w-full max-w-3xl"
            />
          </div>
          <div className="mt-10">
            <a
              href="#precos"
              className="inline-flex rounded-2xl bg-success px-10 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition hover:brightness-95"
            >
              Quiero Acceder Ahora
            </a>
            <p className="mt-4 text-xs font-semibold text-muted-foreground sm:text-sm">
              ⭐ +3.200 catequistas y familias ya lo han adquirido
            </p>
          </div>
        </div>
      </section>

      {/* 3. Gallery */}
      <section className="bg-softblue px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Badge>📖 Mira lo que incluye</Badge>
            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Mira algunas de las +500 dinámicas católicas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Actividades, parábolas, juegos, dinámicas y reflexiones listas para aplicar en la
              catequesis infantil — paso a paso y con material de apoyo.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {gallery.map((g) => (
              <figure key={g.caption}>
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  width={700}
                  height={800}
                  className="h-56 w-full rounded-2xl object-cover shadow-md sm:h-64"
                />
                <figcaption className="mt-3 text-center text-sm font-bold">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pills.map((p) => (
              <div
                key={p}
                className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold shadow-sm"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lo que vas a recibir */}
      <section className="bg-softgray px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <Badge>📦 Contenido completo</Badge>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">Lo que vas a recibir</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Todo organizado por temas y virtudes para encontrar la dinámica adecuada en segundos.
          </p>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-softblue text-xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Ideal para ti */}
      <section className="bg-softgray px-4 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <Badge>🎯 Para quién es</Badge>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">
            Ideal para <span className="text-success">ti</span> que deseas...
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Un material versátil para todos los que desean enseñar la fe católica con más seguridad y amor.
          </p>
          <div className="mt-10 rounded-3xl bg-white p-6 text-left shadow-lg sm:p-10">
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {audience.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-3 border-b border-border py-4 text-sm sm:text-base"
                >
                  <GreenCheck />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. ¿Por qué elegir estas dinámicas? */}
      <section className="bg-softblue px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-danger px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-white">
              🔥 ¿Por qué elegir estas dinámicas?
            </span>
          </div>
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-8">
              <img
                src={packComplete}
                alt="+500 Dinámicas Católicas"
                loading="lazy"
                width={1200}
                height={912}
                className="w-full"
              />
            </div>
            <div className="relative rounded-3xl bg-navy p-7 text-white shadow-xl sm:p-10">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-success px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">
                ⚡ Acceso inmediato
              </span>
              <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">
                +500 Dinámicas Católicas en un solo lugar
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Preparar un encuentro de catequesis lleva tiempo, requiere creatividad y mucha
                investigación. Con <strong className="text-white">+500 Dinámicas Católicas™</strong>{" "}
                obtienes:
              </p>
              <ul className="mt-6">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 border-b border-white/10 py-4">
                    <GreenCheck />
                    <span className="text-sm sm:text-base">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/70">
                Recibes todo al instante, directamente en tu 📱{" "}
                <strong className="text-white">WhatsApp</strong> y en tu ✉️{" "}
                <strong className="text-white">e-mail</strong>
              </p>
              <p className="mt-6 text-center text-2xl font-extrabold text-success sm:text-3xl">
                Y mucho más...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bonos exclusivos */}
      <section className="bg-softblue px-4 pb-20">
        <div className="mx-auto max-w-6xl text-center">
          <Badge>🎁 Bonos exclusivos</Badge>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">
            Además, te llevas 6 bonos exclusivos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Materiales complementarios para enriquecer tus encuentros de catequesis — incluidos gratis hoy.
          </p>
          <div className="mt-12 grid gap-7 text-left sm:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((b) => (
              <article
                key={b.n}
                className="flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-md"
              >
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  width={880}
                  height={768}
                  className="h-56 w-full rounded-xl object-cover"
                />
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-success">
                  Bono #{b.n}
                </p>
                <h3 className="mt-2 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span className="text-muted-foreground line-through">{b.price}</span>
                  <span className="font-extrabold text-success">GRATIS</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-12 w-full max-w-sm rounded-2xl bg-white px-8 py-6 shadow-md">
            <p className="text-sm text-muted-foreground">Valor total de los bonos</p>
            <p className="mt-2 text-2xl font-extrabold">
              <span className="text-muted-foreground line-through">$ 49,00</span>{" "}
              <span className="text-success">GRATIS hoy</span>
            </p>
          </div>
        </div>
      </section>

      {/* 8. Reseñas / Testimonios */}
      <section className="bg-softblue px-4 pb-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-lg font-bold text-brand">G</span>
            <span className="font-bold">Excelente</span>
            <Stars />
            <span className="font-bold">5.0</span>
            <span className="text-muted-foreground">| 1.284 reseñas</span>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">
            Quiénes ya aseguraron sus dinámicas
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Historias reales de catequistas y familias que transformaron sus clases con el material.
          </p>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.name} className="rounded-2xl bg-white p-6 shadow-md">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-softblue font-bold text-brand">
                    {t.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.date}</p>
                  </div>
                  <span className="ml-auto text-sm font-bold text-brand">G</span>
                </div>
                <div className="mt-4">
                  <Stars />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Preços / Elige tu paquete */}
      <section id="precos" className="bg-softblue px-4 pb-24">
        <div className="mx-auto max-w-6xl text-center">
          <Badge>💳 Elige tu paquete</Badge>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">
            Oferta <span className="text-success">exclusiva</span> por tiempo limitado
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Pago único. Sin mensualidades. Acceso de por vida a las +500 dinámicas.
          </p>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
            {/* Básico */}
            <div className="rounded-3xl bg-white p-6 text-left shadow-md sm:p-8">
              <h3 className="text-center text-2xl font-extrabold">Paquete Básico</h3>
              <div className="mt-6 rounded-2xl bg-softblue/60 p-6">
                <img
                  src={packBasic}
                  alt="Paquete Básico"
                  loading="lazy"
                  width={928}
                  height={720}
                  className="mx-auto w-full max-w-xs"
                />
              </div>
              <ul className="mt-6">
                {basicList.map((i) => (
                  <li
                    key={i.text}
                    className="flex items-center gap-3 border-b border-border py-4 text-sm"
                  >
                    {i.ok ? (
                      <Check className="h-4 w-4 shrink-0 text-success" strokeWidth={3} />
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-danger" strokeWidth={3} />
                    )}
                    <span className={i.ok ? "" : "text-muted-foreground"}>{i.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <p className="text-sm font-semibold text-danger line-through">de $ 17,00 por</p>
                <p className="text-5xl font-extrabold text-success">$ 7,00</p>
                <p className="mt-1 text-sm text-muted-foreground">pago único</p>
                <p className="mt-2 text-sm">
                  • Ahorras <strong>$ 10,00</strong>
                </p>
                <a
                  href="#precos"
                  className="mt-6 block rounded-xl bg-success py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:brightness-95"
                >
                  Quiero el Paquete Básico
                </a>
              </div>
            </div>

            {/* Completo */}
            <div className="relative rounded-3xl border-2 border-success bg-white p-6 text-left shadow-xl sm:p-8">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-success px-5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">
                ⭐ Más elegido
              </span>
              <div className="mt-3 rounded-full bg-danger px-4 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-white">
                🔥 Última oportunidad — la oferta termina hoy
              </div>
              <p className="mt-5 text-center text-sm font-bold text-success">
                Todos los bonos incluidos
              </p>
              <h3 className="mt-1 text-center text-2xl font-extrabold sm:text-3xl">
                Paquete Completo 🕊️
              </h3>
              <div className="mt-6 rounded-2xl bg-softblue/60 p-4">
                <img
                  src={packComplete}
                  alt="Paquete Completo"
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="w-full"
                />
              </div>
              <div className="mt-6 text-center">
                <span className="inline-flex rounded-full border border-success/40 bg-success/10 px-5 py-2 text-sm font-bold text-success">
                  ⚡ +500 dinámicas + 6 bonos
                </span>
              </div>
              <ul className="mt-6">
                {completeList.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 border-b border-border py-4 text-sm font-medium"
                  >
                    <Check className="h-4 w-4 shrink-0 text-success" strokeWidth={3} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <p className="text-sm font-semibold text-danger line-through">de $ 39,00 por</p>
                <p className="text-5xl font-extrabold text-success sm:text-6xl">$ 15,00</p>
                <p className="mt-1 text-sm text-muted-foreground">o 3x de $ 5,99 con tarjeta</p>
                <p className="mt-2 text-sm">
                  • Ahorras <strong>$ 24,00</strong>
                </p>
                <a
                  href="#precos"
                  className="mt-6 block rounded-xl bg-success py-5 text-base font-extrabold uppercase tracking-wide text-white transition hover:brightness-95"
                >
                  Quiero Acceder Ahora
                </a>
                <p className="mt-3 text-xs text-muted-foreground">
                  🔒 Compra 100% segura · Garantía de 7 días
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Preguntas frecuentes */}
      <section className="bg-softblue px-4 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <Badge>❓ Preguntas frecuentes</Badge>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">Preguntas frecuentes</h2>

          <div className="mt-12 text-left">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-2xl border border-border bg-white px-6 py-2 shadow-sm transition hover:shadow-md border-b-0"
                >
                  <AccordionTrigger className="text-left text-base font-bold text-navy hover:no-underline sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base border-t border-border/50 pt-3 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 11. Garantía incondicional de 7 días */}
      <section className="bg-softblue px-4 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border-2 border-success/30 bg-white p-8 text-center shadow-xl sm:p-12">
            <div className="text-4xl sm:text-5xl">🛡️</div>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-softblue px-4 py-1.5 text-xs font-bold text-navy border border-border sm:text-sm">
                Riesgo cero · 7 días de garantía
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-navy sm:text-4xl">
              Garantía incondicional de 7 días
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Accede a todas las dinámicas, revisa los bonos y aplícalos en tus clases de catequesis. Si por
              cualquier motivo sientes que no vale cada centavo, solo tienes que enviar un e-mail
              dentro de los 7 días y te devolvemos el{" "}
              <strong className="font-extrabold text-success underline decoration-success/30 underline-offset-4">
                100% de tu inversión
              </strong>{" "}
              — sin preguntas. El riesgo es todo nuestro.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-navy px-4 py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} +500 Dinámicas para Evangelización Católica Infantil
      </footer>
    </main>
  );
}
