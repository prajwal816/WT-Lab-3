const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-center">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-3xl font-bold text-white shadow-lg shadow-sky-500/30">
        N
      </div>
      <h1 className="mb-4 text-4xl font-bold text-white">Nexus Corp Website</h1>
      <p className="mb-8 max-w-md text-lg text-slate-400">
        Pure HTML + CSS multi-page website. No JavaScript, no frameworks.
      </p>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <a 
          href="/home.html" 
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/40"
        >
          View Website →
        </a>
      </div>
      
      <div className="mt-12 grid max-w-2xl gap-4 text-left text-sm text-slate-500 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <p className="mb-1 font-medium text-slate-300">📄 Pages</p>
          <p>Home, About, Services, Contact</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <p className="mb-1 font-medium text-slate-300">🎨 Styling</p>
          <p>Pure CSS with Flexbox & Grid</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <p className="mb-1 font-medium text-slate-300">✨ Animations</p>
          <p>CSS transitions & hover effects</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <p className="mb-1 font-medium text-slate-300">📱 Responsive</p>
          <p>Mobile-first media queries</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
