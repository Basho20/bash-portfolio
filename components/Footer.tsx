import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/60">
      <div className="max-w-6xl mx-auto px-6 xl:px-10 py-14">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10">

          {/* Brand */}
          <div>
            <p className="f-display text-2xl font-black text-ivory tracking-tight mb-1">Mohamed Bash</p>
            <p className="f-code text-[9px] tracking-wide2 text-ivory/30 uppercase">
              Software Developer · Nairobi, Kenya
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {['/services', '/about', '/contact'].map(href => (
              <Link key={href} href={href}
                className="f-body text-[11px] tracking-wide text-ivory/40 hover:text-copper transition-colors duration-300 cu-link capitalize">
                {href.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FiGithub size={15} />, href: 'https://github.com/Basho20' },
              { icon: <FiLinkedin size={15} />, href: 'https://www.linkedin.com/in/eng-bash-mohamed-829bb6346' },
              { icon: <FiTwitter size={15} />, href: 'https://x.com/THE_Eng_M0bash' },
              { icon: <FiInstagram size={15} />, href: 'https://www.instagram.com/mobash004'}
            ].map((s, i) => (
              <a key={i} href={s.href} target='_blank'
                className="w-9 h-9 border border-ivory/10 flex items-center justify-center text-ivory/30 hover:border-copper hover:text-copper transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ivory/[0.06] flex items-center justify-between">
          <p className="f-code text-[9px] tracking-wide text-ivory/20">
            © {new Date().getFullYear()} Mohamed Bash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}