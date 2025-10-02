import { Hono } from 'hono'

export const Home = new Hono()

export const Meteors = ({ number }: { number: number }) => {
  return (
    <>
      {Array.from({ length: number || 20 }, (_, idx) => (
        <span
          key={idx}
          class="meteor animate-[meteorAnimation_3s_linear_infinite] absolute h-1 w-1 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`
          }}
        />
      ))}
    </>
  )
}

Home.get('/', (c) => {
  const title = 'NepoTune API'
  const description =
    'Unofficial JioSaavn API wrapper in TypeScript. Access songs, albums, artists, playlists, and more.'
  const previewImage =
    'https://raw.githubusercontent.com/Sandipeyy/NepoTuneAPI/main/assets/preview.pnh'
  const siteUrl = 'https://nepotuneapi.vercel.app/'

  return c.html(
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO */}
        <meta name="description" content={description} />
        <meta name="keywords" content="NepoTune, JioSaavn API, Music API, NepoTune API, NepoFlix, Sandipeyy, Songs, Albums, Playlists" />
        <meta name="author" content="Sandipeyy" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={previewImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={previewImage} />

        {/* Favicon (unchanged as per request) */}
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.githubusercontent.com/Sandipeyy/NepoTuneAPI/main/assets/favicon.ico"
        />

        {/* Preload logo */}
        <link rel="preload" as="image" href="https://raw.githubusercontent.com/Sandipeyy/NepoTuneAPI/main/assets/logo.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Tailwind */}
        <script src="https://cdn.tailwindcss.com" />

        {/* Custom Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * { font-family: 'Inter', sans-serif; } 
            body {
              background: linear-gradient(180deg, #0f0f0f, #1a1a1a);
              background-size: 400% 400%;
              animation: gradientShift 15s ease infinite;
            }
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes borderAnimation {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes meteorAnimation {
              0% { transform: rotate(215deg) translateX(0); opacity: 1; }
              70% { opacity: 1; }
              100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
            }
            .meteor::before {
              content: '';
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              width: 50px;
              height: 1px;
              background: linear-gradient(90deg, #64748b, transparent);
            }
            .animate-meteor-effect {
              animation-name: meteorAnimation;
            }
            /* Card hover polish */
            .card:hover {
              transform: translateY(-3px);
              box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
            }
            .unofficial-tag {
              animation: borderAnimation 3s ease-in-out infinite alternate;
            }`
          }}
        />
      </head>
      <body class="bg-black mx-auto md:min-h-screen max-w-screen-lg flex flex-col">
        <main class="mx-auto my-auto flex flex-col space-y-8 px-4 pb-16 md:py-10 relative overflow-y-hidden overflow-x-hidden">
          <Meteors number={15} />

          {/* Sticky Responsive Header */}
          <header class="sticky top-0 z-50 bg-black/70 backdrop-blur-md flex flex-col sm:flex-row items-center sm:items-end space-y-2 sm:space-y-0 sm:space-x-3 mb-6 p-3 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/Sandipeyy/NepoTuneAPI/main/assets/logo.png"
              alt="NepoTune Logo"
              class="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-contain"
              loading="lazy"
            />
            <h1 class="flex flex-col sm:flex-row items-start sm:items-end space-y-1 sm:space-y-0 sm:space-x-2 text-center sm:text-left">
              <span class="bg-gradient-to-r from-purple-500 to-gray-800 bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl font-bold">
                NepoTune API
              </span>
              <span class="unofficial-tag rounded bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1 text-xs sm:text-sm md:text-base uppercase tracking-wider text-white">
                Unofficial
              </span>
            </h1>
          </header>

          {/* Responsive Grid */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore Docs"
              class="card p-4 sm:p-6 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-2 md:col-span-4 lg:col-span-8"
              href="/docs"
            >
              <div class="flex flex-col">
                <span class="text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-red-500 text-red-500">
                  Quick Start
                </span>
                <span class="text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2">
                  Explore the Docs
                </span>
                <div class="text-neutral-500 mt-2">
                  Learn how to use {title} with simple guides and examples.
                </div>
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub Source Code"
              class="card p-4 sm:p-6 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-2 md:col-span-4 lg:col-span-8"
              href="https://github.com/Sandipeyy/NepoTuneAPI"
            >
              <div class="flex flex-col">
                <span class="text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-green-500 text-green-500">
                  Source Code
                </span>
                <span class="text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2">
                  View on GitHub
                </span>
                <div class="text-neutral-500 mt-2">
                  NepoTune API is open-source. Check out the source code on GitHub.
                </div>
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contribute to NepoTune API"
              class="card p-4 sm:p-6 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-2 md:col-span-4 lg:col-span-8"
              href="https://github.com/Sandipeyy/NepoTuneAPI/issues"
            >
              <div class="flex flex-col">
                <span class="text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-violet-500 text-violet-500">
                  Contribute
                </span>
                <span class="text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2">
                  Get Involved
                </span>
                <div class="text-neutral-500 mt-2">
                  Found a bug or have a feature idea? Open an issue or submit a
                  pull request.
                </div>
              </div>
            </a>

            {/* Socials */}
            <div class="card p-4 sm:p-6 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-2 md:col-span-4 lg:col-span-8">
              <div class="flex flex-col">
                <span class="text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-blue-500 text-blue-500">
                  Socials
                </span>
                <span class="text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2">
                  Stay Connected
                </span>
                <div class="text-neutral-500 mt-2">
                  Find me on GitHub and Instagram.
                </div>
                <div class="flex flex-row space-x-6 mt-3">
                  <a
                    href="https://github.com/Sandipeyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    class="hover:text-indigo-400 text-indigo-500 transition-transform hover:scale-110 flex items-center space-x-2"
                  >
                    {/* GitHub SVG (uses currentColor) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      fill="currentColor"
                    >
                      <path d="M12 .296C5.373.296 0 5.67 0 12.296c0 5.292 3.438 9.773 8.205 11.366.6.111.82-.261.82-.579 0-.286-.011-1.04-.017-2.042-3.338.726-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.304-5.467-1.333-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.371.814 1.102.814 2.222 0 1.605-.014 2.898-.014 3.293 0 .32.216.694.825.576C20.565 22.067 24 17.584 24 12.296 24 5.67 18.627.296 12 .296z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://instagram.com/sandip.gg_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    class="hover:text-pink-400 text-pink-500 transition-transform hover:scale-110 flex items-center space-x-2"
                  >
                    {/* Instagram SVG (outline style, uses currentColor) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="text-center text-gray-600 text-sm py-6 border-t border-gray-800">
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/docs" target="_blank" rel="noopener noreferrer" class="hover:text-white">Docs</a>
            <a href="https://github.com/Sandipeyy/NepoTuneAPI" target="_blank" rel="noopener noreferrer" class="hover:text-white">GitHub</a>
            <a href="https://instagram.com/sandip.gg_" target="_blank" rel="noopener noreferrer" class="hover:text-white">Instagram</a>
          </div>
          <p class="mt-2">© {new Date().getFullYear()} NepoTune API. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
})
