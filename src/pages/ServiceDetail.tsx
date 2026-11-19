import { Link, useParams } from 'react-router-dom'
import { Reveal } from '../components/ui'
import { CtaBand, PageHero } from '../components/Shared'
import { SERVICES } from '../data'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#F7F6F2] px-[24px] text-center">
        <h1 className="font-display text-[32px] font-semibold text-[#17150F]">Service not found</h1>
        <p className="mt-[12px] font-body text-[#4A463D]">That service doesn't exist (or was moved).</p>
        <Link to="/services" className="mt-[24px] rounded-[8px] bg-[#FF4D00] px-[20px] py-[11px] font-body text-[15px] font-semibold text-white">
          All services →
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageHero eyebrow={'Service · ' + service.index} title={service.title} lede={service.long} />

      <section className="bg-[#F7F6F2] px-[24px] py-[64px] md:px-[48px] md:py-[80px]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-[40px] md:grid-cols-[300px_1fr]">
          {/* side rail */}
          <div className="space-y-[16px]">
            <div className="rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[20px]">
              <div className="font-body text-[13px] font-semibold tracking-[0.06em] text-[#17150F] uppercase">
                Technologies & tools
              </div>
              <div className="mt-[12px] flex flex-wrap gap-[6px]">
                {service.technologies.map((t) => (
                  <span key={t} className="rounded-[4px] border border-[rgba(23,21,15,0.1)] bg-[rgba(23,21,15,0.04)] px-[8px] py-[3px] font-mono2 text-[11px] text-[#4A463D]">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[20px]">
              <div className="font-body text-[13px] font-semibold tracking-[0.06em] text-[#17150F] uppercase">Next step</div>
              <p className="mt-[10px] font-body text-[14px] leading-[160%] text-[#4A463D]">
                Tell us about your project — we will scope it honestly and give you a clear recommendation.
              </p>
              <Link to="/contact" className="mt-[14px] block rounded-[8px] bg-[#FF4D00] px-[16px] py-[11px] text-center font-body text-[14px] font-semibold text-white transition-colors hover:bg-[#E64600]">
                {service.cta} →
              </Link>
            </div>
          </div>

          {/* main content */}
          <div>
            <Reveal>
              <h2 className="font-display text-[22px] font-semibold text-[#17150F]">Business problems we solve</h2>
              <ul className="mt-[16px] space-y-[10px]">
                {service.problems.map((item) => (
                  <li key={item} className="flex items-start gap-[10px] font-body text-[15px] leading-[160%] text-[#4A463D]">
                    <span className="mt-[2px] text-[#FF4D00]">✕</span>{item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-[36px] font-display text-[22px] font-semibold text-[#17150F]">What you get</h2>
              <ul className="mt-[16px] space-y-[10px]">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-[10px] font-body text-[15px] leading-[160%] text-[#4A463D]">
                    <span className="mt-[2px] text-[#16A34A]">✓</span>{item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-[36px] rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[20px]">
                <div className="font-body text-[13px] font-semibold tracking-[0.06em] text-[#17150F] uppercase">Related solutions</div>
                <p className="mt-[8px] font-body text-[14px] text-[#4A463D]">
                  See how this capability becomes a packaged outcome:{' '}
                  <Link to="/solutions" className="text-[#FF4D00] underline-offset-4 hover:underline">explore solutions →</Link>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title={'Need ' + service.title.toLowerCase() + '?'}
        lede="Describe what you are trying to achieve — we will come back with a clear recommendation and a realistic plan."
        primaryLabel={service.cta}
      />
    </>
  )
}
