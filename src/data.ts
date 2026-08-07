// ─── Eva Dynamo — site content & configuration (mirrors evadynamo.com) ───

export const SITE = {
  name: 'Eva Dynamo',
  legalName: 'Eva Dynamo Ltd',
  tagline: 'Intelligent software and scalable technology solutions',
  domain: 'evadynamo.com',
  email: 'hello@evadynamo.com',
  socials: {
    github: 'https://github.com/evadynamo',
    linkedin: 'https://www.linkedin.com/company/evadynamo',
    x: 'https://x.com/evadynamo',
    telegram: 'https://t.me/evadynamo',
  },
}

export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    slug: 'software-engineering',
    index: '01',
    title: 'Software Engineering',
    short: 'Custom web applications, backend systems, APIs and enterprise software built to last.',
    long: 'We design and build custom software that fits your business — not the other way around. From greenfield web applications to modernizing legacy systems, every delivery is engineered for maintainability, security and scale.',
    problems: [
      "Off-the-shelf software that never quite fits your workflow",
      "Legacy systems too fragile and expensive to change",
      "Slow, unstable applications that hurt customer trust",
      "Engineering teams stuck without senior architecture guidance",
    ],
    benefits: [
      'Software that maps exactly to your business processes',
      'Modern, maintainable codebases your team can extend',
      'Applications that stay fast as your users grow',
      'Delivery in predictable, testable increments',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'REST & GraphQL APIs', 'Docker'],
    cta: 'Build a custom application',
  },
  {
    slug: 'ai-automation',
    index: '02',
    title: 'AI & Automation',
    short: 'AI-powered applications, assistants and workflow automation that remove repetitive work.',
    long: 'We turn AI capabilities into working business systems: assistants that answer on your behalf, pipelines that process work automatically, and automations that connect the tools you already use.',
    problems: [
      "Repetitive manual work consuming your team's hours",
      'Data scattered across tools that never talk to each other',
      'Interest in AI, but no clear path from demo to production',
      'Customer responses and workflows that lag demand',
    ],
    benefits: [
      'Hours of manual work handled automatically, around the clock',
      'AI assistants embedded where your team and customers already work',
      'Integration with your existing stack — no rip-and-replace',
      'Automations that scale with volume, not headcount',
    ],
    technologies: ['AI APIs', 'LLM integration', 'RAG pipelines', 'n8n', 'LangChain', 'Python', 'Telegram & Slack bots'],
    cta: 'Automate a workflow',
  },
  {
    slug: 'cloud-engineering',
    index: '03',
    title: 'Cloud Engineering',
    short: 'Cloud architecture, migration and optimization on AWS and modern cloud platforms.',
    long: 'We design cloud architectures that are secure, cost-efficient and ready to scale. Whether you are migrating off legacy hosting or building cloud-native from day one, we own the infrastructure layer end to end.',
    problems: [
      'Legacy servers and data centers with rising costs',
      'Cloud bills that grow faster than the business',
      'Infrastructure that cannot handle traffic spikes',
      'Security and compliance gaps in the current setup',
    ],
    benefits: [
      'Architecture designed for resilience and cost control',
      'Migration with minimal downtime and clear rollback plans',
      'Right-sized resources — you pay for what you use',
      'Security hardened at the infrastructure level',
    ],
    technologies: ['AWS', 'Cloud platforms', 'Linux', 'Networking', 'Infrastructure security', 'Cost optimization'],
    cta: 'Modernize your infrastructure',
  },
  {
    slug: 'devops-platform',
    index: '04',
    title: 'DevOps & Platform Engineering',
    short: 'CI/CD, containerization, Kubernetes and Infrastructure as Code for teams that ship with confidence.',
    long: 'We build the delivery pipelines and platform tooling that let your team deploy fast without breaking things: automated testing, containerized workloads, Kubernetes orchestration and repeatable infrastructure.',
    problems: [
      'Deployments that are manual, slow and scary',
      'Configuration drift between environments',
      'No visibility into what is running where',
      'Developers blocked by infrastructure bottlenecks',
    ],
    benefits: [
      'Deploy in minutes with automated checks and rollbacks',
      'Identical, reproducible environments from dev to prod',
      'Self-service platform your engineers actually enjoy',
      'Monitoring and alerting that catch issues before users do',
    ],
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'Prometheus & Grafana'],
    cta: 'Fix your delivery pipeline',
  },
  {
    slug: 'technology-consulting',
    index: '05',
    title: 'Technology Consulting',
    short: 'Architecture, strategy and engineering advisory for decisions that shape your company.',
    long: 'Sometimes the highest-value work is deciding what to build and how. We provide architecture reviews, technology strategy and engineering advisory so you invest in the right systems — and avoid costly wrong turns.',
    problems: [
      'Technology decisions made without a clear long-term view',
      'Architectures that paint the company into a corner',
      'No internal senior engineering voice for critical choices',
      'Vendors and proposals that are hard to evaluate objectively',
    ],
    benefits: [
      'Clear, opinionated recommendations with trade-offs explained',
      'An architecture roadmap aligned with business goals',
      'An independent engineering partner for critical decisions',
      'Teams that make better technology choices going forward',
    ],
    technologies: ['Architecture reviews', 'Technology strategy', 'Digital transformation', 'Infrastructure assessment', 'Engineering advisory'],
    cta: 'Get a technology review',
  },
]

