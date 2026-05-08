export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            Demarko.dev
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">
              Services
            </a>
            <a href="#projects" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">
              Contact
            </a>
          </nav>

          <a
            href="https://github.com/dlittle-source"
            target="_blank"
            className="rounded-xl border border-slate-700 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-start px-6 pt-40 pb-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            DevOps + AI Engineering
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            I build and deploy cloud applications and AI-powered internal tools.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I help businesses move from idea to production using AWS, Docker,
            CI/CD automation, Linux, and modern AI integrations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              View Projects
            </a>
            <a href="#contact" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mx-auto max-w-6xl px-6 pb-32">
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Solutions I Provide
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            I help businesses deploy scalable cloud infrastructure, automate
            software delivery pipelines, and build AI-powered internal tools.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-cyan-400">
            <h3 className="text-2xl font-semibold text-white">AWS Cloud Deployments</h3>
            <p className="mt-4 leading-7 text-slate-400">
              Production-ready deployments using AWS EC2, Docker, Linux, Nginx,
              SSL, and modern cloud infrastructure practices.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-cyan-400">
            <h3 className="text-2xl font-semibold text-white">CI/CD Automation</h3>
            <p className="mt-4 leading-7 text-slate-400">
              Automated deployment pipelines using GitHub Actions, Docker,
              rollback workflows, deployment validation, and infrastructure
              automation.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-cyan-400">
            <h3 className="text-2xl font-semibold text-white">AI Internal Tools</h3>
            <p className="mt-4 leading-7 text-slate-400">
              AI-powered dashboards, analyzers, and internal business tools
              using OpenAI integrations and modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-32">
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Production-Ready Engineering Projects
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Real-world cloud, DevOps, and AI projects focused on deployment,
            automation, scalability, and production infrastructure.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition hover:border-cyan-400">
            <img
              src="/images/hero_dashboard.png"
              alt="AI DevOps Error Analyzer dashboard preview"
              className="h-auto w-full border-b border-slate-800 object-cover"
            />

            <div className="p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-3xl font-bold text-white">
                    AI DevOps Error Analyzer
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    AI-powered troubleshooting platform that analyzes DevOps and
                    cloud infrastructure errors using OpenAI integrations,
                    automated analysis workflows, Dockerized deployments, and
                    production-ready backend services.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">OpenAI API</span>
                    <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">Docker</span>
                    <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">AWS</span>
                    <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">CI/CD</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <a
                    href="https://github.com/dlittle-source/ai-devops-error-analyzer-frontend"
                    target="_blank"
                    className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://ai-devops-error-analyzer-frontend.vercel.app/"
                    target="_blank"
                    className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href="/case-studies/ai-devops-error-analyzer"
                    className="rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-cyan-400">
            <h3 className="text-3xl font-bold text-white">
              Docker + Nginx AWS Deployment
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Production-style AWS deployment project using Docker containers,
              Nginx reverse proxy configuration, SSL, Linux administration, and
              deployment validation workflows.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-cyan-400">
            <h3 className="text-3xl font-bold text-white">
              CI/CD Deployment Pipeline
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Automated GitHub Actions deployment pipeline with rollback
              support, deployment health validation, Docker workflows, and
              production infrastructure automation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Let’s build something production-ready.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Need help deploying an application, building a CI/CD pipeline, or
            creating an AI-powered internal tool? I’m available for freelance
            and project-based work.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="mailto:getautonomyos@gmail.com" className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Email Me
            </a>

            <a href="https://github.com/dlittle-source" target="_blank" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Demarko Little. All rights reserved.</p>
          <p>DevOps • AWS • Docker • CI/CD • AI Engineering</p>
        </div>
      </footer>
    </main>
  );
}