import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Mail, Linkedin, Github, Phone, Download, ArrowRight, Sparkles,
  Network, Code2, BarChart3, GraduationCap, Cpu, Database,
  Briefcase, Trophy, BookOpen, Award, Send, MapPin, Wifi,
  Server, Palette, FileSpreadsheet, Brain, TrendingUp, Lock, ExternalLink,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
const portrait = `${import.meta.env.BASE_URL}imagens/Perfil_gabrielly.jpg`;

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
  { href: "#certificacoes", label: "Aprendizado" },
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
            <a href="https://linkedin.com/in/gabrielly-ferreira-ti" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 font-semibold hover:bg-white/5 transition">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-rose/40 px-6 py-3 font-semibold text-rose hover:bg-rose/5 transition">
              <Download className="h-4 w-4" /> Currículo
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div><div className="text-2xl font-display font-bold text-foreground">8+</div>Anos em TI</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-display font-bold text-foreground">15+</div>Projetos</div>
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
              <div className="text-gold font-medium">Florianópolis, BR</div>
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
    period: "JUN 2026 - ATUAL",
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
      "Emissão de notas fiscais eletrônicas (NF-e) por meio da SEFAZ",
      "Recebimento de pagamentos e baixa de títulos no sistema",
      "Atendimento administrativo e suporte aos processos financeiros",
      "Apoio à administração básica de servidores e controle de acessos",
      "Configuração de roteadores e atendimento técnico presencial/remoto",
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
  {
    title: "🗓️ Sistema Inteligente de Grade Horária",
    desc: "Geração automática de grades horárias escolares considerando disponibilidade dos professores, carga horária das disciplinas, turmas, salas e restrições. Reduz o tempo de elaboração manual, evita conflitos e otimiza a distribuição das aulas.",
    tags: ["Python", "Banco de Dados", "Algoritmos"],
  },
  {
    title: "📊 Dashboard de Indicadores Educacionais",
    desc: "Dashboard interativo para acompanhamento de indicadores acadêmicos e administrativos: frequência, desempenho, matrículas, ocupação de turmas e indicadores institucionais.",
    tags: ["Power BI", "SQL", "Análise de Dados"],
  },
  {
    title: "🖥️ Sistema de Inventário de TI",
    desc: "Gerenciamento de ativos de tecnologia: computadores, notebooks, impressoras, switches, licenças de software, patrimônio e histórico de manutenção.",
    tags: ["Python", "Banco de Dados", "Gestão de TI"],
  },
  {
    title: "🎫 Portal de Chamados de TI",
    desc: "Abertura e acompanhamento de chamados técnicos, com gerenciamento de solicitações, definição de prioridades, histórico de atendimentos e acompanhamento de status.",
    tags: ["Python", "React", "Banco de Dados"],
  },
  {
    title: "🤖 Automação de Relatórios Corporativos",
    desc: "Automação de consultas em banco de dados Oracle, geração de relatórios, tratamento de dados e integração com Power BI, reduzindo tarefas repetitivas.",
    tags: ["Python", "Oracle", "Power BI"],
  },
  {
    title: "📚 Portfólio de Desenvolvimento",
    desc: "Coleção de projetos desenvolvidos durante estudos e bootcamps: Python, desenvolvimento web, ciência de dados, automação de processos, Power BI e análise de dados. Atualizado continuamente conforme novos repositórios são publicados no GitHub.",
    tags: ["Python", "HTML/CSS", "JavaScript", "Power BI"],
  },
];

