import { Link } from 'react-router-dom'
import { Github, Linkedin, Send, Mail } from 'lucide-react'
import { NAV, SERVICES, SOLUTIONS, SITE } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[rgba(23,21,15,0.1)] bg-white pt-[64px] pb-[32px]">
      <div className="mx-auto w-full max-w-[1180px] px-[24px] md:px-[48px]">
        <div className="grid gap-[40px] md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-[10px]">
              <span className="font-display text-[22px] font-bold text-[#17150F]">
                E<span className="text-[#FF4D00]">▴</span>
              </span>
              <span className="font-display text-[18px] font-semibold text-[#17150F]">Eva Dynamo</span>
            </Link>
            <p className="mt-[14px] font-body text-[14px] leading-[165%] text-[#4A463D]">
              {SITE.tagline}. Software engineering, cloud, DevOps and AI — built to help
              businesses innovate, automate and scale.
            </p>
          </div>

          <div>
            <h4 className="font-body text-[13px] font-semibold tracking-[0.08em] text-[#17150F] uppercase">
              Company
            </h4>
            <ul className="mt-[14px] space-y-[10px]">
              {NAV.slice(2).map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="font-body text-[14px] text-[#4A463D] hover:text-[#FF4D00]">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" className="font-body text-[14px] text-[#4A463D] hover:text-[#FF4D00]">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[13px] font-semibold tracking-[0.08em] text-[#17150F] uppercase">
              Services
            </h4>
            <ul className="mt-[14px] space-y-[10px]">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={'/services/' + s.slug} className="font-body text-[14px] text-[#4A463D] hover:text-[#FF4D00]">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[13px] font-semibold tracking-[0.08em] text-[#17150F] uppercase">
              Solutions
            </h4>
            <ul className="mt-[14px] space-y-[10px]">
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <Link to={'/solutions#' + s.slug} className="font-body text-[14px] text-[#4A463D] hover:text-[#FF4D00]">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[48px] flex flex-col justify-between gap-[12px] border-t border-[rgba(23,21,15,0.1)] pt-[24px] md:flex-row">
          <span className="font-body text-[13px] text-[#8A857B]">
            © {year} {SITE.legalName}. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-[16px]">
            <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[5px] font-body text-[13px] text-[#4A463D] hover:text-[#FF4D00]">
              <Github className="h-[14px] w-[14px]" /> GitHub
            </a>
            <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[5px] font-body text-[13px] text-[#4A463D] hover:text-[#FF4D00]">
              <Linkedin className="h-[14px] w-[14px]" /> LinkedIn
            </a>
            <a href={SITE.socials.x} target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-[#4A463D] hover:text-[#FF4D00]">
              X
            </a>
            <a href={SITE.socials.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[5px] font-body text-[13px] text-[#4A463D] hover:text-[#FF4D00]">
              <Send className="h-[14px] w-[14px]" /> Telegram
            </a>
            <a href={'mailto:' + SITE.email} className="flex items-center gap-[5px] font-body text-[13px] text-[#4A463D] hover:text-[#FF4D00]">
              <Mail className="h-[14px] w-[14px]" /> {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
