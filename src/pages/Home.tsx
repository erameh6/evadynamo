import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, WaveText, containerVariants, itemVariants } from '../components/ui'
import { CtaBand } from '../components/Shared'
import { PRINCIPLES, SERVICES, STACK_GROUPS } from '../data'

const TICKER = [
  'Software Engineering', 'AI & Automation', 'Cloud Engineering', 'DevOps & Platform',
  'Technology Consulting', 'Custom Applications', 'Cloud Migration', 'CI/CD Pipelines',
  'Kubernetes', 'Machine Learning', 'Digital Transformation', 'API Development',
]

const TERMINAL_ROWS = [
  { k: 'stage', v: 'build', accent: true },
  { k: 'stack', v: 'next.js · node · aws', accent: false },
  { k: 'ci/cd', v: 'docker · k8s · terraform', accent: false },
  { k: 'ai', v: 'integrated ✓', live: true },
  { k: 'status', v: 'deployed — live', live: true },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-[24px] pb-[32px] pt-[20px] select-none md:px-[48px] [@media(min-width:1440px)]:px-[64px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/images/hero.jpg" alt="" className="h-full w-full scale-[1.02] object-cover" />
          <div className="absolute inset-0 bg-white/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F6F2]/90 via-[#F7F6F2]/40 to-[#F7F6F2]" />
          <div className="absolute -top-[200px] -left-[150px] h-[500px] w-[500px] rounded-full bg-[#FF4D00]/[0.08] blur-3xl" />
          <div className="absolute -right-[150px] -bottom-[200px] h-[450px] w-[450px] rounded-full bg-[#0E7490]/[0.06] blur-3xl" />
        </div>

        <motion.div
          className="z-10 flex flex-1 flex-col items-center justify-center pt-[20vh] pb-[18vh] md:pt-[160px] md:pb-[200px]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div className="flex max-w-[900px] flex-col items-center text-center">
            <motion.div variants={itemVariants} className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase">
              // Eva Dynamo Ltd · Technology partner
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-[14px] font-display text-[38px] font-semibold leading-[105%] tracking-[-1.5px] text-[#17150F] sm:text-[56px] sm:tracking-[-2.4px] lg:text-[68px] lg:tracking-[-2.8px]"
            >
              <WaveText text="Building" /> <WaveText text="intelligent" /> <WaveText text="software" />
              <br className="block lg:hidden" />
              {' '}<WaveText text="and" />{' '}
              <WaveText text="scalable" className="text-[#FF4D00]" />{' '}
              <WaveText text="technology" className="text-[#FF4D00]" /> <WaveText text="solutions" />
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-[18px] max-w-[640px] font-body text-[18px] leading-[150%] tracking-[-0.3px] text-[#4A463D] md:text-[20px]">
              Eva Dynamo helps businesses develop software, automate operations, and build reliable
              cloud infrastructure — engineering teams, platforms and AI into systems that ship.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-[32px] flex flex-col gap-[14px] sm:flex-row sm:gap-[16px]">
              <Link to="/contact" className="flex items-center justify-center gap-[8px] rounded-[8px] bg-[#FF4D00] px-[24px] py-[13px] font-body text-[15px] font-semibold text-white shadow-md shadow-black/10 transition-colors hover:bg-[#E64600]">
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="flex items-center justify-center gap-[8px] rounded-[8px] border border-[rgba(23,21,15,0.2)] px-[24px] py-[13px] font-body text-[15px] font-normal text-[#17150F] transition-colors hover:border-[#FF4D00] hover:text-[#FF4D00]">
                Explore Services
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-[22px] flex items-center gap-[8px] font-mono2 text-[12px] text-[#8A857B]">
              <span className="h-[8px] w-[8px] animate-pulse rounded-full bg-[#16A34A]" />
              Engineering-first · Cloud-native · Security-aware
            </motion.div>

            {/* Terminal visual */}
            <motion.div
              variants={itemVariants}
              className="mt-[48px] w-full max-w-[560px] overflow-hidden rounded-[10px] border border-[rgba(23,21,15,0.12)] bg-white/90 text-left shadow-lg shadow-black/10 backdrop-blur-md"
              transition={{ delay: 0.35 }}
            >
              <div className="flex items-center gap-[6px] border-b border-[rgba(23,21,15,0.1)] px-[16px] py-[12px]">
                <span className="h-[10px] w-[10px] rounded-full bg-[#FF4D00]/30" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#F0A93B]/40" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#16A34A]/40" />
                <span className="ml-[8px] font-mono2 text-[12px] text-[#8A857B]">evadynamo · delivery pipeline</span>
              </div>
              <div className="p-[20px] font-mono2 text-[13px] leading-[1.9]">
                {TERMINAL_ROWS.map((row) => (
                  <div key={row.k} className="flex gap-[12px]">
                    <span className="w-[52px] shrink-0 text-[#8A857B]">{row.k}</span>
                    <span className={row.accent ? 'text-[#FF4D00]' : row.live ? 'text-[#16A34A]' : 'text-[#17150F]'}>
                      {row.v}
                    </span>
                  </div>
                ))}
                <div className="mt-[16px]">
                  <div className="mb-[6px] flex justify-between font-mono2 text-[11px] text-[#8A857B]">
                    <span>delivery progress</span><span>72%</span>
                  </div>
                  <div className="h-[6px] w-full overflow-hidden rounded-full bg-[rgba(23,21,15,0.1)]">
                    <div className="h-full w-[72%] rounded-full bg-[#FF4D00]" />
                  </div>
                </div>
                <div className="mt-[16px] flex flex-wrap gap-[6px]">
                  {['aws', 'kubernetes', 'react', 'terraform', 'python'].map((tag) => (
                    <span key={tag} className="rounded-[4px] border border-[rgba(23,21,15,0.1)] bg-[rgba(23,21,15,0.04)] px-[8px] py-[3px] font-mono2 text-[11px] text-[#4A463D]">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="w-full overflow-hidden border-y border-[rgba(23,21,15,0.1)] bg-white py-[14px]" aria-hidden="true">
        <div className="marquee-track flex items-center gap-[32px]">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-[12px] font-body text-[14px] whitespace-nowrap text-[#4A463D]">
              <i className="not-italic text-[#FF4D00]">▸</i>{t}
            </span>
          ))}
        </div>
      </div>

      {/* Services overview */}
      <section className="bg-[#F7F6F2] px-[24px] py-[96px] md:px-[48px] md:py-[120px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <Reveal>
            <div className="max-w-[640px]">
              <span className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase">// What we do</span>
              <h2 className="mt-[14px] font-display text-[32px] font-semibold tracking-[-1px] text-[#17150F] md:text-[42px]">
                Five disciplines. One accountable partner.
              </h2>
              <p className="mt-[14px] font-body text-[16px] leading-[160%] text-[#4A463D]">
                From a single automation to a full platform, every engagement is led by senior
                engineers who stay until it ships — and works.
              </p>
            </div>
          </Reveal>

          <div className="mt-[48px] grid gap-[16px] md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link to={'/services/' + s.slug} className="group flex min-h-[200px] flex-col rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[24px] shadow-sm transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(255,77,0,0.35)] hover:shadow-md">
                  <span className="font-mono2 text-[13px] text-[#8A857B]">{s.index}</span>
                  <h3 className="mt-[10px] font-display text-[20px] font-semibold text-[#17150F]">{s.title}</h3>
                  <p className="mt-[10px] flex-1 font-body text-[15px] leading-[160%] text-[#4A463D]">{s.short}</p>
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

      {/* Why Eva Dynamo */}
      <section className="bg-white px-[24px] py-[96px] md:px-[48px] md:py-[120px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <Reveal>
            <div className="max-w-[640px]">
              <span className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase">// Why Eva Dynamo</span>
              <h2 className="mt-[14px] font-display text-[32px] font-semibold tracking-[-1px] text-[#17150F] md:text-[42px]">
                Chosen for judgment, kept for delivery.
              </h2>
            </div>
          </Reveal>
          <div className="mt-[40px] grid gap-[14px] sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-[#F7F6F2] p-[24px]">
                  <h3 className="flex items-center gap-[8px] font-display text-[18px] font-semibold text-[#17150F]">
                    <span className="text-[#FF4D00]">▸</span>{p.title}
                  </h3>
                  <p className="mt-[10px] font-body text-[15px] leading-[160%] text-[#4A463D]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-[#F7F6F2] px-[24px] py-[96px] md:px-[48px] md:py-[120px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <Reveal>
            <div className="max-w-[640px]">
              <span className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase">// Technology stack</span>
              <h2 className="mt-[14px] font-display text-[32px] font-semibold tracking-[-1px] text-[#17150F] md:text-[42px]">
                Modern tools, chosen deliberately.
              </h2>
              <p className="mt-[14px] font-body text-[16px] leading-[160%] text-[#4A463D]">
                We work where the industry is going — cloud-native, containerized, AI-ready. No
                legacy tax, no experiments on your budget.
              </p>
            </div>
          </Reveal>
          <div className="mt-[48px] grid gap-[24px] sm:grid-cols-2 lg:grid-cols-5">
            {STACK_GROUPS.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.06}>
                <div>
                  <div className="font-mono2 text-[12px] tracking-[0.14em] text-[#FF4D00] uppercase">{g.group}</div>
                  <ul className="mt-[14px] space-y-[8px]">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-center gap-[8px] font-body text-[14px] text-[#4A463D]">
                        <span className="text-[#8A857B]">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's build what ships."
        lede="Tell us what you're trying to build or fix. We'll tell you the fastest honest path — even if that means building less."
        primaryLabel="Request Consultation"
      />
    </>
  )
}
