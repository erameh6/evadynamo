import { Link } from 'react-router-dom'
import { Reveal } from '../components/ui'
import { CtaBand, PageHero } from '../components/Shared'
import { SOLUTIONS } from '../data'

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Business outcomes, packaged."
        lede="Services are capabilities. Solutions are outcomes. Here is how we apply our engineering to the problems businesses actually feel."
      />

      <section className="bg-[#F7F6F2] px-[24px] py-[64px] md:px-[48px] md:py-[80px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="space-y-[14px]">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <div id={s.slug} className="scroll-mt-[120px] rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[24px] transition-colors hover:border-[rgba(255,77,0,0.35)] md:p-[28px]">
                  <div className="flex flex-col gap-[16px] md:flex-row md:items-start md:gap-[24px]">
                    <span className="font-mono2 text-[14px] text-[#8A857B] md:pt-[4px]">{s.index}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-[20px] font-semibold text-[#17150F]">{s.title}</h3>
                      <p className="mt-[8px] font-body text-[15px] leading-[160%] text-[#4A463D]">{s.short}</p>
                      <div className="mt-[14px] flex flex-wrap gap-[6px]">
                        {s.deliverables.map((d) => (
                          <span key={d} className="rounded-[4px] border border-[rgba(23,21,15,0.1)] bg-[rgba(23,21,15,0.04)] px-[8px] py-[3px] font-mono2 text-[11px] text-[#4A463D]">{d}</span>
                        ))}
                      </div>
                    </div>
                    <Link to="/contact" className="shrink-0 font-mono2 text-[14px] text-[#FF4D00] underline-offset-4 hover:underline md:pt-[4px]">
                      Start →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Which outcome are you after?"
        lede="Pick the closest one and tell us where you are today — we will map the shortest honest path to where you want to be."
      />
    </>
  )
}
