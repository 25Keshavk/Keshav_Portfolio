export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  thinkCosmos: ThinkCosmosProps;
  about: AboutProps;
  activities: ActivitiesContent;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  images: string[];
  linkPreview?: string;
  linkSource?: string;
}

export interface ThinkCosmosProps {
  description: string;
  images: string[];
}

export interface AboutProps {
  description: string;
  images: string[];
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface ActivitiesContent {
  rockClimbing: {
    description: string;
    image: string;
  };
  chess: {
    description: string;
    profileLink: string;
    images: string[];
  };
  photography: {
    description: string;
    images: { src: string; alt: string }[];
  };
}
