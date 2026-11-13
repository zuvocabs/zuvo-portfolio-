import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  theme = 'dark'
}) {
  const isDark = theme !== 'light';

  return (
    <div className={`mb-14 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border shadow-sm"
          style={{
            backgroundColor: isDark ? 'rgba(1, 91, 151, 0.2)' : 'rgba(1, 91, 151, 0.08)',
            borderColor: isDark ? 'rgba(0, 132, 209, 0.35)' : 'rgba(1, 91, 151, 0.25)',
            color: isDark ? '#38BDF8' : '#01426E',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0084D1] animate-pulse"></span>
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-[#17171D]'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-[#686875]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
