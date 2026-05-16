import { useEffect, useMemo, useState } from "react";
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

const links = {
  instagram: "https://www.instagram.com/sadiq__khan0921",
  linkedin: "https://www.linkedin.com/in/sadiq-khan0921/",
  twitter: "https://x.com/sadiqkhan0921?s=21",
  spotify: "https://open.spotify.com/artist/23txuHa99Z3PwhyN20VZwy?si=CaX93fYTQpilfkpxzV5ADQ",
  facebook: "https://www.facebook.com/share/18TbRvDNF7/?mibextid=wwXIfr",
};

const navLinks = ["Home", "About", "Music", "Gallery", "Journey", "Socials", "Contact"];
const skills = ["Music Artist", "Lyrics Writer", "Streaming Media", "Live Broadcast", "Photography", "Creative Collaboration"];
const releases = [
  { title: "Midnight Feelings", type: "Single", year: "2026", color: "linear-gradient(135deg,#ef4444,#8b5cf6)" },
  { title: "Silent City", type: "Demo", year: "2026", color: "linear-gradient(135deg,#991b1b,#ec4899)" },
  { title: "Heart Frequency", type: "EP", year: "2025", color: "linear-gradient(135deg,#f97316,#ef4444)" },
];
const socials = [
  { name: "Instagram", text: "Behind the scenes, reels, studio moments.", href: links.instagram, icon: Sparkles },
  { name: "Spotify", text: "Original music, releases, and artist profile.", href: links.spotify, icon: Headphones },
  { name: "LinkedIn", text: "Creative profile, professional journey, network.", href: links.linkedin, icon: Mail },
  { name: "Twitter/X", text: "Thoughts, updates, and music conversations.", href: links.twitter, icon: Send },
  { name: "Facebook", text: "Community updates and public moments.", href: links.facebook, icon: Music2 },
];
const gallery = [
  ["Studio Mood", "https://placehold.co/700x900/080808/1DB954?text=Studio+Mood", "tall"],
  ["Live Broadcast", "https://placehold.co/700x520/111111/8b5cf6?text=Live+Broadcast", ""],
  ["Lyrics Night", "https://placehold.co/700x520/070707/ffffff?text=Lyrics+Night", ""],
  ["Creative Frame", "https://placehold.co/700x900/0b0b0b/1DB954?text=Creative+Frame", "tall"],
  ["Memory Lane", "https://placehold.co/700x520/111111/b3b3b3?text=Memories", ""],
  ["Artist Light", "https://placehold.co/700x520/060606/8b5cf6?text=Artist+Light", ""],
];
const journey = [
  "Music Passion Started",
  "Creative Lyrics & Original Music",
  "Collaboration With Artists",
  "Streaming & Live Broadcast Skills",
  "Building Blacky Series Chill Brand",
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
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        Blacky Series Chill
      </motion.h1>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span>Blacky</span> Series Chill
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
      <button className="menu-btn" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -16, scale: 0.98 }}>
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="blob blob-one" />
      <div className="blob blob-two" />
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }}>
          <span className="hero-kicker"><Sparkles size={18} /> Official Music Artist</span>
          <h1>Blacky Series Chill</h1>
          <p className="tagline">Where Emotions Turn Into Music.</p>
          <p className="hero-text">A cinematic personal brand for Sadiq Khan, shaped around original lyrics, emotional sound, creative visuals, and live digital energy.</p>
          <div className="hero-actions">
            <a className="btn primary" href={links.spotify} target="_blank" rel="noreferrer"><Headphones size={19} /> Listen on Spotify</a>
            <a className="btn ghost" href={links.instagram} target="_blank" rel="noreferrer"><Sparkles size={19} /> Follow on Instagram</a>
          </div>
          <Equalizer />
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
            <img loading="lazy" src="https://placehold.co/720x900/050505/ef4444?text=Sadiq+Khan" alt="Sadiq Khan artist portrait placeholder" />
          </div>
          <div className="artist-info">
            <span>Artist Card</span>
            <h2>Sadiq Khan</h2>
            <p>Music Artist | Lyrics Writer | Creator</p>
          </div>
          <div className="mini-stats"><span>Originals</span><span>Live</span><span>Collabs</span></div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A Creative Identity Built Around Emotion">
      <div className="about-grid">
        <div className="glass-card about-copy">
          <p>Blacky Series Chill is the creative music identity of Sadiq Khan, focused on crafting original lyrics and music that express emotion, personal stories, and artistic freedom. Through music, he explores sound as a space for honesty, connection, and creative enjoyment.</p>
          <p>His academic journey includes studies at Garhwa Polytechnic College, Hasker, Garhwa. With experience in streaming media, live broadcast, photography, and artist collaboration, Sadiq brings a multidimensional approach to his work while contributing to a dynamic culture of music, performance, and digital creativity.</p>
        </div>
        <div className="skill-wrap">
          {skills.map((skill, index) => <motion.span animate={softFloat(index * 0.12)} whileHover={{ y: -7, scale: 1.05 }} className="skill-pill" key={skill}>{skill}</motion.span>)}
        </div>
      </div>
    </Section>
  );
}

function Music() {
  return (
    <Section id="music" eyebrow="Music" title="Spotify-Inspired Sound Showcase">
      <div className="music-grid">
        <div className="glass-card spotify-card">
          <iframe title="Blacky Series Chill Spotify artist" src="https://open.spotify.com/embed/artist/23txuHa99Z3PwhyN20VZwy?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        </div>
        <div className="release-stack">
          <Equalizer compact />
          {releases.map((release, index) => (
            <motion.article className="release-card glass-card" key={release.title} animate={softFloat(index * 0.18)} whileHover={{ x: 8, scale: 1.02 }}>
              <div className="release-art" style={{ background: release.color }} />
              <div><h3>{release.title}</h3><p>{release.type} · {release.year}</p></div>
              <Music2 size={22} />
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
  return (
    <Section id="gallery" eyebrow="Gallery" title="Moments, Music & Memories">
      <div className="gallery-grid">
        {gallery.map(([title, src, size], index) => (
          <motion.figure className={`gallery-item glass-card ${size}`} key={title} animate={softFloat(index * 0.1)} whileHover={{ y: -10, scale: 1.015 }}>
            <img loading="lazy" src={src} alt={title} />
            <figcaption>{title}</figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

function Journey() {
  return (
    <Section id="journey" eyebrow="Journey" title="From Passion To Personal Brand">
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
      <h2>Available for music collaborations, live performances, creative projects and digital promotions.</h2>
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
      <div><h2>Blacky Series Chill</h2><p>© {new Date().getFullYear()} Sadiq Khan. All rights reserved.</p></div>
      <div className="footer-socials">{socials.map(({ name, href }) => <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>)}</div>
      <motion.a className="to-top" href="#home" whileHover={{ y: -4 }}><ArrowUp size={20} /></motion.a>
    </footer>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  const backgroundOrbs = useMemo(() => Array.from({ length: 8 }).map((_, index) => ({ left: `${8 + index * 12}%`, delay: `${index * 0.45}s` })), []);
  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="site-bg" aria-hidden="true">{backgroundOrbs.map((orb, index) => <span key={index} style={{ left: orb.left, animationDelay: orb.delay }} />)}</div>
      <Navbar />
      <main><Hero /><About /><Music /><SocialHub /><Gallery /><Journey /><Collaboration /><Contact /></main>
      <Footer />
    </>
  );
}

export default App;
