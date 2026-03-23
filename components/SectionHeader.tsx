
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  pillText?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, pillText }) => {
  return (
    <header className="mb-12">
      {pillText && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          {pillText}
        </span>
      )}
      <h1 className="text-6xl md:text-[108px] font-bold text-black tracking-tighter mb-8 leading-[0.85]" dangerouslySetInnerHTML={{ __html: title }}>
      </h1>
      {subtitle && (
        <p className="text-2xl text-gray-500 max-w-4xl leading-8 font-light italic" dangerouslySetInnerHTML={{ __html: subtitle }}>
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
