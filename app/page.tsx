import { client } from '@/sanity/lib/client'

async function getHomepage() {
  return await client.fetch(`*[_type == "homepage"][0]{
    heroHeading,
    heroButtonText
  }`)
}

export default async function Home() {
  const homepage = await getHomepage()

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Nav */}
      <nav className="px-8 py-6 flex items-center justify-between">
        <span className="text-lg font-medium">Lia Crupi</span>
        <div className="flex gap-8 text-sm">
          <a href="/work" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="/about-webflow" className="hover:opacity-60 transition-opacity">About Webflow</a>
          <a href="/about" className="hover:opacity-60 transition-opacity">About me</a>
          <a href="/contact" className="hover:opacity-60 transition-opacity">Start a project</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 py-32">
        <h1 className="text-6xl font-medium max-w-2xl leading-tight">
          {homepage?.heroHeading}
        </h1>
        <a href="/about" className="mt-10 inline-block border border-white px-6 py-3 text-sm hover:bg-white hover:text-black transition-colors">
          {homepage?.heroButtonText}
        </a>
      </section>

    </main>
  )
}