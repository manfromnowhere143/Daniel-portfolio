import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story | Daniel Wahnich",
  description: "The full journey - from Jerusalem to millionaire to loss to rebuilding through code.",
};

export default function Story() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Header */}
      <div style={{ 
        maxWidth: "700px", 
        margin: "0 auto", 
        padding: "80px 24px 60px",
        textAlign: "center"
      }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.3em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "20px"
        }}>
          The Full Story
        </p>
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(36px, 8vw, 48px)", 
          fontWeight: 400,
          color: "#1C1C1C",
          marginBottom: "24px"
        }}>
          How I Got Here
        </h1>
      </div>

      {/* Story Content */}
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px 80px" }}>
        
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px",
            borderLeft: "3px solid #1C1C1C",
            paddingLeft: "16px"
          }}>
            Jerusalem to Chaos
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            I was born in Jerusalem. At the age of 8 my parents divorced, and my father disappeared from my life for three years. I was a difficult kid, kicked out of every school I attended. I can't blame the divorce, because my brothers and sister did well, but for me it was deeply traumatic.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8 }}>
            I loved being a goalkeeper and I loved rollerblading. Those were my escapes.
          </p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px",
            borderLeft: "3px solid #1C1C1C",
            paddingLeft: "16px"
          }}>
            Leaving Home at 16
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            At 16, I made a decision that changed everything: I quit school, left Israel, and moved alone to the USA with $500 in my pocket.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8 }}>
            I worked hard, saved what I could, and after a year and a half I returned home to serve in the army.
          </p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px",
            borderLeft: "3px solid #1C1C1C",
            paddingLeft: "16px"
          }}>
            IDF, Loss & Growth
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            I joined Duchifat (IDF Ground Forces). It wasn't easy. I lost a good friend, Noam, who was accidentally shot by a senior officer. That moment stayed with me forever.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            In the last 6 months of service, I was given the chance to finish high school. It was so easy for me that I sometimes switched places with the math teacher and taught the class myself.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8 }}>
            When I finished the army, I thought I wanted to go to the Technion. My brother, who was studying there, taught me math to help me prepare. But my heart was still in America, so I moved back.
          </p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px",
            borderLeft: "3px solid #1C1C1C",
            paddingLeft: "16px"
          }}>
            The First Rise
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            I worked as a sales manager for two years before deciding to start my own business with two friends. We opened our first location in Denver and it took off fast. Within a year I saved a few hundred thousand dollars. But we were young and stupid, and we managed to destroy it.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            So I started again. This time I opened six prime locations across the U.S. in four years.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8 }}>
            At 28, I became a self-made millionaire.
          </p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px",
            borderLeft: "3px solid #1C1C1C",
            paddingLeft: "16px"
          }}>
            The Fall
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            But money didn't fulfill me. I felt empty. So I sold everything to my manager and went searching for purpose.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            For the next five years I travelled the world. India, Thailand, Mexico, Europe. I bought an apartment in Tel Aviv and went deep into trading crypto and stocks. I didn't know it then, but it was my gambling era.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            When COVID hit in 2020, I was in Vietnam. I saw opportunity, flew home, sold my apartment, and went all-in. At first it worked. Like everyone else, I made a lot. Almost eight figures.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            I moved to Tulum and thought I had made it.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8 }}>
            Then came May 2021. The famous "Elon crash." I was greedy. I had 2x leverage on my entire net worth. In one night, I lost 90% of everything.
          </p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px",
            borderLeft: "3px solid #1C1C1C",
            paddingLeft: "16px"
          }}>
            The Dark Years
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            My mental health collapsed. My family distanced themselves. My friends disappeared. I became impossible to deal with.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            My brother's last sentence to me still echoes: "You're going to lose everything." He was right.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            For two years I kept gambling trying to recover, and lost what was left. Eventually I gave up and hid. I lived in the jungle of Tulum so no one I knew would see me.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8 }}>
            People used to tell me I was smart, special. But I felt like the stupidest man alive.
          </p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px",
            borderLeft: "3px solid #1C1C1C",
            paddingLeft: "16px"
          }}>
            The Rebirth Through Code
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            When I was done grieving, I made a decision that saved my life: I taught myself Computer Science and Software Development.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            No courses. No classes. Just me, YouTube, documentation, and a burning need to rebuild myself.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            I started by Googling how to open the Terminal on my Mac. Slowly, I built websites, APIs, databases, tests, complete systems. For the first time, my thoughts turned into something real on a screen, and I felt alive.
          </p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px",
            borderLeft: "3px solid #1C1C1C",
            paddingLeft: "16px"
          }}>
            Where I Am Today
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            Today I'm 37, and excited about the future. I rose from the darkest place a person can be.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8 }}>
            Now I dedicate every day to learning, building, and becoming the best version of myself.
          </p>
        </div>

      </div>

      {/* Quote Section */}
      <div style={{ 
        backgroundColor: "#1C1C1C",
        padding: "80px 24px"
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontStyle: "italic",
            color: "#FAFAF8",
            lineHeight: 1.6
          }}>
            "The obstacle is the way. The path through darkness leads to light."
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center"
        }}>
          <Link href="/" style={{ fontSize: "13px", color: "#71706E", textDecoration: "none" }}>
            ← Back to About
          </Link>
        </div>
      </div>

    </div>
  );
}