export const SOLUTIONS = [
  {
    slug: 'business-automation',
    index: '01',
    title: 'Business Automation',
    short: 'Connect your tools and let software handle the repetitive work — invoicing, reporting, onboarding, support triage.',
    deliverables: ['Workflow design & build', 'Tool integration', 'AI assistants', 'Monitoring & maintenance'],
  },
  {
    slug: 'cloud-modernization',
    index: '02',
    title: 'Cloud Modernization',
    short: 'Move from fragile legacy hosting to a secure, scalable cloud foundation with a clear migration path.',
    deliverables: ['Cloud architecture', 'Lift-and-shift or rebuild', 'Cost optimization', 'Security hardening'],
  },
  {
    slug: 'custom-software-platforms',
    index: '03',
    title: 'Custom Software Platforms',
    short: 'Full-stack applications built around your operations — dashboards, portals, APIs and internal tools.',
    deliverables: ['Product discovery', 'UI/UX design', 'Full-stack development', 'Deployment & support'],
  },
  {
    slug: 'ai-powered-business-tools',
    index: '04',
    title: 'AI-Powered Business Tools',
    short: 'Practical AI where it pays off: document processing, customer support, data extraction, decision support.',
    deliverables: ['Use-case discovery', 'LLM integration', 'Data pipelines', 'Evaluation & iteration'],
  },
  {
    slug: 'devops-transformation',
    index: '05',
    title: 'DevOps Transformation',
    short: 'Ship faster and safer: CI/CD pipelines, containerized workloads and infrastructure as code.',
    deliverables: ['CI/CD pipelines', 'Containerization', 'Kubernetes', 'Observability'],
  },
]

export const PRINCIPLES = [
  { title: 'Engineering expertise', text: 'Senior-level engineers on every engagement — no hand-offs to junior staff mid-project.' },
  { title: 'Modern technology stack', text: 'We work with the tools the industry is actually moving to: cloud-native, containerized, AI-ready.' },
  { title: 'Scalable by design', text: 'Architecture decisions are made with your growth in mind, so you do not rebuild in eighteen months.' },
  { title: 'Security-first, business-aware', text: 'Security is engineered in from the start — and every technical choice is tied to a business outcome.' },
]

export const STACK_GROUPS = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'REST & GraphQL'] },
  { group: 'Cloud', items: ['AWS', 'Linux', 'Networking', 'Serverless'] },
  { group: 'DevOps', items: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
  { group: 'AI & Data', items: ['LLM APIs', 'RAG pipelines', 'Automation', 'Machine Learning'] },
]

export const PORTFOLIO = [
  {
    title: 'On-chain price oracle',
    tag: 'Web3 · Smart Contracts',
    problem: 'dApps need real-world price data, but traditional oracles are off-chain, subscription-based and trust-heavy.',
    solution: 'Built a fully on-chain ETH price oracle on Ritual Chain testnet — the contract fetches live prices via native HTTP and JQ precompiles, executed in TEEs and verified on-chain. No off-chain servers, no oracle network.',
    technology: 'Solidity · Ritual Chain (1979) · HTTP/JQ precompiles · Hardhat',
    result: 'Live on testnet — HTTP 200, price stored on-chain in a single transaction, ~0.01 RITUAL per call. Open source with a public dashboard.',
    href: 'https://github.com/erameh6/ritual-price-oracle',
    status: 'Live · Testnet',
  },
  {
    title: 'Price tracking automation',
    tag: 'Automation · E-commerce',
    problem: 'Manual checking of product prices across marketplaces wastes hours and misses opportunities.',
    solution: 'Built a price-tracker product with a CLI and Telegram alerting: scheduled checks, change detection, and instant notifications — designed to be sold as a packaged service.',
    technology: 'Python · Telegram Bot API · Marketplace APIs · Linux',
    result: 'Delivered as a production product with tests, Russian documentation and a delivery package for clients.',
    href: 'https://github.com/erameh6',
    status: 'Shipped',
  },
  {
    title: 'Telegram mini-app dashboard',
    tag: 'Product · Infrastructure',
    problem: 'Needed a live, shareable dashboard for a Telegram mini-app with real usage data.',
    solution: 'Designed and deployed a self-hosted dashboard with authentication, a public tunnel, and a live integration with the Telegram platform.',
    technology: 'Node.js · Cloudflare Tunnel · Basic auth · Linux VPS',
    result: 'Publicly accessible, secured dashboard — running continuously with automated restarts.',
    href: 'https://github.com/erameh6',
    status: 'Live',
  },
  {
    title: 'Voice AI infrastructure',
    tag: 'AI · Telephony',
    problem: 'Voice agents need reliable telephony wiring, correct number capabilities and sane call flows.',
    solution: 'Configured and troubleshot voice-agent infrastructure across Twilio, Vapi and Amazon Connect — including diagnosing number capability and routing issues end to end.',
    technology: 'Twilio · Vapi · Amazon Connect · Contact flows',
    result: 'Working inbound/outbound voice paths with documented call flows and fixes.',
    href: 'https://github.com/erameh6',
    status: 'Shipped',
  },
]

export const BLOG_TOPICS = [
  'Artificial Intelligence',
  'Cloud Computing',
  'DevOps',
  'Software Engineering',
  'Automation',
  'Technology Trends',
]

export const CONTACT_FIELDS = [
  'Software Engineering',
  'AI & Automation',
  'Cloud Engineering',
  'DevOps & Platform',
  'Technology Consulting',
  'Something else',
]

export const BUDGETS = ['Under $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not sure yet']

export const VALUES = [
  { title: 'Ship what works', text: 'We favor working systems over perfect plans. Every project is delivered in testable increments.' },
  { title: 'Own the outcome', text: 'We measure success by your business results, not by lines of code delivered.' },
  { title: 'Engineer with care', text: 'Security, reliability and maintainability are not afterthoughts — they are the baseline.' },
  { title: 'Stay honest', text: 'If the answer is "don\'t build this yet", we say so. You hire us for judgment, not agreement.' },
]
