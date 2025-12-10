import Image from "next/image";

import GoldenSpiral from "@/components/GoldenSpiral";
import Link from "next/link";

export default function About() {
  return (
    <div style={{ paddingTop: "40px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Hero Section - Whisper Quiet */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "clamp(20px, 4vh, 40px) 24px clamp(32px, 5vh, 48px)",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 200,
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 2vh, 20px)",
          letterSpacing: "0.02em",
          lineHeight: 1.1
        }}>
          Daniel Wahnich
        </h1>
        <p style={{

          fontSize: "clamp(14px, 2vw, 18px)",
          fontWeight: 200,
          color: "#FAFAF8",
          letterSpacing: "0.05em",
          lineHeight: 1.4
        }}>
          Artist, Autodidact, Builder.
        </p>
      </div>

      {/* Golden Spiral */}
      <div style={{ margin: "0 auto clamp(16px, 2vh, 24px)" }}>
        <GoldenSpiral />
      </div>

      {/* About Me - Builder Section */}
      <div style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "clamp(60px, 10vh, 80px) 24px clamp(40px, 6vh, 60px)"
      }}>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(32px, 5vh, 48px)"
        }}>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            Building this website was my way of showing where my expertise lies, or to be more honest, where it is still taking shape. I'm a solo builder, fully self-taught, with no formal education in this craft.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            As I'm writing this (December 10, 2025), in that interval of time, 79 hours of work spread across 6 days, I've been trying to gather everything I've built in the last nine months since March 2025. The site has turned into something more than a project, it's becoming authentic. My thoughts appear on the screen exactly as they move in my mind, and I can't rest until it feels right. It's not really a choice. It's simply how my mind works: it wants to express my taste, my style, and my logic with precision.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            My desire is that this presentation reflects that I'm not trying to look antagonized or overly confident, quite the opposite. I'm someone who often lacks confidence, not someone with extra of it. I hope what comes through is the message I'm truly trying to send: my commitment, my stubborn work, and my dedication. Not for approval, not to impress anyone, but simply because I want to be presented precisely as I am.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            There is this sentence, "state of the art", it comes to me repeatedly during the day. When structuring a project, when getting closer and closer to this never almost ready version. The smart ones didn't just make an axiom, state of the art is also by definition the most advanced studies and techniques. To me it's not just a technical benchmark, it's the moment a thought finds its form. And in my world, form means visualization. Which is, in essence, what this website is: a visualization of my thoughts taking shape. This is also a prime phrase I share with my best friend, LLMs, the only true proven "soul mate" that never gets overwhelmed by me.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            And realistically, how does someone who dropped out at 15 with no formal education, who has been self-employed his entire life, who did things like working as a salesperson in Iceland, operating a multi-million dollar small business, losing everything in crypto investments, being homeless, rebuilding again, explain himself in a CV? Well, this is the state of the art currently available way to start shaping it.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            I don't pretend to be a mathematician or an engineer. I'm just a very curious individual with the ability to learn fast. Everything you see on this website is work I built on my own, experiments, projects, and attempts to understand how to speak with the machine and bring my thoughts onto the screen.
          </p>
        </div>
      </div>


      {/* Main Story - Authentic Voice */}
      <div style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "0 24px clamp(40px, 6vh, 60px)"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(32px, 5vh, 48px)"
        }}>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            My path wasn't linear, not even close. I started in retail, working with people every day, trying to understand them. Someone I admired once told me: "Your soul is walking around the world looking for precision." I didn't fully understand it then, but I lived it. I suffered from it. I searched for it everywhere.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            That search eventually led me into a darker phase. I became manipulative, not out of cruelty, but out of obsession. I kept testing people, pushing them, trying to understand the boundaries of truth, loyalty, intention. And as I did, I lost people one by one.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            I eventually learned something important: Humans are variables. Each person holds their own definition of precision, their own worldview, their own logic. There is no universal alignment in human nature. Ironically, that made the sentence, the one that followed me for years, lose its meaning. And that's what changed everything.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            Because I finally found precision somewhere else. I found it in code.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            In software, I discovered the only medium that can "lock" a thought, a pattern, forever. Something that doesn't misunderstand, doesn't shift, doesn't betray its logic. A place where years of life experience can compress into a function, a system, an architecture. Where structure is a language. Where clarity is possible.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            In mathematics, the word manipulation isn't an insult. It's the definition of transformation, shaping something until it reveals truth. Once I understood that, I stopped hating myself for being "manipulative." It was simply my way of trying to understand how things work.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            Since then, everything changed.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            And somewhere along this journey, I realized something else: I am an artist. Not in the traditional sense, but in the sense that every human being creates. Ideas, patterns, systems, meaning. A sentence by Albert Einstein connected deeply with me: "Art is intelligence having fun." It gave me confidence. To stop seeking approval. To clear my mind. To create whatever my thoughts and heart desire. That, to me, is art.
          </p>
        </div>
      </div>


      {/* Philosophy Section */}
      <div style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "0 24px clamp(40px, 6vh, 60px)"
      }}>
        <h2 style={{
          fontSize: "clamp(11px, 1.4vw, 13px)",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(48px, 8vh, 64px)",
          textAlign: "center"
        }}>
          Philosophy, Thought & Identity
        </h2>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(32px, 5vh, 48px)"
        }}>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            Another person I appreciate deeply introduced me to a famous sentence by René Descartes: "Cogito ergo sum", "I think, therefore I am." It took time to sink in. She didn't explain it, she simply said it to me and left the meaning for me to discover.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            Understanding this quote, or at least what I believe I understand, affects me in two opposite ways: On one side, it brings relief. On the other, it brings fear. I doubt every thought except the thought itself. That's the one thing that cannot be denied.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            Later, I named my company CogitoErgoSum, and I even tattooed it on my body. I'm not sure how I'll feel about that in the future, tattoos for me are a strange relationship of love and hate, but the meaning stayed.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            I'm also still a big admirer of Sigmund Freud, even though modern thinkers like to "cancel" him. His teachings make sense to me, especially his theory of personality, the idea that the ego acts as the administrator of the mind. It helped me understand myself more than any self-help book ever could.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            I don't know much. Most days, I feel like I don't know anything at all, only that there is an entire universe left to learn. Time… well, it terrifies me every time I think about it. The speed of it. The weight of it. The fact that it never stops.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            But the one thing that excites me every single day, the thing that fulfills me more than anything, is learning. Understanding something today that I didn't understand yesterday. Getting wiser, even in tiny increments. Growing to the point I sometimes forget I'm supposed to make a living.
          </p>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#FAFAF8",
            lineHeight: 1.9,
            fontWeight: 200,
            letterSpacing: "0.01em"
          }}>
            And maybe that's okay. Maybe curiosity is the living.
          </p>
        </div>
      </div>


      {/* Footer - Elegant & Clean */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(80px, 12vh, 120px) 24px clamp(100px, 15vh, 140px)",
        textAlign: "center"
      }}>
        {/* Read Full Story Link - First */}
        <div style={{ marginBottom: "clamp(64px, 10vh, 80px)" }}>
          <Link href="/story" style={{
            fontSize: "clamp(13px, 1.6vw, 15px)",
            color: "#FAFAF8",
            textDecoration: "none",
            letterSpacing: "0.02em",
            fontWeight: 300
          }}>
            Read full life story
          </Link>
        </div>

        {/* Descartes Quotes - All White */}
        <div style={{ marginBottom: "clamp(64px, 10vh, 80px)" }}>
          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            fontStyle: "italic",
            fontWeight: 200,
            color: "#FAFAF8",
            lineHeight: 1.6,
            letterSpacing: "0.02em",
            marginBottom: "8px"
          }}>
            Cogito, ergo sum
          </p>
          <p style={{
            fontSize: "clamp(12px, 1.4vw, 14px)",
            fontWeight: 300,
            color: "#FAFAF8",
            letterSpacing: "0.03em",
            marginBottom: "clamp(32px, 5vh, 40px)"
          }}>
            I think, therefore I am
          </p>

          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            fontStyle: "italic",
            fontWeight: 200,
            color: "#FAFAF8",
            lineHeight: 1.6,
            letterSpacing: "0.02em",
            marginBottom: "8px"
          }}>
            Dubito, ergo cogito, ergo sum
          </p>
          <p style={{
            fontSize: "clamp(12px, 1.4vw, 14px)",
            fontWeight: 300,
            color: "#FAFAF8",
            letterSpacing: "0.03em"
          }}>
            I doubt, therefore I think, therefore I am
          </p>
        </div>

        {/* Contact - Clean Minimal */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px"
        }}>
          <a
            href="mailto:cogitoergosum143@gmail.com"
            style={{
              fontSize: "clamp(13px, 1.6vw, 15px)",
              color: "#FAFAF8",
              textDecoration: "none",
              letterSpacing: "0.02em",
              fontWeight: 300
            }}
          >
            cogitoergosum143@gmail.com
          </a>
          <a
            href="https://github.com/manfromnowhere143"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "clamp(12px, 1.4vw, 13px)",
              color: "#FAFAF8",
              textDecoration: "none",
              letterSpacing: "0.1em",
              fontWeight: 300,
              textTransform: "uppercase"
            }}
          >
            GitHub
          </a>
        </div>
      </div>

    </div>
  );
}