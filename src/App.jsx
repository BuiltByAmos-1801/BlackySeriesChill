import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  Headphones,
  Mail,
  Menu,
  Mic2,
  Music2,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import artistImage from "./images/Sadiq_Khan.JPG.jpeg";
import logoImage from "./images/logo.jpg";
import albumCover from "./images/The Opening New Song Vol.1 Album Cover Music Instagram Post_20250515_154719_0000.jpg.jpeg";
import musicThumb from "./images/Brown and Green Simple Music Mix YouTube Thumbnail_20250125_235643_0000.jpg.jpeg";
import travelThumb from "./images/Blue & White Minimal Travel Vlog  YouTube Thumbnail_20251020_111120_0000.jpg.jpeg";
import stageImage from "./images/DSC_0056.JPG.jpeg";
import portraitImage from "./images/DSC_0063.JPG.jpeg";
import reelImage from "./images/IMG_1918.JPG.jpeg";
import instaImage from "./images/SnapInsta.to_476368469_18015294890673477_2404260687870154797_n.jpg.jpg.jpeg";
import screenOne from "./images/Screenshot_2025-10-20-11-05-04-93_92460851df6f172a4592fca41cc2d2e6.jpg.jpeg";
import screenTwo from "./images/Screenshot_2025-10-20-11-05-21-76_92460851df6f172a4592fca41cc2d2e6.jpg.jpeg";
import screenThree from "./images/Screenshot_2025-10-20-11-05-46-42_92460851df6f172a4592fca41cc2d2e6.jpg.jpeg";
import SEO from "./components/SEO.jsx";

const links = {
  instagram: "https://www.instagram.com/sadiq__khan0921",
  linkedin: "https://www.linkedin.com/in/sadiq-khan0921/",
  twitter: "https://x.com/sadiqkhan0921?s=21",
  spotify: "https://open.spotify.com/artist/23txuHa99Z3PwhyN20VZwy?si=CaX93fYTQpilfkpxzV5ADQ",
  facebook: "https://www.facebook.com/share/18TbRvDNF7/?mibextid=wwXIfr",
};
const siteUrl = "https://yourdomain.com/";
const seoDescription =
  "Official website of Blacky Series Chill and Sadiq Khan. Explore original music, Spotify tracks, lyrics, artist journey, collaborations and latest releases.";
const seoKeywords =
  "Blacky Series Chill, Sadiq Khan Music Artist, Indian Music Artist, Spotify Artist, Independent Music Artist, Original Lyrics, Music Collaboration, Jharkhand Music Artist, Garhwa Music Artist";

