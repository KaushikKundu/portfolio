import Image from "next/image";
import Button from "@/components/Button";
export default function Home() {
  const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"];
  return (
    <main className="max-w-3xl mx-auto min-h-screen p-8 flex flex-col gap-y-8">
      <section className="flex items-center justify-between space-x-4 my-8">
        <div className="flex flex-col gap-y-1.5">
          <h1 className="font-extrabold text-5xl tracking-tight">Kaushik</h1>
          <p className="text-xl text-neutral-500 ">Full stack engineer. I love building things and helping people. Very active on Twitter.</p>
        </div>
        <div >
          <Image src="/profilepic.jpeg" width={200} height={200} alt="logo" className="border border-black rounded-full" />
        </div>
      </section>
      <section className="flex flex-col gap-y-2">
        <h1 className="font-black text-xl tracking-tight">About</h1>
        <p className="text-neutral-600 tracking-wide ">Build businesses all around the world making 10M dollars in portfolio. I love writing and designing. Ceo of Meta. Interned at vercel, and lot others cool compaies. Love travelling, japan, kdrama. introvert pro max.</p>
      </section>
      <section>
         <h1 className="font-black text-xl tracking-tight">Skills</h1>
         <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index)=> (
            <Button key={index}>{skill}</Button>
          ))}
         </div>
      </section>
      <section>
        <h1 className="font-black text-xl tracking-tight">Projects</h1>
        <div className="flex flex-col gap-y-2">
          <p className="text-neutral-600 tracking-wide">Check out my projects on GitHub.</p>
        </div>
      </section>
      <footer>
        <p className="text-center text-neutral-500 text-sm mt-8">© 2025 Kaushik. All rights reserved.</p>
      </footer>
    </main>
  );
}