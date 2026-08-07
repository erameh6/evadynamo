import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string
  title: ReactNode
  lede?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F2] px-[24px] pt-[140px] pb-[48px] md:px-[48px] md:pt-[180px] md:pb-[64px]">
      <div className="hero-grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -top-[150px] -left-[120px] h-[400px] w-[400px] rounded-full bg-[#FF4D00]/[0.06] blur-3xl" />
      <div className="relative mx-auto w-full max-w-[1180px]">
        <span className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-[14px] font-display text-[34px] font-semibold leading-[105%] tracking-[-1.5px] text-[#17150F] md:text-[48px] md:tracking-[-2px]">
          {title}
        </h1>
        {lede && (
          <p className="mt-[16px] max-w-[640px] font-body text-[17px] leading-[160%] text-[#4A463D]">
            {lede}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

export function CtaBand({
  title = 'Ready to transform your technology?',
  lede = 'Tell us what you are trying to achieve. We will come back with a clear recommendation — even if it is "don\'t build this yet".',
  primaryLabel = 'Start a Project',
  primaryHref = '/contact',
  secondaryLabel = 'Explore services',
  secondaryHref = '/services',
}: {
  title?: string
  lede?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="relative overflow-hidden bg-white px-[24px] py-[88px] text-center md:px-[48px] md:py-[110px]" aria-label="Call to action">
      <div className="absolute top-1/2 left-1/2 h-[380px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4D00]/[0.05] blur-3xl" />
      <div className="relative mx-auto max-w-[680px]">
        <span className="font-mono2 text-[12px] tracking-[0.18em] text-[#FF4D00] uppercase">
          // Get started
        </span>
        <h2 className="mt-[14px] font-display text-[30px] font-semibold tracking-[-1.2px] text-[#17150F] md:text-[40px]">
          {title}
        </h2>
        <p className="mt-[16px] font-body text-[16px] leading-[160%] text-[#4A463D]">{lede}</p>
        <div className="mt-[30px] flex flex-col items-center justify-center gap-[14px] sm:flex-row sm:gap-[16px]">
          <Link
            to={primaryHref}
            className="rounded-[8px] bg-[#FF4D00] px-[24px] py-[13px] font-body text-[15px] font-semibold text-white shadow-md shadow-black/10 transition-colors hover:bg-[#E64600]"
          >
            {primaryLabel} →
          </Link>
          <Link
            to={secondaryHref}
            className="rounded-[8px] border border-[rgba(23,21,15,0.2)] px-[24px] py-[13px] font-body text-[15px] font-normal text-[#17150F] transition-colors hover:border-[#FF4D00] hover:text-[#FF4D00]"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
