import Link from 'next/link'
import Image from 'next/image'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[calc(100vh-68px)] flex flex-col">
        <div className="max-w-6xl mx-auto px-6 xl:px-10 w-full flex-1 flex flex-col justify-center py-20">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-0 items-center">

            {/* Left: Headline block */}
            <div className="xl:col-span-7 xl:pr-20">

              {/* Eyebrow */}
              <div className="fade-up d1 flex items-center gap-3 mb-9">
                <span className="w-7 h-px bg-copper" />
                <span className="eyebrow">Full-Stack Developer · Nairobi, KE</span>
              </div>

              {/* Headline */}
              <h1 className="fade-up d2 mb-0 leading-none">
                <span className="block f-display font-thin text-[clamp(60px,9.5vw,130px)] text-obsidian tracking-tight">
                  Building
                </span>
                <span className="block f-display font-black italic text-[clamp(60px,9.5vw,130px)] text-copper tracking-tight">
                  Digital
                </span>
                <span className="block f-display font-thin text-[clamp(60px,9.5vw,130px)] text-obsidian tracking-tight">
                  Products.
                </span>
              </h1>

              {/* Bio + CTAs */}
              <div className="fade-up d3 flex flex-col xl:flex-row items-start xl:items-end gap-8 mt-12">
                <p className="f-body text-sm text-slate leading-relaxed max-w-[340px]">
                  I'm Mohamed Bash — a full-stack developer who designs and builds
                  fast, scalable web and mobile applications from the ground up.
                </p>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Link href="/contact" className="btn-ghost">
                    <span>Hire Me</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Photo card */}
            <div className="xl:col-span-5 fade-up d4 flex justify-center xl:justify-end">
              <div className="flex flex-col items-center xl:items-end gap-6">

                {/* Photo with ornate frame */}
                <div className="photo-frame relative z-10">
                  <div className="w-[180px] h-[180px] xl:w-[200px] xl:h-[200px] rounded-full overflow-hidden border-[3px] border-ivory shadow-[0_0_0_1px_rgba(184,115,51,0.25),0_20px_48px_rgba(20,18,16,0.12)] relative">
                    <Image
                      src="/images/mobash.jpeg"
                      alt="Mohamed Bash"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  {/* Status dot */}
                  <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-ivory shadow-md" />
                </div>

                {/* Name plate */}
                <div className="text-center xl:text-right">
                  <p className="f-display font-semibold text-obsidian text-lg">Mohamed Bash</p>
                  <p className="f-code text-[9px] tracking-wide2 text-ash uppercase mt-0.5">
                    Software Developer
                  </p>
                </div>

                {/* Availability */}
                <div className="border border-obsidian/10 bg-parchment/60 px-5 py-4 text-right w-full">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="f-code text-[8px] tracking-wide2 text-slate uppercase">Available</span>
                  </div>
                  <p className="f-body text-xs text-ash">Open to freelance & full-time</p>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-3">
                  {[
                    { icon: <FiGithub size={14} />, href: '#', label: 'GitHub' },
                    { icon: <FiLinkedin size={14} />, href: '#', label: 'LinkedIn' },
                    { icon: <FiTwitter size={14} />, href: '#', label: 'Twitter' },
                  ].map(s => (
                    <a key={s.label} href={s.href}
                      className="w-9 h-9 border border-obsidian/10 flex items-center justify-center text-ash hover:border-copper hover:text-copper transition-all duration-300">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="h-px bg-obsidian/[0.07]" />
      </section>


      {/* ─── Dark intro band ─── */}
      <section className="dark-band py-20 hatch">
        <div className="max-w-6xl mx-auto px-6 xl:px-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div>
              <p className="eyebrow mb-6">About me</p>
              <h2 className="f-display text-[clamp(32px,4.5vw,58px)] font-light leading-tight text-ivory mb-6">
                I turn complex problems into{' '}
                <em className="italic font-semibold text-copper-light" style={{ color: 'var(--copper-light)' }}>elegant, working</em>{' '}
                software.
              </h2>
              <p className="f-body text-sm text-ivory/50 leading-relaxed max-w-[420px]">
                BSc Software Engineering student at Kirinyaga University. 5+ years of hands-on
                development. Passionate about clean code, thoughtful design, and products that
                matter.
              </p>
            </div>
            <div className="flex flex-col gap-0 divide-y divide-ivory/[0.06]">
              {[
                { label: 'Education',   value: 'Kirinyaga University — BSc SE' },
                { label: 'Experience',  value: '2+ years web development' },
                { label: 'Also does',   value: 'Photography & digital marketing' },
                { label: 'Freelance',   value: 'Currently available' },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between py-5">
                  <span className="f-code text-[9px] tracking-wide2 text-ivory/30 uppercase">{item.label}</span>
                  <span className="f-body text-sm text-ivory/55 text-right max-w-[240px]">{item.value}</span>
                </div>
              ))}
              <div className="pt-6">
                <Link href="/about" className="f-code text-[9px] tracking-wide2 text-copper-light uppercase cu-link"
                  style={{ color: 'var(--copper-light)' }}>
                  Full profile →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-28 border-b border-obsidian/[0.07]">
        <div className="max-w-6xl mx-auto px-6 xl:px-10 text-center">
          <p className="eyebrow mb-6 block">Ready to build?</p>
          <h2 className="f-display font-thin text-[clamp(44px,7vw,96px)] leading-none text-obsidian mb-2 tracking-tight">
            Let's make something
          </h2>
          <h2 className="f-display font-black italic text-[clamp(44px,7vw,96px)] leading-none text-copper mb-14 tracking-tight">
            remarkable.
          </h2>
          <Link href="/contact" className="btn-primary">
            <span>Start a conversation</span>
            <FiArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </>
  )
}