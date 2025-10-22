export default function Footer(){
  return (
    <footer className="mt-16 bg-black/60 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-xl font-display">AJM Global</div>
          <p className="text-gray-300 mt-2">The Assembly Of Jesus Messiah Global Pilgrimage</p>
        </div>

        <div>
          <div className="font-semibold">Contact</div>
          <div className="text-gray-300 mt-2">7121 Glen View Way, Harare, Zimbabwe</div>
          <div className="text-gray-300 mt-1">Phone: +263 77 123 4567</div>
          <div className="text-gray-300 mt-1">Email: info@ajmglobal.org</div>
        </div>

        <div>
          <div className="font-semibold">Quick Links</div>
          <div className="flex flex-col mt-2">
            <a href="/about" className="text-gray-300 py-1">About</a>
            <a href="/ministries" className="text-gray-300 py-1">Ministries</a>
            <a href="/events" className="text-gray-300 py-1">Events</a>
            <a href="/sermons" className="text-gray-300 py-1">Contact</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-gray-400">© {new Date().getFullYear()} AJM Global • All rights reserved</div>
      </div>
    </footer>
  );
}
