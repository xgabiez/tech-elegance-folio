import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Mail, Linkedin, Github, Phone, Download, ArrowRight, Sparkles,
  Network, Code2, BarChart3, GraduationCap, Cpu, Database,
  Briefcase, Trophy, BookOpen, Award, Send, MapPin, Wifi,
  Server, Palette, FileSpreadsheet, Brain, TrendingUp, Lock, ExternalLink,
} from "lucide-react";
import portraitAsset from "@/assets/gabrielly.jpg.asset.json";
const portrait = portraitAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabrielly Ferreira — Analista de TI & Tecnologia Educacional" },
      { name: "description", content: "Portfólio profissional de Gabrielly Ferreira: Analista de TI, especialista em gestão de tecnologia, plataformas educacionais e inovação." },
      { property: "og:title", content: "Gabrielly Ferreira — Analista de TI" },
      { property: "og:description", content: "Transformando tecnologia em soluções que impulsionam educação, inovação e resultados." },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#competencias", label: "Competências" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground relative overflow-x-hidden">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Learning />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Background ---------- */
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #D4A5A5 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #D8B26E 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #D4A5A5 0%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-6xl px-4 transition-all duration-300 ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-full px-5 py-3 ${scrolled ? "glass-strong" : "glass"}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full gradient-rose-gold text-primary-foreground text-sm">GF</span>
            <span className="hidden sm:inline">Gabrielly Ferreira</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
            ))}
          </nav>
          <a href="#contato" className="hidden md:inline-flex items-center gap-1.5 rounded-full gradient-rose-gold px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
            Contato <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
            Disponível para novos projetos
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Gabrielly <br />
            <span className="text-gradient">Ferreira</span>
          </h1>
          <p className="mt-5 text-sm md:text-base font-medium text-muted-foreground tracking-wide">
            Analista de TI <span className="mx-2 text-rose">•</span> Tecnologia Educacional <span className="mx-2 text-gold">•</span> Gestão de Tecnologia
          </p>
          <p className="mt-6 max-w-xl text-lg text-foreground/80 leading-relaxed">
            Transformando tecnologia em soluções que impulsionam <span className="text-gradient font-semibold">educação, inovação e resultados</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contato" className="inline-flex items-center gap-2 rounded-full gradient-rose-gold px-6 py-3 font-semibold text-primary-foreground glow-rose hover:scale-[1.02] transition">
              <Mail className="h-4 w-4" /> Entrar em contato
            </a>
            <a href="https://linkedin.com/in/gabrielly-ti" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 font-semibold hover:bg-white/5 transition">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-rose/40 px-6 py-3 font-semibold text-rose hover:bg-rose/5 transition">
              <Download className="h-4 w-4" /> Currículo
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div><div className="text-2xl font-display font-bold text-foreground">8+</div>Anos em TI</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-display font-bold text-foreground">10+</div>Projetos</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-display font-bold text-foreground">∞</div>Aprendizado</div>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 gradient-rose-gold rounded-[2rem] opacity-30 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden glass-strong p-1.5 glow-rose">
            <img
              src={portrait}
              alt="Retrato profissional de Gabrielly Ferreira"
              width={1024}
              height={1536}
              className="rounded-[1.7rem] w-full h-auto object-cover aspect-[3/4]"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3">
            <span className="h-9 w-9 rounded-full gradient-rose-gold grid place-items-center text-primary-foreground"><Sparkles className="h-4 w-4" /></span>
            <div className="text-xs">
              <div className="font-semibold">Tech & Educação</div>
              <div className="text-muted-foreground">Inovação contínua</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3">
            <span className="h-9 w-9 rounded-full border border-gold/40 grid place-items-center text-gold"><Cpu className="h-4 w-4" /></span>
            <div className="text-xs">
              <div className="font-semibold">Analista de TI</div>
              <div className="text-muted-foreground">Florianópolis, BR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section helpers ---------- */
