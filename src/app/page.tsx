
import Image from "next/image";
import Button, { SkillButton } from "@/components/Button";
import Card from "@/components/Card";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDocker, SiExpress, SiPostgresql, SiRedis, SiTypescript } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

export default function Home() {
  const skills = [
    {
      icon: <RiNextjsFill />,
      name: "Next.js"
    },
    {
      icon: <RiReactjsFill />,
      name: "React"
    },
    {
      icon: <RiNodejsFill />,
      name: "Node.js"
    },
    {
      icon: <SiTypescript />,
      name: "Typescript"
    },
    {
      icon: <SiExpress />,
      name: "Express.js"
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind CSS"
    },
    {
      icon: <DiGithubBadge />,
      name: "Github"
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL"
    },
    {
      icon: <SiDocker />,
      name: "Docker"
    },
    {
      icon: <SiRedis />,
      name: "Redis"
    }

  ]
  const projects = [
    {
      name: "draw-ease",
      image: "/draw-ease.png",
      description: "A simple whiteboarding app that allows you to draw and share your drawings with others.",
      links: [{
        href: "https://github.com/KaushikKundu/draw-ease",
      }],
      skillsArray: ["Typescript", "Next js", "Express", "PostgreSQL"]
    },
    {
      name: "chat-server",
      image: "/draw-ease.png",
      description: "A minimal WebSocket-based chat server with room-based broadcasting and connection management.",
      links: [{
        href: "https://github.com/KaushikKundu/chat-server",
      }],
      skillsArray: ["Typescript", "Websockets"]
    },

  ]
  return (
    <main className="max-w-3xl mx-auto min-h-screen p-8 flex flex-col gap-y-8 text-white">
      <section className="flex items-center space-x-4 my-8">
        <div className="flex-1 min-w-0">
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight">
            Hi, I&apos;m Kaushik
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 ">
            Full stack engineer. I love building things and learning. Very active on Twitter.
          </p>
          <button className="bg-yellow-300 w-fit py-1 px-2 rounded-lg  text-black mt-2 text-md">
            Available for hire
          </button>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/image.png"
            width={300}
            height={300}
            alt="logo"
            className="border rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col gap-y-2">
        <h1 className="font-black text-xl tracking-tight">About </h1>
        <p className="text-neutral-600 text-lg tracking-wide dark:text-neutral-200 ">I&apos;m Kaushik. A cs grad, based out of Kolkata, India, primarily working with full stack technologies and diving deep into core backend systems. I love reading blogs, people&apos;s experiences. This is a small place of mine on the internet. Open to freelance work or if u need any help, hit me up at <strong className="font-sans hover:underline">kaushikkundu774@gmail.com</strong> </p>
      </section>
      <section>
        <h1 className="font-black text-xl tracking-tight">Skills</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <SkillButton key={index}>{skill.icon}{skill.name}</SkillButton>
          ))}
        </div>
      </section>
      <section>
        <h1 className="font-black text-xl tracking-tight">Projects</h1>
        <div className="flex flex-col gap-y-2">
          <p className="text-neutral-600 tracking-wide dark:text-white">Check out my projects on GitHub. I keep on updating them.</p>
        </div>
        <div>
          {
            projects.map((project, index) => (
              <Card
                key={index}
                name={project.name}
                description={project.description}
                links={project.links}
                skillsArray={project.skillsArray}
              />
            ))
          }
        </div>
      </section>
      <footer>
        <p className="text-center text-neutral-500 text-sm mt-8">© 2025 Kaushik. All rights reserved.</p>
      </footer>
    </main>
  );
}