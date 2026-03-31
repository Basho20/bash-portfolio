'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',         label: 'Home',     num: '00' },
  { href: '/services', label: 'Services', num: '02' },
  { href: '/about',    label: 'About',    num: '03' },
  { href: '/contact',  label: 'Contact',  num: '04' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/92 backdrop-blur-md border-b border-obsidian/[0.07]">
        <div className="max-w-6xl mx-auto px-6 xl:px-10 h-[68px] flex items-center justify-between">

          {/* Wordmark */}
          <Link href="/" className="group flex items-baseline gap-2.5">
            <span className="f-display font-black text-xl tracking-tight text-obsidian group-hover:text-copper transition-colors duration-300" style={{ fontVariantLigatures: 'none' }}>
              MB
            </span>
            <span className="f-code text-[8px] tracking-wide3 text-ash uppercase hidden sm:block">
              Portfolio
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {links.slice(1).map(l => (
              <Link key={l.href} href={l.href}
                className={`group relative f-body text-[11px] tracking-wide font-medium transition-colors duration-300
                  ${pathname === l.href ? 'text-copper' : 'text-slate hover:text-obsidian'}`}>
                {l.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-copper transition-all duration-400
                  ${pathname === l.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>

          {/* Hire me CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary py-2.5 px-5 text-[9px]">
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col gap-[5px] p-1.5" aria-label="Menu">
            <span className={`block h-px bg-obsidian transition-all duration-300 ${open ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'}`} />
            <span className={`block h-px bg-copper transition-all duration-300 ${open ? 'opacity-0 w-5' : 'w-3.5'}`} />
            <span className={`block h-px bg-obsidian transition-all duration-300 ${open ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-5'}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-ivory flex flex-col justify-center px-8 transition-all duration-500
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="mb-10">
          <span className="f-display text-6xl font-black text-obsidian/10">Menu</span>
        </div>
        <div className="flex flex-col divide-y divide-obsidian/[0.06]">
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`group flex items-center justify-between py-5 transition-colors duration-200
                ${pathname === l.href ? 'text-copper' : 'text-obsidian hover:text-copper'}`}>
              <span className="f-display text-[42px] font-light italic leading-none">{l.label}</span>
              <span className="f-code text-[9px] text-ash tracking-wide2">{l.num}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}