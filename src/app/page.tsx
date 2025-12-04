import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      
      {/* Hero Section - Whisper Quiet */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "clamp(20px, 4vh, 40px) 24px clamp(60px, 10vh, 80px)",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(42px, 6vw, 58px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 2vh, 20px)",
          letterSpacing: "-0.01em",
          lineHeight: 1.1
        }}>
          Daniel Wahnich
        </h1>
        <p style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(16px, 2vw, 20px)", 
          fontStyle: "italic",
          fontWeight: 300,
          color: "#666666",
          letterSpacing: "0.15em",
          marginBottom: "clamp(32px, 5vh, 48px)"
        }}>
          Ostinato Rigore
        </p>
        <p style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(18px, 2.5vw, 24px)", 
          fontWeight: 300,
          color: "#999999",
          letterSpacing: "0.05em",
          lineHeight: 1.4
        }}>
          Artist, Autodidact, Builder
        </p>
      </div>

      {/* Subtle Divider - White */}
      <div style={{
        width: "1px",
        height: "40px",
        backgroundColor: "#FAFAF8",
        margin: "0 auto clamp(50px, 8vh, 70px)"
      }} />

      {/* Main Story - Authentic Voice */}
      <div style={{ 
        maxWidth: "720px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 80px)"
      }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "clamp(32px, 5vh, 48px)" 
        }}>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            My path wasn't linear, not even close. I started in retail, working with people every day, trying to understand them. Someone I admired once told me: "Your soul is walking around the world looking for precision." I didn't fully understand it then, but I lived it. I suffered from it. I searched for it everywhere.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            That search eventually led me into a darker phase. I became manipulative, not out of cruelty, but out of obsession. I kept testing people, pushing them, trying to understand the boundaries of truth, loyalty, intention. And as I did, I lost people one by one.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            I eventually learned something important: Humans are variables. Each person holds their own definition of precision, their own worldview, their own logic. There is no universal alignment in human nature. Ironically, that made the sentence, the one that followed me for years, lose its meaning. And that's what changed everything.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            Because I finally found precision somewhere else. I found it in code.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            In software, I discovered the only medium that can "lock" a thought, a pattern, forever. Something that doesn't misunderstand, doesn't shift, doesn't betray its logic. A place where years of life experience can compress into a function, a system, an architecture. Where structure is a language. Where clarity is possible.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            In mathematics, the word manipulation isn't an insult. It's the definition of transformation, shaping something until it reveals truth. Once I understood that, I stopped hating myself for being "manipulative." It was simply my way of trying to understand how things work.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            Since then, everything changed.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            And somewhere along this journey, I realized something else: I am an artist. Not in the traditional sense, but in the sense that every human being creates. Ideas, patterns, systems, meaning. A sentence by Albert Einstein connected deeply with me: "Art is intelligence having fun." It gave me confidence. To stop seeking approval. To clear my mind. To create whatever my thoughts and heart desire. That, to me, is art.
          </p>
        </div>
      </div>

      {/* Vertical Divider - White */}
      <div style={{
        width: "1px",
        height: "50px",
        backgroundColor: "#FAFAF8",
        margin: "clamp(60px, 10vh, 80px) auto"
      }} />

      {/* Philosophy Section */}
      <div style={{ 
        maxWidth: "720px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 80px)"
      }}>
        <h2 style={{ 
          fontSize: "clamp(11px, 1.4vw, 13px)", 
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#4D4D4D",
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
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            Another person I appreciate deeply introduced me to a famous sentence by René Descartes: "Cogito ergo sum", "I think, therefore I am." It took time to sink in. She didn't explain it, she simply said it to me and left the meaning for me to discover.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            Understanding this quote, or at least what I believe I understand, affects me in two opposite ways: On one side, it brings relief. On the other, it brings fear. I doubt every thought except the thought itself. That's the one thing that cannot be denied.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            Later, I named my company CogitoErgoSum, and I even tattooed it on my body. I'm not sure how I'll feel about that in the future, tattoos for me are a strange relationship of love and hate, but the meaning stayed.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            I'm also still a big admirer of Sigmund Freud, even though modern thinkers like to "cancel" him. His teachings make sense to me, especially his theory of personality, the idea that the ego acts as the administrator of the mind. It helped me understand myself more than any self-help book ever could.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            Another sentence that shaped me is by Leonardo da Vinci: "Ostinato Rigore", "Persistent Rigour." I learned it recently, reading someone I truly admire. When I was eighteen, I trusted him enough to tattoo another word he once gave me, "Veritas" (truthfulness). He abandoned the sentence, but I never did.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            "Ostinato Rigore" aligned with me immediately. It became my motto. Don't worry, I'm not planning to tattoo it. I'm probably done with tattoos… at least for now.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            I don't know much. Most days, I feel like I don't know anything at all, only that there is an entire universe left to learn. Time… well, it terrifies me every time I think about it. The speed of it. The weight of it. The fact that it never stops.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            But the one thing that excites me every single day, the thing that fulfills me more than anything, is learning. Understanding something today that I didn't understand yesterday. Getting wiser, even in tiny increments. Growing to the point I sometimes forget I'm supposed to make a living.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            And maybe that's okay. Maybe curiosity is the living.
          </p>
        </div>
      </div>

      {/* Vertical Divider - White */}
      <div style={{
        width: "1px",
        height: "50px",
        backgroundColor: "#FAFAF8",
        margin: "clamp(60px, 10vh, 80px) auto"
      }} />

      {/* Read Full Life Story Link */}
      <div style={{ 
        maxWidth: "700px", 
        margin: "0 auto", 
        padding: "0 24px clamp(48px, 8vh, 64px)",
        textAlign: "center"
      }}>
        <Link href="/story" style={{ 
          fontSize: "clamp(14px, 1.8vw, 15px)",
          color: "#CCCCCC", 
          textDecoration: "none", 
          borderBottom: "1px solid #333333",
          paddingBottom: "3px",
          letterSpacing: "0.02em",
          fontStyle: "italic"
        }}>
          Read full life story
        </Link>
      </div>

      {/* Vertical Divider - White */}
      <div style={{
        width: "1px",
        height: "50px",
        backgroundColor: "#FAFAF8",
        margin: "clamp(60px, 10vh, 80px) auto"
      }} />

      {/* What I Build - Minimalist Grid */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 80px)"
      }}>
        <h2 style={{ 
          fontSize: "clamp(11px, 1.4vw, 13px)", 
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#4D4D4D",
          marginBottom: "clamp(64px, 10vh, 96px)",
          textAlign: "center"
        }}>
          Selected Work
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", 
          gap: "1px",
          backgroundColor: "#1A1A1A"
        }}>
          
          <div style={{ 
            padding: "clamp(48px, 7vw, 64px)",
            backgroundColor: "#0A0A0A"
          }}>
            <h3 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 28px)", 
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: "clamp(20px, 3vh, 24px)",
              letterSpacing: "-0.01em"
            }}>
              Trade69
            </h3>
            <p style={{ 
              fontSize: "clamp(14px, 1.8vw, 15px)", 
              color: "#666666", 
              lineHeight: 1.8,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Algorithmic trading platform. 245 Python files, 32K+ lines, 11 data sources. HMM regime detection, Random Forest classifiers, Kelly Criterion sizing.
            </p>
          </div>

          <div style={{ 
            padding: "clamp(48px, 7vw, 64px)",
            backgroundColor: "#0A0A0A"
          }}>
            <h3 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 28px)", 
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: "clamp(20px, 3vh, 24px)",
              letterSpacing: "-0.01em"
            }}>
              MegaAgent
            </h3>
            <p style={{ 
              fontSize: "clamp(14px, 1.8vw, 15px)", 
              color: "#666666", 
              lineHeight: 1.8,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Multi-agent autonomous system. 365 Python files, 258K lines. Markowitz portfolio optimization with CVaR, LinUCB Thompson Sampling, circuit breaker patterns.
            </p>
          </div>

          <div style={{ 
            padding: "clamp(48px, 7vw, 64px)",
            backgroundColor: "#0A0A0A"
          }}>
            <h3 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 28px)", 
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: "clamp(20px, 3vh, 24px)",
              letterSpacing: "-0.01em"
            }}>
              Octopus
            </h3>
            <p style={{ 
              fontSize: "clamp(14px, 1.8vw, 15px)", 
              color: "#666666", 
              lineHeight: 1.8,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Cognitive agent framework. 5 decomposition strategies, tri-store memory (semantic, episodic, procedural), NetworkX DAG, meta-reflection with blind spot detection.
            </p>
          </div>

        </div>
      </div>

      {/* Vertical Divider - White */}
      <div style={{
        width: "1px",
        height: "50px",
        backgroundColor: "#FAFAF8",
        margin: "clamp(60px, 10vh, 80px) auto"
      }} />

      {/* Technical Focus - Ultra Minimal */}
      <div style={{ 
        maxWidth: "1100px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 80px)"
      }}>
        <h2 style={{ 
          fontSize: "clamp(11px, 1.4vw, 13px)", 
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#4D4D4D",
          marginBottom: "clamp(64px, 10vh, 96px)",
          textAlign: "center"
        }}>
          Technical Focus
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", 
          gap: "clamp(56px, 9vw, 96px)"
        }}>
          
          <div style={{ textAlign: "center" }}>
            <h3 style={{ 
              fontSize: "clamp(12px, 1.5vw, 14px)", 
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#4D4D4D",
              marginBottom: "clamp(28px, 5vh, 40px)"
            }}>
              Focus Areas
            </h3>
            <p style={{ 
              fontSize: "clamp(15px, 1.9vw, 17px)", 
              color: "#808080", 
              lineHeight: 2.2,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Algorithmic Trading<br/>
              Multi-Agent Systems<br/>
              Autonomous Software<br/>
              Machine Learning<br/>
              Cognitive Architecture
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ 
              fontSize: "clamp(12px, 1.5vw, 14px)", 
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#4D4D4D",
              marginBottom: "clamp(28px, 5vh, 40px)"
            }}>
              Core Stack
            </h3>
            <p style={{ 
              fontSize: "clamp(15px, 1.9vw, 17px)", 
              color: "#808080", 
              lineHeight: 2.2,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Python<br/>
              PostgreSQL / MongoDB<br/>
              FastAPI<br/>
              scikit-learn / PyTorch<br/>
              Redis
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ 
              fontSize: "clamp(12px, 1.5vw, 14px)", 
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#4D4D4D",
              marginBottom: "clamp(28px, 5vh, 40px)"
            }}>
              Techniques
            </h3>
            <p style={{ 
              fontSize: "clamp(15px, 1.9vw, 17px)", 
              color: "#808080", 
              lineHeight: 2.2,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Hidden Markov Models<br/>
              Kelly Criterion<br/>
              Contextual Bandits<br/>
              Portfolio Optimization<br/>
              Event Sourcing
            </p>
          </div>

        </div>
      </div>

      {/* Vertical Divider - White */}
      <div style={{
        width: "1px",
        height: "50px",
        backgroundColor: "#FAFAF8",
        margin: "clamp(60px, 10vh, 80px) auto"
      }} />

      {/* Contact - Minimal */}
      <div style={{ 
        maxWidth: "700px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 80px)",
        textAlign: "center"
      }}>
        <h2 style={{ 
          fontSize: "clamp(11px, 1.4vw, 13px)", 
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#4D4D4D",
          marginBottom: "clamp(48px, 8vh, 64px)"
        }}>
          Contact
        </h2>
        <p style={{ 
          fontSize: "clamp(15px, 1.9vw, 17px)", 
          color: "#808080",
          marginBottom: "clamp(24px, 4vh, 32px)",
          letterSpacing: "0.01em"
        }}>
          <a href="mailto:cogitoergosum143@gmail.com" style={{ 
            color: "#CCCCCC", 
            textDecoration: "none", 
            borderBottom: "1px solid #333333",
            paddingBottom: "2px"
          }}>
            cogitoergosum143@gmail.com
          </a>
        </p>
        <p style={{ 
          fontSize: "clamp(15px, 1.9vw, 17px)", 
          color: "#808080",
          letterSpacing: "0.01em"
        }}>
          <a href="https://github.com/manfromnowhere143" target="_blank" rel="noopener noreferrer" style={{ 
            color: "#CCCCCC", 
            textDecoration: "none", 
            borderBottom: "1px solid #333333",
            paddingBottom: "2px"
          }}>
            GitHub
          </a>
        </p>
      </div>

      {/* Final Statement - Whisper */}
      <div style={{ 
        backgroundColor: "#000000",
        padding: "clamp(100px, 15vh, 140px) 24px"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(24px, 4vw, 36px)", 
            fontWeight: 300,
            color: "#E6E6E6",
            lineHeight: 1.6,
            letterSpacing: "-0.01em"
          }}>
            Intelligence that scales.<br/>Systems that adapt, decide, and execute<br/>without waiting for permission.
          </p>
        </div>
      </div>

    </div>
  );
}
