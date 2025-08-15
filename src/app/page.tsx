
import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDocker, SiExpress, SiPostgresql, SiRedis, SiTypescript } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

export default function Home() {
  const skills = [
    {
      icon: <RiNextjsFill/>,
      name: "Next.js"
    },
    {
      icon: <RiReactjsFill />,
      name: "React"
    },
    {
      icon: <RiNodejsFill/>,
      name: "Node.js"
    },
    {
      icon: <SiTypescript/>,
      name: "Typescript"
    },
    {
      icon: <SiExpress/>,
      name: "Express.js"
    },
    {
      icon: <RiTailwindCssFill/>,
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
    <main className="max-w-3xl mx-auto min-h-screen p-8 flex flex-col gap-y-8">
      <section className="flex items-center justify-between space-x-4 my-8">
        <div className="flex flex-col gap-y-1.5">
          <h1 className="font-extrabold text-5xl tracking-tight">Hi, I'm Kaushik</h1>
          <p className="text-xl text-neutral-500 ">Full stack engineer. I love building things and learning. Very active on Twitter.</p>
          <button className="bg-yellow-300 w-fit py-1 px-2 rounded-lg font-mono">Available for hire</button>
        </div>
        <div >
          <Image src="/profilepic.jpeg" width={200} height={200} alt="logo" className="border border-black rounded-full" />
        </div>
      </section>
      <section className="flex flex-col gap-y-2">
        <h1 className="font-black text-xl tracking-tight">About </h1>
        <p className="text-neutral-600 tracking-wide ">I'm Kaushik. A cs grad, based out of Kolkata, India, primarily working with full stack technologies and diving deep into core backend systems. I love reading blogs, people's experiences. This is a small place of mine on the internet. Will share lot of thoughts through blogs, and documenting my life on X.Open to freelance work or if u need any help, hit me up at <strong className="font-mono hover:underline">kaushikkundu774@gmail.com</strong> </p>
      </section>
      <section>
         <h1 className="font-black text-xl tracking-tight">Skills</h1>
         <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index)=> (
            <Button key={index}>{skill.icon}{skill.name}</Button>
          ))}
         </div>
      </section>
      <section>
        <h1 className="font-black text-xl tracking-tight">Projects</h1>
        <div className="flex flex-col gap-y-2">
          <p className="text-neutral-600 tracking-wide">Check out my projects on GitHub. I keep on updating them.</p>
        </div>
        <div>
          {
            projects.map((project,index) => (
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