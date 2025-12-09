import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story | Daniel Wahnich",
  description: "The full journey - from Jerusalem to millionaire to loss to rebuilding through code.",
};

export default function Story() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Header */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(20px, 4vh, 40px) 24px clamp(50px, 8vh, 70px)",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 2vh, 24px)"
        }}>
          The Full Story
        </p>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 40px)",
          fontWeight: 200,
          color: "#FAFAF8",
          letterSpacing: "-0.01em"
        }}>
          How I Got Here
        </h1>
      </div>

      {/* Story Content */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px clamp(80px, 12vh, 120px)" }}>

        <div style={{ marginBottom: "clamp(48px, 8vh, 64px)" }}>
          <p style={{
            fontSize: "12px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            marginBottom: "clamp(20px, 3vh, 28px)",
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "16px"
          }}>
            1988–2004
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            I was born in Jerusalem. At the age of 8 my parents divorced, and my father disappeared from my life for three years. I was a difficult kid, kicked out of every school I attended. I can't blame the divorce, because my brothers and sister did well, but for me it was deeply traumatic.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, fontWeight: 300 }}>
            I loved being a goalkeeper and I loved rollerblading. Those were my escapes.
          </p>
        </div>

        <div style={{ marginBottom: "clamp(48px, 8vh, 64px)" }}>
          <p style={{
            fontSize: "12px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            marginBottom: "clamp(20px, 3vh, 28px)",
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "16px"
          }}>
            2005–2007
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            At 16, I made a decision that changed everything: I quit school, left Israel, and moved alone to the USA with $500 in my pocket.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, fontWeight: 300 }}>
            I worked hard, saved what I could, and after a year and a half I returned home to serve in the army.
          </p>
        </div>

        <div style={{ marginBottom: "clamp(48px, 8vh, 64px)" }}>
          <p style={{
            fontSize: "12px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            marginBottom: "clamp(20px, 3vh, 28px)",
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "16px"
          }}>
            2007–2010
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            I joined Duchifat (IDF Ground Forces). It wasn't easy. I lost a good friend, Noam, who was accidentally shot by a senior officer. That moment stayed with me forever.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            In the last 6 months of service, I was given the chance to finish high school. It was so easy for me that I sometimes switched places with the math teacher and taught the class myself.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, fontWeight: 300 }}>
            When I finished the army, I thought I wanted to go to the Technion. My brother, who was studying there, taught me math to help me prepare. But my heart was still in America, so I moved back.
          </p>
        </div>

        <div style={{ marginBottom: "clamp(48px, 8vh, 64px)" }}>
          <p style={{
            fontSize: "12px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            marginBottom: "clamp(20px, 3vh, 28px)",
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "16px"
          }}>
            2010–2017
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            I worked as a sales manager for two years before deciding to start my own business with two friends. We opened our first location in Denver and it took off fast. Within a year I saved a few hundred thousand dollars. But we were young and stupid, and we managed to destroy it.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            So I started again. This time I opened six prime locations across the U.S. in four years.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, fontWeight: 300 }}>
            At 28, I became a self-made millionaire.
          </p>
        </div>

        <div style={{ marginBottom: "clamp(48px, 8vh, 64px)" }}>
          <p style={{
            fontSize: "12px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            marginBottom: "clamp(20px, 3vh, 28px)",
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "16px"
          }}>
            2017–2021
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            But money didn't fulfill me. I felt empty. So I sold everything to my manager and went searching for purpose.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            For the next five years I travelled the world. India, Thailand, Mexico, Europe. I bought an apartment in Tel Aviv and went deep into trading crypto and stocks. I didn't know it then, but it was my gambling era.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            When COVID hit in 2020, I was in Vietnam. I saw opportunity, flew home, sold my apartment, and went all-in. At first it worked. Like everyone else, I made a lot. Almost eight figures.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            I moved to Tulum and thought I had made it.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, fontWeight: 300 }}>
            Then came May 2021. The famous "Elon crash." I was greedy. I had 2x leverage on my entire net worth. In one night, I lost 90% of everything.
          </p>
        </div>

        <div style={{ marginBottom: "clamp(48px, 8vh, 64px)" }}>
          <p style={{
            fontSize: "12px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            marginBottom: "clamp(20px, 3vh, 28px)",
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "16px"
          }}>
            2021–2024
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            My mental health collapsed. My family distanced themselves. My friends disappeared. I became impossible to deal with.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            My brother's last sentence to me still echoes: "You're going to lose everything." He was right.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            For two years I kept gambling trying to recover, and lost what was left. Eventually I gave up and hid. I lived in the jungle of Tulum so no one I knew would see me.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, fontWeight: 300 }}>
            People used to tell me I was smart, special. But I felt like the stupidest man alive.
          </p>
        </div>

        <div style={{ marginBottom: "0" }}>
          <p style={{
            fontSize: "12px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            marginBottom: "clamp(20px, 3vh, 28px)",
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "16px"
          }}>
            2024
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            When I was done grieving, I made a decision that saved my life: I taught myself Computer Science and Software Development.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            No courses. No classes. Just me, YouTube, documentation, and a burning need to rebuild myself.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            I started by Googling how to open the Terminal on my Mac. Slowly, I built websites, APIs, databases, tests, complete systems. For the first time, my thoughts turned into something real on a screen, and I felt alive.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, marginBottom: "16px", fontWeight: 300 }}>
            Today I'm 37, and excited about the future. I rose from the darkest place a person can be.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", color: "#FAFAF8", lineHeight: 1.9, fontWeight: 300 }}>
            Now I dedicate every day to learning, building, and becoming the best version of myself.
          </p>
          <p style={{
            fontSize: "clamp(13px, 1.8vw, 14px)",
            fontStyle: "italic",
            color: "#FAFAF8",
            marginTop: "clamp(32px, 5vh, 48px)",
            letterSpacing: "0.03em"
          }}>
            And we are here — 2025
          </p>
        </div>

      </div>

      {/* Quote Section */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(60px, 10vh, 80px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "clamp(13px, 2vw, 15px)",
          fontWeight: 200,
          color: "#FAFAF8",
          lineHeight: 1.8,
          letterSpacing: "0.04em",
          marginBottom: "20px"
        }}>
          "If I am not for myself, who will be for me? And if I am only for myself, what am I? And if not now, when?"
        </p>
        <p style={{
          fontSize: "11px",
          color: "#FAFAF8",
          letterSpacing: "0.15em",
          textTransform: "uppercase"
        }}>
          Hillel the Elder
        </p>
      </div>

      {/* Navigation */}
      <div style={{
        borderTop: "1px solid #1C1C1C",
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Link href="/" style={{
            fontSize: "11px",
            color: "#FAFAF8",
            textDecoration: "none",
            letterSpacing: "0.12em",
            textTransform: "uppercase"
          }}>
            About
          </Link>
        </div>
      </div>

    </div>
  );
}
