import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { GlowCard } from "@/components/ui/spotlight-card";
import { Text_03 } from "@/components/ui/wave-text";

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

            <div className="max-w-2xl space-y-4 text-justify text-base leading-9 text-muted-foreground">
              <p>
                I&apos;m a Software Engineering graduate from the University of
                South Australia, where I completed my Bachelor of Software
                Engineering. During my studies, I developed a strong interest in
                full-stack development, AI applications, and secure software
                design, while building solid foundations in software
                architecture, data structures, machine learning, and
                problem-solving.
              </p>
              <p>
                I&apos;ve always believed that the best way to grow is to take
                on new challenges, step outside your comfort zone, and learn
                through experience. From building an AI-assisted grading tool
                through my research to developing secure real-time messaging
                applications and interactive data dashboards, I enjoy breaking
                down complex problems and turning ideas into practical,
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
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
            <div className="h-1 w-16 bg-primary" />
          </div>

          <div className="mt-10 space-y-8">
            <GlowCard
              customSize
              glowColor="blue"
              className="w-full rounded-[28px] bg-[#151515] px-6 py-6 md:px-8 md:py-8"
            >
                <div className="grid gap-6 md:grid-cols-[140px_minmax(0,1fr)]">
                  <Link
                    href="https://unisa.edu.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-28 w-28 items-center justify-center border border-white/80 bg-white transition-opacity hover:opacity-90"
                  >
                    <Image
                      src="/unsia.png"
                      alt="University of South Australia logo"
                      width={112}
                      height={112}
                      className="h-full w-full object-contain p-2"
                    />
                  </Link>

                  <div className="space-y-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="space-y-2">
                        <Link
                          href="https://unisa.edu.au/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Text_03
                            text="University of South Australia"
                            className="text-left text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
                          />
                        </Link>
                        <p className="max-w-3xl text-xl font-medium leading-9 text-foreground">
                          Bachelor of Software Engineering (Honours)
                        </p>
                        <div className="flex items-center gap-2 text-base text-muted-foreground">
                          <MapPin className="size-4 text-primary" />
                          <span>Adelaide, Australia</span>
                        </div>
                      </div>

                      <p className="shrink-0 text-lg text-muted-foreground">
                        2022 - 2025
                      </p>
                    </div>

                    <div className="max-w-4xl space-y-4 text-justify text-lg leading-9 text-white">
                      <p>
                        <span className="text-muted-foreground">
                          Relevant Coursework:
                        </span>{" "}
                        Data Structures and Algorithms, Object Oriented
                        Programming, AI and Machine Learning, Agile
                        Development, System Architecture, Software Development
                        Life Cycle (SDLC), Secure Coding Practices and IT
                        Governance, Design Patterns, Cisco Networking
                        Fundamentals
                      </p>

                      <div className="h-px w-full bg-white/12" />

                      <p>
                        <span className="text-muted-foreground">
                          Advanced Electives:
                        </span>{" "}
                        Data Science and Visualisation (Postgraduate Course)
                      </p>
                    </div>
                  </div>
                </div>
            </GlowCard>

            <GlowCard
              customSize
              glowColor="blue"
              className="w-full rounded-[28px] bg-[#151515] px-6 py-6 md:px-8 md:py-8"
            >
              <div className="grid gap-6 md:grid-cols-[140px_minmax(0,1fr)]">
                <Link
                  href="https://www.saibt.sa.edu.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-28 w-28 items-center justify-center border border-white/80 bg-white transition-opacity hover:opacity-90"
                >
                  <Image
                    src="/saibt.png"
                    alt="SAIBT logo"
                    width={112}
                    height={112}
                    className="h-full w-full object-contain p-2"
                  />
                </Link>

                <div className="space-y-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                        <Link
                          href="https://www.saibt.sa.edu.au/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block max-w-4xl"
                        >
                          <Text_03
                            text="South Australian Institute of Business andTechnology (SAIBT)"
                            className="text-left text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl"
                          />
                        </Link>
                      <p className="max-w-3xl text-xl font-medium leading-9 text-foreground">
                        Diploma of Information Technology (IT)
                      </p>
                      <div className="flex items-center gap-2 text-base text-muted-foreground">
                        <MapPin className="size-4 text-primary" />
                        <span>Adelaide, South Australia</span>
                      </div>
                    </div>

                    <p className="shrink-0 text-lg text-muted-foreground">
                      2021 - 2022
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
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
