import React from 'react';
import { BrandIcons } from './BrandIcons';

export const Marquee: React.FC = () => {
  const brands = [
    { name: 'HTML5', icon: BrandIcons.HTML5 },
    { name: 'CSS3', icon: BrandIcons.CSS3 },
    { name: 'Tailwind', icon: BrandIcons.Tailwind },
    { name: 'JavaScript', icon: BrandIcons.JavaScript },
    { name: 'TypeScript', icon: BrandIcons.TypeScript },
    { name: 'React', icon: BrandIcons.React },
    { name: 'NextJS', icon: BrandIcons.NextJS },
    { name: 'NodeJS', icon: BrandIcons.NodeJS },
    { name: 'Express', icon: BrandIcons.Express },
    { name: 'Render', icon: BrandIcons.Render },
    { name: 'Netlify', icon: BrandIcons.Netlify },
    { name: 'Python', icon: BrandIcons.Python },
    { name: 'C++', icon: BrandIcons.CPlusPlus },
    { name: 'PostgreSQL', icon: BrandIcons.PostgreSQL },
    { name: 'Supabase', icon: BrandIcons.Supabase },
    { name: 'Firebase', icon: BrandIcons.Firebase },
    { name: 'GitHub', icon: BrandIcons.GitHub },
    { name: 'Docker', icon: BrandIcons.Docker },
    { name: 'Jenkins', icon: BrandIcons.Jenkins },
    { name: 'Kubernetes', icon: BrandIcons.Kubernetes },
    { name: 'Terraform', icon: BrandIcons.Terraform },
  ];

  return (
    <div className="bg-white rounded-[2rem] py-10 flex items-center overflow-hidden shadow-sm relative h-40 w-full">
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex overflow-hidden w-full">
        {/* Two sets of items needed for seamless infinite loop */}
        {/* Reduced speed (25s), reduced size (h-14), closer gap (gap-12) */}
        <div className="flex shrink-0 items-center gap-12 animate-scroll pr-12" style={{ animationDuration: '25s' }}>
          {brands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="flex items-center justify-center opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer" title={brand.name}>
               <brand.icon className="h-14 w-auto object-contain drop-shadow-sm" />
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-12 animate-scroll pr-12" style={{ animationDuration: '25s' }}>
          {brands.map((brand, index) => (
            <div key={`dup-${brand.name}-${index}`} className="flex items-center justify-center opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer" title={brand.name}>
               <brand.icon className="h-14 w-auto object-contain drop-shadow-sm" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};