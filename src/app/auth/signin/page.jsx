"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient, signIn } from "@/lib/auth-client";
import { Eye, EyeOff, Briefcase, ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function SignInPage() {
    const router = useRouter();

    const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState({ type: null, message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (status.type) setStatus({ type: null, message: "" });
    };

    // ── Validation ────────────────────────────────────────
    const validate = () => {
        if (!form.email.trim()) return "Email address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            return "Please enter a valid email address.";
        if (!form.password) return "Password is required.";
        return null;
    };

    // ── Submit ────────────────────────────────────────────
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validate();
        if (validationError) {
            setStatus({ type: "error", message: validationError });
            return;
        }

        setLoading(true);
        setStatus({ type: null, message: "" });

        try {
            const { data, error } = await signIn.email({
                email: form.email.trim().toLowerCase(),
                password: form.password,
            });

            if (error) {
                setStatus({
                    type: "error",
                    message:
                        error.message === "Invalid credentials"
                            ? "Incorrect email or password. Please try again."
                            : error.message === "User not found"
                                ? "No account found with this email. Create one instead."
                                : error.message || "Something went wrong. Please try again.",
                });
                return;
            }

            setStatus({
                type: "success",
                message: "Signed in successfully! Taking you to your dashboard…",
            });

            setTimeout(() => router.push("/"), 1500);
        } catch {
            setStatus({
                type: "error",
                message: "Network error. Please check your connection and try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#0c0d10] flex items-center justify-center px-4 py-12">

            {/* ── Ambient glow ── */}
            <div
                className="pointer-events-none fixed inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(91,61,245,0.18) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 w-full max-w-md">

                {/* ── Back to home ── */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8 group"
                >
                    <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
                    Back to home
                </Link>

                {/* ── Card ── */}
                <div className="bg-[#13141a] border border-white/[0.08] rounded-2xl p-8 shadow-2xl shadow-black/40">

                    {/* Header */}
                    <div className="flex flex-col items-start gap-1 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600 shadow-lg shadow-violet-900/50 mb-3">
                            <Briefcase size={18} strokeWidth={1.8} className="text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">
                            Welcome back
                        </h1>
                        <p className="text-sm text-gray-500">
                            Sign in to your hireloop account
                        </p>
                    </div>

                    {/* ── Status messages ── */}
                    {status.type === "error" && (
                        <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">
                            <AlertCircle size={16} className="shrink-0 mt-0.5" />
                            <span>{status.message}</span>
                        </div>
                    )}

                    {status.type === "success" && (
                        <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl px-4 py-3 mb-6">
                            <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                            <span>{status.message}</span>
                        </div>
                    )}

                    {/* ── Form ── */}
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-300"
                            >
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={handleChange}
                                disabled={loading || status.type === "success"}
                                className="w-full bg-[#1c1d24] border border-white/[0.08] hover:border-white/[0.14] focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium text-gray-300"
                                >
                                    Password
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    value={form.password}
                                    onChange={handleChange}
                                    disabled={loading || status.type === "success"}
                                    className="w-full bg-[#1c1d24] border border-white/[0.08] hover:border-white/[0.14] focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 rounded-xl px-4 py-3 pr-11 text-sm text-white placeholder-gray-600 outline-none transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((p) => !p)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading || status.type === "success"}
                            className="mt-2 w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 active:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 rounded-xl transition-colors duration-150 shadow-lg shadow-violet-900/30"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    Signing in…
                                </>
                            ) : (
                                "Sign in"
                            )}
                        </button>

                    </form>

                    {/* ── Divider ── */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-white/[0.06]" />
                        <span className="text-xs text-gray-600">or</span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                    </div>

                    {/* ── Sign up link ── */}
                    <p className="text-center text-sm text-gray-500">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/sign-up"
                            className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
                        >
                            Create one for free
                        </Link>
                    </p>

                </div>

                {/* ── Terms ── */}
                <p className="text-center text-xs text-gray-600 mt-6 leading-relaxed">
                    By signing in you agree to our{" "}
                    <Link href="/terms" className="underline underline-offset-2 hover:text-gray-400 transition-colors">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline underline-offset-2 hover:text-gray-400 transition-colors">
                        Privacy Policy
                    </Link>
                    .
                </p>

            </div>
        </main>
    );
}