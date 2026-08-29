'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [interest, setInterest] = useState('other');
    const [country, setCountry] = useState('other');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!supabase) {
            setStatus('error');
            setMessage('Signup is temporarily unavailable. Please email us instead.');
            return;
        }

        setStatus('loading');

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([
                    { email, interest, country, created_at: new Date().toISOString() },
                ]);

            if (error) {
                if (error.code === '23505' || error.message.includes('duplicate')) {
                    setStatus('success');
                    setMessage("You're already on the list.");
                    return;
                }
                throw error;
            }

            setStatus('success');
            setMessage("You're on the list — we'll reach out as pilot spots open up.");
            setEmail('');
        } catch (error) {
            console.error('Error submitting to waitlist:', error);
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-lg">
            <div className="bg-ground border border-line p-6 md:p-10">
                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-10"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-ink mb-3">You&apos;re in.</h3>
                            <p className="text-ink-soft text-sm">{message}</p>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'loading'}
                                    className="w-full bg-surface border border-line px-5 py-4 text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent transition-all text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative">
                                    <label htmlFor="interest" className="sr-only">Area of interest</label>
                                    <select
                                        id="interest"
                                        value={interest}
                                        onChange={(e) => setInterest(e.target.value)}
                                        disabled={status === 'loading'}
                                        className="w-full bg-surface border border-line px-5 py-4 text-ink appearance-none focus:outline-none focus:border-accent transition-all cursor-pointer text-sm"
                                    >
                                        <option value="agriculture">Agriculture</option>
                                        <option value="defense">Defense / gov</option>
                                        <option value="investor">Investor</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-faint pointer-events-none" />
                                </div>

                                <div className="relative">
                                    <label htmlFor="country" className="sr-only">Region</label>
                                    <select
                                        id="country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        disabled={status === 'loading'}
                                        className="w-full bg-surface border border-line px-5 py-4 text-ink appearance-none focus:outline-none focus:border-accent transition-all cursor-pointer text-sm"
                                    >
                                        <option value="other">Select region</option>
                                        <option value="eu">Europe</option>
                                        <option value="us">North America</option>
                                        <option value="apac">Asia Pacific</option>
                                        <option value="latam">Latin America</option>
                                        <option value="mea">Middle East / Africa</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-faint pointer-events-none" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-ink text-ground font-semibold py-5 hover:bg-accent hover:text-ink transition-all flex items-center justify-center gap-3"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    'Join the waitlist'
                                )}
                            </button>

                            {status === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-accent text-[13px] text-center flex items-center justify-center gap-2"
                                >
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    {message}
                                </motion.p>
                            )}
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
