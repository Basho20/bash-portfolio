'use client'
import { sendMail } from '@/lib/mailSend'
import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone, FiArrowUpRight } from 'react-icons/fi'

const contactInfo = [
  { icon: FiPhone, label: 'Phone', value: '(+254) 721 876 900', href: 'tel:+254721876900' },
  { icon: FiMail, label: 'Email', value: 'mohamedbash19574@gmail.com', href: 'mailto:mohamedbash19574@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Kirinyaga University, Kenya', href: '#' },
]

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    const formdata = new FormData(e.currentTarget)
    const result = await sendMail(formdata)
    if (result.success) {
      setSent(true)
    } else {
      setSent(false)
    }
    setSending(false)
  }

  return (
    <section className="min-h-screen pb-28">
      <div className="max-w-6xl mx-auto px-6 xl:px-10">

        {/* ─── Header ─── */}
        <div className="section-header">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-7 h-px bg-copper" />
            <span className="eyebrow">Contact</span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <h1 className="f-display font-thin text-[clamp(52px,8.5vw,108px)] leading-none text-ivory tracking-tight">
              Get In{' '}
              <em className="font-black italic text-copper">Touch.</em>
            </h1>
            <p className="hidden xl:block f-body text-sm text-slate max-w-[200px] leading-relaxed text-right">
              I reply within 24 hours. Let's see what we can build.
            </p>
          </div>
        </div>

        {/* ─── Two-column layout ─── */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-0 border border-obsidian/[0.07] mt-2">

          {/* Left info panel */}
          <div className="xl:col-span-2 border-b xl:border-b-0 xl:border-r border-obsidian/[0.07] p-10 xl:p-12 flex flex-col gap-10">

            <p className="f-body text-base text-slate leading-relaxed">
              Whether you have a project brief, a half-formed idea, or just want to say hi —
              my door is always open.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col divide-y divide-obsidian/[0.06]">
              {contactInfo.map((item, i) => (
                <a key={i} href={item.href}
                  className="group flex items-start gap-4 py-5 -mx-2 px-2 hover:bg-charcoal transition-colors duration-200">
                  <div className="w-9 h-9 border border-obsidian/10 flex items-center justify-center flex-shrink-0 group-hover:bg-copper group-hover:border-copper transition-all duration-300">
                    <item.icon className="text-sm text-ash group-hover:text-ivory transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="f-code text-[8px] tracking-wide2 text-ash uppercase block mb-1">{item.label}</span>
                    <span className="f-body text-sm text-ivory group-hover:text-copper transition-colors duration-300 break-all">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="xl:col-span-3 p-10 xl:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center gap-6 py-16">
                <div className="w-16 h-16 border-2 border-copper flex items-center justify-center">
                  <span className="text-copper text-2xl">✓</span>
                </div>
                <h3 className="f-display text-4xl font-semibold text-ivory">
                  Message received.
                </h3>
                <p className="f-body text-sm text-slate max-w-[280px] leading-relaxed">
                  Thanks for reaching out. I'll respond within 24 hours.
                </p>
                <button onClick={() => setSent(false)}
                  className="mt-2 f-code text-[9px] tracking-wide2 text-copper uppercase cu-link">
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div>
                  <h2 className="f-display text-3xl xl:text-4xl font-light text-ivory mb-2">
                    Start a conversation
                  </h2>
                  <div className="w-10 h-px bg-copper" />
                </div>

                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: 'First name', placeholder: 'James', name: 'first-name', type: 'text', req: true },
                    { label: 'Last name', placeholder: 'Mwangi',name: 'last-name' , type: 'text', req: true },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="f-code text-[8px] tracking-wide2 text-slate uppercase block mb-1">{f.label} {f.req && '*'}</label>
                      <input type={f.type} name={f.name} placeholder={f.placeholder} required={f.req} className="field" />
                    </div>
                  ))}
                </div>

                {/* Email + phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: 'Email', name: 'email', placeholder: 'james@gmail.com', type: 'email', req: true },
                    { label: 'Phone', name: 'phone', placeholder: '+254 700 000 000', type: 'tel', req: false },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="f-code text-[8px] tracking-wide2 text-slate uppercase block mb-1">{f.label} {f.req && '*'}</label>
                      <input type={f.type} placeholder={f.placeholder} name={f.name} required={f.req} className="field" />
                    </div>
                  ))}
                </div>

                {/* Service */}
                <div>
                  <label className="f-code text-[8px] tracking-wide2 text-slate uppercase block mb-1">Service needed</label>
                  <select name="service" className="field" style={{ color: 'var(--slate)' }}>
                    <option value="">Select a service...</option>
                    <option value="web">Web Development</option>
                    <option value="photo">Photography</option>
                    <option value="both">Web + Photography</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="f-code text-[8px] tracking-wide2 text-slate uppercase block mb-1">Message *</label>
                  <textarea
                    placeholder="Tell me about your project — what you want to build, the timeline, and any requirements..." name='message'
                    required rows={5} className="field resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center gap-6 pt-1">
                  <button type="submit" disabled={sending} className="btn-primary disabled:opacity-50">
                    <span>{sending ? 'Sending...' : 'Send message'}</span>
                    {!sending && <FiArrowUpRight size={13} />}
                  </button>
                  <div className="h-px flex-1 bg-copper/20" />
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}