function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mb-12">
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-rose font-semibold">
        <span className="h-px w-8 bg-rose" /> {kicker}
      </div>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Quem Sou" title="Tecnologia, educação e propósito caminhando juntos." />
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Sou <span className="text-foreground font-semibold">Tecnóloga em Análise e Desenvolvimento de Sistemas</span> e <span className="text-foreground font-semibold">Técnica em Informática</span>, atuando na área de Tecnologia da Informação com foco em gestão de infraestrutura, plataformas educacionais, inovação e suporte tecnológico.
            </p>
            <p>
              Tenho experiência em ambientes educacionais, participando da implementação de soluções, administração de plataformas digitais, gestão de redes e desenvolvimento de projetos que aproximam tecnologia e educação.
            </p>
            <p>
              Além da área educacional, mantenho constante evolução em temas como <span className="text-gradient font-semibold">desenvolvimento de software, governança de TI, análise de dados, inteligência artificial e mercado financeiro</span>.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Network, t: "Infraestrutura", d: "Redes, servidores e dispositivos" },
              { icon: GraduationCap, t: "Educação Digital", d: "Plataformas e Google Workspace" },
              { icon: Code2, t: "Desenvolvimento", d: "HTML, CSS, Javascript, Python, SQL" },
              { icon: BarChart3, t: "Dados & BI", d: "Power BI e análise de indicadores" },
            ].map((c) => (
              <div key={c.t} className="glass rounded-2xl p-5 hover:bg-white/[0.04] hover:-translate-y-1 transition">
                <c.icon className="h-6 w-6 text-rose" />
                <div className="mt-3 font-display font-semibold">{c.t}</div>
                <div className="text-sm text-muted-foreground">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
const experiences = [
  {
    role: "Analista de TI",
    company: "Centro Educacional Menino Jesus, Florianópolis, SC",
    period: "fev 2026 - atual",
    items: [
      "Gestão e sustentação dos ambientes tecnológicos da instituição",
      "Administração da infraestrutura de TI, redes e sistemas corporativos",
      "Suporte técnico N1/N2 às áreas acadêmica e administrativa",
      "Administração do Google Workspace, gestão de acessos e controle de inventário",
      "Análise de logs, apoio à administração de firewall e boas práticas de segurança da informação",
      "Consultas e extração de informações em banco de dados Oracle para relatórios e demandas administrativas",
      "Suporte a ambientes virtualizados, sistemas acadêmicos e plataformas institucionais",
      "Contato direto com fornecedores e suporte terceirizado, abertura e acompanhamento de chamados",
      "Participação em projetos de melhoria contínua e evolução da infraestrutura tecnológica",
    ],
  },
  {
    role: "Gestora de TI",
    company: "Escola São Benedito - Rede ICM, Bagé, RS",
    period: "nov 2023 - fev 2026",
    items: [
      "Gestão da infraestrutura e operação de TI da instituição",
      "Administração de redes, servidores e controle de acessos",
      "Suporte técnico N1/N2 a usuários",
      "Gerenciamento do Google Workspace e do sistema acadêmico",
      "Controle de inventário e implantação de plataformas educacionais",
      "Boas práticas de segurança da informação e organização de dados",
    ],
  },
  {
    role: "Desenvolvedora Front-end Júnior",
    company: "Nidus Assessoria de Marketing e Negócios | Remoto",
    period: "Ago 2023 - Dez 2023",
    items: [
      "Desenvolvimento e manutenção de aplicações web (HTML, CSS, JS, PHP, MySQL)",
      "Melhorias de interface e experiência do usuário",
      "Análise e correção de bugs e ajustes em banco de dados",
      "Administração de hospedagem em ambiente HostGator",
      "Implementação de tags via Google Tag Manager (Analytics/Ads) e Meta Pixel",
    ],
  },
  {
    role: "Assistente Administrativo",
    company: "VRM Telecom, Bagé, RS | Estágio",
    period: "Jul 2021 - Jun 2022",
    items: [
      "Apoio à administração básica de servidores",
      "Controle de acessos de usuários",
      "Configuração de roteadores",
      "Atendimento técnico presencial e remoto",
    ],
  },
  {
    role: "Suporte Técnico",
    company: "Pontocom Informática, Bagé RS | Estágio",
    period: "Ago 2019 - Jul 2021",
    items: [
      "Atendimento técnico ao público",
      "Manutenção de hardware",
      "Instalação de sistemas operacionais",
      "Abertura de ordens de serviço",
    ],
  },
  {
    role: "Analista de Suporte N1 - Estágio",
    company: "Defensoria Pública do Estado do RS, Porto Alegre | Estágio",
    period: "Jan 2018 - Fev 2019",
    items: [
      "Suporte técnico a usuários e assistência remota",
      "Instalação e manutenção de softwares",
      "Configuração de impressoras e formatação de equipamentos",
      "Apoio a backup e monitoramento de rede",
    ],
  },
];

function Experience() {
  return (
    <section id="experiencia" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Experiência" title="Trajetória profissional" sub="Uma jornada construída em tecnologia educacional e gestão de TI." />
        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-rose via-gold to-transparent" />
          <div className="space-y-10">
            {experiences.map((e, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[1.4rem] md:-left-[2rem] top-3 h-3 w-3 rounded-full gradient-rose-gold ring-4 ring-background" />
                <div className="glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] transition">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold">{e.role}</h3>
                      <p className="text-rose text-sm font-medium">{e.company}</p>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground glass px-3 py-1 rounded-full">{e.period}</span>
                  </div>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-2.5 text-sm text-foreground/80">
                    {e.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
const projects = [
  { title: "Portal de Gestão Escolar", desc: "Centralização de informações e processos escolares.", tags: ["Web", "Gestão", "UX"] },
  { title: "Dashboard de Indicadores", desc: "Monitoramento de métricas e indicadores educacionais.", tags: ["Power BI", "SQL", "Análise"] },
  { title: "Projetos de Inovação Educacional", desc: "Aplicação de tecnologias para melhorar processos pedagógicos e administrativos.", tags: ["Inovação", "EdTech"] },
  { title: "Portfólio de Desenvolvimento", desc: "Projetos pessoais desenvolvidos para aprimoramento técnico.", tags: ["Python", "HTML/CSS", "JS"] },
];

function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Projetos" title="Soluções com propósito" sub="Iniciativas que conectam tecnologia, gestão e educação." />
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article key={p.title} className="group relative glass rounded-3xl p-7 overflow-hidden hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: "var(--gradient-soft)" }} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="h-11 w-11 grid place-items-center rounded-2xl gradient-rose-gold text-primary-foreground">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <a href="#" className="text-muted-foreground hover:text-rose transition" aria-label="Ver projeto">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-rose/30 text-rose">{t}</span>
                  ))}
                </div>
                <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground">
                  Em breve <Lock className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
const skillGroups = [
  { icon: Network, title: "Infraestrutura", items: ["Redes", "Switches", "Hardware", "Impressoras em rede", "Suporte técnico"] },
  { icon: Code2, title: "Desenvolvimento", items: ["Python", "HTML", "CSS", "JavaScript", "SQL"] },
  { icon: Database, title: "Dados", items: ["Power BI", "Excel", "Análise de Dados"] },
  { icon: GraduationCap, title: "Educação e Gestão", items: ["Google Workspace for Education", "Plataformas educacionais", "Gestão de TI", "Governança de TI"] },
];

function Skills() {
  return (
    <section id="competencias" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Competências" title="Stack & especialidades" sub="Um conjunto técnico equilibrado entre infraestrutura, dados e desenvolvimento." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((g) => (
            <div key={g.title} className="glass rounded-2xl p-6 hover:-translate-y-1 transition">
              <div className="h-11 w-11 grid place-items-center rounded-xl gradient-rose-gold text-primary-foreground">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-bold text-lg">{g.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Education ---------- */
function Education() {
  const items = [
    { icon: GraduationCap, title: "Tecnólogo em Análise e Desenvolvimento de Sistemas", sub: "Ensino Superior" },
    { icon: Award, title: "Técnico em Informática", sub: "Formação Técnica" },
  ];
  return (
    <section id="formacao" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Formação Acadêmica" title="Base sólida em tecnologia" />
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((i) => (
            <div key={i.title} className="glass-strong rounded-2xl p-7 flex items-start gap-4 hover:-translate-y-1 transition">
              <span className="h-12 w-12 grid place-items-center rounded-2xl gradient-rose-gold text-primary-foreground">
                <i.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-bold">{i.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{i.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */
function Certifications() {
  return (
    <section id="certificacoes" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Certificações" title="Em construção contínua" sub="Espaço reservado para certificações futuras." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((n) => (
            <div key={n} className="glass rounded-2xl p-7 border-dashed border-rose/20 hover:border-rose/40 transition">
              <Award className="h-6 w-6 text-gold" />
              <div className="mt-4 font-display font-bold">Certificação em breve</div>
              <p className="text-sm text-muted-foreground mt-1">Em andamento ou planejada para os próximos ciclos.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Learning ---------- */
function Learning() {
  const topics = [
    { icon: Brain, t: "Inteligência Artificial" },
    { icon: Lock, t: "Governança de TI" },
    { icon: Code2, t: "Desenvolvimento de Software" },
    { icon: TrendingUp, t: "Mercado Financeiro" },
    { icon: BarChart3, t: "Investimentos" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Estudo Atual" title="Evolução contínua" sub="Áreas em que invisto meu aprendizado neste momento." />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {topics.map((t) => (
            <div key={t.t} className="glass rounded-2xl p-5 text-center hover:-translate-y-1 transition">
              <span className="mx-auto h-11 w-11 grid place-items-center rounded-xl border border-rose/30 text-rose">
                <t.icon className="h-5 w-5" />
              </span>
              <div className="mt-3 text-sm font-medium">{t.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Impact / counters ---------- */
function useCounter(target: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function StatCard({ value, suffix, label, icon: Icon }: { value: number; suffix?: string; label: string; icon: React.ComponentType<{ className?: string }> }) {
  const { val, ref } = useCounter(value);
  return (
    <div ref={ref} className="glass rounded-2xl p-7 text-center">
      <span className="mx-auto h-11 w-11 grid place-items-center rounded-xl gradient-rose-gold text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="mt-4 font-display text-4xl font-bold text-gradient">{val}{suffix}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Impact() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Resultados e Impacto" title="Tecnologia que gera valor" sub="Métricas que refletem entregas reais em ambientes educacionais." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard value={8} suffix="+" label="Anos de experiência em TI" icon={Server} />
          <StatCard value={10} suffix="+" label="Plataformas educacionais e corporativas administrativas" icon={Sparkles} />
          <StatCard value={500} suffix="+" label="Usuários atendidos e treinados" icon={Wifi} />
          <StatCard value={99} suffix="%" label="Disponibilidade de infraestrutura" icon={Trophy} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Contato" title="Vamos conversar" sub="Aberta a oportunidades, parcerias e projetos com propósito." />
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="space-y-3">
            {[
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gabrielly-ti", href: "https://linkedin.com/in/gabrielly-ti" },
              { icon: Github, label: "GitHub", value: "github.com/xgabiez", href: "https://github.com/xgabiez" },
              { icon: Mail, label: "E-mail", value: "gabriellydeabreuferreira@gmail.com", href: "mailto:gabriellydeabreuferreira@gmail.com" },
              { icon: Phone, label: "WhatsApp", value: "+55 (51) 99756-3735", href: "https://wa.me/5551997563735" },
              { icon: MapPin, label: "Localização", value: "Florianópolis, SC — Brasil" },
            ].map((c) => {
              const Tag = c.href ? "a" : "div";
              const props = c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {};
              return (
                <Tag key={c.label} {...props} className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.04] hover:-translate-y-0.5 transition">
                  <span className="h-11 w-11 grid place-items-center rounded-xl gradient-rose-gold text-primary-foreground shrink-0">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-medium truncate">{c.value}</div>
                  </div>
                </Tag>
              );
            })}
          </div>

          <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-7 md:p-9 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nome" name="name" placeholder="Seu nome" />
              <Field label="E-mail" name="email" type="email" placeholder="voce@email.com" />
            </div>
            <Field label="Assunto" name="subject" placeholder="Como posso ajudar?" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Mensagem</label>
              <textarea required rows={5} placeholder="Conte um pouco sobre o projeto..." className="mt-2 w-full rounded-xl bg-background/40 border border-border focus:border-rose/60 focus:outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full gradient-rose-gold px-6 py-3 font-semibold text-primary-foreground glow-rose hover:scale-[1.02] transition w-full sm:w-auto">
              <Send className="h-4 w-4" /> {sent ? "Mensagem enviada" : "Enviar mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background/40 border border-border focus:border-rose/60 focus:outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition" />
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full gradient-rose-gold text-primary-foreground text-xs font-bold">GF</span>
          <span>© {new Date().getFullYear()} Gabrielly Ferreira. Todos os direitos reservados.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/gabrielly-ti" target="_blank" rel="noreferrer" className="hover:text-rose transition"><Linkedin className="h-4 w-4" /></a>
          <a href="https://github.com/xgabiez" target="_blank" rel="noreferrer" className="hover:text-rose transition"><Github className="h-4 w-4" /></a>
          <a href="mailto:gabriellydeabreuferreira@gmail.com" className="hover:text-rose transition"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

// silence unused imports tree-shake hint
void [Palette, FileSpreadsheet];
