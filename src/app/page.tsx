
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-8">
      <section className="flex flex-col md:flex-row items-center gap-12 rounded-3xl p-10 max-w-4xl w-full border border-gray-800 bg-neutral-900 shadow-lg">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Hi, I'm Kaushik
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            A Full Stack Engineer & backend enthusiast. I love diving deep into backend systems and binge-watching web series. Welcome to my portfolio!
          </p>
        </div>
        <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-gray-700 bg-black">
          <img
            src="/vercel.svg"
            alt="Profile picture"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </main>
  );
}