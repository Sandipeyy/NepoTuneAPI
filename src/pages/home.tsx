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

  return c.html(
    <html>
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nepotuneapi.vercel.app/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nepotuneapi.vercel.app/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Sandipeyy/NepoTuneAPI/main/assets/preview.jpg"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/Sandipeyy/NepoTuneAPI/main/assets/preview.jpg"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.githubusercontent.com/Sandipeyy/NepoTuneAPI/main/assets/favicon.ico"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * { font-family: 'Inter', sans-serif; } 
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
            }`
          }}
        />
      </head>
      <body class="bg-black mx-auto md:min-h-screen max-w-screen-lg flex flex-col">
        <main class="mx-auto my-auto flex flex-col space-y-8 px-4 pb-8 md:py-10 relative overflow-y-hidden overflow-x-hidden">
          <Meteors number={15} />

          {/* Responsive Header */}
          <header class="flex flex-col sm:flex-row items-center sm:items-end space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
            <img
              src="https://raw.githubusercontent.com/Sandipeyy/NepoTuneAPI/main/assets/logo.png"
              alt="NepoTune Logo"
              class="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-contain"
            />
            <h1 class="flex flex-col sm:flex-row items-start sm:items-end space-y-1 sm:space-y-0 sm:space-x-2 text-center sm:text-left">
              <span class="bg-gradient-to-r from-purple-500 to-gray-800 bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl font-bold">
                NepoTune API
              </span>
              <span class="animate-[borderAnimation_3s_linear_infinite] rounded bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1 text-xs sm:text-sm md:text-base uppercase tracking-wider text-white">
                Unofficial
              </span>
            </h1>
          </header>

          {/* Responsive Grid */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8">
            <a
              target="_blank"
              class="p-4 sm:p-6 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-2 md:col-span-4 lg:col-span-8"
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
              class="p-4 sm:p-6 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-2 md:col-span-4 lg:col-span-8"
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
                  NepoTune API is open-source. Check out the source code on github.
                </div>
              </div>
            </a>

            <a
              target="_blank"
              class="p-4 sm:p-6 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-2 md:col-span-4 lg:col-span-8"
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
            <div class="p-4 sm:p-6 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-2 md:col-span-4 lg:col-span-8">
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
                <div class="flex flex-row space-x-4 mt-3">
                  <a
                    href="https://github.com/Sandipeyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-indigo-400 text-indigo-500 transition-transform hover:scale-110"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://instagram.com/sandip.gg_"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-pink-400 text-pink-500 transition-transform hover:scale-110"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="text-center text-gray-600 text-sm py-4 border-t border-gray-800">
          © {new Date().getFullYear()} NepoTune API. All rights reserved.
        </footer>
      </body>
    </html>
  )
})