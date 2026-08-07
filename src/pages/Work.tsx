import { Reveal } from '../components/ui'
import { CtaBand, PageHero } from '../components/Shared'
import { PORTFOLIO } from '../data'

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work & case studies"
        title="Proof over promises."
        lede="Every project below follows the same structure: the problem, the solution, the technology, and the result. More case studies land here as projects complete."
      />

      <section className="bg-[#F7F6F2] px-[24px] py-[64px] md:px-[48px] md:py-[80px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="space-y-[16px]">
            {PORTFOLIO.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <article className="rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[24px] shadow-sm transition-colors hover:border-[rgba(255,77,0,0.35)] md:p-[32px]">
                  <div className="flex flex-wrap items-start justify-between gap-[12px]">
                    <h3 className="font-display text-[22px] font-semibold text-[#17150F]">{c.title}</h3>
                    <span
                      className={
                        'shrink-0 rounded-full border px-[10px] py-[4px] font-mono2 text-[11px] ' +
                        (c.status.startsWith('Live')
                          ? 'border-[#16A34A]/30 bg-[#16A34A]/10 text-[#16A34A]'
                          : 'border-[rgba(23,21,15,0.1)] bg-[rgba(23,21,15,0.04)] text-[#4A463D]')
                      }
                    >
                      {c.status}
                    </span>
                  </div>
                  <span className="mt-[6px] block font-mono2 text-[12px] text-[#8A857B]">{c.tag}</span>

                  <div className="mt-[20px] grid gap-[20px] md:grid-cols-2">
                    <div>
                      <div className="font-body text-[12px] font-semibold tracking-[0.08em] text-[#FF4D00] uppercase">Problem</div>
                      <div className="mt-[6px] font-body text-[14px] leading-[165%] text-[#4A463D]">{c.problem}</div>
                    </div>
                    <div>
                      <div className="font-body text-[12px] font-semibold tracking-[0.08em] text-[#FF4D00] uppercase">Solution</div>
                      <div className="mt-[6px] font-body text-[14px] leading-[165%] text-[#4A463D]">{c.solution}</div>
                    </div>
                    <div>
                      <div className="font-body text-[12px] font-semibold tracking-[0.08em] text-[#FF4D00] uppercase">Technology</div>
                      <div className="mt-[6px] font-mono2 text-[13px] leading-[165%] text-[#4A463D]">{c.technology}</div>
                    </div>
                    <div>
                      <div className="font-body text-[12px] font-semibold tracking-[0.08em] text-[#FF4D00] uppercase">Result</div>
                      <div className="mt-[6px] font-body text-[14px] leading-[165%] text-[#17150F]">{c.result}</div>
                    </div>
                  </div>

                  <div className="mt-[20px]">
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-[8px] border border-[rgba(23,21,15,0.2)] px-[18px] py-[9px] font-body text-[14px] font-normal text-[#17150F] transition-colors hover:border-[#FF4D00] hover:text-[#FF4D00]"
                    >
                      View project ↗
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a project that deserves this treatment?"
        lede="We take on a limited number of engagements at a time. Tell us what you are building — if it is a fit, we will say so honestly."
      />
    </>
  )
}
