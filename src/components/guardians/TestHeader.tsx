export default function TestHeader() {
  return (
    <div className="relative z-10 p-4 bg-slate-800 text-white">
      <div className="flex justify-between items-center">
        <button className="bg-green-600 px-4 py-2 rounded">
          LanguageSwitcher
        </button>
        <button className="bg-blue-600 px-4 py-2 rounded">
          BackHomeButton
        </button>
      </div>
      <nav className="flex gap-2 mt-4 text-sm">
        <span>Home</span>
        <span>›</span>
        <span>Guardians</span>
      </nav>
    </div>
  );
}
