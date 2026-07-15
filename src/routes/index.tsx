import { useState } from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import chefRuthImg from "@/assets/chef-ruth.jpg";
import depoCristiele from "@/assets/depo-cristiele.jpg";
import depoRaiane from "@/assets/depo-raiane.jpg";
import depoAdriana from "@/assets/depo-adriana.jpg";
import depoAndressa from "@/assets/depo-andressa.jpg";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

const FORM_URL = "https://comunidade.impulsostone.com.br/stone/register?utm_source=lp-doces&utm_medium=site&utm_campaign=impulso-stone";

function CTA({ children = "entrar gratuitamente", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-base font-semibold text-[oklch(0.18_0_0)] transition-all duration-300 hover:scale-[1.02] hover:shadow-lime active:scale-[0.99] ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-black/10 bg-background/80 px-5 py-3 backdrop-blur-xl shadow-sm md:px-6">
        <Logo />
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-lime px-4 py-2 text-sm font-semibold text-[oklch(0.18_0_0)] transition hover:scale-105"
        >
          inscreva-se grátis
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8 animate-fade-up">
        <h1 className="display text-4xl text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          você vende bolo todo dia.
          <br />
          e no fim do mês parece que
          <br />
          não valeu a pena?
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
          aqui tem comunidade de verdade: mulheres que tão com você, passando
          pelo mesmo, prontas pra se ajudar.
        </p>
        <div className="mt-10 flex justify-center">
          <CTA />
        </div>
      </div>
    </section>
  );
}

const stats = [
  { n: "14k+", l: "empreendedoras já dentro", color: "text-brand" },
  { n: "40h+", l: "de conteúdo prático", color: "text-foreground" },
  { n: "100%", l: "gratuito, sem compromisso", color: "text-lilac" },
];

function StatsRow() {
  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-3 md:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 100}>
            <div className="text-center">
              <div className={`display text-4xl md:text-5xl ${s.color}`}>{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const pillars = [
  {
    emoji: "🤝",
    title: "comunidade real",
    body: "mulheres que se entendem, se apoiam e caminham juntas, todos os dias.",
    accent: "var(--green-text)",
    titleClass: "text-brand",
  },
  {
    emoji: "📚",
    title: "conteúdo prático",
    body: "aulas curtas e diretas, do tipo que você aplica hoje mesmo.",
    accent: "var(--lilac)",
    titleClass: "text-lilac",
  },
  {
    emoji: "🧡",
    title: "apoio real",
    body: "gente de verdade pra te orientar, do primeiro pedido ao próximo passo.",
    accent: "var(--orange)",
    titleClass: "text-orange",
  },
];

function Pillars() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-6 md:grid-cols-3 md:px-8">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <div
              className="h-full rounded-2xl border border-black/8 border-l-4 bg-white p-7 shadow-soft transition hover:-translate-y-1"
              style={{ borderLeftColor: p.accent }}
            >
              <div className="text-3xl">{p.emoji}</div>
              <h3 className={`mt-4 text-xl font-bold ${p.titleClass}`}>{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const stories = [
  {
    name: "Cristiele Dias",
    business: "Taty Festas",
    quote: "Com o Impulso Stone, aprendi a organizar e dirigir meu negócio de uma maneira mais ampla e segura.",
    img: depoCristiele,
  },
  {
    name: "Adriana Araújo",
    business: "Estação Gourmet",
    quote: "A plataforma Impulso Stone teve um papel muito importante na minha caminhada como empreendedora.",
    img: depoAdriana,
  },
];

const moreStories = [
  {
    name: "Raiane Nascimento Soares",
    business: "Pudim Ray",
    quote: "As parcerias, como a SPM-RJ e o Impulso Stone, têm sido fundamentais nesse caminho, pois me proporcionam oportunidades, conhecimento e conexões que fortalecem meu negócio.",
    img: depoRaiane,
    pos: "center 22%",
  },
  {
    name: "Andressa Bernardo",
    business: "Andressa Bernardo Confeitaria",
    quote: "O crescimento do negócio também é impulsionado pela busca constante por conhecimento.",
    img: depoAndressa,
  },
];

function StoryCard({ story }: { story: { name: string; business: string; quote: string; img: string; pos?: string } }) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/8 bg-white shadow-soft">
      <img src={story.img} alt={story.name} className="h-52 w-full object-cover" style={{ objectPosition: story.pos ?? "top" }} />
      <figcaption className="flex flex-1 flex-col p-6">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-brand">{story.name}</span>
        <div className="mt-1 text-lg font-bold text-foreground">{story.business}</div>
        <p className="mt-3 text-pretty text-muted-foreground">"{story.quote}"</p>
      </figcaption>
    </figure>
  );
}

