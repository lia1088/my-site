import { client } from '@/sanity/lib/client'

async function getHomepage() {
  return await client.fetch(`*[_type == "homepage"][0]{
    heroHeading,
    heroButtonText,
    whatIDoHeading,
    whatIDoDescription,
    whatIDoButtonText
  }`)
}

export default async function Home() {
  const homepage = await getHomepage()

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4" style={{mixBlendMode: 'difference'}}>
        <a href="/" className="text-white font-medium text-base">Lia Crupi</a>
        <div className="flex gap-8 text-sm text-white">
          <a href="/work" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="/about-webflow" className="hover:opacity-60 transition-opacity">About Webflow</a>
          <a href="/about" className="hover:opacity-60 transition-opacity">About me</a>
          <a href="/contact" className="hover:opacity-60 transition-opacity">Start a project</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 pt-60 pb-36">
        <h1 className="font-serif text-7xl font-medium leading-tight tracking-tight mb-8">
          {homepage?.heroHeading}
        </h1>
        <a href="/about" className="inline-block bg-[#c2afff] text-black text-sm px-16 py-3 rounded-sm hover:bg-[#d4c5ff] transition-colors mt-6">
          {homepage?.heroButtonText}
        </a>
      </section>

      {/* What I Do */}
      <section className="max-w-4xl mx-auto px-8 py-24 border-t border-white/10">
        <p className="text-sm text-white/40 mb-16">What I do</p>
        <div className="grid grid-cols-2 gap-16 items-start">
          <h2 className="font-serif text-5xl font-medium leading-tight">
            {homepage?.whatIDoHeading}
          </h2>
          <div>
            <p className="text-white/60 leading-relaxed text-base mb-8">
              {homepage?.whatIDoDescription}
            </p>
            <a href="/about-webflow" className="inline-flex justify-center items-center bg-[#c2afff] text-black text-sm px-16 py-3 rounded-sm hover:bg-[#d4c5ff] transition-colors w-full">
              {homepage?.whatIDoButtonText}
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}