import { ArrowRight, Check, Heart, Sparkles, Users, Wallet, Megaphone, Calculator, Instagram } from "lucide-react";
import heroImg from "@/assets/hero-confeiteira.jpg";
import bgKitchen from "@/assets/bg-kitchen-blur.jpg";
import depo1 from "@/assets/depo-1.jpg";
import depo2 from "@/assets/depo-2.jpg";
import depo3 from "@/assets/depo-3.jpg";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

const FORM_URL = "https://impulso.stone.com.br/";

function CTA({ children = "quero participar gratuitamente", className = "" }: { children?: React.ReactNode; className?: string }) {
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
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#voce" className="hover:text-foreground transition">isso é você?</a>
          <a href="#programa" className="hover:text-foreground transition">o programa</a>
          <a href="#historias" className="hover:text-foreground transition">histórias</a>
        </nav>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-lime px-4 py-2 text-sm font-semibold text-[oklch(0.18_0_0)] transition hover:scale-105"
        >
          inscreva-se
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgKitchen})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="blob -z-10 left-[-10%] top-20 h-[420px] w-[420px] bg-lime animate-float-slow" />
      <div className="blob -z-10 right-[-5%] bottom-0 h-[360px] w-[360px] bg-lilac animate-float-slow" style={{ animationDelay: "-7s" }} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-lime" /> programa gratuito • inscrições abertas
          </span>
          <h1 className="display mt-6 text-balance text-5xl text-foreground sm:text-6xl md:text-[5.5rem]">
            você vende bolo todo dia.
            <br />
            <span className="text-lime">e no fim do mês</span> parece que não valeu a pena?
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
            o Impulso Stone ajuda quem vende doces, bolos e sobremesas a organizar preço,
            divulgação e vendas de um jeito simples, humano e gratuito.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA />
            <span className="text-sm text-muted-foreground">100% gratuito · sem pegadinha</span>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-lime/80 blur-2xl" />
          <div className="absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-lilac/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-black/8 shadow-soft">
            <img
              src={heroImg}
              alt="Confeiteira sorrindo enquanto decora um bolo artesanal em sua cozinha"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-full border border-black/10 bg-background/95 px-5 py-3 backdrop-blur shadow-sm">
            <div className="flex -space-x-2">
              {[depo1, depo2, depo3].map((s, i) => (
                <img key={i} src={s} alt="" className="h-8 w-8 rounded-full border-2 border-surface object-cover" />
              ))}
            </div>
            <span className="text-sm text-foreground">+10 mil empreendedores</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const painPoints = [
  "você vende bem, mas não entende pra onde o dinheiro vai",
  "o dinheiro do negócio e da vida pessoal virou tudo uma coisa só",
  "você calcula preço meio no sentimento",
  "posta todo dia e parece que ninguém vê",
  "faz tudo sozinha — e tá cansada disso",
];

