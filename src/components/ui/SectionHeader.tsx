// components/ui/SectionHeader.tsx
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export const SectionHeader = ({ title, subtitle, centered = true, children }: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
      {children}
    </div>
  );
};