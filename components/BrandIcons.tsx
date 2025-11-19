import React from 'react';

const Icon = ({ src, alt, className }: { src: string, alt: string, className?: string }) => (
    <img src={src} alt={alt} className={className} draggable="false" loading="lazy" />
);

export const BrandIcons = {
    HTML5: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" {...p} />,
    CSS3: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" {...p} />,
    Tailwind: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" {...p} />,
    JavaScript: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" {...p} />,
    TypeScript: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" {...p} />,
    React: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" {...p} />,
    NextJS: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="NextJS" {...p} />,
    NodeJS: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="NodeJS" {...p} />,
    Express: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" {...p} />,
    Render: (p: any) => <Icon src="https://cdn.simpleicons.org/render/000000" alt="Render" {...p} />,
    Netlify: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" alt="Netlify" {...p} />,
    Python: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" {...p} />,
    CPlusPlus: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" {...p} />,
    PostgreSQL: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" {...p} />,
    Supabase: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Supabase" {...p} />,
    Firebase: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" {...p} />,
    GitHub: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" {...p} />,
    Docker: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" {...p} />,
    Jenkins: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" alt="Jenkins" {...p} />,
    Kubernetes: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" {...p} />,
    Terraform: (p: any) => <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" alt="Terraform" {...p} />,
};
