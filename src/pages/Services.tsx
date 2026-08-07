import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/ui'
import { CtaBand, PageHero } from '../components/Shared'
import { SERVICES } from '../data'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering capability, end to end."
        lede="Five disciplines, one standard: senior engineers, modern architecture, working software. Explore what each engagement looks like."
      />

      <section className="bg-[#F7F6F2] px-[24px] py-[64px] md:px-[48px] md:py-[80px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="grid gap-[16px] md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link to={'/services/' + s.slug} className="group flex min-h-[220px] flex-col rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[24px] shadow-sm transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(255,77,0,0.35)] hover:shadow-md">
                  <span className="font-mono2 text-[13px] text-[#8A857B]">{s.index}</span>
                  <h3 className="mt-[10px] font-display text-[20px] font-semibold text-[#17150F]">{s.title}</h3>
                  <p className="mt-[10px] flex-1 font-body text-[15px] leading-[160%] text-[#4A463D]">{s.long}</p>
                  <span className="mt-[16px] flex items-center gap-[6px] font-mono2 text-[13px] text-[#FF4D00]">
                    View service
                    <ArrowUpRight className="h-[14px] w-[14px] transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service fits?"
        lede="Describe the problem in plain words — we will map it to the right approach during a free consultation."
        primaryLabel="Request Consultation"
      />
    </>
  )
}
