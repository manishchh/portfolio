import Image from "next/image";
import Link from "next/link";
import { FileText, Mail, MapPin } from "lucide-react";

import { LocationTag } from "@/components/ui/location-tag";
import MagneticTabs from "@/components/ui/magnetic-tabs";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Text_03 } from "@/components/ui/wave-text";

const profileLinks = {
  github: "https://github.com/manishchh",
  linkedin: "https://www.linkedin.com/in/manish-chhetri1/",
  email: "mailto:chhetrim901@gmail.com",
  resume: "/Resume.pdf",
};

const navItems = [
  { value: "about", label: "About", href: "#about" },
  { value: "education", label: "Education", href: "#education" },
  { value: "projects", label: "Projects", href: "#projects" },
  { value: "experience", label: "Experience", href: "#experience" },
  {
    value: "leadership-activities",
    label: "Leadership & Activities",
    href: "#leadership-activities",
  },
];

const socialItems = [
  {
    href: profileLinks.github,
    label: "GitHub",
    external: true,
    icon: <GithubIcon />,
  },
  {
    href: profileLinks.linkedin,
    label: "LinkedIn",
    external: true,
    icon: <LinkedinIcon />,
  },
  {
    href: profileLinks.email,
    label: "Email",
    external: false,
    icon: <Mail className="size-6" />,
  },
  {
    href: profileLinks.resume,
    label: "Resume",
    external: true,
    icon: <FileText className="size-6" />,
  },
];

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.73.08-.72.08-.72 1.2.09 1.84 1.23 1.84 1.23 1.08 1.83 2.82 1.3 3.5 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.32-5.47-5.9 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.22a11.6 11.6 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.64.24 2.86.12 3.16.77.84 1.23 1.9 1.23 3.2 0 4.6-2.8 5.6-5.48 5.9.43.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M4.98 3.5A2.48 2.48 0 0 0 2.5 5.98c0 1.36 1.1 2.47 2.48 2.47h.03A2.47 2.47 0 0 0 7.5 5.98 2.48 2.48 0 0 0 5 3.5h-.02ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.82 2.67 4.82 6.14V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 px-6 py-4">
        <MagneticTabs
          items={navItems}
          defaultValue="about"
          className="mx-auto max-w-6xl"
        />
      </header>

      <main className="mx-auto flex max-w-6xl flex-col px-6 py-4 md:py-6">
        <section
          id="about"
          className="grid min-h-[68vh] scroll-mt-24 gap-10 border-b py-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start lg:gap-16 lg:py-12"
        >
          <div className="order-2 space-y-6 lg:order-2">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                About Me
              </h2>
              <div className="h-1 w-16 bg-primary" />
            </div>

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

          <div className="order-1 lg:order-1">
            <div className="mx-auto flex max-w-sm flex-col rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_top,_rgba(145,94,255,0.14),_transparent_38%),linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-[26px] bg-[#202020]">
                <Image
                  src="/profile.jpg"
                  alt="Profile photo"
                  fill
                  sizes="(max-width: 1023px) 100vw, 360px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-2 px-2 pt-6 text-center">
                <h3 className="text-4xl font-semibold tracking-tight text-white">
                  Manish Chhetri
                </h3>
                <p className="text-xl text-zinc-300">
                  Aspiring Software Engineer
                </p>
                <div className="flex justify-center pt-2">
                  <LocationTag
                    city="Adelaide"
                    country="South Australia"
                    timezone="ACDT"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 px-2 pb-2 pt-6">
                {socialItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/6 hover:text-white"
                  >
                    <span className="pointer-events-none absolute -top-12 rounded-2xl border border-white/10 bg-[#171717] px-4 py-2 text-sm font-medium text-white opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
                      {item.label}
                    </span>
                    {item.icon}
                  </Link>
                ))}
              </div>
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
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground"></p>
        </section>

        <section
          id="leadership-activities"
          className="scroll-mt-24 border-b py-16"
        >
          <h2 className="text-2xl font-semibold">Leadership & Activities</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground"></p>
        </section>
      </main>
    </div>
  );
}
