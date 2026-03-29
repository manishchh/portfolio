export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a href="#about" className="text-lg font-semibold">
            Your Name
          </a>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#other">Other</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col px-6 py-4 md:py-6">
        <section
          id="about"
          className="grid min-h-[68vh] scroll-mt-24 gap-8 border-b py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:items-center md:gap-12 md:py-10"
        >
          <div className="order-1 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Manish Chhetri
            </h1>
            <h2 className="max-w-2xl text-xl text-muted-foreground md:text-2xl">
              Aspiring Software Engineer driven by curiosity and learning.
            </h2>

            <div className="max-w-2xl space-y-4 text-base leading-9 text-muted-foreground">
              <p>
                I’m a Software Engineering graduate from the University of South Australia, 
                where I completed my Bachelor of Software Engineering (Honours).During my 
                studies, I developed a strong interest in full-stack development, 
                AI applications, and secure software design, while building solid foundations in
                software architecture, data structures, machine learning, and problem-solving.
              </p>
              <p>
                I&apos;ve always believed that the best way to grow is to take
                on new challenges, step outside your comfort zone, and learn
                through experience. From building an AI-assisted grading tool
                through my honours research to developing secure real-time
                messaging applications and interactive data dashboards, I enjoy
                breaking down complex problems and turning ideas into practical,
                user-focused solutions.
              </p>
              <p>
                Beyond technical projects, I&apos;ve also strengthened my
                leadership and communication skills as a Uni Mentor, while the
                Competitive Programming Club has helped me sharpen my analytical
                thinking and problem-solving under pressure. Check out some of
                the projects I&apos;ve worked on below.
              </p>
            </div>
          </div>

          <div className="order-2 flex min-h-[320px] items-center justify-center md:justify-end">
            <div className="flex size-72 shrink-0 items-center justify-center rounded-full border">
              <p className="text-sm text-muted-foreground">
                Image placeholder
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-24 border-b py-16">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground"></p>
        </section>

        <section id="projects" className="scroll-mt-24 border-b py-16">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground"></p>
        </section>

        <section id="experience" className="scroll-mt-24 border-b py-16">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground"></p>
        </section>

        <section id="other" className="scroll-mt-24 border-b py-16">
          <h2 className="text-2xl font-semibold">Other</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground"></p>
        </section>

        <section id="contact" className="scroll-mt-24 py-16">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground"></p>
        </section>
      </main>
    </div>
  );
}
