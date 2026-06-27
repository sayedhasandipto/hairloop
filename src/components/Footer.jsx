import Link from "next/link";

// ── Social Icons ──────────────────────────────────────────
const FacebookIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const PinterestIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

// ── Logo ──────────────────────────────────────────────────
const HireloopLogo = () => (
    <Link href="/" className="flex items-center gap-0 select-none w-fit">
        <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-orange-500">hire</span>
            <span className="relative inline-flex items-center">
                <span className="text-blue-400">l</span>
                <span className="relative inline-flex items-center mx-px">
                    <span className="w-4.5 h-4.5 rounded-full border-[3px] border-orange-500 inline-block" />
                    <span className="w-4.5 h-4.5 rounded-full border-[3px] border-blue-400 inline-block -ml-1.75" />
                </span>
                <span className="text-blue-400">p</span>
            </span>
        </span>
    </Link>
);

// ── Data ──────────────────────────────────────────────────
const footerColumns = [
    {
        heading: "Product",
        links: [
            { label: "Job discovery", href: "/jobs" },
            { label: "Worker AI", href: "/worker-ai" },
            { label: "Companies", href: "/companies" },
            { label: "Salary data", href: "/salary-data" },
        ],
    },
    {
        heading: "Navigations",
        links: [
            { label: "Help center", href: "/help" },
            { label: "Career library", href: "/career-library" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        heading: "Resources",
        links: [
            { label: "Brand Guideline", href: "/brand" },
            { label: "Newsroom", href: "/newsroom" },
        ],
    },
];

const socials = [
    { icon: <FacebookIcon />, href: "https://facebook.com", label: "Facebook", bg: "bg-[#1e2025]" },
    { icon: <PinterestIcon />, href: "https://pinterest.com", label: "Pinterest", bg: "bg-violet-700" },
    { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn", bg: "bg-[#1e2025]" },
];

// ── Component ─────────────────────────────────────────────
export default function Footer() {
    return (
        <footer className="w-full bg-[#0e0f11] border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Main Row ── */}
                <div className="py-14 flex flex-col lg:flex-row lg:justify-between gap-12">

                    {/* ── Left: Brand ── */}
                    <div className="flex flex-col gap-4 max-w-[220px]">
                        <HireloopLogo />
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* ── Right: Link Columns ── */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">
                        {footerColumns.map((col) => (
                            <div key={col.heading} className="flex flex-col gap-4">
                                <h3 className="text-sm font-semibold text-indigo-400 tracking-wide">
                                    {col.heading}
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {col.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-gray-500 hover:text-gray-200 transition-colors duration-150"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="border-t border-white/[0.06] py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className={`${s.bg} w-8 h-8 rounded-md flex items-center justify-center text-gray-300 hover:text-white hover:opacity-80 transition-opacity`}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright + Legal */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
                        <p className="text-xs text-gray-600">
                            Copyright 2024 — hireloop
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Link href="/terms" className="hover:text-gray-300 transition-colors">
                                Terms &amp; Policy
                            </Link>
                            <span className="text-gray-700 mx-0.5">-</span>
                            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                                Privacy Guideline
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}