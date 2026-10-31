import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowDownRight, ArrowUpRight, ArrowUpRight as External, Menu, X, Github, Instagram, Send, Sparkles, Copy, Check } from "lucide-react";
import { profile } from "./data/profile";
import { socials } from "./data/socials";
import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Filter = "All" | "AI & Software" | "Web Experiences" | "In the Lab";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

function BrandMark() {
  return <a href="#top" className="brand" aria-label="Choyonverse home"><span className="brand-symbol">C<span>.</span></span><span className="brand-name">CHOYONVERSE</span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item, index) => <a key={item.href} href={item.href}><span>0{index + 1}</span>{item.label}</a>)}
        </nav>
        <a href={`mailto:${profile.email}`} className="header-contact">Let’s talk <ArrowUpRight size={15}/></a>
        <button className="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
      </div>
      <AnimatePresence>
        {open && <motion.nav className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
          {navItems.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={17}/></a>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return <div className="section-label"><span>{number}</span><i/>{children}</div>;
}

function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot"/> {profile.role} <span className="eyebrow-place">— {profile.location}</span></div>
        <h1>Ideas, made<br/><em>tangible.</em></h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="button button-light" href="#work">Explore selected work <ArrowDownRight size={17}/></a>
          <a className="text-link" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={16}/></a>
        </div>
        <div className="hero-footnote"><span>01 / 04</span><span>SCROLL TO EXPLORE <ArrowDown size={13}/></span></div>
      </div>
      <div className="hero-portrait-wrap">
        <div className="portrait-frame">
          <img src="/images/choyon-cafe.webp" alt="Choyon seated in a warmly lit café." fetchPriority="high" />
          <span className="portrait-corner portrait-corner-tl"/><span className="portrait-corner portrait-corner-br"/>
        </div>
        <div className="portrait-caption"><span>CH. / 001</span><span>A STUDY IN BECOMING</span></div>
        <div className="portrait-side-note">CURIOUS BY DEFAULT <b>✳</b> BUILDING WITH INTENT</div>
      </div>
      <div className="hero-index">CH / 2026</div>
    </section>
  );
}

function WorkSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.category === filter), [filter]);
  const filters: Filter[] = ["All", "AI & Software", "Web Experiences", "In the Lab"];

  return (
    <section className="work-section section-pad" id="work">
      <div className="shell">
        <div className="section-intro work-intro">
          <div><SectionLabel number="01">SELECTED WORK</SectionLabel><h2>Things I’ve put<br/><em>into motion.</em></h2></div>
          <p>A growing collection of products, experiments and small steps toward bigger ideas. Some are live, some are still taking shape.</p>
        </div>
        <div className="work-toolbar">
          <div className="work-count"><span>{String(filtered.length).padStart(2, "0")}</span> PROJECTS ON THE TABLE</div>
          <div className="filter-list" role="group" aria-label="Filter projects">
            {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? "active" : ""} aria-pressed={filter === item}>{item}</button>)}
          </div>
        </div>
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => <ProjectCard project={project} key={project.id}/>) }
          </AnimatePresence>
        </motion.div>
        <div className="work-bottom-note"><span>NOT EVERY IDEA NEEDS TO BE FINISHED TO BE WORTH EXPLORING.</span><span>MORE TO COME ↗</span></div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="shell about-grid">
        <div className="about-image-column">
          <div className="about-photo"><img src="/images/choyon-monochrome.webp" alt="Black and white portrait of Choyon wearing glasses." loading="lazy"/><span className="photo-mark">A LITTLE LESS NOISE.</span></div>
          <div className="about-image-caption"><span>CH. / 002</span><span>OFF THE CLOCK, STILL OBSERVING.</span></div>
          <div className="about-stamp">MADE OF<br/><i>QUESTIONS</i></div>
        </div>
        <div className="about-copy">
          <SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel>
          <h2>Not here to<br/>make more <em>noise.</em></h2>
          <p className="about-lead">I’m interested in the part where an idea becomes something real.</p>
          <p>{profile.about}</p>
          <div className="interest-block"><span className="micro-label">CURRENT CURIOSITIES</span><div className="interest-list">{profile.currentlyExploring.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}</div></div>
          <a className="text-link about-link" href="https://github.com/abdulhadichoyon-dot" target="_blank" rel="noreferrer">A little more on GitHub <ArrowUpRight size={16}/></a>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const principles = [
    { n: "01", title: "Understand first", text: "A clear problem makes better work than a clever effect. I try to understand what needs to exist before deciding how it should look." },
    { n: "02", title: "Sweat the details", text: "Type, spacing, motion and performance are part of the experience, not polish to add at the very end." },
    { n: "03", title: "Keep learning in public", text: "Experiments, rough edges and lessons belong in the process. Progress is more useful than pretending to know everything." },
  ];
  return (
    <section className="approach-section section-pad" id="approach">
      <div className="shell">
        <div className="section-intro approach-intro"><div><SectionLabel number="03">HOW I LIKE TO WORK</SectionLabel><h2>Make it useful.<br/><em>Make it matter.</em></h2></div><div className="approach-statement"><Sparkles size={19}/><p>Good work is rarely loud. It is considered, useful, and clear about why it exists.</p></div></div>
        <div className="principles-list">{principles.map((item) => <article className="principle-row" key={item.n}><span className="principle-number">{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="principle-arrow" size={18}/></article>)}</div>
        <div className="visual-note"><div className="note-image"><img src="/images/choyon-editorial-collage.webp" alt="Editorial portrait collage of Choyon in warm, amber light." loading="lazy"/></div><div className="note-copy"><span className="micro-label">FIELD NOTE / NO. 003</span><p>Sometimes the most useful thing you can do is look again, ask a better question, and try one more time.</p><span className="note-signature">— Choyon</span></div></div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const copyDiscord = async (handle: string) => {
    try {
      await navigator.clipboard.writeText(handle);
      setCopiedDiscord(true);
    } catch {
      window.prompt("Copy this Discord handle", "abdulhadichoyon");
    }
  };
  const iconFor = (label: string) => {
    if (label === "GitHub") return <Github size={17}/>;
    if (label === "Instagram") return <Instagram size={17}/>;
    if (label === "Telegram") return <Send size={17}/>;
    return <External size={17}/>;
  };
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="shell contact-shell">
        <SectionLabel number="04">THE NEXT CONVERSATION</SectionLabel>
        <div className="contact-main"><h2>Have a good<br/><em>one in mind?</em></h2><a className="contact-circle" href={`mailto:${profile.email}`} aria-label="Email Choyon"><ArrowUpRight size={35}/></a></div>
        <div className="contact-lower"><div><span className="micro-label">SAY HELLO</span><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a></div><div className="social-list">{socials.map((social) => social.href ? <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{iconFor(social.label)}<span>{social.label}</span><ArrowUpRight size={13}/></a> : <button className="social-copy" key={social.label} onClick={() => copyDiscord(social.handle)} title="Copy Discord handle">{iconFor(social.label)}<span>{copiedDiscord ? "Copied" : `Discord · ${social.handle}`}</span>{copiedDiscord ? <Check size={13}/> : <Copy size={13}/>}</button>)}</div></div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><BrandMark/><span>BUILT WITH CURIOSITY, NOT A TEMPLATE.</span><a href="#top">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} CHOYONVERSE</small></div></footer>;
}

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro.from(".eyebrow", { y: 16, opacity: 0, duration: 0.7, delay: 0.12 })
      .from(".hero h1", { y: 42, opacity: 0, duration: 0.9 }, "-=0.45")
      .from(".hero-intro, .hero-actions", { y: 18, opacity: 0, duration: 0.7, stagger: 0.13 }, "-=0.45")
      .from(".portrait-frame", { clipPath: "inset(8% 8% 8% 8%)", scale: 1.035, opacity: 0, duration: 1.1 }, "-=0.8")
      .from(".portrait-caption, .portrait-side-note", { opacity: 0, y: 8, duration: 0.5 }, "-=0.35");

    gsap.utils.toArray<HTMLElement>(".section-label, .section-intro h2, .principle-row, .about-copy > p, .interest-block, .visual-note, .contact-main").forEach((element) => {
      gsap.from(element, {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
      });
    });
    gsap.utils.toArray<HTMLElement>(".project-card").forEach((element, index) => {
      gsap.from(element, { y: 32, opacity: 0, duration: 0.75, delay: (index % 2) * 0.08, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 90%", once: true } });
    });
  }, { scope: root });

  return (
    <div ref={root} className="app-shell">
      <Header/>
      <main>
        <Hero/>
        <div className="marquee-strip" aria-label="Curious by default. Building with intent."><div className="marquee-track"><span>CURIOUS BY DEFAULT</span><b>✳</b><span>BUILDING WITH INTENT</span><b>✳</b><span>ALWAYS IN PROGRESS</span><b>✳</b><span>CURIOUS BY DEFAULT</span><b>✳</b><span>BUILDING WITH INTENT</span><b>✳</b></div></div>
        <WorkSection/>
        <AboutSection/>
        <ApproachSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  );
}
