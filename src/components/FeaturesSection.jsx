import {
    Search,
    TrendingUp,
    BarChart2,
    Bookmark,
    Sparkles,
    FileText,
    Hexagon,
    ArrowUpRight,
} from "lucide-react";

// ── Feature data ──────────────────────────────────────────
const features = [
    {
        icon: Search,
        title: "Smart Search",
        desc: "Find your ideal job with advanced filters.",
    },
    {
        icon: TrendingUp,
        title: "Salary Insights",
        desc: "Get real salary data to negotiate confidently.",
    },
    {
        icon: BarChart2,
        title: "Top Companies",
        desc: "Apply to vetted companies that are hiring.",
    },
    {
        icon: Bookmark,
        title: "Saved Jobs",
        desc: "Manage apps & favorites on your dashboard.",
    },
    {
        icon: Sparkles,
        title: "One-Click Apply",
        desc: "Simplify your job applications for an easier process!",
    },
    {
        icon: FileText,
        title: "Resume Builder",
        desc: "Create professional resumes with modern templates.",
    },
    {
        icon: Hexagon,
        title: "Skill-Based Matching",
        desc: "Discover jobs that match your skills and experience.",
    },
    {
        icon: ArrowUpRight,
        title: "Career Growth Resources",
        desc: "Boost your career with quick interview tips.",
    },
];

// ── Component ─────────────────────────────────────────────
export default function FeaturesSection() {
    return (
        <section className="w-full bg-[#0e0f11] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center mb-14">

                    {/* Badge with dashed border box */}
                    <div className="relative border border-dashed border-indigo-500/40 rounded-md px-6 pt-4 pb-6 mb-0 w-fit">

                        {/* Corner squares */}
                        <span className="absolute top-[-4px] left-[-4px]  w-2 h-2 bg-violet-500 rounded-[2px]" />
                        <span className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-violet-500 rounded-[2px]" />
                        <span className="absolute bottom-[-4px] left-[-4px]  w-2 h-2 bg-violet-500 rounded-[2px] hidden" />
                        <span className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-violet-500 rounded-[2px] hidden" />

                        {/* Label */}
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="w-2 h-2 bg-violet-500 rounded-[2px]" />
                            <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
                                Features Job
                            </span>
                            <span className="w-2 h-2 bg-violet-500 rounded-[2px]" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                            Everything you need <br className="hidden sm:block" />
                            to succeed
                        </h2>
                    </div>
                </div>

                {/* ── Cards grid — wrapped in outer dashed border ── */}
                <div className="relative border border-dashed border-indigo-500/25 rounded-xl p-1">

                    {/* Corner accent squares on the outer grid border */}
                    <span className="absolute top-[-4px] left-[-4px]  w-2 h-2 bg-violet-500/60 rounded-[2px]" />
                    <span className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-violet-500/60 rounded-[2px]" />
                    <span className="absolute bottom-[-4px] left-[-4px]  w-2 h-2 bg-violet-500/60 rounded-[2px]" />
                    <span className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-violet-500/60 rounded-[2px]" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-x-0 sm:divide-x divide-white/[0.07] divide-dashed">
                        {features.map(({ icon: Icon, title, desc }, i) => (
                            <FeatureCard key={title} Icon={Icon} title={title} desc={desc} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

// ── Individual feature card ───────────────────────────────
function FeatureCard({ Icon, title, desc, index }) {
    // Add top divider for second row on large screens
    const isSecondRow = index >= 4;

    return (
        <div
            className={`
        flex items-start gap-4 p-6
        hover:bg-white/[0.03] transition-colors duration-200
        ${isSecondRow ? "lg:border-t lg:border-dashed lg:border-white/[0.07]" : ""}
      `}
        >
            {/* Icon box */}
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1a1b21] border border-white/[0.07] flex items-center justify-center text-violet-400">
                <Icon size={20} strokeWidth={1.5} />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-sm font-semibold text-white leading-snug">
                    {title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
}