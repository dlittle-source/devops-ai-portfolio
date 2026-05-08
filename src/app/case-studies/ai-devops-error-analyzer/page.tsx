export default function AiDevOpsCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-white">
            Demarko.dev
          </a>

          <a
            href="/"
            className="rounded-xl border border-slate-700 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Back to Portfolio
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Engineering Case Study
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          AI DevOps Error Analyzer
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          AI-powered DevOps troubleshooting platform designed to analyze
          infrastructure and application errors, identify root causes, assess
          severity, and generate remediation guidance using OpenAI APIs.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://ai-devops-error-analyzer-frontend.vercel.app/"
            target="_blank"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/dlittle-source/ai-devops-error-analyzer-frontend"
            target="_blank"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Hero Dashboard Screenshot */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">
          <img
            src="/images/hero_dashboard.png"
            alt="AI DevOps Error Analyzer dashboard"
            className="w-full border-b border-slate-800 object-cover"
          />

          <div className="grid gap-8 p-8 md:grid-cols-4">
            {["OpenAI API", "Docker", "Vercel", "Render"].map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center text-sm font-semibold text-cyan-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Screenshots */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Analysis Workflow */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">
            <img
              src="/images/analysis_screen.png"
              alt="AI analysis screen"
              className="w-full object-cover"
            />

            <div className="border-t border-slate-800 p-6">
              <h3 className="text-xl font-semibold text-white">
                Infrastructure Analysis Workflow
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                The platform analyzes infrastructure and application failures,
                identifies likely root causes, and generates operational
                remediation guidance using structured AI workflows.
              </p>
            </div>
          </div>

          {/* AI Results Cards */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">
            <img
              src="/images/ai_cards_results.png"
              alt="AI remediation cards"
              className="w-full object-cover"
            />

            <div className="border-t border-slate-800 p-6">
              <h3 className="text-xl font-semibold text-white">
                AI Remediation Results
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                AI-generated analysis cards provide severity classification,
                remediation recommendations, operational insights, and
                troubleshooting guidance designed for DevOps workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Grid */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 lg:grid-cols-2">
        <CaseStudyCard title="Problem">
          Troubleshooting infrastructure and application failures can consume
          significant engineering time, especially during high-pressure
          incidents. Engineers often need to manually analyze logs, identify
          likely root causes, and determine remediation steps across multiple
          systems.
        </CaseStudyCard>

        <CaseStudyCard title="Solution">
          I built an AI-powered troubleshooting platform that allows users to
          submit DevOps logs, application errors, and infrastructure failures.
          The system analyzes the issue, identifies likely causes, classifies
          severity, and generates remediation guidance.
        </CaseStudyCard>

        <CaseStudyCard title="Architecture">
          The application uses a modern frontend hosted on Vercel, a Node.js
          and Express backend hosted on Render, OpenAI API integration for
          structured analysis, and Docker-based workflows for consistent
          application packaging and deployment.
        </CaseStudyCard>

        <CaseStudyCard title="DevOps Engineering Focus">
          This project demonstrates cloud deployment, frontend/backend
          integration, REST API design, Docker containerization, environment
          configuration, production troubleshooting, and operational workflow
          design.
        </CaseStudyCard>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="text-3xl font-bold text-white">Key Features</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "AI-powered error analysis",
              "Root cause identification",
              "Severity assessment",
              "Remediation recommendations",
              "Responsive dashboard interface",
              "REST API architecture",
              "Dockerized backend workflow",
              "Cloud-hosted frontend and backend",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-slate-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="text-3xl font-bold text-white">
            Challenges & Lessons Learned
          </h2>

          <div className="mt-8 space-y-6 text-slate-300">
            <p>
              <strong className="text-white">API Integration:</strong> Building
              structured AI responses required careful handling of backend
              prompts, response formatting, and frontend rendering.
            </p>

            <p>
              <strong className="text-white">Deployment Troubleshooting:</strong>{" "}
              Hosting the frontend and backend separately required debugging
              environment variables, CORS, routing, and API connectivity.
            </p>

            <p>
              <strong className="text-white">Operational Design:</strong> The
              app needed to provide clear remediation steps instead of generic
              AI responses, making the output useful for DevOps troubleshooting.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-white">
            Interested in Cloud, DevOps, or AI-powered operational tooling?
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            This project represents my focus on combining cloud infrastructure,
            DevOps automation, and AI-powered tools to solve real operational
            problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:getautonomyos@gmail.com"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Contact Me
            </a>

            <a
              href="/"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Back to Portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function CaseStudyCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-cyan-400">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-4 leading-8 text-slate-400">{children}</p>
    </div>
  );
}