function Stories() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="historias" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="display text-balance text-center text-3xl text-foreground sm:text-4xl md:text-5xl">
            quem já fez esse caminho e deu certo
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-[2.5rem] bg-forest p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[2fr_3fr]">
              <img
                src={chefRuthImg}
                alt="Chef Ruth, embaixadora Impulso Stone"
                className="aspect-square w-full rounded-3xl object-cover"
              />
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-lime">
                  <Star className="h-3.5 w-3.5 fill-current" /> embaixadora impulso stone
                </span>
                <h3 className="display mt-4 text-4xl text-white md:text-5xl">Chef Ruth</h3>
                <p className="mt-5 text-pretty text-white/75 md:text-lg">
                  De ex-quebradeira de coco no Maranhão a renomada chef de
                  cozinha: Ruth aprendeu a cozinhar com a mãe, no fogão a
                  lenha, e dali extraiu os segredos das combinações perfeitas
                  entre ingredientes regionais e exóticos. Hoje é proprietária
                  do restaurante Raízes Gastronômicas, que valoriza os
                  produtos típicos do Tocantins e os produtores locais, e
                  venceu o prêmio Dólmã de melhor chef do estado.
                </p>
                <p className="mt-6 text-pretty text-lg font-semibold text-lime md:text-xl">
                  aprenda a organizar e dirigir seu negócio de forma segura,
                  assim como a Chef Ruth.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-16 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            + histórias de transformação
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <StoryCard story={s} />
            </Reveal>
          ))}
          <Reveal delay={200}>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-dashed border-brand/40 bg-lime/10 transition hover:bg-lime/20"
            >
              <div className="flex h-52 w-full items-center justify-center bg-lime/20 text-5xl">🧁</div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-brand">empreendedora</span>
                <div className="mt-1 text-lg font-bold text-foreground">seu negócio</div>
                <p className="mt-3 text-pretty text-muted-foreground">
                  a sua história de transformação começa aqui.
                </p>
              </div>
            </a>
          </Reveal>
        </div>

        {showMore && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {moreStories.map((s, i) => (
              <Reveal key={s.name} delay={i * 100}>
                <StoryCard story={s} />
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowMore((v) => !v)}
            className="rounded-full border border-brand/40 px-6 py-3 text-sm font-semibold text-brand transition hover:bg-lime/15"
          >
            {showMore ? "− mostrar menos" : "+ conhecer mais histórias"}
          </button>
        </div>
      </div>
    </section>
  );
}

const transforms = [
  { before: "vendia no improviso", after: "comecei a entender meu negócio" },
  { before: "trabalhava muito e sobrava pouco", after: "aprendi a me organizar melhor" },
  { before: "me sentia sozinha", after: "agora tenho apoio e direção" },
];

function TransformSection() {
  return (
    <section className="bg-surface/60 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Reveal>
          <h2 className="display text-balance text-center text-3xl text-foreground sm:text-4xl md:text-5xl">
            o que muda de verdade
          </h2>
        </Reveal>
        <div className="mt-14 space-y-4">
          {transforms.map((t, i) => (
            <Reveal key={t.before} delay={i * 100}>
              <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr]">
                <div className="rounded-2xl border border-black/8 bg-white p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">antes</span>
                  <p className="mt-2 text-lg text-foreground/70 md:text-xl">"{t.before}"</p>
                </div>
                <div className="hidden items-center justify-center md:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime text-[oklch(0.18_0_0)]">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="rounded-2xl border border-black/8 bg-white p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-brand">depois</span>
                  <p className="mt-2 text-lg font-semibold text-foreground md:text-xl">"{t.after}"</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="gradient-cta py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <Reveal>
          <h2 className="display text-balance text-3xl text-[oklch(0.18_0.02_150)] sm:text-4xl md:text-6xl">
            talvez o problema não seja esforço.
            <br />
            talvez falte direção.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-[oklch(0.18_0.02_150)]/70">
            entre gratuitamente e dê o próximo passo do seu negócio com quem
            entende o caminho.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-95"
            >
              entrar gratuitamente
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-[oklch(0.18_0.02_150)]/80">
              {["100% gratuito", "sem mensalidade", "comunidade real"].map((x) => (
                <li key={x} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-forest" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/8 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-8">
        <Logo />
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Impulso Stone. feito pra quem faz com as mãos.</p>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StatsRow />
      <Pillars />
      <Stories />
      <TransformSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
