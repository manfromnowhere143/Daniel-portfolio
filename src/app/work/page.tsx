import Link from "next/link";

const projects = [
  {
    slug: "trade69",
    title: "Trade69",
    category: "Algorithmic Trading",
    year: "2025",
    stats: "245 files · 32K+ lines · 11 data sources",
    description: "End-to-end trading platform integrating StockTwits, Reddit, dark pools, and SEC filings. HMM regime detection, Random Forest classifiers, Kelly Criterion sizing.",
  },
  {
    slug: "megaagent",
    title: "MegaAgent",
    category: "Autonomous Systems",
    year: "2025",
    stats: "365 files · 258K lines · 12 modules",
    description: "Multi-agent system with Markowitz portfolio optimization, LinUCB contextual bandits, Thompson Sampling, and circuit breaker patterns with anomaly detection.",
  },
  {
    slug: "octopus",
    title: "Octopus",
    category: "Cognitive Framework",
    year: "2025",
    stats: "v0.1.0 · 5 strategies · 3 memory stores",
    description: "Goal decomposition with DAG task graphs. Tri-store memory: semantic, episodic, procedural. Meta-reflection with blind spot detection.",
  },
  {
    slug: "overmind",
    title: "Overmind",
    category: "Blockchain",
    year: "2025",
    stats: "Solana · SPL Token",
    description: "Cryptocurrency exploring decentralized autonomous systems with philosophical foundations rooted in Buddhist concepts of interconnected consciousness.",
  },
];

export default function Work() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "80px", textAlign: "center" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.25em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "16px"
          }}>
            Portfolio
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(36px, 8vw, 48px)", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px"
          }}>
            Selected Work
          </h1>
          <p style={{ 
            fontSize: "16px", 
            color: "#71706E", 
            maxWidth: "500px", 
            margin: "0 auto",
            lineHeight: 1.8
          }}>
            Autonomous systems built with stubborn rigor. Real code, real capabilities.
          </p>
        </div>

        {/* Projects List */}
        <div style={{ borderTop: "1px solid #E0DED6" }}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              style={{
                display: "block",
                padding: "40px 0",
                borderBottom: "1px solid #E0DED6",
                textDecoration: "none"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E" }}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: "11px", color: "#E0DED6" }}>·</span>
                  <span style={{ fontSize: "11px", color: "#71706E" }}>
                    {project.stats}
                  </span>
                </div>
                <h2 style={{ 
                  fontFamily: "Playfair Display, Georgia, serif",
                  fontSize: "clamp(28px, 5vw, 36px)", 
                  fontWeight: 400,
                  color: "#1C1C1C"
                }}>
                  {project.title}
                </h2>
                <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8, maxWidth: "700px" }}>
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