const navLinks = ["Home", "About", "Music", "Gallery", "Journey", "Socials", "Contact"];
const skills = ["Music Artist", "Lyrics Writer", "Streaming Media", "Live Broadcast", "Photography", "Creative Collaboration"];
const releases = [
  { title: "Midnight Feelings", type: "Single", year: "2026", color: "linear-gradient(135deg,#ef4444,#8b5cf6)", href: links.spotify },
  { title: "Silent City", type: "Demo", year: "2026", color: "linear-gradient(135deg,#991b1b,#ec4899)", href: links.spotify },
  { title: "Heart Frequency", type: "EP", year: "2025", color: "linear-gradient(135deg,#f97316,#ef4444)", href: links.spotify },
  { title: "Spotify Track 1", type: "Single", year: "2026", color: "linear-gradient(135deg,#8b5cf6,#ec4899)", href: "https://open.spotify.com/track/6Xwj11LFOZUi80Kxn5297Z?si=8710424e271c4f97" },
  { title: "Spotify Track 2", type: "Single", year: "2026", color: "linear-gradient(135deg,#f97316,#9333ea)", href: "https://open.spotify.com/track/3VUwurEzFXEJ95JQLK1JKS?si=f94dbff29f1848c2" },
];
const socials = [
  { name: "Instagram", text: "Behind the scenes, reels, studio moments.", href: links.instagram, icon: Sparkles },
  { name: "Spotify", text: "Original music, releases, and artist profile.", href: links.spotify, icon: Headphones },
  { name: "LinkedIn", text: "Creative profile, professional journey, network.", href: links.linkedin, icon: Mail },
  { name: "Twitter/X", text: "Thoughts, updates, and music conversations.", href: links.twitter, icon: Send },
  { name: "Facebook", text: "Community updates and public moments.", href: links.facebook, icon: Music2 },
];
const gallery = [
  ["Sadiq Khan", artistImage, "tall"],
  ["Album Cover", albumCover, ""],
  ["Music Mix", musicThumb, ""],
  ["Live Moment", stageImage, "tall"],
  ["Portrait Session", portraitImage, ""],
  ["Creative Reel", reelImage, ""],
  ["Travel Vlog", travelThumb, ""],
  ["Instagram Moment", instaImage, ""],
  ["Music Screenshot", screenOne, ""],
  ["Track Preview", screenTwo, ""],
  ["Visual Memory", screenThree, ""],
];
const journey = [
  "Music Passion Started",
  "Creative Lyrics & Original Music",
  "Collaboration With Artists",
  "Streaming & Live Broadcast Skills",
  "Building Blacky Series Chill Brand",
];
const faqItems = [
  {
    question: "Who is Blacky Series Chill?",
    answer: "Blacky Series Chill is the official music artist and personal brand identity of Sadiq Khan, focused on original music, lyrics, creative visuals and collaborations.",
  },
  {
    question: "Who is Sadiq Khan?",
    answer: "Sadiq Khan is an Indian independent music artist from the Garhwa, Jharkhand region who creates original lyrics, music concepts and digital creative content.",
  },
  {
    question: "Where can I listen to Blacky Series Chill music?",
    answer: "You can listen to Blacky Series Chill music on Spotify through the official artist profile linked on this website.",
  },
  {
    question: "Is Blacky Series Chill available for collaborations?",
    answer: "Yes, Blacky Series Chill is available for music collaborations, live performances, creative projects and digital promotions.",
  },
  {
    question: "How can I contact Sadiq Khan?",
    answer: "You can contact Sadiq Khan through the contact form on this website or through the listed social media profiles.",
  },
];
const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Blacky Series Chill",
    alternateName: "Sadiq Khan",
    url: siteUrl,
    genre: ["Independent Music", "Hip-Hop", "Rap"],
    member: { "@type": "Person", name: "Sadiq Khan" },
    sameAs: [links.spotify, links.instagram, links.linkedin, links.twitter, links.facebook],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sadiq Khan",
    alternateName: "Blacky Series Chill",
    jobTitle: "Music Artist",
    url: siteUrl,
    sameAs: [links.spotify, links.instagram, links.linkedin, links.twitter, links.facebook],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Blacky Series Chill",
    url: siteUrl,
    description: seoDescription,
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Blacky Series Chill",
    url: siteUrl,
    logo: `${siteUrl}og-image.jpg`,
    sameAs: [links.spotify, links.instagram, links.linkedin, links.twitter, links.facebook],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];
