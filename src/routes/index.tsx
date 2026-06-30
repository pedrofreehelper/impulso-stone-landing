import { ArrowRight, Check, Heart, Sparkles, Users, Wallet, Megaphone, Calculator, Instagram } from "lucide-react";
import heroImg from "@/assets/chef-ruth.jpg";
import chefRuthImg from "@/assets/chef-ruth.jpg";
import bgKitchen from "@/assets/bg-kitchen-blur.jpg";
import rmmLogo from "@/assets/rmm-logo.jpg";
import ipLogo from "@/assets/ip-logo.jpg";
import spmLogo from "@/assets/spm-logo.png";
import depoCristiele from "@/assets/depo-cristiele.jpg";
import depoRaiane from "@/assets/depo-raiane.jpg";
import depoAdriana from "@/assets/depo-adriana.jpg";
import depoAndressa from "@/assets/depo-andressa.jpg";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

const FORM_URL = "https://comunidade.impulsostone.com.br/stone/register";

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
            <span className="text-brand">e no fim do mês</span> parece que não valeu a pena?
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
              alt="Chef Ruth, parceira do programa Impulso Stone"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
              <p className="text-sm font-semibold text-white">Chef Ruth</p>
              <p className="text-xs text-white/80">empreendedora e embaixadora Impulso Stone</p>
            </div>
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-full border border-black/10 bg-background/95 px-5 py-3 backdrop-blur shadow-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime">
              <Users className="h-4 w-4 text-[oklch(0.16_0.06_163)]" />
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
            isso parece <span className="text-brand">com você?</span>
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
            você aprendeu a <span className="text-brand">fazer doces.</span>
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
              um programa feito <span className="text-brand">pra quem faz</span> com as mãos.
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
                  <span className={`relative inline-flex rounded-full px-3 py-1 text-xs font-medium ${isLime ? "bg-lime/20 text-brand" : "bg-lilac/20 text-lilac"}`}>
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

function ChefRuthSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-black/8 shadow-soft">
              <img
                src={chefRuthImg}
                alt="Chef Ruth, embaixadora Impulso Stone"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-5">
                <p className="text-sm font-semibold text-white">Chef Ruth</p>
                <p className="text-xs text-white/80">empreendedora e embaixadora Impulso Stone</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <span className="inline-flex items-center gap-2 rounded-full bg-lime/20 px-4 py-1.5 text-xs font-medium text-brand">
              parceria Impulso Stone
            </span>
            <h2 className="display mt-5 text-balance text-4xl text-foreground sm:text-5xl">
              uma chef que conhece<br />
              <span className="text-brand">cada dificuldade</span> do caminho.
            </h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              A Chef Ruth é empreendedora, cozinheira e embaixadora do Impulso Stone. Ela viveu na pele os desafios de transformar talento em negócio — e hoje usa sua história para inspirar outras mulheres que vendem com as mãos.
            </p>
            <p className="mt-4 text-pretty text-muted-foreground">
              Essa parceria nasceu da crença de que quem já passou pelo caminho tem muito a ensinar. A Ruth traz autenticidade, experiência real e proximidade com quem está começando.
            </p>
            <div className="mt-8">
              <CTA>quero fazer parte</CTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LeadCaptureSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-lime px-10 py-14 md:px-16 md:py-16">
            <div className="blob -z-10 right-[-5%] top-[-30%] h-[300px] w-[300px] bg-lime-bright animate-float-slow opacity-40" />
            <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="display text-balance text-3xl text-[oklch(0.16_0.06_163)] sm:text-4xl md:text-5xl">
                  anuncie seus doces para a comunidade do Impulso Stone.
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-[oklch(0.16_0.06_163)]/70 md:text-lg">
                  mais de 10 mil empreendedores podem conhecer o seu negócio. entre gratuitamente e apareça para quem já quer comprar.
                </p>
              </div>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[oklch(0.16_0.06_163)] px-7 py-4 text-base font-semibold text-white transition hover:scale-[1.02] hover:opacity-90"
              >
                quero aparecer <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <p className="mb-10 text-center text-sm uppercase tracking-widest text-muted-foreground">
            parceiros do programa
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <img src={rmmLogo} alt="Rede Muda Mundo" className="h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
            <img src={ipLogo} alt="Instituto da Providência" className="h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
            <img src={spmLogo} alt="SPM Rio de Janeiro" className="h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
          </div>
        </Reveal>
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
            o que muda <span className="text-brand">de verdade.</span>
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
                  <span className="text-xs uppercase tracking-widest text-brand">depois</span>
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

const testimonials = [
  { name: "Cristiele Dias", role: "Taty Festas", quote: "Com o Impulso Stone, aprendi a organizar e dirigir meu negócio de uma maneira mais ampla e segura.", img: depoCristiele },
  { name: "Raiane Nascimento Soares", role: "Pudim Ray", quote: "As parcerias, como a SPM-RJ e o Impulso Stone, têm sido fundamentais nesse caminho, pois me proporcionam oportunidades, conhecimento e conexões que fortalecem meu negócio.", img: depoRaiane },
  { name: "Adriana Araújo", role: "Estação Gourmet", quote: "A Rede Muda Mundo e a plataforma Impulso Stone tiveram um papel muito importante na minha caminhada como empreendedora.", img: depoAdriana },
  { name: "Andressa Bernardo", role: "Andressa Bernardo Confeitaria", quote: "O crescimento do negócio também é impulsionado pela busca constante por conhecimento.", img: depoAndressa },
];

function SocialProof() {
  return (
    <section id="historias" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 className="display text-balance text-4xl text-foreground sm:text-5xl md:text-6xl">
              <span className="text-brand">+10 mil</span> empreendedores
              <br />já caminham com a gente.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { n: "+10k", l: "empreendedores" },
                { n: "+40h", l: "horas de conteúdo" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-black/8 bg-surface p-4 text-center">
                  <div className="display text-3xl text-brand md:text-4xl">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="group flex h-full flex-col rounded-3xl border border-black/8 bg-surface p-8 transition hover:border-lime/40">
                <figcaption className="mb-6 flex items-center gap-4">
                  {t.img ? (
                    <img src={t.img} alt={t.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-sm" />
                  ) : (
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-lime text-2xl font-bold text-[oklch(0.16_0.06_163)]">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    {t.role && <div className="mt-0.5 text-sm text-muted-foreground">{t.role}</div>}
                  </div>
                </figcaption>
                <p className="text-pretty text-lg leading-relaxed text-foreground">"{t.quote}"</p>
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
                talvez o problema <span className="text-brand">não seja esforço.</span>
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
      <ChefRuthSection />
      <TransformSection />
      <LeadCaptureSection />
      <PartnersSection />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
