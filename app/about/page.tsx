import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaCloud, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiAndroid, SiC } from 'react-icons/si'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'

const skills = [
  { icon: FaHtml5,      name: 'HTML5' },
  { icon: FaCss3,       name: 'CSS3' },
  { icon: FaJs,         name: 'JavaScript' },
  { icon: FaReact,      name: 'React' },
  { icon: SiTailwindcss,name: 'Tailwind' },
  { icon: FaNodeJs,     name: 'Node.js' },
  { icon: SiMysql,      name: 'MySQL' },
  { icon: FaPython,     name: 'Python' },
  { icon: FaJava,       name: 'Java' },
  { icon: SiAndroid,    name: 'Android' },
  { icon: FaGitAlt,     name: 'Git' },
  { icon: SiC,          name: 'C' },
]

const timeline = [
  {
    year: '2026',
    title: 'Diploma in Project Planning and Management',
    org: 'Machakos Institute of Technology',
    desc: 'Comprehensive gaining of practical skills in planning, executing and managing projects effectively',
    type: 'education (ongoing)'
  },
  {
    year: '2026',
    title: 'Certificate in Digital Marketing',
    org: 'International Youth Fellowship - Kenya',
    desc: 'Comprehensive digital marketing covering SEO, social media strategy, and content creation.',
    type: 'education',
  },
  {
    year: '2025',
    title: 'Full Stack Dev with AI',
    org: 'Power Learn Project',
    desc: 'Built full-stack apps using React, Node.js, and AI APIs to power personalised user experiences.',
    type: 'education',
  },
  {
    year: '2023',
    title: 'BSc Software Engineering',
    org: 'Kirinyaga University',
    desc: 'Formal university study: algorithms, data structures, system design, and software engineering principles.',
    type: 'education (ongoing)',
  },
]

const info = [
  { label: 'Full name',   value: 'Mohamed Bash' },
  { label: 'Phone',       value: '(+254) 721 876 900' },
  { label: 'Email',       value: 'mohamedbash19574@gmail.com' },
  { label: 'Nationality', value: 'Kenyan' },
  { label: 'Languages',   value: 'English, Swahili' },
  { label: 'Freelance',   value: 'Available now' },
]

export default function About() {
  return (
    <section className="min-h-screen pb-28">
      <div className="max-w-6xl mx-auto px-6 xl:px-10">

        {/* ─── Header ─── */}
        <div className="section-header">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-7 h-px bg-copper" />
            <span className="eyebrow">Background</span>
          </div>
          <h1 className="f-display font-thin text-[clamp(52px,8.5vw,108px)] leading-none text-obsidian tracking-tight">
            About{' '}
            <em className="font-black italic text-copper">Me.</em>
          </h1>
        </div>

        {/* ─── Bio + portrait ─── */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 py-16 border-b border-obsidian/[0.07]">

          {/* Portrait */}
          <div className="xl:col-span-4 order-1 xl:order-2">
            <div className="photo-frame relative z-10">
              <div className="w-full aspect-[3/4] overflow-hidden relative">
                <Image
                  src="/images/portrait.jpeg"
                  alt="Mohamed Bash"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Copper corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-copper z-20" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-copper z-20" />
            </div>
          </div>

          {/* Bio text */}
          <div className="xl:col-span-8 order-2 xl:order-1 flex flex-col gap-6">
            <p className="f-display text-2xl xl:text-3xl font-light leading-relaxed text-obsidian">
              Hi — I'm Mohamed Bash, a software developer from{' '}
              <em className="italic text-copper">Nairobi, Kenya</em>.
            </p>
            <p className="f-body text-base text-slate leading-relaxed">
              I'm currently pursuing a Bachelor of Science in Software Engineering at Kirinyaga
              University. I have a passion for building digital products that solve real problems
              and create meaningful impact.
            </p>
            <p className="f-body text-base text-slate leading-relaxed">
              With experience across the full stack, I enjoy working from initial concept through
              to shipped product. When I'm not coding, you'll find me behind a camera, exploring
              the outdoors, or following the latest in tech.
            </p>

            {/* Info table */}
            <div className="mt-4 border-t border-obsidian/[0.07]">
              {info.map((item, i) => (
                <div key={i}
                  className={`group flex items-center justify-between py-4 -mx-2 px-2 hover:bg-parchment transition-colors duration-200
                    ${i < info.length - 1 ? 'border-b border-obsidian/[0.06]' : ''}`}>
                  <span className="f-code text-[9px] tracking-wide2 text-slate uppercase">{item.label}</span>
                  <span className={`f-body text-sm ${item.label === 'Freelance' ? 'text-copper font-medium' : 'text-charcoal'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Skills ─── */}
        <div className="py-16 border-b border-obsidian/[0.07]">
          <div className="flex items-center gap-4 mb-12">
            <span className="eyebrow">Technology</span>
            <div className="flex-1 h-px bg-obsidian/[0.07]" />
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 xl:grid-cols-8 gap-3">
            {skills.map((skill, i) => (
              <div key={i}
                className="skill-chip group p-4 flex flex-col items-center gap-2.5 cursor-default">
                <skill.icon className="text-2xl text-slate group-hover:text-copper transition-colors duration-300" />
                <span className="f-code text-[7px] tracking-wide text-ash/70 text-center group-hover:text-copper/70 transition-colors duration-300 leading-tight uppercase">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Timeline ─── */}
        <div className="py-16">
          <div className="flex items-center gap-4 mb-14">
            <span className="eyebrow">Timeline</span>
            <div className="flex-1 h-px bg-obsidian/[0.07]" />
          </div>

          <div className="relative">
            {/* Vertical guide line */}
            <div className="absolute left-[64px] xl:left-[84px] top-0 bottom-0 w-px bg-obsidian/[0.07]" />

            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <div key={i}
                  className="group relative flex items-start gap-8 xl:gap-12 py-8 -mx-2 px-2 hover:bg-parchment rounded-sm transition-colors duration-200">

                  {/* Year */}
                  <div className="w-[48px] xl:w-[68px] flex-shrink-0 text-right">
                    <span className="f-code text-[9px] tracking-wide text-slate">{item.year}</span>
                  </div>

                  {/* Dot */}
                  <div className="tl-dot flex-shrink-0 mt-1 relative z-10" />

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="f-display text-xl xl:text-2xl font-semibold text-obsidian group-hover:text-copper transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="flex-shrink-0 f-code text-[8px] tracking-wide uppercase px-2 py-0.5 border border-obsidian/10 text-slate">
                        {item.type}
                      </span>
                    </div>
                    <p className="f-code text-[9px] tracking-wide2 text-copper/70 uppercase mb-3">{item.org}</p>
                    <p className="f-body text-sm text-slate/70 leading-relaxed max-w-[500px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div className="mt-4 py-14 border-t border-obsidian/[0.07] flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
          <h2 className="f-display font-light text-[clamp(30px,4vw,52px)] leading-tight text-obsidian">
            Want to work{' '}
            <em className="italic font-black text-copper">together?</em>
          </h2>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            <span>Get in touch</span>
            <FiArrowUpRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  )
}