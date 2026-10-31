export interface SocialLink {
  label: string;
  handle: string;
  href?: string;
  copy?: boolean;
}

export const socials: SocialLink[] = [
  { label: "GitHub", handle: "abdulhadichoyon-dot", href: "https://github.com/abdulhadichoyon-dot" },
  { label: "Instagram", handle: "@abdul_hadi_choyon", href: "https://www.instagram.com/abdul_hadi_choyon/" },
  { label: "Telegram", handle: "@abdul_hadi_choyon", href: "https://t.me/abdul_hadi_choyon" },
  // Discord handles are not stable public profile URLs; let visitors copy the handle instead.
  { label: "Discord", handle: "abdulhadichoyon", copy: true },
];