const heroLines = ["Original Lyrics", "Live Broadcast Energy", "Photography Mood", "Collaboration Ready"];
const liveStats = [
  ["Original Focus", "Lyrics"],
  ["Current Mode", "Studio"],
  ["Collab Status", "Open"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const softFloat = (delay = 0) => ({
  y: [0, -8, 0],
  transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay },
});

function Equalizer({ compact = false }) {
  return (
    <div className={`equalizer ${compact ? "equalizer-compact" : ""}`} aria-hidden="true">
      {Array.from({ length: compact ? 16 : 28 }).map((_, index) => (
        <span key={index} style={{ "--delay": `${index * 0.08}s`, "--height": `${28 + (index % 7) * 9}px` }} />
      ))}
    </div>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <motion.section id={id} className={`section-shell ${className}`} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
      <div className="section-head">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function Preloader() {
  return (
    <motion.div className="preloader" exit={{ opacity: 0, visibility: "hidden" }} transition={{ duration: 0.55 }}>
      <Equalizer compact />
      <motion.div className="preloader-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        Blacky Series Chill
      </motion.div>
    </motion.div>
  );
}

function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <img src={logoImage} alt="Blacky Series Chill official logo" width="84" height="84" />
        <span>Blacky</span> Series Chill
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((item) => (
          <a className={activeSection === item.toLowerCase() ? "active" : ""} key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
      <button className="menu-btn" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -16, scale: 0.98 }}>
            {navLinks.map((item) => (
              <a className={activeSection === item.toLowerCase() ? "active" : ""} key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setLineIndex((value) => (value + 1) % heroLines.length), 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="blob blob-one" />
      <div className="blob blob-two" />
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }}>
          <span className="hero-kicker"><Sparkles size={18} /> Official Music Artist</span>
          <h1>Blacky Series Chill – Official Music Artist</h1>
          <p className="tagline">Where Emotions Turn Into Music.</p>
          <div className="rotating-line" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span
                key={heroLines[lineIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                {heroLines[lineIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="hero-text">A cinematic personal brand for Sadiq Khan, shaped around original lyrics, emotional sound, creative visuals, and live digital energy.</p>
          <div className="hero-actions">
            <a className="btn primary" href={links.spotify} target="_blank" rel="noreferrer"><Headphones size={19} /> Listen on Spotify</a>
            <a className="btn ghost" href={links.instagram} target="_blank" rel="noreferrer"><Sparkles size={19} /> Follow on Instagram</a>
          </div>
          <Equalizer />
          <LivePanel />
        </motion.div>
        <motion.div
          className="artist-card glass-card"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.15 },
            scale: { duration: 0.8, delay: 0.15 },
            rotate: { duration: 0.8, delay: 0.15 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          <div className="artist-photo">
            <img loading="lazy" src={artistImage} alt="Sadiq Khan music artist portrait" width="720" height="900" />
          </div>
          <div className="artist-info">
            <span>Artist Card</span>
            <h3>Sadiq Khan</h3>
            <p>Music Artist | Lyrics Writer | Creator</p>
          </div>
          <div className="mini-stats"><span>Originals</span><span>Live</span><span>Collabs</span></div>
        </motion.div>
      </div>
    </section>
  );
}

function LivePanel() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="live-panel glass-card">
      <div className="live-now"><span /> Live Brand Pulse</div>
      <strong>{time}</strong>
      <div className="live-stats">
        {liveStats.map(([label, value]) => <p key={label}><small>{label}</small><b>{value}</b></p>)}
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="About The Artist">
      <div className="about-grid">
        <div className="glass-card about-copy">
          <p>Blacky Series Chill is the creative music identity of Sadiq Khan, focused on crafting original lyrics and music that express emotion, personal stories, and artistic freedom. Through music, he explores sound as a space for honesty, connection, and creative enjoyment.</p>
          <p>As an independent music artist connected to Garhwa, Jharkhand, Sadiq Khan uses Blacky Series Chill to share original lyrics, Spotify music, performance ideas and creative collaborations with listeners who connect with honest sound and visual storytelling.</p>
          <p>His academic journey includes studies at Garhwa Polytechnic College, Hasker, Garhwa. With experience in streaming media, live broadcast, photography, and artist collaboration, Sadiq brings a multidimensional approach to his work while contributing to a dynamic culture of music, performance, and digital creativity.</p>
        </div>
        <div className="skill-wrap">
          {skills.map((skill, index) => <motion.span animate={softFloat(index * 0.12)} whileHover={{ y: -7, scale: 1.05 }} className="skill-pill" key={skill}>{skill}</motion.span>)}
        </div>
      </div>
      <div className="dynamic-stats">
        {[
          ["12+", "Creative Projects"],
          ["24/7", "Music Mindset"],
          ["5", "Active Platforms"],
          ["100%", "Independent Energy"],
        ].map(([value, label], index) => (
          <motion.div className="stat-card glass-card" key={label} animate={softFloat(index * 0.1)} whileHover={{ y: -8, scale: 1.02 }}>
            <strong>{value}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Music() {
  return (
    <Section id="music" eyebrow="Music" title="Latest Music Releases">
      <p className="section-copy">Explore the latest Blacky Series Chill releases, Spotify tracks and independent music concepts from Sadiq Khan. The sound focuses on emotional lyrics, cinematic atmosphere and a growing artist journey.</p>
      <div className="music-grid">
        <div className="glass-card spotify-card">
          <h2>Spotify Music</h2>
          <p>Listen through the official Spotify artist profile and follow Blacky Series Chill for new music updates.</p>
          <iframe title="Blacky Series Chill Spotify artist" src="https://open.spotify.com/embed/artist/23txuHa99Z3PwhyN20VZwy?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        </div>
        <div className="release-stack">
          <Equalizer compact />
          {releases.map((release, index) => (
            <motion.article className="release-card glass-card" key={release.title} animate={softFloat(index * 0.18)} whileHover={{ x: 8, scale: 1.02 }}>
              <div className="release-art" style={{ background: release.color }} />
              <div><h3>{release.title}</h3><p>{release.type} · {release.year}</p></div>
              <a className="release-link" href={release.href} target="_blank" rel="noreferrer" aria-label={`Open ${release.title} on Spotify`}>
                <Music2 size={22} />
              </a>
            </motion.article>
          ))}
          <a className="btn primary full" href={links.spotify} target="_blank" rel="noreferrer">Open Spotify</a>
        </div>
      </div>
    </Section>
  );
}

function SocialHub() {
  return (
    <Section id="socials" eyebrow="Social Hub" title="Follow The Signal Everywhere">
      <div className="social-grid">
        {socials.map(({ name, text, href, icon: Icon }, index) => (
          <motion.a className="social-card glass-card" href={href} target="_blank" rel="noreferrer" key={name} animate={softFloat(index * 0.16)} whileHover={{ y: -12, scale: 1.03 }}>
            <Icon size={30} /><h3>{name}</h3><p>{text}</p><span>Visit</span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);
  return (
    <Section id="gallery" eyebrow="Gallery" title="Moments, Music & Memories">
      <div className="gallery-grid">
        {gallery.map(([title, src, size], index) => (
          <motion.figure
            className={`gallery-item glass-card ${size}`}
            key={title}
            animate={softFloat(index * 0.1)}
            whileHover={{ y: -10, scale: 1.015 }}
            onClick={() => setActiveImage({ title, src })}
            role="button"
            tabIndex={0}
            aria-label={`Open gallery image: ${title}`}
            onKeyDown={(event) => event.key === "Enter" && setActiveImage({ title, src })}
          >
            <img loading="lazy" src={src} alt={`${title} - Blacky Series Chill music artist gallery`} width="700" height={size === "tall" ? "900" : "520"} />
            <figcaption>{title}</figcaption>
          </motion.figure>
        ))}
      </div>
      <AnimatePresence>
        {activeImage && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveImage(null)}>
            <motion.div className="lightbox-card" initial={{ scale: 0.92, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 20 }} onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={() => setActiveImage(null)} aria-label="Close gallery preview"><X size={22} /></button>
              <img src={activeImage.src} alt={activeImage.title} />
              <h3>{activeImage.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function Journey() {
  return (
    <Section id="journey" eyebrow="Journey" title="Artist Journey">
      <div className="timeline">
        {journey.map((item, index) => (
          <motion.div className="timeline-item" key={item} variants={fadeUp} animate={softFloat(index * 0.12)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="glass-card"><h3>{item}</h3><p>{index === 0 ? "The first spark became a serious creative direction." : "Each chapter adds more depth, craft, and identity to the Blacky Series Chill brand."}</p></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Collaboration() {
  return (
    <motion.section className="collab glass-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
      <Mic2 size={38} />
      <h2>Collaborations</h2>
      <p>Blacky Series Chill is available for music collaborations, live performances, creative projects and digital promotions. Artists, creators and brands can contact Sadiq Khan for original lyrics, music promotion ideas and live digital content.</p>
      <a className="btn primary" href="#contact">Contact for Collaboration</a>
    </motion.section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("Please fill every field before sending.");
      setSent(false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <Section id="contact" eyebrow="Contact" title="Send A Message">
      <div className="contact-grid">
        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          {["name", "email", "subject"].map((field) => (
            <label key={field}>
              <span>{field[0].toUpperCase() + field.slice(1)}</span>
              <input type={field === "email" ? "email" : "text"} value={form[field]} onChange={(event) => setForm({ ...form, [field]: event.target.value })} placeholder={`Your ${field}`} />
            </label>
          ))}
          <label><span>Message</span><textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell me about your project, event, or collaboration." /></label>
          {error && <p className="form-error">{error}</p>}
          {sent && <p className="form-success">Message ready. Thank you for reaching out.</p>}
          <button className="btn primary" type="submit"><Send size={18} /> Submit Message</button>
        </form>
        <aside className="contact-side glass-card">
          <Mail size={34} />
          <h3>Quick Links</h3>
          <p>Connect with Sadiq Khan across music, creative updates, professional networks, and community platforms.</p>
          <div className="quick-links">
            {socials.map(({ name, href }) => <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>)}
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={logoImage} alt="Blacky Series Chill logo" />
        <div><h2>Blacky Series Chill</h2><p>© {new Date().getFullYear()} Sadiq Khan. All rights reserved.</p></div>
      </div>
      <a className="developer-credit" href="https://builtbyamos.great-site.net/?i=1" target="_blank" rel="noreferrer">
        Developed by <strong>Built By Amos</strong>
      </a>
      <div className="footer-socials">{socials.map(({ name, href }) => <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>)}</div>
      <motion.a className="to-top" href="#home" whileHover={{ y: -4 }}><ArrowUp size={20} /></motion.a>
    </footer>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const shellRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((item) => document.getElementById(item.toLowerCase())).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-38% 0px -52% 0px", threshold: 0.01 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const backgroundOrbs = useMemo(() => Array.from({ length: 8 }).map((_, index) => ({ left: `${8 + index * 12}%`, delay: `${index * 0.45}s` })), []);
  return (
    <div
      ref={shellRef}
      className="app-shell"
      style={{ "--spot-x": "50%", "--spot-y": "20%" }}
      onPointerMove={(event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        shellRef.current?.style.setProperty("--spot-x", `${x}%`);
        shellRef.current?.style.setProperty("--spot-y", `${y}%`);
      }}
    >
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="site-bg" aria-hidden="true">{backgroundOrbs.map((orb, index) => <span key={index} style={{ left: orb.left, animationDelay: orb.delay }} />)}</div>
      <Navbar activeSection={activeSection} />
      <main><Hero /><About /><Music /><SocialHub /><Gallery /><Journey /><Collaboration /><Contact /></main>
      <Footer />
    </div>
  );
}

export default App;