function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          kicker="Roadmap de Projetos"
          title="Soluções com propósito"
          sub="Estes projetos representam soluções que pretendo desenvolver ao longo da minha evolução profissional. O objetivo é transformar experiências reais da área de TI em aplicações práticas, documentadas e disponíveis no meu GitHub."
        />
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
const journeyMilestones = [
  {
    year: "2022",
    icon: "💻",
    title: "TreinaWeb",
    desc: "Primeiros estudos estruturados em desenvolvimento moderno utilizando React e Python, consolidando a base para projetos web.",
  },
  {
    year: "2023",
    icon: "🚀",
    title: "Digital Innovation One (DIO)",
    desc: "Bootcamps e projetos voltados para desenvolvimento web, Git, JavaScript, HTML, CSS e construção de aplicações.",
  },
  {
    year: "2024",
    icon: "🏛️",
    title: "ENAP",
    desc: "Capacitação em Governança de TIC, ampliando conhecimentos sobre gestão, governança e boas práticas na área de Tecnologia da Informação.",
  },
  {
    year: "2025",
    icon: "📊",
    title: "Hashtag Treinamentos",
    desc: "Aprofundamento em Python, Power BI, automação de processos, Inteligência Artificial e análise de dados aplicada.",
  },
  {
    year: "2026",
    icon: "🌟",
    title: "SCTEC",
    desc: "Eventos de carreira, palestras, trilhas e bootcamps em IA, Desenvolvimento de Software e Análise de Dados, com foco na evolução contínua.",
  },
];

