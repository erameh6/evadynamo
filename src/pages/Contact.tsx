import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/Shared'
import { BUDGETS, CONTACT_FIELDS, SITE } from '../data'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    type: CONTACT_FIELDS[0],
    budget: BUDGETS[4],
    message: '',
  })
  const [sent, setSent] = useState(false)

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Project inquiry — ${form.name}${form.company ? ` (${form.company})` : ''}`,
    )
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company || '—'}`,
        `Email: ${form.email}`,
        `Project type: ${form.type}`,
        `Budget range: ${form.budget}`,
        '',
        'Message:',
        form.message,
      ].join('\n'),
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputCls =
    'w-full rounded-[8px] border border-[rgba(23,21,15,0.15)] bg-white px-[14px] py-[11px] font-body text-[15px] text-[#17150F] outline-none transition-colors placeholder:text-[#8A857B] focus:border-[#FF4D00]'
  const labelCls = 'mb-[6px] block font-body text-[13px] font-medium text-[#17150F]'

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building."
        lede="Fill in the brief below and we will come back with a clear response — usually within one business day."
      />

      <section className="bg-[#F7F6F2] px-[24px] py-[64px] md:px-[48px] md:py-[80px]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-[40px] md:grid-cols-[1fr_340px]">
          {/* form */}
          <form className="space-y-[18px]" onSubmit={handleSubmit} aria-label="Project inquiry">
            <div className="grid gap-[18px] sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelCls}>Name *</label>
                <input id="name" required value={form.name} onChange={set('name')} placeholder="Your name" autoComplete="name" className={inputCls} />
              </div>
              <div>
                <label htmlFor="company" className={labelCls}>Company</label>
                <input id="company" value={form.company} onChange={set('company')} placeholder="Company (optional)" autoComplete="organization" className={inputCls} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelCls}>Email *</label>
              <input id="email" type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com" autoComplete="email" className={inputCls} />
            </div>

            <div className="grid gap-[18px] sm:grid-cols-2">
              <div>
                <label htmlFor="type" className={labelCls}>Project type</label>
                <select id="type" value={form.type} onChange={set('type')} className={inputCls}>
                  {CONTACT_FIELDS.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className={labelCls}>Budget range</label>
                <select id="budget" value={form.budget} onChange={set('budget')} className={inputCls}>
                  {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelCls}>Message *</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={set('message')}
                placeholder="What are you trying to achieve? Deadline, context, constraints — anything useful."
                className={inputCls + ' resize-y'}
              />
            </div>

            <button type="submit" className="rounded-[8px] bg-[#FF4D00] px-[24px] py-[13px] font-body text-[15px] font-semibold text-white shadow-md shadow-black/10 transition-colors hover:bg-[#E64600]">
              Send inquiry →
            </button>
            {sent && (
              <p role="status" className="font-body text-[14px] text-[#16A34A]">
                ✓ Your email client should open with the inquiry pre-filled. Prefer another channel? Use the links on this page.
              </p>
            )}
          </form>

          {/* side info */}
          <div className="space-y-[16px]">
            <div className="rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[24px]">
              <h3 className="font-body text-[13px] font-semibold tracking-[0.06em] text-[#17150F] uppercase">Direct</h3>
              <p className="mt-[8px] font-mono2 text-[14px] text-[#FF4D00]">
                <a href={'mailto:' + SITE.email} className="underline-offset-4 hover:underline">{SITE.email}</a>
              </p>
            </div>
            <div className="rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[24px]">
              <h3 className="font-body text-[13px] font-semibold tracking-[0.06em] text-[#17150F] uppercase">Company</h3>
              <p className="mt-[8px] font-body text-[14px] leading-[165%] text-[#4A463D]">
                {SITE.legalName}<br />
                Technology solutions · Software engineering · Cloud · DevOps · AI
              </p>
            </div>
            <div className="rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[24px]">
              <h3 className="font-body text-[13px] font-semibold tracking-[0.06em] text-[#17150F] uppercase">Elsewhere</h3>
              <p className="mt-[8px] space-y-[6px] font-body text-[14px] text-[#4A463D]">
                <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="block text-[#FF4D00] underline-offset-4 hover:underline">GitHub ↗</a>
                <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="block text-[#FF4D00] underline-offset-4 hover:underline">LinkedIn ↗</a>
                <a href={SITE.socials.x} target="_blank" rel="noopener noreferrer" className="block text-[#FF4D00] underline-offset-4 hover:underline">X (Twitter) ↗</a>
                <a href={SITE.socials.telegram} target="_blank" rel="noopener noreferrer" className="block text-[#FF4D00] underline-offset-4 hover:underline">Telegram ↗</a>
              </p>
            </div>
            <div className="rounded-[10px] border border-[rgba(23,21,15,0.1)] bg-white p-[24px]">
              <h3 className="font-body text-[13px] font-semibold tracking-[0.06em] text-[#17150F] uppercase">What happens next</h3>
              <p className="mt-[8px] font-body text-[14px] leading-[175%] text-[#4A463D]">
                1. We read your brief.<br />
                2. We reply with an honest assessment and a plan.<br />
                3. If it is a fit, we scope it properly — no surprises later.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
