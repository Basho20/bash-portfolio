import Link from 'next/link'
import { FiCode, FiCamera, FiArrowUpRight } from 'react-icons/fi'

const services = [
  {
    num: '01',
    icon: FiCode,
    title: 'Web Development',
    tagline: 'End-to-end web applications',
    desc: 'From architecture to deployment. Fast, scalable apps using React and Node.js — with clean code and solid tests.',
    bullets: ['React / Next.js applications', 'REST APIs & databases', 'CI/CD & cloud deployment', 'Performance optimisation'],
    accent: 'border-copper',
  },
  {
    num: '02',
    icon: FiCamera,
    title: 'Photography',
    tagline: 'Capturing moments, telling stories',
    desc: 'Professional photography for portraits, events, and commercial projects. Compelling visuals that resonate.',
    bullets: ['Portrait photography', 'Event coverage', 'Commercial shoots', 'Post-processing & editing'],
    accent: 'border-moss',
  },
]

const process = [
  { num: '01', title: 'Discovery',  desc: 'Deep dive into your goals and constraints before writing a single line.' },
  { num: '02', title: 'Strategy',   desc: 'Architecture decisions, tech stack, and roadmap with clear milestones.' },
  { num: '03', title: 'Build',      desc: 'Iterative sprints with regular demos and feedback loops.' },
  { num: '04', title: 'Ship',       desc: 'QA, staged deployment, monitoring, and post-launch support.' },
]

export default function Services() {
  return (
    <section className="min-h-screen pb-28">
      <div className="max-w-6xl mx-auto px-6 xl:px-10">

        {/* ─── Header ─── */}
        <div className="section-header">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-7 h-px bg-copper" />
            <span className="eyebrow">Capabilities</span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <h1 className="f-display font-thin text-[clamp(52px,8.5vw,108px)] leading-none text-obsidian tracking-tight">
              What I{' '}
              <em className="font-black italic text-copper">Offer.</em>
            </h1>
            <p className="hidden xl:block f-body text-sm text-slate max-w-[220px] leading-relaxed text-right">
              A focused set of skills covering the full product lifecycle.
            </p>
          </div>
        </div>

        {/* ─── Services cards ─── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 border border-obsidian/[0.07] mt-0">
          {services.map((s, i) => (
            <div key={i}
              className={`group card-top ${s.accent} p-10 xl:p-14 hover:bg-parchment transition-colors duration-300 border-b border-obsidian/[0.07]
                ${i % 2 === 0 ? 'xl:border-r xl:border-obsidian/[0.07]' : ''}`}>

              <div className="flex items-start justify-between mb-8">
                <span className="f-code text-[9px] tracking-wide2 text-ash">{s.num}</span>
                <s.icon className="text-xl text-ash group-hover:text-copper transition-colors duration-300" />
              </div>

              {/* Line accent */}
              <div className="h-px w-8 group-hover:w-16 bg-copper/40 transition-all duration-500 mb-7" />

              <h2 className="f-display text-[clamp(26px,3.5vw,40px)] font-semibold leading-tight text-obsidian mb-2 group-hover:text-copper transition-colors duration-300">
                {s.title}
              </h2>
              <p className="f-code text-[9px] tracking-wide2 text-slate uppercase mb-6">{s.tagline}</p>

              <p className="f-body text-sm text-slate leading-relaxed mb-8 max-w-[360px]">
                {s.desc}
              </p>

              <ul className="flex flex-col gap-2.5">
                {s.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-3 f-body text-xs text-slate/70">
                    <span className="text-copper mt-0.5 flex-shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ─── Process ─── */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-14">
            <span className="eyebrow">Process</span>
            <div className="flex-1 h-px bg-obsidian/[0.07]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-obsidian/[0.07] divide-y xl:divide-y-0 xl:divide-x divide-obsidian/[0.07]">
            {process.map((p, i) => (
              <div key={i} className="group px-8 xl:px-10 py-10 hover:bg-parchment transition-colors duration-300">
                <span className="f-code text-[9px] tracking-wide2 text-copper block mb-5">{p.num}</span>
                <div className="w-5 h-px bg-copper/30 group-hover:w-10 transition-all duration-500 mb-6" />
                <h3 className="f-display text-2xl font-semibold text-obsidian mb-3 group-hover:text-copper transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="f-body text-xs text-slate leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}