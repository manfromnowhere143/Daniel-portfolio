import Link from "next/link";

const projects = [
  {
    slug: "trade69",
    title: "Trade69",
    category: "Algorithmic Trading",
    year: "2024",
    description: "Options trading platform combining machine learning, sentiment analysis, and real-time market data for autonomous decision-making.",
  },
  {
    slug: "megaagent",
    title: "MegaAgent",
    category: "Autonomous Systems",
    year: "2024",
    description: "Autonomous opportunity engine that identifies, evaluates, and executes on emerging possibilities without human intervention.",
  },
  {
    slug: "octopus",
    title: "Octopus",
    category: "Multi-Agent Systems",
    year: "2024",
    description: "Multi-agent orchestrator coordinating specialized AI agents to solve complex problems through collaborative intelligence.",
  },
  {
    slug: "overmind",
    title: "Overmind",
    category: "Blockchain",
    year: "2024",
    description: "Cryptocurrency project exploring decentralized autonomous systems with philosophical underpinnings.",
  },
];

export default function Work() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 40px" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "80px", textAlign: "center" }}>
          <p style={{ 
            fontSize: "12px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "16px"
          }}>
            Portfolio
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "48px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "24px"
          }}>
            Selected Work
          </h1>
          <p style={{ 
            fontSize: "17px", 
            color: "#71706E", 
            maxWidth: "500px", 
            margin: "0 auto",
            lineHeight: 1.8
          }}>
            A collection of autonomous systems, trading platforms, and intelligent software.
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E" }}>
                      {project.category}
                    </span>
                    <span style={{ fontSize: "11px", color: "#71706E" }}>
                      {project.year}
                    </span>
                  </div>
                  <h2 style={{ 
                    fontFamily: "Playfair Display, Georgia, serif",
                    fontSize: "32px", 
                    fontWeight: 400,
                    color: "#1C1C1C",
                    marginBottom: "12px"
                  }}>
                    {project.title}
                  </h2>
                  <p style={{ fontSize: "15px", color: "#71706E", maxWidth: "600px", lineHeight: 1.7 }}>
                    {project.description}
                  </p>
                </div>
                <div style={{ fontSize: "24px", color: "#1C1C1C" }}>→</div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
