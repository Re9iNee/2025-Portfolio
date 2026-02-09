export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base text-indigo-600 font-semibold">404</p>
        <h1 className="text-5xl text-gray-900 sm:text-7xl mt-4 text-balance font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="text-lg text-gray-500 sm:text-xl/8 mt-6 text-pretty font-medium">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="bg-indigo-600 text-sm shadow-xs hover:bg-indigo-500 focus-visible:outline-indigo-600 rounded-md px-3.5 py-2.5 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
}
