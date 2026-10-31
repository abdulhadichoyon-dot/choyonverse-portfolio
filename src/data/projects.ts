export type ProjectCategory = "AI & Software" | "Web Experiences" | "In the Lab";
export type ProjectStatus = "Live" | "Prototype" | "In development" | "Exploration";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  role: string;
  stack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  visual: "signal" | "market" | "anime" | "chat" | "studio" | "engine" | "desktop";
  note?: string;
}

/**
 * Add, edit or remove portfolio projects here.
 * Keep status honest: use Live only when the public version is usable.
 */
export const projects: Project[] = [
  {
    id: "rexxeco-xz",
    number: "01",
    title: "Rexxeco XZ",
    category: "AI & Software",
    status: "Prototype",
    description: "An AI-agent platform concept focused on turning prompts and ideas into practical software outputs.",
    role: "Product concept · AI workflow exploration",
    stack: ["AI Agents", "Python", "Cloud", "Web"],
    liveUrl: "https://untitled-481008835075.asia-southeast1.run.app",
    featured: true,
    visual: "signal",
    note: "A live environment exists; capabilities and stability may evolve.",
  },
  {
    id: "marketlens-ai",
    number: "02",
    title: "MarketLens AI",
    category: "AI & Software",
    status: "Prototype",
    description: "A financial research interface concept bringing market data, watchlists and AI-assisted context into one workspace.",
    role: "Product specification · Interface direction",
    stack: ["React", "TypeScript", "FastAPI", "Gemini"],
    liveUrl: "https://marketlensai.ai.studio/",
    featured: true,
    visual: "market",
    note: "Prototype concept. Not financial advice or a trading service.",
  },
  {
    id: "rx-anime",
    number: "03",
    title: "RX Anime",
    category: "Web Experiences",
    status: "Live",
    description: "A personal anime web project exploring a stronger visual identity and a focused browsing experience.",
    role: "Web project · Visual direction",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveUrl: "https://abdulhadichoyon-dot.github.io/Rex-Anime/",
    sourceUrl: "https://github.com/abdulhadichoyon-dot/Rex-Anime",
    featured: true,
    visual: "anime",
  },
  {
    id: "glassy-chat",
    number: "04",
    title: "Glassy Chat",
    category: "AI & Software",
    status: "In development",
    description: "An Android chat-app experiment focused on account flow, direct conversations and a polished mobile interface.",
    role: "App concept · Android workflow",
    stack: ["Android", "Firebase", "Google Sign-In", "Realtime"],
    sourceUrl: "https://github.com/abdulhadichoyon-dot/Glassy-Chat",
    featured: true,
    visual: "chat",
  },
  {
    id: "mobile-dev-studio",
    number: "05",
    title: "Mobile Dev Studio",
    category: "In the Lab",
    status: "Exploration",
    description: "A phone-first coding environment idea combining local tools, cloud execution and optional AI assistance.",
    role: "Architecture exploration",
    stack: ["Kotlin", "Jetpack Compose", "Cloud Execution"],
    featured: false,
    visual: "studio",
  },
  {
    id: "rexxeco-learning-engine",
    number: "06",
    title: "Rexxeco Learning Engine",
    category: "In the Lab",
    status: "Exploration",
    description: "A Python-based learning project for understanding AI foundations, model structure and the building blocks behind intelligent systems.",
    role: "Learning project",
    stack: ["Python", "AI Architecture"],
    sourceUrl: "https://github.com/abdulhadichoyon-dot/rexxeco-learning-engine",
    featured: false,
    visual: "engine",
  },
  {
    id: "windows-android-emulator",
    number: "07",
    title: "Android Emulator",
    category: "In the Lab",
    status: "Exploration",
    description: "A Windows desktop utility concept built around a straightforward APK import-and-run workflow, with compatibility and practical performance as priorities.",
    role: "Desktop runtime research",
    stack: ["Windows", "Desktop UX", "Runtime research"],
    featured: false,
    visual: "desktop",
  },
];
