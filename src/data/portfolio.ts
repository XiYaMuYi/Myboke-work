// EXPORTS: IPersonalInfo, ISkillCategory, IProject, IExperience, IContact, MOCK_PERSONAL_INFO, MOCK_SKILLS, MOCK_PROJECTS, MOCK_EXPERIENCE, MOCK_CONTACT

export interface IPersonalInfo {
  id: string
  name: string
  title: string
  slogan: string
  about: string[]
  avatarUrl: string
  tags: string[]
}

export interface ISkillCategory {
  id: string
  category: string
  icon: string
  skills: { name: string; level: number }[]
}

export interface IProject {
  id: string
  type: 'enterprise' | 'personal'
  title: string
  description: string
  techStack: string[]
  imageUrl: string
  screenshots: string[]
  detail: string
  links: { label: string; url: string }[]
}

export interface IExperience {
  id: string
  period: string
  company: string
  position: string
  description: string[]
}

export interface IContact {
  id: string
  github: string
  email: string
  linkedin: string
}

export const MOCK_PERSONAL_INFO: IPersonalInfo = {
  id: '1',
  name: 'Alex Chen',
  title: 'AI FDE Engineer',
  slogan: '用代码构建智能，用架构定义未来',
  about: [
    '5年后端全栈开发经验，专注 AI 工程化与分布式系统设计。',
    '擅长从 0 到 1 搭建 AI 赋能平台，推动业务智能化升级。',
  ],
  avatarUrl:
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/1.jpg',
  tags: ['AI 全栈', '分布式系统', 'LLM 应用', '云原生'],
}

export const MOCK_SKILLS: ISkillCategory[] = [
  {
    id: '1',
    category: 'AI / ML',
    icon: '🤖',
    skills: [
      { name: 'PyTorch / TensorFlow', level: 85 },
      { name: 'LLM 应用开发', level: 90 },
      { name: '向量数据库', level: 80 },
    ],
  },
  {
    id: '2',
    category: '后端开发',
    icon: '⚙️',
    skills: [
      { name: 'Go / Python', level: 92 },
      { name: '微服务架构', level: 88 },
      { name: 'PostgreSQL / Redis', level: 85 },
    ],
  },
  {
    id: '3',
    category: '前端开发',
    icon: '🎨',
    skills: [
      { name: 'React / TypeScript', level: 82 },
      { name: 'Next.js', level: 78 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    id: '4',
    category: 'DevOps / 工具',
    icon: '🚀',
    skills: [
      { name: 'Docker / K8s', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'AWS / 阿里云', level: 75 },
    ],
  },
]

// 项目图片使用可公开访问的占位图（unsplash 来源），部署到自己服务器后可替换为本地图片
export const MOCK_PROJECTS: IProject[] = [
  {
    id: '1',
    type: 'enterprise',
    title: '智能客服中台',
    description: '基于 LLM 的企业级客服系统，日处理百万级对话',
    techStack: ['Go', 'Python', 'LangChain', 'K8s'],
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    ],
    detail: '主导搭建企业级智能客服中台，接入多模态大模型，支持多租户、多渠道接入，显著降低人工客服成本。',
    links: [
      { label: 'GitHub', url: 'https://github.com/' },
      { label: 'Demo', url: '#' },
    ],
  },
  {
    id: '2',
    type: 'enterprise',
    title: '数据治理平台',
    description: '一站式数据资产管理与血缘追踪平台',
    techStack: ['Java', 'Spark', 'Flink', 'Neo4j'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    ],
    detail: '设计并实现数据治理平台，覆盖数据采集、质量监控、血缘分析全链路，服务 20+ 业务线。',
    links: [
      { label: '文档', url: '#' },
      { label: 'GitHub', url: 'https://github.com/' },
    ],
  },
  {
    id: '3',
    type: 'enterprise',
    title: 'AI 推荐引擎',
    description: '千人千面的个性化内容推荐系统',
    techStack: ['Python', 'TensorFlow', 'Redis', 'Kafka'],
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    ],
    detail: '负责推荐引擎核心模块开发，优化召回与排序策略，CTR 提升 35%，支持千万级 DAU。',
    links: [
      { label: '技术博客', url: '#' },
      { label: 'GitHub', url: 'https://github.com/' },
    ],
  },
  {
    id: '4',
    type: 'personal',
    title: 'AI 绘画助手',
    description: '基于 Stable Diffusion 的创意绘画工具',
    techStack: ['Python', 'React', 'FastAPI', 'SD WebUI'],
    imageUrl: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    ],
    detail: '个人业余项目，封装 Stable Diffusion 能力，提供可视化 Prompt 编辑与风格迁移功能。',
    links: [
      { label: 'Demo', url: '#' },
      { label: 'GitHub', url: 'https://github.com/' },
    ],
  },
  {
    id: '5',
    type: 'personal',
    title: '独立游戏：星际迷途',
    description: '2D 像素风 Roguelike 太空探索游戏',
    techStack: ['Unity', 'C#', 'Aseprite'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
    ],
    detail: '独立开发的一款像素风太空探索游戏，包含随机生成的星系、装备系统与剧情分支。',
    links: [
      { label: 'Steam', url: '#' },
      { label: 'GitHub', url: 'https://github.com/' },
    ],
  },
  {
    id: '6',
    type: 'personal',
    title: '智能家居控制中枢',
    description: '基于树莓派的 DIY 智能家居网关',
    techStack: ['Go', 'MQTT', 'React Native', 'Raspberry Pi'],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
    detail: '个人极客项目，实现多协议智能家居设备统一管理，支持语音控制与场景联动。',
    links: [
      { label: '教程', url: '#' },
      { label: 'GitHub', url: 'https://github.com/' },
    ],
  },
]

export const MOCK_EXPERIENCE: IExperience[] = [
  {
    id: '1',
    period: '2022 - 至今',
    company: '某头部科技公司',
    position: '高级后端工程师 / AI FDE',
    description: [
      '负责 AI 赋能平台架构设计，支撑 10+ 业务线智能化落地',
      '主导 LLM 应用框架研发，模型推理成本降低 40%',
      '搭建高可用微服务体系，SLA 达 99.99%',
    ],
  },
  {
    id: '2',
    period: '2020 - 2022',
    company: '某互联网独角兽',
    position: '后端开发工程师',
    description: [
      '参与核心交易系统重构，TPS 提升 3 倍',
      '设计数据同步中间件，支持多机房容灾',
      '推动团队 DevOps 落地，部署效率提升 60%',
    ],
  },
  {
    id: '3',
    period: '2019 - 2020',
    company: '某 AI 创业公司',
    position: '全栈开发工程师',
    description: [
      '从 0 到 1 搭建公司 SaaS 产品前后端架构',
      '负责 CV 算法工程化，落地多个行业解决方案',
      '组建并带领 3 人技术小组完成产品交付',
    ],
  },
]

export const MOCK_CONTACT: IContact = {
  id: '1',
  github: 'https://github.com/',
  email: 'alex.chen@example.com',
  linkedin: 'https://linkedin.com/',
}
