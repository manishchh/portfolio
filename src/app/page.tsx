import Image from "next/image";
import Link from "next/link";
import { FileText, Mail, MapPin, Menu } from "lucide-react";

import { ButtonBorder } from "@/components/ui/button-border";
import { Button } from "@/components/ui/button";
import { LocationTag } from "@/components/ui/location-tag";
import MagneticTabs from "@/components/ui/magnetic-tabs";
import { PlasticButton } from "@/components/ui/plastic-button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Text_03 } from "@/components/ui/wave-text";

const profileLinks = {
  github: "https://github.com/manishchh",
  linkedin: "https://www.linkedin.com/in/manish-chhetri1/",
  email: "mailto:chhetrim901@gmail.com",
  resume: "/Manish_SWE_Resume.pdf",
};

const navItems = [
  { value: "about", label: "About", href: "#about" },
  { value: "experience", label: "Experience", href: "#experience" },
  { value: "projects", label: "Projects", href: "#projects" },
  { value: "education", label: "Education", href: "#education" },
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

const projectCards = [
  {
    title: "Chatify",
    period: "Jan 2026 - Feb 2026",
    href: "https://chatify-7o49d.sevalla.app/login",
    githubHref: "https://github.com/manishchh/chatify",
    liveDemo: true,
    description:
      "Built Chatify as a personal MERN-stack project to better understand how real-time messaging systems and authentication work in practice. Developed the web socket functionality from scratch using Socket.IO, implemented authentication with JWT and bcrypt, and added rate limiting and bot detection to improve security. Also tested and validated API endpoints with Postman to ensure the application worked reliably.",
    tags: [
      "MERN Stack",
      "Zustand",
      "Tailwind CSS",
      "JWT Authentication",
      "Bcrypt",
      "Arcjet",
    ],
    imageSrc: "/chatify.jpg",
    imageAlt: "Chatify project preview",
  },
  {
    title: "COVID-19 Data Analysis & Forecasting Dashboard",
    period: "Apr 2025",
    githubHref: "https://github.com/manishchh/covid19-data-analysis",
    description:
      "Developed a reusable data pipeline to scrape, clean, and prepare publicly available data, then analysed state-level trends using population-adjusted comparisons and regression modelling. Presented insights through an interactive Shiny dashboard and an accompanying written report to communicate findings clearly and effectively.",
    tags: [
      "R", 
      "rvest", 
      "tidyverse", 
      "Shiny",
    ],
    imageSrc: "/covid19.jpg",
    imageAlt: "COVID-19 dashboard preview",
  },
  {
    title: "Patient Vital Management System",
    period: "May 2024",
    githubHref: "https://github.com/manishchh/PatientVitalSystem",
    description:
      "Built this university project in C++ to explore how design patterns improve software flexibility and maintainability. Developed a patient vitals management system to record health measurements, assess alert levels, and trigger notifications for high-risk patients. Also packaged the system as a runnable .exe application for direct testing.",
    tags: [
      "C++", 
      "Design Patterns",
    ],
    imageSrc: "/C++.png",
    imageAlt: "Patient vital system preview",
  },
  {
    title: "Country Emission",
    period: "Oct 2023",
    githubHref: "https://github.com/manishchh/CountryEmissons-ASP.NET_MVC",
    description:
      "Created this university project to strengthen my understanding of database-backed web applications using ASP.NET Core MVC. Developed a web application to manage and display country emissions data using Entity Framework and SQL Server, while improving query performance and designing a responsive interface.",
    tags: [
      "ASP.NET Core MVC", 
      "C#",
      "Entity Framework", 
      "SQL Server", 
      "CRUD Operations",
    ],
    imageSrc: "/cemmison.png",
    imageAlt: "Country emission project preview",
  },
  {
    title: "EcoSim-GameSimulator",
    period: "Sep 2021",
    githubHref: "https://github.com/manishchh/EcoSim-GameSimulator",
    description:
      "An object-oriented Python project simulating a dynamic predator-prey ecosystem with graphical visualization. It demonstrates core OOP principles including inheritance, encapsulation, polymorphism, and exception handling, all built on a custom game engine using Python and Tkinter.",
    tags: [
      "Python", 
      "tkinter", 
      "OOP",
    ],
    imageSrc: "/ecosim.jpg",
    imageAlt: "EcoSim project preview",
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
      <header className="sticky top-0 z-50 px-4 py-3 sm:px-6 sm:py-4">
        <div className="mx-auto hidden max-w-6xl sm:block">
          <MagneticTabs
            items={navItems}
            defaultValue="about"
            className="mx-auto max-w-6xl"
          />
        </div>

        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0f0f0f]/90 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:hidden">
          <Link
            href="#about"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-white"
          >
            Manish Chhetri
          </Link>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
                />
              }
            >
              <Menu className="size-4" />
              <span className="sr-only">Open navigation menu</span>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[82vw] border-white/10 bg-[#0b0b0b] text-white"
            >
              <SheetHeader className="border-b border-white/10 px-6 py-5">
                <SheetTitle className="text-sm uppercase tracking-[0.18em] text-white">
                  Navigation
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-2 px-4 py-6">
                {navItems.map((item) => (
                  <SheetClose
                    key={item.value}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm font-medium uppercase tracking-[0.14em] text-zinc-200 transition-colors hover:bg-white/[0.06] hover:text-white"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6 sm:py-4 md:py-6">
        <section
          id="about"
          className="grid scroll-mt-24 gap-8 border-b py-6 sm:gap-10 sm:py-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start lg:gap-14 lg:py-12 xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-16"
        >
          <div className="order-2 space-y-6 lg:order-2">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                About Me
              </h2>
              <div className="h-1 w-16 bg-primary" />
            </div>

            <div className="max-w-2xl space-y-4 text-left text-sm leading-8 text-muted-foreground sm:text-justify sm:text-base sm:leading-9">
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
            <div className="mx-auto flex w-full max-w-sm flex-col rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top,_rgba(145,94,255,0.14),_transparent_38%),linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.38)] sm:rounded-[32px] sm:p-6">
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-[26px] bg-[#202020]">
                <Image
                  src="/profile.jpg"
                  alt="Profile photo"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 340px, 360px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-2 px-2 pt-5 text-center sm:pt-6">
                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Manish Chhetri
                </h3>
                <p className="text-lg text-zinc-300 sm:text-xl">
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

              <div className="flex items-center justify-center gap-2 px-2 pb-2 pt-5 sm:gap-3 sm:pt-6">
                {socialItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/6 hover:text-white sm:h-12 sm:w-12"
                  >
                    <span className="pointer-events-none absolute -top-11 rounded-2xl border border-white/10 bg-[#171717] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 sm:-top-12 sm:px-4 sm:py-2 sm:text-sm">
                      {item.label}
                    </span>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 border-b py-12 sm:py-16">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Work Experience
            </h2>
            <div className="h-1 w-16 bg-primary" />
          </div>

          <div className="mt-10">
            <GlowCard
              customSize
              glowColor="blue"
              className="w-full rounded-[28px] bg-[#151515] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8"
            >
              <div className="grid gap-5 sm:gap-6 md:grid-cols-[140px_minmax(0,1fr)]">
                <div className="flex h-24 w-24 items-center justify-center border border-white/80 bg-white transition-opacity hover:opacity-90 sm:h-28 sm:w-28">
                  <Image
                    src="/c3l.png"
                    alt="C3L logo"
                    width={112}
                    height={112}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <p className="max-w-3xl text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                        Software Engineering (Honours Research Project)
                      </p>
                      <Link
                        href="https://adelaideuni.edu.au/research/centre-for-change-and-complexity-in-learning/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block max-w-3xl text-lg font-medium leading-8 text-foreground underline-offset-4 hover:underline sm:text-xl sm:leading-9"
                      >
                        C3L, University of South Australia
                      </Link>
                      <div className="flex items-center gap-2 text-base text-muted-foreground">
                        <MapPin className="size-4 text-primary" />
                        <span>Adelaide, Australia</span>
                      </div>
                    </div>

                    <p className="shrink-0 text-sm text-muted-foreground sm:text-lg">
                      Aug 2024 - Jun 2025
                    </p>
                  </div>

                  <p className="max-w-4xl text-left text-sm leading-8 text-white sm:text-justify sm:text-base sm:leading-9 lg:text-lg">
                    Worked on an Honours research project with the Centre for Change and Complexity in Learning (C3L) at the University of South Australia to develop an AI-powered grading application for automated assessment evaluation and feedback generation. Integrated an LLM-based grading workflow into an existing Django/Python web application using LangChain, and collaborated with developers and academic stakeholders to refine the system based on real requirements. Through iterative prompt engineering and validation on authentic assessment datasets, improved grading accuracy by 60% and reduced manual grading effort for academic staff.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/12 bg-white/4 px-4 py-1.5 text-sm text-zinc-200">
                      Python
                    </span>
                    <span className="rounded-full border border-white/12 bg-white/4 px-4 py-1.5 text-sm text-zinc-200">
                      Django
                    </span>
                    <span className="rounded-full border border-white/12 bg-white/4 px-4 py-1.5 text-sm text-zinc-200">
                      JavaScript
                    </span>
                    <span className="rounded-full border border-white/12 bg-white/4 px-4 py-1.5 text-sm text-zinc-200">
                      OpenAI API
                    </span>
                    <span className="rounded-full border border-white/12 bg-white/4 px-4 py-1.5 text-sm text-zinc-200">
                      Langchain
                    </span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-b py-12 sm:py-16">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
            <div className="h-1 w-16 bg-primary" />
          </div>

          <div className="mt-10 space-y-8">
            {projectCards.map((project) => (
              <GlowCard
                key={project.title}
                customSize
                glowColor="blue"
                className="w-full rounded-[28px] bg-[#151515] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8"
              >
                <div className="grid gap-5 sm:gap-6 md:grid-cols-[140px_minmax(0,1fr)]">
                  <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-xl border border-white/10 bg-[#1f1f1f] sm:h-32 sm:w-32">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        width={128}
                        height={128}
                        unoptimized
                        sizes="(max-width: 639px) 96px, 128px"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <Link
                      href={project.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub source`}
                      className="inline-flex"
                    >
                      <ButtonBorder className="h-8 gap-2 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm">
                        <GithubIcon />
                        <span>GitHub</span>
                      </ButtonBorder>
                    </Link>
                  </div>

                  <div className="space-y-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="max-w-4xl text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                            {project.title}
                          </h3>
                          {project.liveDemo && project.href ? (
                            <Link
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex"
                            >
                              <PlasticButton text="Live Demo" />
                            </Link>
                          ) : null}
                        </div>
                      </div>

                      <p className="shrink-0 rounded-md bg-white/6 px-3 py-1 text-xs text-muted-foreground sm:text-sm">
                        {project.period}
                      </p>
                    </div>

                    <p className="max-w-4xl text-left text-sm leading-8 text-white sm:text-justify sm:text-base sm:leading-9 lg:text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                        className="rounded-full border border-white/12 bg-white/4 px-3 py-1.5 text-xs text-zinc-200 sm:px-4 sm:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-24 border-b py-12 sm:py-16">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Education</h2>
            <div className="h-1 w-16 bg-primary" />
          </div>

          <div className="mt-10 space-y-8">
            <GlowCard
              customSize
              glowColor="blue"
              className="w-full rounded-[28px] bg-[#151515] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8"
            >
                <div className="grid gap-5 sm:gap-6 md:grid-cols-[140px_minmax(0,1fr)]">
                  <Link
                    href="https://unisa.edu.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-24 w-24 items-center justify-center border border-white/80 bg-white transition-opacity hover:opacity-90 sm:h-28 sm:w-28"
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
                            className="text-left text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl"
                          />
                        </Link>
                        <p className="max-w-3xl text-lg font-medium leading-8 text-foreground sm:text-xl sm:leading-9">
                          Bachelor of Software Engineering (Honours)
                        </p>
                        <div className="flex items-center gap-2 text-base text-muted-foreground">
                          <MapPin className="size-4 text-primary" />
                          <span>Adelaide, Australia</span>
                        </div>
                      </div>

                      <p className="shrink-0 text-sm text-muted-foreground sm:text-lg">
                        2022 - 2025
                      </p>
                    </div>

                    <div className="max-w-4xl space-y-4 text-left text-sm leading-8 text-white sm:text-justify sm:text-base sm:leading-9 lg:text-lg">
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
              className="w-full rounded-[28px] bg-[#151515] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8"
            >
              <div className="grid gap-5 sm:gap-6 md:grid-cols-[140px_minmax(0,1fr)]">
                <Link
                  href="https://www.saibt.sa.edu.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-24 w-24 items-center justify-center border border-white/80 bg-white transition-opacity hover:opacity-90 sm:h-28 sm:w-28"
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
                            className="text-left text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl md:text-3xl"
                          />
                        </Link>
                      <p className="max-w-3xl text-lg font-medium leading-8 text-foreground sm:text-xl sm:leading-9">
                        Diploma of Information Technology (IT)
                      </p>
                      <div className="flex items-center gap-2 text-base text-muted-foreground">
                        <MapPin className="size-4 text-primary" />
                        <span>Adelaide, South Australia</span>
                      </div>
                    </div>

                    <p className="shrink-0 text-sm text-muted-foreground sm:text-lg">
                      2021 - 2022
                    </p>
                  </div>
                </div>
                </div>
            </GlowCard>
          </div>
        </section>

        <section
          id="leadership-activities"
          className="scroll-mt-24 py-12 sm:py-16"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Leadership & Activities
            </h2>
            <div className="h-1 w-16 bg-primary" />
          </div>

          <div className="mt-10 space-y-8">
            <GlowCard
              customSize
              glowColor="blue"
              className="w-full rounded-[28px] bg-[#151515] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8"
            >
              <div className="grid gap-5 sm:gap-6 md:grid-cols-[140px_minmax(0,1fr)]">
                <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-zinc-950 sm:h-28 sm:w-28">
                  <Image
                    src="/cpc.png"
                    alt="Competitive Programming Club logo"
                    width={112}
                    height={112}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <h3 className="max-w-4xl text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                        Competitive Programming Club
                      </h3>
                    </div>

                    <p className="shrink-0 text-sm text-muted-foreground sm:text-lg">
                      Feb 2025 - Present
                    </p>
                  </div>

                  <p className="max-w-4xl text-left text-sm leading-8 text-white sm:text-justify sm:text-base sm:leading-9 lg:text-lg">                  
                    I enjoy taking part in competitive programming contests through the University of Adelaide’s Competitive Programming Club, as they give me the opportunity to work with other programmers and keep improving my problem-solving skills.
                  </p>
                </div>
              </div>
            </GlowCard>

            <GlowCard
              customSize
              glowColor="blue"
              className="w-full rounded-[28px] bg-[#151515] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8"
            >
              <div className="grid gap-5 sm:gap-6 md:grid-cols-[140px_minmax(0,1fr)]">
                <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border border-white/80 bg-white sm:h-28 sm:w-28">
                  <Image
                    src="/unsia.png"
                    alt="Uni Mentor graphic"
                    width={112}
                    height={112}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <h3 className="max-w-4xl text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                        Uni Mentor
                      </h3>
                    </div>

                    <p className="shrink-0 text-sm text-muted-foreground sm:text-lg">
                      Feb 2024 - Nov 2024
                    </p>
                  </div>

                  <p className="max-w-4xl text-left text-sm leading-8 text-white sm:text-justify sm:text-base sm:leading-9 lg:text-lg">
                    Served as a university mentor for 40+ first-year students, supporting their transition into university through academic guidance, campus resource navigation, and peer mentoring during orientation and semester activities. This role helped me strengthen my communication and leadership skills while fostering an inclusive environment.
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-center gap-4 py-8 text-center sm:gap-5 sm:py-10">
          <div className="flex items-center justify-center gap-4 text-zinc-200 sm:gap-5">
            <Link
              href={profileLinks.email}
              aria-label="Email"
              className="transition-colors hover:text-white"
            >
              <Mail className="size-5" />
            </Link>
            <Link
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-white"
            >
              <GithubIcon />
            </Link>
            <Link
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-white"
            >
              <LinkedinIcon />
            </Link>
          </div>

          <p className="text-base text-zinc-400 sm:text-lg">
            2026 <span className="px-2 text-zinc-600">•</span> Manish Chhetri
          </p>
        </footer>
      </main>
    </div>
  );
}
