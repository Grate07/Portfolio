import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy } from 'lucide-react';

const discordId = '1462759224877518919';
const githubUrl = 'https://github.com/Grate07';
const discordUrl = `https://discord.com/users/${discordId}`;

export default function App() {
  const [copied, setCopied] = useState(false);

  async function copyDiscordId() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(discordId);
      } else {
        const field = document.createElement('textarea');
        field.value = discordId;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(field);
        if (!successful) throw new Error('Clipboard copy was unavailable');
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="portfolio-shell">
      <div className="grain" aria-hidden="true" />
      <header className="wrap topbar">
        <a className="brand" href="#top" aria-label="Grate, back to top">
          <span className="brand-mark" aria-hidden="true">g.</span>
          <span>grate</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">A bit about me</a>
          <a href="#contact">Say hello</a>
        </nav>
        <div className="nav-right">
          <span className="availability"><span className="signal" aria-hidden="true" /> learning by building</span>
        </div>
      </header>

      <section className="wrap hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="hero-kicker eyebrow reveal">
            <span>developer in progress</span><span aria-hidden="true">/</span><span>building things that work</span>
          </div>
          <h1 className="display reveal reveal-delay-1" id="hero-title">
            <span>Hi, I’m</span><span className="line-two">Grate.</span>
          </h1>
          <p className="hero-description reveal reveal-delay-2">
            I’m a young developer learning through <strong>real projects</strong> — Minecraft plugins, Discord bots, and whatever I’m curious about next.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="button-primary" href="#projects">
              A few things I’m making <ArrowDown size={14} aria-hidden="true" />
            </a>
            <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="A little abstract sketch about learning by building">
          <div className="orbit" aria-hidden="true">
            <span className="orbit-dot one" /><span className="orbit-dot two" /><span className="orbit-dot three" />
            <div className="orbit-core"><div className="core-square">g_</div></div>
          </div>
          <div className="floating-note note-top" aria-hidden="true"><b>state:</b> learning<br /><b>method:</b> make it real</div>
          <div className="floating-note note-bottom" aria-hidden="true">&lt; small steps /&gt;<br />one project at a time</div>
          <span className="hero-caption">notes from the build process — 01</span>
        </div>
      </section>

      <section className="wrap section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><span className="eyebrow">the workbench / 01</span><h2 id="projects-title">Things I’m building</h2></div>
          <span className="section-note">A work in progress, by design.</span>
        </div>
        <div className="project-list">
          <article className="project">
            <span className="project-number">01</span>
            <div className="project-main">
              <h3>CaseManager</h3>
              <p>A Minecraft moderation plugin project, built around Java and the Spigot ecosystem, with MySQL and Discord in the mix.</p>
              <span className="project-status">In development</span>
            </div>
            <div className="project-stack" aria-label="Technologies">
              <span className="tag">Java</span><span className="tag">Spigot</span><span className="tag">MySQL</span><span className="tag">Discord</span>
            </div>
            <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </article>
          <article className="project">
            <span className="project-number">02</span>
            <div className="project-main">
              <h3>Discord server bot</h3>
              <p>A Python bot for moderation, support, automation, and useful server utilities. Still taking shape as I learn.</p>
              <span className="project-status">In development</span>
            </div>
            <div className="project-stack" aria-label="Technologies">
              <span className="tag">Python</span><span className="tag">Discord</span>
            </div>
            <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </article>
          <article className="project portfolio-project">
            <span className="project-number">03</span>
            <div className="project-main">
              <h3>This little corner of the internet</h3>
              <p>A portfolio to keep track of what I’m learning, what I’m making, and where I want to go next.</p>
              <span className="project-status">Here, right now</span>
            </div>
            <div className="project-stack" aria-label="Project type">
              <span className="tag">Personal site</span><span className="tag">Ongoing</span>
            </div>
            <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </article>
        </div>
      </section>

      <section className="wrap section" id="about" aria-labelledby="about-title">
        <div className="about-grid">
          <div><span className="eyebrow">a little context / 02</span><h2 className="about-title" id="about-title">Still learning.<br />Already <em>making.</em></h2></div>
          <div className="about-copy">
            <p>I’m Grate. I like figuring out how things fit together, then turning that curiosity into something I can actually use.</p>
            <p>Right now, that means Java and Minecraft plugins, Python and Discord bots, and getting more comfortable with development one project at a time.</p>
            <p>I’m not here with a polished origin story. I’m here to learn, keep building, and share the things that come out of it.</p>
          </div>
        </div>
        <div className="learning-strip">
          <div><span className="eyebrow">currently exploring</span><p>More ways to build useful things for the communities and spaces I’m part of.</p></div>
          <span className="learning-mark" aria-hidden="true">{'{ }'}</span>
        </div>
      </section>

      <section className="wrap community" aria-label="Community experience">
        <div className="community-card">
          <div className="aster-slot">
            <img
              src="/assets/aster-mc.jpg"
              alt="Aster MC logo"
              width={1536}
              height={1536}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="community-copy">
            <span className="eyebrow">community note</span>
            <h3>Aster MC</h3>
            <p>A small moderation experience in the Minecraft community.</p>
          </div>
          <a className="community-link" href="https://discord.gg/r5kDFjYpEp" target="_blank" rel="noreferrer">
            Visit Aster MC <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">the next bit / 03</span>
              <h2>Let’s keep<br />in touch.</h2>
              <p className="contact-copy">Curious about what I’m working on? Find me on GitHub or Discord. I’m always glad to talk about making things.</p>
            </div>
            <div className="contact-links">
              <a href={githubUrl} target="_blank" rel="noreferrer"><span>GitHub</span><ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href={discordUrl} target="_blank" rel="noreferrer"><span>Discord profile</span><ArrowUpRight size={15} aria-hidden="true" /></a>
              <button className="copy-button" type="button" onClick={copyDiscordId} aria-label="Copy Discord ID to clipboard">
                <span>Copy Discord ID</span>{copied ? <Check size={15} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
              </button>
              <span className="copy-state" role="status" aria-live="polite">{copied ? 'Discord ID copied to clipboard.' : ''}</span>
            </div>
          </div>
          <div className="footer-line"><span>© Grate · made while learning</span><a href="#top">Back to the top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
