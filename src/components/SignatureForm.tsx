import React, { useRef, useEffect, useState, useCallback } from 'react';
import SignaturePad from 'signature_pad';
import { motion } from 'framer-motion';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw3H_qqMC3S5zcs36sL07Vwil__MEF5owvL5R31ZqUyCPe7IWsVlgNU0f-USvt4SQjI/exec';

const SignatureForm: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const padRef = useRef<SignaturePad | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Resize canvas to fill its container while keeping a sharp resolution
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const width = container.clientWidth;
    const height = container.clientHeight;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(ratio, ratio);

    // Clear after resize (data is lost anyway)
    padRef.current?.clear();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    padRef.current = new SignaturePad(canvas, {
      penColor: '#1C82A3',
      backgroundColor: 'rgba(255,255,255,0)',
    });

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  const handleClear = () => {
    padRef.current?.clear();
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async () => {
    if (!padRef.current || padRef.current.isEmpty()) {
      setError('Signature is required');
      return;
    }

    setError('');
    setSubmitting(true);

    try {
      // Google Apps Script redirects POST requests, so we use 'no-cors'
      // and optimistically assume success (same pattern as ContactPage).
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          name: 'Test User',
          signature: padRef.current.toDataURL('image/png'),
        }),
      });

      setSuccess(true);
      padRef.current.clear();
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-xl mx-auto"
    >
      {/* Signature canvas */}
      <div
        ref={containerRef}
        className="relative w-full h-48 sm:h-56 rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden cursor-crosshair"
      >
        <canvas ref={canvasRef} className="absolute inset-0 touch-none" />

        {/* Baseline guide */}
        <div className="pointer-events-none absolute bottom-8 left-6 right-6 border-b border-dashed border-white/20" />
        <span className="pointer-events-none absolute bottom-2 right-4 text-[10px] uppercase tracking-widest text-white/30 select-none">
          Sign here
        </span>
      </div>

      {/* Error / Success messages */}
      {error && (
        <p className="mt-3 text-sm text-red-400 font-medium text-center">{error}</p>
      )}
      {success && (
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-3 text-sm text-green-400 font-medium text-center"
        >
          ✅ Signature submitted successfully
        </motion.p>
      )}

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 mt-5">
        <button
          type="button"
          onClick={handleClear}
          disabled={submitting}
          className="px-6 py-2.5 rounded-[10px] border border-white/20 text-sm font-medium text-text-light hover:bg-white/10 transition-all duration-300 disabled:opacity-40"
        >
          Clear Signature
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="px-8 py-2.5 rounded-[10px] bg-active-nav-gradient text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme-accent-orange-start/40 disabled:opacity-60 disabled:hover:scale-100"
        >
          {submitting ? 'Submitting…' : 'Submit'}
        </button>
      </div>
    </motion.div>
  );
};

export default SignatureForm;
