export interface PublicationLink {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

export interface Publication {
  title: string;
  subtitle?: string;
  badge?: string;
  description: string;
  url: string;
  links: PublicationLink[];
}

export const publications: Publication[] = [
  {
    title: "Strategist: Learning Strategic Skills by LLMs via Bi-Level Tree Search",
    subtitle:
      "Jonathan Light*, Min Cai, Weiqin Chen, Guanzhi Wang, Xiusi Chen, Wei Cheng, Yisong Yue, Ziniu Hu",
    badge: "ICLR 2025",
    description:
      "Self-improvement framework that couples Monte Carlo tree search with LLM reflection to acquire strategic skills, covered by the State of AI Report 2024.",
    url: "https://llm-strategist.github.io/",
    links: [
      { label: "Code", href: "https://github.com/jonathanmli/Avalon-LLM/tree/main/strategist" },
      { label: "Website", href: "https://llm-strategist.github.io/" },
      { label: "PDF", href: "https://arxiv.org/pdf/2408.10635" },
    ],
  },
  {
    title: "Scattered Forest Search: Smarter Code Space Optimization improves LLM Inference Scaling",
    subtitle:
      "Jonathan Light*, Yue Wu, Yiyou Sun, Wenchao Yu, Yanchi Liu, Xujiang Zhao, Ziniu Hu, Haifeng Chen, Wei Cheng",
    badge: "ICLR 2025",
    description:
      "Frames code generation as black-box optimization and introduces Scattered Forest Search to improve diversity, boosting performance across HumanEval, MBPP, APPS, CodeContests, and LeetCode benchmarks.",
    url: "https://codespace-optimization.github.io/",
    links: [
      { label: "Code", href: "https://github.com/codespace-optimization/sfs" },
      { label: "Website", href: "https://codespace-optimization.github.io/" },
      { label: "PDF", href: "https://arxiv.org/pdf/2411.05010" },
    ],
  },
  {
    title: "PIANIST: Learning Partially Observable World Models with LLMs for Multi-Agent Decision Making",
    subtitle:
      "Jonathan Light, Sixue Xing, Yuanzhe Liu, Weiqin Chen, Min Cai, Xiusi Chen, Guanzhi Wang, Wei Cheng, Yisong Yue, Ziniu Hu",
    badge: "NeurIPS 2024 Workshop",
    description:
      "Decomposes language-described environments into intuitive components, enabling zero-shot LLM world models for efficient MCTS in multi-agent settings.",
    url: "https://arxiv.org/pdf/2411.15998",
    links: [{ label: "PDF", href: "https://arxiv.org/pdf/2411.15998" }],
  },
  {
    title: "From Text to Tactic: Evaluating LLMs Playing the Game of Avalon",
    subtitle: "Jonathan Light*, Min Cai, Sheng Shen, Ziniu Hu",
    badge: "NeurIPS 2023 Workshop",
    description:
      "Introduces AvalonBench to benchmark LLM agents in strategic social deduction games and highlights the gap between current agents and engineered bots.",
    url: "https://avalonbench.github.io/",
    links: [
      { label: "PDF", href: "https://arxiv.org/pdf/2310.05036.pdf" },
      { label: "Website", href: "https://avalonbench.github.io/" },
      { label: "Code", href: "https://github.com/jonathanmli/Avalon-LLM" },
    ],
  },
  {
    title: "Dataset Distillation for Offline Reinforcement Learning",
    subtitle: "Jonathan Light*, Yuanzhe Liu, Ziniu Hu",
    badge: "ICML 2024 Workshop",
    description:
      "Synthesizes compact, high-quality offline RL datasets that retain policy performance comparable to training on full datasets.",
    url: "https://datasetdistillation4rl.github.io/",
    links: [
      { label: "PDF", href: "https://arxiv.org/pdf/2407.20299" },
      { label: "Website", href: "https://datasetdistillation4rl.github.io/" },
      { label: "Code", href: "https://github.com/ggflow123/DDRL" },
    ],
  },
];
