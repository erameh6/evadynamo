import { Reveal } from '../components/ui'
import { CtaBand, PageHero } from '../components/Shared'
import { BLOG_TOPICS, SITE } from '../data'

export default function BlogPage() {
  const blogUrl = 'https://blog.' + SITE.domain
  return (
    <>
      <PageHero
        eyebrow="Blog · Knowledge hub"
        title="Engineering notes, written down."
        lede="How we think about AI, cloud, DevOps and software engineering — practical writing, not marketing fluff. Published on our blog hub."
      />

      <section className="bg-[#F7F6F2] px-[24px] py-[64px] md:px-[48px] md:py-[80px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <Reveal>
            <div className="max-w-[640px]">
              <span className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase">Topics</span>
              <h2 className="mt-[14px] font-display text-[32px] font-semibold tracking-[-1px] text-[#17150F] md:text-[40px]">
                What we write about.
              </h2>
            </div>
          </Reveal>
          <div className="mt-[40px] grid gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_TOPICS.map((t, i) => (
              <Reveal key={t} delay={i * 0.06}>
                <a
                  className="group flex items-center justify-between rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[24px] transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(255,77,0,0.35)]"
                  href={blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-display text-[18px] font-medium text-[#17150F]">{t}</span>
                  <span className="text-[#FF4D00] transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">↗</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-[28px] font-body text-[15px] text-[#4A463D]">
              📡 The full blog lives at{' '}
              <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF4D00] underline-offset-4 hover:underline">
                {blogUrl}
              </a>{' '}
              — articles on AI, cloud, DevOps and engineering, published regularly.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Prefer talking to reading?"
        lede="Skip the blog — tell us about your technology challenge and get a straight answer."
        primaryLabel="Request Consultation"
      />
    </>
  )
}
