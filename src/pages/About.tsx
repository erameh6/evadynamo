import { Reveal } from '../components/ui'
import { CtaBand, PageHero } from '../components/Shared'
import { VALUES } from '../data'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Eva Dynamo"
        title="A technology partner, not just a vendor."
        lede="We started Eva Dynamo on a simple observation: businesses rarely fail for lack of ideas — they fail for lack of technology that reliably ships. We exist to close that gap."
      />

      {/* Story */}
      <section className="bg-[#F7F6F2] px-[24px] py-[64px] md:px-[48px] md:py-[80px]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-[24px] md:grid-cols-[220px_1fr]">
          <span className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase md:pt-[6px]">
            Our story
          </span>
          <div className="space-y-[18px] font-body text-[16px] leading-[175%] text-[#4A463D]">
            <p>
              Eva Dynamo Ltd is a technology solutions company delivering software engineering,
              cloud infrastructure, DevOps, artificial intelligence, and technology consulting.
              We help businesses build reliable digital products, automate operations, modernize
              infrastructure, and adopt emerging technologies to improve efficiency and scale.
            </p>
            <p>
              What makes us different is how we engage. We are not a body shop that drops
              developers into your team and disappears. We take ownership of outcomes: we
              design the architecture, build the system, set up the delivery pipeline, and stay
              until it is running in production — then we stay a little longer, because that is
              where real problems surface.
            </p>
            <p>
              The brand is positioned as a <strong className="font-semibold text-[#17150F]">trusted technology partner</strong>, not just
              a service provider. That positioning shows up in every engagement: honest scoping,
              senior engineers on the work, and architecture decisions made with your growth in
              mind — not the fastest shortcut to a demo.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white px-[24px] py-[64px] md:px-[48px] md:py-[80px]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-[16px] md:grid-cols-2">
          <Reveal>
            <div className="rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-[#F7F6F2] p-[28px]">
              <div className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase">Mission</div>
              <p className="mt-[12px] font-display text-[20px] font-medium leading-[145%] text-[#17150F]">
                To empower businesses through innovative software, automation, and scalable technology solutions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-[#F7F6F2] p-[28px]">
              <div className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase">Vision</div>
              <p className="mt-[12px] font-display text-[20px] font-medium leading-[145%] text-[#17150F]">
                To become a leading technology company delivering world-class digital solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F7F6F2] px-[24px] py-[64px] md:px-[48px] md:py-[80px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <Reveal>
            <div className="max-w-[640px]">
              <span className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase">Values</span>
              <h2 className="mt-[14px] font-display text-[32px] font-semibold tracking-[-1px] text-[#17150F] md:text-[40px]">
                How we work, when nobody is watching.
              </h2>
            </div>
          </Reveal>
          <div className="mt-[40px] grid gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="h-full rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[24px]">
                  <h3 className="font-display text-[17px] font-semibold text-[#17150F]">{v.title}</h3>
                  <p className="mt-[8px] font-body text-[14px] leading-[160%] text-[#4A463D]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want a partner that ships?"
        lede="If you are building software, migrating to the cloud, or automating operations — let's talk about the outcome you need."
      />
    </>
  )
}
