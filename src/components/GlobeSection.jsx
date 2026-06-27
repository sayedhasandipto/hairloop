import Image from "next/image";
import { BriefcaseIcon, BarChart2, UsersRound, Star } from "lucide-react";

const stats = [
    { icon: BriefcaseIcon, value: "50K", label: "Active Jobs" },
    { icon: BarChart2, value: "12K", label: "Companies" },
    { icon: UsersRound, value: "2M", label: "Job Seekers" },
    { icon: Star, value: "97%", label: "Satisfaction Rate" },
];

export default function GlobeSection() {
    return (
        <section className="relative w-full bg-[#0c0d10] overflow-hidden">

            {/* ── Globe image — full bleed background ── */}
            {/*
        globe.png is 1440×1882:
        • top ~50%  = purple/magenta atmospheric glow
        • bottom ~50% = the actual globe sphere
        We use object-cover + object-[center_70%] to shift the
        visible crop down so the globe is centred on screen.
      */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/globe.png"
                    alt=""
                    fill
                    className="object-cover object-[center_55%]"
                    priority
                    aria-hidden
                />
                {/* Hard fade at top so navbar doesn't clash */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0c0d10] to-transparent" />
                {/* Fade at bottom so cards sit cleanly */}
                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0c0d10] to-transparent" />
            </div>

            {/* ── Foreground content ── */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Headline */}
                <div className="mt-20 px-4 text-center max-w-lg">
                    <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-light leading-snug">
                        Assisting over{" "}
                        <span className="text-white font-semibold">15,000 job seekers</span>{" "}
                        find their dream positions.
                    </p>
                </div>

                {/* Spacer — let the globe breathe */}
                <div className="h-[420px] sm:h-[480px]" />

                {/* Stat cards */}
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {stats.map(({ icon: Icon, value, label }) => (
                            <div
                                key={label}
                                className="bg-[#13141a]/80 backdrop-blur-md border border-white/[0.07] rounded-2xl p-15 flex flex-col gap-5 hover:border-white/[0.14] transition-colors duration-200"
                            >
                                <span className="text-gray-400">
                                    <Icon size={30} strokeWidth={1.5} />
                                </span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white text-5xl font-bold tracking-tight leading-none">
                                        {value}
                                    </span>
                                    <span className="text-gray-500 text-md">{label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}