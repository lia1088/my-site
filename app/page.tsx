import { client } from '@/sanity/lib/client'
import ExpertiseList from '@/components/ExpertiseList'

async function getHomepage() {
  return await client.fetch(`*[_type == "homepage"][0]{
    heroHeading,
    heroButtonText,
    whatIDoHeading,
    whatIDoDescription,
    whatIDoButtonText,
    expertiseSectionLabel,
    expertiseItems[]{
      title,
      description,
      tags[]{
        label,
        color
      }
    }
  }`)
}

export default async function Home() {
  const homepage = await getHomepage()

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4" style={{mixBlendMode: 'difference'}}>
        <div className="w-[95%] mx-auto flex items-center justify-between">
          <a href="/" className="text-[#fff] font-medium text-[22px]">Lia Crupi</a>
          <div className="hidden lg:flex gap-8 text-[17px] text-[#fff]">
            <a href="/work" className="hover:opacity-60 transition-opacity">Work</a>
            <a href="/about-webflow" className="hover:opacity-60 transition-opacity">About Webflow</a>
            <a href="/about" className="hover:opacity-60 transition-opacity">About me</a>
            <a href="/contact" className="hover:opacity-60 transition-opacity">Start a project</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-[95%] mx-auto h-screen flex flex-col justify-center items-start">
        <div className="grid grid-cols-12 w-full">
          <h1
            className="col-span-12 lg:col-span-10 font-serif font-medium leading-none text-[#fff]"
            style={{ fontSize: 'clamp(2.5rem, 6.944vw, 7.5rem)' }}
          >
            {homepage?.heroHeading}
          </h1>
        </div>
        <a
          href="/about"
          className="inline-block bg-[#c2afff] text-black px-[120px] py-[16px] rounded-sm hover:bg-[#d4c5ff] transition-colors mt-[40px]"
        >
          {homepage?.heroButtonText}
        </a>
      </section>

      {/* What I Do */}
      <section className="w-[95%] mx-auto pt-0 pb-[200px] border-t border-white/10">
        <p className="text-[20px] leading-none text-[#fff] mb-10">What I do</p>
        <div className="grid grid-cols-12 gap-4">
          <h2
            className="col-span-12 lg:col-span-7 font-serif font-medium leading-none text-[#fff]"
            style={{ fontSize: 'clamp(2rem, 4.629vw, 5rem)' }}
          >
            {homepage?.whatIDoHeading}
          </h2>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-[8px]">
            <p
              className="text-[#fff] leading-[1.2]"
              style={{ fontSize: 'clamp(1rem, 1.273vw, 1.375rem)' }}
            >
              {homepage?.whatIDoDescription}
            </p>
            <a
              href="/about-webflow"
              className="inline-block bg-[#c2afff] text-black px-[120px] py-[16px] rounded-sm hover:bg-[#d4c5ff] transition-colors mt-[40px]"
            >
              {homepage?.whatIDoButtonText}
            </a>
          </div>
        </div>
      </section>

      {/* What I Can Do For You */}
      <section className="w-[95%] mx-auto pt-0 pb-[200px] border-t border-white/10">
        <p className="text-[20px] leading-none text-[#fff] mb-10">{homepage?.expertiseSectionLabel}</p>
        <ExpertiseList items={homepage?.expertiseItems ?? []} />
      </section>

    </main>
  )
}
