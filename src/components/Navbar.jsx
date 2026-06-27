"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data: session, isPending } = useSession()

  const user = session?.user;

  const handelSignUp = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  }

  return (
    <header className="w-full bg-[#111214] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 select-none">
            {/* Purple rounded square with briefcase icon — matches the reference style */}
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-violet-600 shadow-md shadow-violet-900/50 shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Briefcase icon */}
                <rect x="2" y="7" width="20" height="14" rx="2" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-white font-bold text-[15px] tracking-tight leading-tight">
              hireloop
            </span>
          </Link>

          {/* ── Desktop: Nav + Divider + Auth (all right-aligned) ── */}
          <div className="hidden md:flex items-center gap-3 ml-auto">

            {/* Nav Group Pill */}
            <div className="flex items-center bg-[#1e2025] border border-white/[0.07] rounded-full px-2 py-1.5 gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white hover:bg-white/[0.07] px-4 py-1.5 rounded-full transition-colors duration-150 font-medium whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Vertical Divider */}
            <div className="w-px h-6 bg-white/15 shrink-0" />

            {/* Auth Buttons */}
            {
              user ?
                <>
                  Hi, {user.name}!
                  <Button onClick={handelSignUp} variant="ghost" >Sign Out</Button>
                </> :
                <Link
                  href="/auth/signin"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-violet-400 hover:text-violet-300 text-center py-3 rounded-full hover:bg-white/5 transition-colors"
                >
                  Sign In
                </Link>
            }
            <Link
              href="/auth/signup"
              className="text-sm font-semibold bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-900 px-5 py-2 rounded-full transition-colors duration-150 shadow-sm whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors ml-auto"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* ── Mobile Dropdown ── */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-1 border-t border-white/[0.06]">
            {/* Nav links inside a pill group on mobile */}
            <div className="flex flex-col bg-[#1e2025] border border-white/[0.07] rounded-2xl mt-3 overflow-hidden">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm text-gray-300 hover:text-white hover:bg-white/[0.07] px-5 py-3.5 transition-colors font-medium ${i !== navLinks.length - 1 ? "border-b border-white/[0.06]" : ""
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth buttons */}
            <div className="flex flex-col gap-2 mt-3">
              {
                user ?
                  <>
                    Hi, {user.name}!
                    <Button onClick={handelSignUp} variant="ghost" >Sign Out</Button>
                  </> :
                  <Link
                    href="/auth/signin"
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-violet-400 hover:text-violet-300 text-center py-3 rounded-full hover:bg-white/5 transition-colors"
                  >
                    Sign In
                  </Link>
              }
              <Link
                href="/auth/signup"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold bg-white hover:bg-gray-100 text-gray-900 text-center py-3 rounded-full transition-colors shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}