function PainSection() {
  return (
    <section id="voce" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="display max-w-3xl text-balance text-4xl text-foreground sm:text-5xl md:text-6xl">
            isso parece <span className="text-lime">com você?</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((p, i) => (
            <Reveal key={p} delay={i * 80}>
              <div className="group h-full rounded-3xl border border-black/8 bg-surface p-7 transition hover:border-lime/40 hover:bg-surface-2">
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime/10 text-lime transition group-hover:bg-lime group-hover:text-[oklch(0.18_0_0)]">
                  <Heart className="h-5 w-5" />
                </div>
                <p className="text-balance text-xl leading-snug text-foreground md:text-2xl">"{p}"</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={400}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-lime p-7 text-[oklch(0.18_0_0)]">
              <p className="display text-3xl leading-tight">se reconheceu?<br/>você não tá sozinha.</p>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold">
                quero apoio agora <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const skills = [
  { icon: Calculator, label: "precificação" },
  { icon: Wallet, label: "organização financeira" },
  { icon: Megaphone, label: "divulgação" },
  { icon: Instagram, label: "redes sociais" },
  { icon: Users, label: "comunidade" },
];

function NoOneTaught() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="blob -z-10 left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 bg-green-deep opacity-70" />
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <Reveal>
          <h2 className="display text-balance text-4xl text-foreground sm:text-5xl md:text-6xl">
            você aprendeu a <span className="text-lime">fazer doces.</span>
            <br />
            mas ninguém ensinou como transformar isso num negócio.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            o Impulso Stone existe pra apoiar pequenos empreendedores com orientação
            prática, comunidade e conteúdos simples de aplicar.
          </p>
        </Reveal>
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {skills.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 70}>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface px-5 py-3 text-sm text-foreground transition hover:border-lime/50 hover:bg-surface-2 md:text-base">
                <Icon className="h-4 w-4 text-lime" />
                {label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const programItems = [
  { tag: "cursos rápidos", title: "aulas curtas, direto ao ponto", body: "conteúdos pra assistir no intervalo da produção, sem enrolação.", color: "lime" },
  { tag: "comunidade", title: "gente igual a você", body: "troca real com confeiteiras de todo o Brasil, todo dia.", color: "lilac" },
  { tag: "histórias reais", title: "quem já passou por isso", body: "se inspire em quem começou na cozinha de casa.", color: "lime" },
  { tag: "mentorias", title: "alguém pra te orientar", body: "encontros ao vivo com quem entende do seu negócio.", color: "lilac" },
  { tag: "conteúdos práticos", title: "do tipo que você aplica hoje", body: "modelos de planilha, ideias de post, dicas de venda.", color: "lime" },
  { tag: "apoio ao crescimento", title: "do início ao próximo passo", body: "do primeiro pedido até abrir sua loja.", color: "lilac" },
];

function ProgramSection() {
  return (
    <section id="programa" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <h2 className="display max-w-2xl text-balance text-4xl text-foreground sm:text-5xl md:text-6xl">
              um programa feito <span className="text-lime">pra quem faz</span> com as mãos.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-pretty text-muted-foreground md:text-lg">
              tudo que você precisa pra organizar e crescer — sem virar empresária da noite pro dia.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programItems.map((item, i) => {
            const isLime = item.color === "lime";
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div
                  className={`group relative h-full overflow-hidden rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1 ${
                    isLime
                      ? "border-lime/30 bg-surface hover:border-lime"
                      : "border-lilac/30 bg-surface hover:border-lilac"
                  }`}
                >
                  <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-30 transition-opacity group-hover:opacity-60 ${isLime ? "bg-lime" : "bg-lilac"}`} />
                  <span className={`relative inline-flex rounded-full px-3 py-1 text-xs font-medium ${isLime ? "bg-lime/15 text-lime" : "bg-lilac/15 text-lilac"}`}>
                    {item.tag}
                  </span>
                  <h3 className="relative mt-5 text-balance text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
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
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="display max-w-3xl text-balance text-4xl text-foreground sm:text-5xl md:text-6xl">
            o que muda <span className="text-lime">de verdade.</span>
          </h2>
        </Reveal>
        <div className="mt-14 space-y-5">
          {transforms.map((t, i) => (
            <Reveal key={t.before} delay={i * 100}>
              <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr]">
                <div className="rounded-3xl border border-black/8 bg-surface p-7">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">antes</span>
                  <p className="mt-3 text-2xl text-foreground/70 md:text-3xl">"{t.before}"</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-[oklch(0.18_0_0)]">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="rounded-3xl border border-lime/30 bg-lime/10 p-7">
                  <span className="text-xs uppercase tracking-widest text-lime">depois</span>
                  <p className="mt-3 text-2xl text-foreground md:text-3xl">"{t.after}"</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// TODO: substituir img e os dados abaixo pelas fotos e depoimentos reais dos empreendedores.
// Coloque as fotos em src/assets/ e importe no topo do arquivo (ex: import fotoAna from "@/assets/ana.jpg").
const testimonials = [
  { name: "Camila, 32", city: "Recife", img: depo1, quote: "comecei vendendo brigadeiro pros vizinhos. hoje entendo meu preço e meu lucro." },
  { name: "Fernanda, 41", city: "Belo Horizonte", img: depo2, quote: "achei que era só eu que se sentia perdida. o Impulso Stone me deu calma e direção." },
  { name: "Larissa, 28", city: "São Paulo", img: depo3, quote: "aprendi a postar de um jeito que as pessoas realmente respondem. dobrei pedidos." },
];

function SocialProof() {
  return (
    <section id="historias" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 className="display text-balance text-4xl text-foreground sm:text-5xl md:text-6xl">
              <span className="text-lime">+10 mil</span> empreendedores
              <br />já caminham com a gente.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { n: "+10k", l: "empreendedores" },
                { n: "+1M", l: "horas de conteúdo" },
                { n: "98%", l: "recomendam" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-black/8 bg-surface p-4 text-center">
                  <div className="display text-3xl text-lime md:text-4xl">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="group h-full overflow-hidden rounded-3xl border border-black/8 bg-surface transition hover:border-lime/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.name} loading="lazy" width={640} height={480} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                </div>
                <figcaption className="p-7">
                  <p className="text-pretty text-lg text-foreground">"{t.quote}"</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{t.name}</span>
                    <span>·</span>
                    <span>{t.city}</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-black/8 bg-deep p-10 text-center md:p-16">
            <div className="blob left-[-10%] top-[-20%] h-[400px] w-[400px] bg-lime animate-float-slow" />
            <div className="blob right-[-10%] bottom-[-30%] h-[400px] w-[400px] bg-lilac animate-float-slow" style={{ animationDelay: "-5s" }} />
            <div className="relative">
              <h2 className="display mx-auto max-w-3xl text-balance text-4xl text-foreground sm:text-5xl md:text-6xl">
                talvez o problema <span className="text-lime">não seja esforço.</span>
                <br />talvez falte direção.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
                entre gratuitamente no Impulso Stone e dê o próximo passo do seu negócio com quem entende.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4">
                <CTA>entrar gratuitamente</CTA>
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  {["100% gratuito", "sem mensalidade", "no seu ritmo"].map((x) => (
                    <li key={x} className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-lime" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-8">
        <Logo />
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Impulso Stone — feito pra quem faz com as mãos.</p>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PainSection />
      <NoOneTaught />
      <ProgramSection />
      <TransformSection />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
