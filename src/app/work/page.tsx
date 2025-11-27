import Link from "next/link";

const projects = [
  {
    slug: "trade69",
    title: "Trade69",
    category: "Algorithmic Trading",
    year: "2025",
    description: "Options trading platform combining machine learning, sentiment analysis, and real-time market data for autonomous decision-making.",
  },
  {
    slug: "megaagent",
    title: "MegaAgent",
    category: "Autonomous Systems",
    year: "2025",
    description: "Autonomous opportunity engine that identifies, evaluates, and executes on emerging possibilities without human intervention.",
  },
  {
    slug: "octopus",
    title: "Octopus",
    category: "Multi-Agent Systems",
    year: "2025",
    description: "Multi-agent orchestrator coordinating specialized AI agents to solve complex problems through collaborative intelligence.",
  },
  {
    slug: "overmind",
    title: "Overmind",
    category: "Blockchain",
    year: "2025",
    description: "Cryptocurrency project exploring decentralized autonomous systems with philosophical underpinnings.",
  },
];

export default function Work() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
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
            fontSize: "clamp(32px, 8vw, 42px)", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px"
          }}>
            Selected Work
          </h1>
          <p style={{ 
            fontSize: "15px", 
            color: "#71706E", 
            maxWidth: "400px", 
            margin: "0 auto",
            lineHeight: 1.8
          }}>
            Autonomous systems, trading platforms, and intelligent software.
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
                padding: "32px 0",
                borderBottom: "1px solid #E0DED6",
                textDecoration: "none"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E" }}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: "10px", color: "#71706E" }}>
                    {project.year}
                  </span>
                </div>
                <h2 style={{ 
                  fontFamily: "Playfair Display, Georgia, serif",
                  fontSize: "clamp(24px, 5vw, 30px)", 
                  fontWeight: 400,
                  color: "#1C1C1C"
                }}>
                  {project.title}
                </h2>
                <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.7 }}>
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
