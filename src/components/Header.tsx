import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV, SITE } from '../data'
import { EASE_OUT } from './ui'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 w-full border-b border-[rgba(23,21,15,0.08)] bg-[#F7F6F2]/90 px-[24px] py-[14px] backdrop-blur-md md:px-[48px]"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: EASE_OUT }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-[10px]" aria-label="Eva Dynamo home">
          <span className="font-display text-[22px] font-bold text-[#17150F]">
            E<span className="text-[#FF4D00]">▴</span>
          </span>
          <span className="font-display text-[18px] font-semibold tracking-[-0.3px] text-[#17150F]">
            Eva Dynamo
          </span>
        </Link>

        <nav className="hidden items-center gap-[28px] lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                'font-body text-[15px] tracking-[-0.2px] transition-colors hover:text-[#FF4D00] ' +
                (isActive ? 'font-semibold text-[#17150F]' : 'font-normal text-[#4A463D]')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-[16px] lg:flex">
          <Link
            to="/contact"
            className="rounded-[8px] bg-[#FF4D00] px-[16px] py-[9px] font-body text-[15px] font-semibold tracking-[-0.2px] text-white shadow-md shadow-black/10 transition-colors hover:bg-[#E64600]"
          >
            Request Consultation →
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center justify-center rounded-[8px] border border-[rgba(23,21,15,0.12)] bg-white/60 p-2 backdrop-blur-md md:p-2.5 lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5 text-[#17150F]" /> : <Menu className="h-5 w-5 text-[#17150F]" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="absolute top-[64px] right-[16px] left-[16px] z-50 rounded-[16px] border border-[rgba(23,21,15,0.15)] bg-white/95 p-[20px] shadow-2xl backdrop-blur-xl md:right-[24px] md:left-[24px] md:rounded-[20px] md:p-[32px]"
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
          >
            <div className="flex flex-col gap-[16px]">
              {NAV.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    'font-body text-[18px] tracking-[-0.2px] ' +
                    (isActive ? 'font-semibold text-[#17150F]' : 'font-normal text-[#4A463D]')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-[8px] rounded-[8px] bg-[#FF4D00] px-[16px] py-[12px] text-center font-body text-[15px] font-semibold tracking-[-0.2px] text-white"
              >
                Request Consultation →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* key to re-render nothing; keep location used */}
      <span className="hidden">{location.pathname}</span>
    </motion.header>
  )
}
