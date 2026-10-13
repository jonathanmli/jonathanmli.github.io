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
  image?: string;
  links: PublicationLink[];
  /** Research topics used for filtering on the publications page. */
  topics: string[];
}

export function topicSlug(topic: string): string {
  return topic
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface TopicSummary {
  name: string;
  slug: string;
  count: number;
}

/** Unique topics across all publications, most frequent first. */
export function getTopicSummaries(pubs: Publication[] = publications): TopicSummary[] {
  const counts = new Map<string, number>();
  for (const pub of pubs) {
    for (const topic of pub.topics) {
      counts.set(topic, (counts.get(topic) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, slug: topicSlug(name), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export const publications: Publication[] = [
  {
    title: "Actor-Curator: Co-adaptive Curriculum Learning via Policy-Improvement Bandits for RL Post-Training",
    subtitle:
      "Zhengyao Gu*, Jonathan Light*, Raul Astudillo, Ziyu Ye, Langzhou He, Henry Peng Zou, Wei Cheng, Santiago Paternain, Philip S. Yu, Yisong Yue",
    badge: "COLM 2026",
    description:
      "A scalable, fully automated curriculum-learning framework for RL post-training of LLMs. Learns a neural curator that selects training problems to directly maximize <strong>expected policy improvement</strong>, formulated as a non-stationary bandit with regret guarantees. Delivers <strong>+28.6% on AIME2024</strong>, <strong>+30.5% on ARC-1D</strong>, and up to <strong>80% speedup</strong> over the strongest baseline.",
    url: "https://actor-curator.github.io/",
    image: "/figures/actor_curator.png",
    topics: ["RL Post-Training", "Curriculum Learning", "LLM Reasoning"],
    links: [
      { label: "Code", href: "https://github.com/actor-curator/actor-curator" },
      { label: "Website", href: "https://actor-curator.github.io/" },
      { label: "PDF", href: "https://arxiv.org/pdf/2602.20532" },
    ],
  },
  {
    title: "DISC: Dynamic Decomposition Improves LLM Inference Scaling",
    subtitle:
      "Jonathan Light*, Wei Cheng, Benjamin Riviere, Wu Yue, Masafumi Oyamada, Mengdi Wang, Yisong Yue, Santiago Paternain, Haifeng Chen",
    badge: "NeurIPS 2025",
    description:
      "Adaptive, compute-aware reasoning - dynamically expands or contracts thought steps for efficient problem-solving. Delivers +33% accuracy vs DeepSeek-R1 at equal tokens and 5-10% lower error on APPS, MATH, and LiveCodeBench.",
    url: "https://disc-search.github.io/",
    image: "/figures/disc.png",
    topics: ["Inference Scaling", "LLM Reasoning", "Code Generation"],
    links: [
      { label: "Website", href: "https://disc-search.github.io/" },
      { label: "PDF", href: "https://arxiv.org/pdf/2502.16706" },
    ],
  },
  {
    title: "Strategist: Learning Strategic Skills by LLMs via Bi-Level Tree Search",
    subtitle:
      "Jonathan Light*, Min Cai, Weiqin Chen, Guanzhi Wang, Xiusi Chen, Wei Cheng, Yisong Yue, Ziniu Hu",
    badge: "ICLR 2025",
    description:
      'LLM + MCTS hybrid that <strong>learns to optimize its own decision process</strong> through self-play and strategy refinement. Outperforms RL and existing LLM agents, achieves <strong>human-level performance</strong> in complex games. Highlighted in the <a class="link link-primary font-semibold" href="https://docs.google.com/presentation/d/1GmZmoWOa2O92BPrncRcTKa15xvQGhq7g4I4hJSNlC0M/edit?slide=id.g2d35a16f27e_0_24#slide=id.g2d35a16f27e_0_24" target="_blank" rel="noopener noreferrer"><strong>State of AI Report 2024</strong></a> as a breakthrough in autonomous agent design.',
    url: "https://llm-strategist.github.io/",
    image: "/figures/strategist.png",
    topics: ["Tree Search", "Multi-Agent & Games", "LLM Agents"],
    links: [
      { label: "Code", href: "https://github.com/jonathanmli/Avalon-LLM/tree/main/strategist" },
      { label: "Website", href: "https://llm-strategist.github.io/" },
      { label: "PDF", href: "https://arxiv.org/pdf/2408.10635" },
    ],
  },
  {
    title: "Shockingly Simple Self-retrospection Improves Agentic Models Without RL",
    subtitle:
      "Jonathan Light, Christopher Zhang Cui, Jeonghye Kim, Roger Creus Castanyer, Emiliano Penaloza, Zhengyan Shi, Alessandro Sordoni, Marc-Alexandre Côté, Xingdi Yuan, Minseon Kim",
    badge: "arXiv 2026",
    description:
      "Introduces <strong>Retrospection-Only Fine-Tuning (ROFT)</strong>: an agent attempts a task, writes a retrospective explanation, and is fine-tuned on that explanation alone - no verifier or reward-based update. With Qwen3.5-4B, reaches <strong>49.2% on SWE-bench Verified</strong> and <strong>26.8% on SWE-bench Pro</strong> after 20 updates, beating GRPO after 40 updates.",
    url: "https://arxiv.org/abs/2609.35741",
    image: "/figures/roft.png",
    topics: ["LLM Agents", "RL Post-Training", "Code Generation"],
    links: [{ label: "PDF", href: "https://arxiv.org/pdf/2609.35741" }],
  },
  {
    title: "Harness as a Language: A Minimalist Agent Framework With Maximal Expressivity",
    subtitle:
      "Zhening Li, Joshua Liu*, Mateja Vukelic*, Nicole Shen, Supriya Lall, Amitayush Thakur, Alex Zhang, Omar Khattab, Jonathan Light, Armando Solar-Lezama",
    badge: "NeurIPS 2026 Workshop",
    description:
      "Introduces <strong>JAZ</strong>, a minimal LLM agent framework built on a single language primitive, <strong>invoke</strong>: a function whose body is written by the LLM at call time, with recursive calls and the full interaction history available as variables in a Python REPL. With prompting alone and no dedicated memory or meta-harness, JAZ beats Letta (MemGPT) by <strong>8% at half the cost</strong> on long-horizon StuLife recall and beats ACE by <strong>4% at lower cost</strong> on AppWorld self-improvement.",
    url: "https://arxiv.org/abs/2609.26891",
    image: "/figures/jaz.png",
    topics: ["LLM Agents", "Code Generation"],
    links: [
      { label: "Code", href: "https://github.com/jaz-lang/jaz" },
      { label: "PDF", href: "https://arxiv.org/pdf/2609.26891" },
    ],
  },
  {
    title: "Scattered Forest Search: Smarter Code Space Optimization improves LLM Inference Scaling",
    subtitle:
      "Jonathan Light*, Yue Wu, Yiyou Sun, Wenchao Yu, Yanchi Liu, Xujiang Zhao, Ziniu Hu, Haifeng Chen, Wei Cheng",
    badge: "ICLR 2025",
    description:
      "Reframes code generation as black-box optimization: uses <strong>Scattering</strong>, <strong>Foresting</strong>, and <strong>Scouting</strong> to boost exploration + feedback exploitation. Achieves <strong>SOTA on HumanEval, MBPP, APPS, CodeContests, LeetCode</strong> (e.g. 87.2% pass@1 on HumanEval) while halving iterations vs prior methods.",
    url: "https://codespace-optimization.github.io/",
    image: "/figures/sfs.png",
    topics: ["Inference Scaling", "Code Generation", "Tree Search"],
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
    image: "/figures/pianist.png",
    topics: ["World Models", "Multi-Agent & Games", "Tree Search"],
    links: [{ label: "PDF", href: "https://arxiv.org/pdf/2411.15998" }],
  },
  {
    title: "From Text to Tactic: Evaluating LLMs Playing the Game of Avalon",
    subtitle: "Jonathan Light*, Min Cai, Sheng Shen, Ziniu Hu",
    badge: "NeurIPS 2023 Workshop",
    description:
      "Introduces AvalonBench to benchmark LLM agents in strategic social deduction games and highlights the gap between current agents and engineered bots.",
    url: "https://avalonbench.github.io/",
    image: "/figures/merlin.png",
    topics: ["Multi-Agent & Games", "LLM Agents", "Benchmarks"],
    links: [
      { label: "PDF", href: "https://arxiv.org/pdf/2310.05036.pdf" },
      { label: "Website", href: "https://avalonbench.github.io/" },
      { label: "Code", href: "https://github.com/jonathanmli/Avalon-LLM" },
    ],
  },
  {
    title: "Dataset Distillation for Offline Reinforcement Learning",
    subtitle: "Jonathan Light*, Yuanzhe Liu*, Ziniu Hu",
    badge: "ICML 2024 Workshop",
    description:
      "Synthesizes compact, high-quality offline RL datasets that retain policy performance comparable to training on full datasets.",
    url: "https://datasetdistillation4rl.github.io/",
    image: "/figures/dataset_distill_rl.png",
    topics: ["Offline RL", "Dataset Distillation"],
    links: [
      { label: "PDF", href: "https://arxiv.org/pdf/2407.20299" },
      { label: "Website", href: "https://datasetdistillation4rl.github.io/" },
      { label: "Code", href: "https://github.com/ggflow123/DDRL" },
    ],
  },
];