function JourneyTimeline() {
  return (
    <div className="mb-14">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
          <span className="h-px w-8 bg-gold" /> Timeline
        </div>
        <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold tracking-tight">
          Minha Jornada de Aprendizado
        </h3>
        <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-3xl">
          Acredito que aprender continuamente é uma das competências mais importantes na área de Tecnologia. Esta linha do tempo representa minha evolução técnica por meio de cursos, bootcamps, certificações, eventos e projetos práticos.
        </p>
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden relative pl-8">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-rose via-gold to-transparent" />
        <div className="space-y-5">
          {journeyMilestones.map((m) => (
            <div key={m.year} className="relative">
              <span className="absolute -left-[1.4rem] top-4 h-3 w-3 rounded-full gradient-rose-gold ring-4 ring-background" />
              <div className="glass rounded-2xl p-5 hover:border-rose/40 hover:-translate-y-0.5 transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{m.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-gold tracking-wider">{m.year}</div>
                    <div className="font-display font-bold text-sm">{m.title}</div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: horizontal */}
      <div className="hidden md:block relative">
        <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-rose via-gold to-transparent" />
        <div className="grid grid-cols-5 gap-4 relative">
          {journeyMilestones.map((m) => (
            <div key={m.year} className="flex flex-col items-center text-center group">
              <span className="relative h-4 w-4 rounded-full gradient-rose-gold ring-4 ring-background mt-6 group-hover:scale-125 transition-transform" />
              <div className="mt-4 text-xs font-bold tracking-wider text-gold">{m.year}</div>
              <div className="mt-3 w-full glass rounded-2xl p-4 hover:border-rose/40 hover:-translate-y-1 transition h-full">
                <div className="text-2xl">{m.icon}</div>
                <div className="mt-2 font-display font-bold text-sm leading-tight">{m.title}</div>
                <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  const gh = "https://github.com/xgabiez";
  const institutions: {
    name: string;
    icon: string;
    description?: string;
    certs: {
      title: string;
      hours?: string;
      date?: string;
      pdf: string;
      projects?: { name: string; url: string }[];
      badge?: string;
      category?: string;
      group?: string;
      featured?: boolean;
    }[];
    emptyGroups?: { name: string; note: string }[];
  }[] = [
    {
      name: "TreinaWeb",
      icon: "📚",
      description:
        "Plataforma de ensino focada em desenvolvimento de software, oferecendo cursos práticos voltados às principais tecnologias do mercado.",
      certs: [
        {
          title: "Semana React & Python",
          date: "2022",
          pdf: "/certificados/treinaweb/TREINAWEB_Semana_react_python.pdf",
        },
      ],
    },
    {
      name: "Digital Innovation One (DIO)",
      icon: "📚",
      certs: [
        {
          title: "Bootcamp Santander 2025 — Ciência de Dados com Python",
          hours: "63h",
          date: "2025",
          pdf: "/certificados/DIO/Bootcamp_Santander2025_CienciadeDadosComPython_63h.pdf",
          badge: "🚀 Projetos desenvolvidos",
          projects: [
            { name: "Ciencia_de_Dados_com_Python_IMERSAO_SANTANDER", url: `${gh}/Ciencia_de_Dados_com_Python_IMERSAO_SANTANDER` },
            { name: "Analise-de-dados-comPython", url: `${gh}/Analise-de-dados-comPython` },
            { name: "aulas_datascience_SCTECH", url: `${gh}/aulas_datascience_SCTECH` },
            { name: "Inteligencia-Artificial-Previsoes-ComPython-IA", url: `${gh}/Inteligencia-Artificial-Previsoes-ComPython-IA` },
          ],
        },
        {
          title: "Bootcamp Klabin — Excel e Power BI Dashboards",
          hours: "90h",
          date: "2024",
          pdf: "/certificados/DIO/Bootcamp_Klabin_ExcelEPowerBi_Dashboards_90h.pdf",
          badge: "💻 Aplicação prática",
          projects: [
            { name: "Power_BI_Dashboards", url: `${gh}/Power_BI_Dashboards` },
            { name: "Modelo_Ecommerce_PowerBI_StarSchema_FormulasDAX", url: `${gh}/Modelo_Ecommerce_PowerBI_StarSchema_FormulasDAX` },
            { name: "PowerBi_Azure_integration_Mysql", url: `${gh}/PowerBi_Azure_integration_Mysql` },
            { name: "Dashboard_vendas_Xbox_Excel", url: `${gh}/Dashboard_vendas_Xbox_Excel` },
          ],
        },
        {
          title: "Formação Power BI Analyst",
          hours: "60h",
          pdf: "/certificados/DIO/Formação_PowerBi_Analyst_60h.pdf",
          badge: "💻 Aplicação prática",
          projects: [
            { name: "Power_BI_Dashboards", url: `${gh}/Power_BI_Dashboards` },
            { name: "Modelo_Ecommerce_PowerBI_StarSchema_FormulasDAX", url: `${gh}/Modelo_Ecommerce_PowerBI_StarSchema_FormulasDAX` },
          ],
        },
      ],
    },
    {
      name: "ENAP — Escola Nacional de Administração Pública",
      icon: "📚",
      certs: [
        {
          title: "Governança de TIC no Setor Público",
          pdf: "/certificados/Enap/Certificado_Governanca_TIC.pdf",
        },
      ],
    },
    {
      name: "Hashtag Treinamentos",
      icon: "📚",
      certs: [
        {
          title: "Jornada Python",
          hours: "8h",
          pdf: "/certificados/Hashtag/Hashtag_JornadaPython_8h.pdf",
          badge: "🚀 Projetos desenvolvidos",
          projects: [
            { name: "Automacao-de-processos-comPython", url: `${gh}/Automacao-de-processos-comPython` },
            { name: "Analise-de-dados-comPython", url: `${gh}/Analise-de-dados-comPython` },
          ],
        },
      ],
    },
    {
      name: "Alura",
      icon: "📚",
      description:
        "Formação contínua em desenvolvimento de software, Inteligência Artificial, programação, engenharia de prompts e demais tecnologias voltadas ao mercado.",
      certs: [
        {
          title: "Formação Alura",
          group: "🎓 Formação Completa",
          badge: "🏆 Certificado da Formação",
          featured: true,
          pdf: "/certificados/Alura/Certificado_Alura_completo.pdf",
        },
        ...[
          { title: "Engenharia de Prompt: criando prompts eficazes para IA Generativa", file: "Gabrielly De Abreu Ferreira - Curso Engenharia de Prompt_ criando prompts eficazes para IA Generativa - Alura.pdf" },
          { title: "Git e GitHub: repositório, commit e versões", file: "Gabrielly De Abreu Ferreira - Curso Git e GitHub_ repositório, commit e versões - Alura.pdf" },
          { title: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags", file: "Gabrielly De Abreu Ferreira - Curso HTML e CSS_ ambientes de desenvolvimento, estrutura de arquivos e tags - Alura.pdf" },
          { title: "HTML e CSS: Classes, posicionamento e Flexbox", file: "Gabrielly De Abreu Ferreira - Curso HTML e CSS_ Classes, posicionamento e Flexbox - Alura.pdf" },
          { title: "HTML e CSS: cabeçalho, footer e variáveis CSS", file: "Gabrielly De Abreu Ferreira - Curso HTML e CSS_ cabeçalho, footer e variáveis CSS - Alura.pdf" },
          { title: "HTML e CSS: trabalhando com responsividade e publicação de projetos", file: "Gabrielly De Abreu Ferreira - Curso HTML e CSS_ trabalhando com responsividade e publicação de projetos - Alura.pdf" },
          { title: "IA: explorando o potencial da inteligência artificial generativa", file: "Gabrielly De Abreu Ferreira - Curso IA_ explorando o potencial da inteligência artificial generativa - Alura.pdf" },
          { title: "Java JRE e JDK: compile e execute o seu programa", file: "Gabrielly De Abreu Ferreira - Curso Java JRE e JDK_ compile e execute o seu programa - Alura.pdf" },
          { title: "Java OO: entendendo a Orientação a Objetos", file: "Gabrielly De Abreu Ferreira - Curso Java OO_ entendendo a Orientação a Objetos - Alura.pdf" },
          { title: "Java Polimorfismo: entenda herança e interfaces", file: "Gabrielly De Abreu Ferreira - Curso Java Polimorfismo_ entenda herança e interfaces - Alura.pdf" },
          { title: "JavaScript: Arrays", file: "Gabrielly De Abreu Ferreira - Curso JavaScript_ Arrays - Alura.pdf" },
          { title: "JavaScript: manipulando o DOM", file: "Gabrielly De Abreu Ferreira - Curso JavaScript_ manipulando o DOM - Alura.pdf" },
          { title: "JavaScript: objetos", file: "Gabrielly De Abreu Ferreira - Curso JavaScript_ objetos - Alura.pdf" },
          { title: "JavaScript: tipos, variáveis e funções", file: "Gabrielly De Abreu Ferreira - Curso JavaScript_ tipos, variáveis e funções - Alura.pdf" },
          { title: "JavaScript e HTML: desenvolva um jogo e pratique lógica de programação", file: "Gabrielly De Abreu Ferreira - Curso JavaScript e HTML_ desenvolva um jogo e pratique lógica de programação - Alura.pdf" },
          { title: "JavaScript na Web: armazenando dados no navegador", file: "Gabrielly De Abreu Ferreira - Curso JavaScript na Web_ armazenando dados no navegador - Alura.pdf" },
          { title: "Transformação Digital: tecnologias", file: "Gabrielly De Abreu Ferreira - Curso Transformação Digital_ tecnologias - Alura.pdf" },
        ].map((c) => ({
          title: c.title,
          group: "📚 Cursos da Formação",
          pdf: `/certificados/Alura/${c.file}`,
        })),
      ],
    },
    {
      name: "SCTEC",
      icon: "📚",
      description:
        "Programa de capacitação em Tecnologia com participação em eventos de carreira, palestras técnicas, trilhas de aprendizagem e bootcamps, voltados ao desenvolvimento contínuo em Análise de Dados, Desenvolvimento de Software e Inteligência Artificial.",
      certs: [
        {
          title: "Análise de Dados",
          category: "Palestra",
          group: "📢 Palestras",
          pdf: "/certificados/SCTEC/SCTEC_Palestras_Analise_de_Dados.pdf",
        },
        {
          title: "Desenvolvimento de Software",
          category: "Palestra",
          group: "📢 Palestras",
          pdf: "/certificados/SCTEC/SCTEC_Palestras_Desenvolvimento_de_Software.pdf",
        },
        {
          title: "Inteligência Artificial",
          category: "Palestra",
          group: "📢 Palestras",
          pdf: "/certificados/SCTEC/SCTEC_Palestras_Inteligencia_Artificial.pdf",
        },
        {
          title: "Análise de Dados",
          category: "Trilha Rápida",
          group: "🚀 Trilhas Rápidas",
          pdf: "/certificados/SCTEC/SCTEC_Trilha_Rapida_Analise_de_Dados.pdf",
        },
        {
          title: "Desenvolvimento de Software",
          category: "Trilha Rápida",
          group: "🚀 Trilhas Rápidas",
          pdf: "/certificados/SCTEC/SCTEC_Trilha_Rapida_Desenvolvimento_de_Software.pdf",
        },
        {
          title: "Inteligência Artificial",
          category: "Trilha Rápida",
          group: "🚀 Trilhas Rápidas",
          pdf: "/certificados/SCTEC/SCTEC_Trilha_Rapida_Inteligencia_Artificial.pdf",
        },
        {
          title: "Introdução ao Data Science",
          category: "Primeiros Passos",
          group: "🌱 Primeiros Passos",
          pdf: "/certificados/SCTEC/SCTEC_Introducao_ao_DataScience.pdf",
        },
      ],
      emptyGroups: [
        {
          name: "🔷 Profissionalizar",
          note: "Em breve novos certificados serão adicionados conforme avanço na jornada SCTEC.",
        },
        {
          name: "⭐ Aperfeiçoar",
          note: "Em breve novos certificados serão adicionados conforme avanço na jornada SCTEC.",
        },
      ],
    },
  ];

  const totalCerts = institutions.reduce((a, i) => a + i.certs.length, 0);
  const totalBootcamps = institutions.reduce(
    (a, i) => a + i.certs.filter((c) => /bootcamp/i.test(c.title)).length, 0,
  );
  const projectSet = new Set<string>();
  institutions.forEach((i) => i.certs.forEach((c) => c.projects?.forEach((p) => projectSet.add(p.url))));
  const totalProjects = projectSet.size;

  const stats = [
    { icon: Award, label: "Certificados concluídos", value: totalCerts },
    { icon: Trophy, label: "Bootcamps realizados", value: totalBootcamps },
    { icon: Code2, label: "Projetos desenvolvidos a partir dos estudos", value: totalProjects },
  ];

  return (
    <section id="certificacoes" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          kicker="Certificações"
          title="Aprendizado Contínuo"
          sub="Minha evolução profissional é construída continuamente por meio de bootcamps, cursos, certificações, eventos de tecnologia, trilhas de aprendizagem e projetos práticos. Cada experiência representa novos conhecimentos aplicados ao meu desenvolvimento técnico e profissional."
        />

        {/* Estatísticas */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-rose/40 transition">
              <span className="h-12 w-12 grid place-items-center rounded-xl gradient-rose-gold text-background shrink-0">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-3xl font-bold text-gradient">{s.value}+</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Accordion por instituição */}
        <JourneyTimeline />

        <Accordion type="multiple" defaultValue={[institutions[0].name]} className="space-y-4">
          {institutions.map((inst) => (
            <AccordionItem
              key={inst.name}
              value={inst.name}
              className="glass rounded-2xl border border-white/5 px-6 data-[state=open]:border-rose/30 transition"
            >
              <AccordionTrigger className="hover:no-underline py-5">
                <div className="flex items-center gap-3 text-left">
                  <span className="text-2xl">{inst.icon}</span>
                  <div>
                    <div className="font-display font-bold text-base">{inst.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {inst.certs.length} {inst.certs.length === 1 ? "certificado" : "certificados"}
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                {inst.description && (
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {inst.description}
                  </p>
                )}
                {(() => {
                  const groups = Array.from(new Set(inst.certs.map((c) => c.group).filter(Boolean))) as string[];
                  const renderCard = (c: (typeof inst.certs)[number]) => (
                    <div
                      key={c.title}
                      className={`group relative rounded-2xl p-5 bg-surface/40 border hover:-translate-y-0.5 transition ${c.featured ? "border-gold/60 bg-gold/5 hover:border-gold" : "border-white/5 hover:border-rose/40"}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="h-10 w-10 grid place-items-center rounded-lg border border-gold/30 text-gold shrink-0">
                          <Award className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="font-display font-semibold text-sm leading-snug">{c.title}</div>
                          <div className="text-xs text-muted-foreground mt-1">{inst.name.split(" — ")[0]}</div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {c.category && (
                              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-gold/30 text-gold">
                                {c.category}
                              </span>
                            )}
                            {c.hours && (
                              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-rose/30 text-rose">
                                {c.hours}
                              </span>
                            )}
                            {c.date && (
                              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10 text-muted-foreground">
                                {c.date}
                              </span>
                            )}
                            {c.badge && (
                              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full gradient-rose-gold text-background font-semibold">
                                {c.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <a
                          href={encodeURI(`${import.meta.env.BASE_URL}${c.pdf.replace(/^\//, "")}`)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg gradient-rose-gold text-background font-semibold hover:opacity-90 transition"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Visualizar Certificado
                        </a>
                        {c.projects && c.projects.length > 0 && (
                          <a
                            href={c.projects[0].url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-rose/40 text-rose hover:bg-rose/10 transition"
                          >
                            <Github className="h-3.5 w-3.5" />
                            Ver Projeto
                          </a>
                        )}
                      </div>

                      {c.projects && c.projects.length > 1 && (
                        <div className="mt-3 pt-3 border-t border-white/5">
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
                            Repositórios relacionados
                          </div>
                          <ul className="space-y-1">
                            {c.projects.slice(1).map((p) => (
                              <li key={p.url}>
                                <a
                                  href={p.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-xs text-muted-foreground hover:text-rose inline-flex items-center gap-1 transition"
                                >
                                  <Github className="h-3 w-3" />
                                  {p.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                  if (groups.length === 0) {
                    return (
                      <div className="grid md:grid-cols-2 gap-4">
                        {inst.certs.map(renderCard)}
                      </div>
                    );
                  }
                  return (
                    <div className="space-y-6">
                      {groups.map((g) => (
                        <div key={g}>
                          <div className="text-xs font-display font-semibold uppercase tracking-wider text-rose mb-3">
                            {g}
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            {inst.certs.filter((c) => c.group === g).map(renderCard)}
                          </div>
                        </div>
                      ))}
                      {inst.emptyGroups?.map((eg) => (
                        <div key={eg.name}>
                          <div className="text-xs font-display font-semibold uppercase tracking-wider text-rose mb-3">
                            {eg.name}
                          </div>
                          <p className="text-xs text-muted-foreground italic leading-relaxed">
                            {eg.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- Learning ---------- */
function Learning() {
  const topics = [
    { icon: Brain, t: "Inteligência Artificial" },
    { icon: BarChart3, t: "Análise de Dados" },
    { icon: Lock, t: "Governança de TI" },
    { icon: Code2, t: "Desenvolvimento de Software" },
    { icon: TrendingUp, t: "Mercado Financeiro" },
    { icon: BarChart3, t: "Investimentos" },
  ];
  return (
    <section id="aprendizado" className="py-24">
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
          <StatCard value={3} suffix="" label="Setores de atuação (Público, Telecom e Educação)" icon={Sparkles} />
          <StatCard value={10} suffix="+" label="Plataformas educacionais e corporativas administrativas" icon={Wifi} />
          <StatCard value={99} suffix="%" label="Disponibilidade de infraestrutura" icon={Trophy} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = (data: FormData) => {
    const errs: { name?: string; email?: string; message?: string } = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name) errs.name = "Informe seu nome.";
    else if (name.length > 100) errs.name = "Nome muito longo (máx. 100).";
    if (!email) errs.email = "Informe seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "E-mail inválido.";
    if (!message) errs.message = "Escreva uma mensagem.";
    else if (message.length < 10) errs.message = "Mensagem muito curta (mín. 10 caracteres).";
    else if (message.length > 2000) errs.message = "Mensagem muito longa (máx. 2000).";
    return errs;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot — se preenchido, é bot: fingimos sucesso e descartamos.
    if (String(formData.get("website") ?? "").trim() !== "") {
      form.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim() || "Contato pelo portfólio";

    // Formspree usa _replyto para o Reply-To do e-mail recebido.
    formData.set("_replyto", email);
    formData.set("_subject", `[Portfólio] ${subject} — ${name}`);
    // Link clicável no Gmail: abre nova resposta direta para o visitante.
    const mailto = `mailto:${email}?subject=${encodeURIComponent("Re: " + subject)}`;
    formData.set(`Responder para ${name}`, mailto);

    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mdarwggd", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error("Falha no envio");
      form.reset();
      setErrors({});
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Contato" title="Vamos conversar" sub="Aberta a oportunidades, parcerias e projetos com propósito." />
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="space-y-3">
            {[
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gabrielly-ferreira-ti", href: "https://linkedin.com/in/gabrielly-ferreira-ti" },
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

          <form onSubmit={onSubmit} noValidate className="glass-strong rounded-3xl p-7 md:p-9 space-y-5 relative">
            {/* Honeypot invisível — humanos não veem, bots preenchem. */}
            <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden">
              <label>
                Não preencha este campo:
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nome" name="name" placeholder="Seu nome" error={errors.name} />
              <Field label="E-mail" name="email" type="email" placeholder="voce@email.com" error={errors.email} />
            </div>
            <div>
              <label htmlFor="subject" className="text-xs uppercase tracking-wider text-muted-foreground">Assunto</label>
              <select
                id="subject"
                name="subject"
                defaultValue=""
                className="mt-2 w-full rounded-xl bg-background/40 border border-border focus:border-rose/60 focus:outline-none px-4 py-3 text-foreground transition appearance-none cursor-pointer bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23a1a1aa%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-no-repeat bg-[right_1rem_center]"
              >
                <option value="" disabled className="bg-background text-foreground">Selecione um assunto…</option>
                <option value="💼 Oportunidade de trabalho" className="bg-background text-foreground">💼 Oportunidade de trabalho</option>
                <option value="🤝 Parceria" className="bg-background text-foreground">🤝 Parceria</option>
                <option value="💻 Projeto freelancer" className="bg-background text-foreground">💻 Projeto freelancer</option>
                <option value="📚 Mentoria / Networking" className="bg-background text-foreground">📚 Mentoria / Networking</option>
                <option value="✉️ Outro" className="bg-background text-foreground">✉️ Outro</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Mensagem</label>
              <textarea id="message" name="message" rows={5} maxLength={2000} placeholder="Conte um pouco sobre o projeto (mín. 10 caracteres)..." aria-invalid={!!errors.message} className="mt-2 w-full rounded-xl bg-background/40 border border-border focus:border-rose/60 focus:outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition aria-[invalid=true]:border-red-500/60" />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>
            <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-full gradient-rose-gold px-6 py-3 font-semibold text-primary-foreground glow-rose hover:scale-[1.02] transition w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
              <Send className="h-4 w-4" />
              {status === "sending" ? "Enviando..." : status === "sent" ? "Mensagem enviada" : "Enviar mensagem"}
            </button>
            {status === "sent" && (
              <p className="text-sm text-emerald-400">Mensagem enviada com sucesso! Retornarei em breve.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Não foi possível enviar sua mensagem. Tente novamente ou envie diretamente por e-mail.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, error, required = true }: { label: string; name: string; type?: string; placeholder?: string; error?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} maxLength={type === "email" ? 255 : 100} aria-invalid={!!error}
        className="mt-2 w-full rounded-xl bg-background/40 border border-border focus:border-rose/60 focus:outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition aria-[invalid=true]:border-red-500/60" />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
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
          <a href="https://linkedin.com/in/gabrielly-ferreira-ti" target="_blank" rel="noreferrer" className="hover:text-rose transition"><Linkedin className="h-4 w-4" /></a>
          <a href="https://github.com/xgabiez" target="_blank" rel="noreferrer" className="hover:text-rose transition"><Github className="h-4 w-4" /></a>
          <a href="mailto:gabriellydeabreuferreira@gmail.com" className="hover:text-rose transition"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

// silence unused imports tree-shake hint
void [Palette, FileSpreadsheet];
