function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f8f5ff,#ffffff_45%)] px-5 py-10 text-slate-900 md:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <section className="w-full rounded-[2rem] border border-white/70 bg-white/90 p-8 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">Part 1 Complete</p>
          <h1 className="mt-4 font-outfit text-4xl font-extrabold text-slate-950 md:text-5xl">
            DigiTools React Project Setup Ready
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            The project is now configured with React, Vite, Tailwind CSS, and DaisyUI. In the next part, we will build
            the navbar and banner section based on your design reference.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">React</span>
            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">Vite</span>
            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">Tailwind CSS</span>
            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">DaisyUI</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
