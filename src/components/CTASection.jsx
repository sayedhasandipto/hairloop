import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative w-full bg-[#08090b] overflow-hidden">

            {/* ── Layer 1: Purple radial glow — sits BEHIND the grid ── */}
            <div className="absolute inset-0 z-0 flex items-start justify-center pt-0">
                <div
                    className="w-full max-w-7xl h-130"
                    style={{
                        background:
                            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,46,209,0.75) 0%, rgba(55,30,160,0.35) 45%, transparent 75%)",
                    }}
                />
            </div>

            {/* ── Layer 2: cta-bg.png grid — positioned at top-center ── */}
            <div className="absolute inset-0 z-10">
                <Image
                    src="/images/cta-bg.png"
                    alt=""
                    fill
                    className="object-cover object-[center_5%]"
                    priority
                    aria-hidden
                />
                {/* Left fade */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#08090b] to-transparent" />
                {/* Right fade */}
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#08090b] to-transparent" />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#08090b] to-transparent" />
                {/* Top subtle fade */}
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#08090b] to-transparent" />
            </div>

            {/* ── Layer 3: Foreground content ── */}
            <div className="relative z-20 flex flex-col items-center text-center py-28 px-4 max-w-3xl mx-auto gap-5">

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                    Your next role is <br />
                    already looking for you
                </h2>

                {/* Subtext */}
                <p className="text-sm sm:text-base text-gray-400 max-w-sm leading-relaxed">
                    Build a profile in three minutes. The matches start arriving tomorrow morning.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                    <Link
                        href="/get-started"
                        className="px-7 py-3 rounded-xl bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-900 text-sm font-semibold transition-colors duration-150 shadow-sm whitespace-nowrap"
                    >
                        Create a free account
                    </Link>
                    <Link
                        href="/pricing"
                        className="px-7 py-3 rounded-xl bg-[#16181e] hover:bg-[#1e2028] border border-white/10 hover:border-white/20 text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
                    >
                        View pricing
                    </Link>
                </div>

            </div>
        </section>
    );
}