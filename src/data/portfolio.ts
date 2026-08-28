// 个人作品集数据 - 蔡宏伟 AI FDE Engineer

export interface IPersonalInfo {
  id: string;
  name: string;
  title: string;
  slogan: string;
  about: string[];
  avatarUrl: string;
  tags: string[];
}

export interface ISkillCategory {
  id: string;
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export interface IProject {
  id: string;
  type: 'enterprise' | 'personal';
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  screenshots: string[];
  detail: string;
  links: { label: string; url: string }[];
}

export interface IExperience {
  id: string;
  period: string;
  company: string;
  position: string;
  description: string[];
}

export interface IEducation {
  id: string;
  school: string;
  major: string;
  degree: string;
  period: string;
  note: string;
  highlights?: string[];
}

export interface IContact {
  id: string;
  github: string;
  email: string;
  email2: string;
  linkedin: string;
  phone: string;
  location: string;
  status: string;
}

// ==================== 个人信息 ====================
export const MOCK_PERSONAL_INFO: IPersonalInfo = {
  id: '1',
  name: '蔡宏伟',
  title: 'AI FDE 前沿部署工程师',
  slogan: '用代码构建智能，用工程创造价值',
  about: [
    '5年软件工程与测试经验，近2年专注AI应用开发，围绕多轮对话、RAG检索、文档解析、Text-to-SQL、模型微调等方向完成多个企业级AI项目落地。',
    '熟悉Python、FastAPI、LangChain、LangGraph、MCP、Function Calling、OCR、向量数据库与大模型服务化架构，具备从业务需求分析、方案设计、接口开发到智能体流程编排的完整工程落地能力。',
    '擅长将复杂业务流程抽象为稳定可扩展的AI工作流，关注系统稳定性、可维护性与可扩展性。',
  ],
  avatarUrl: 'https://aka.doubaocdn.com/s/vSVNTsjjhw',
  tags: ['AI FDE', 'RAG系统', '多轮对话', '模型部署', '大模型应用开发'],
};

// ==================== 技能栈 ====================
export const MOCK_SKILLS: ISkillCategory[] = [
  {
    id: '1',
    category: 'AI / LLM 工程',
    icon: '🤖',
    skills: [
      { name: 'LangChain / LangGraph', level: 90 },
      { name: 'Function Calling / MCP', level: 88 },
      { name: 'RAG 检索增强生成', level: 92 },
      { name: '多模态知识库构建', level: 88 },
      { name: '对话型 Agent 设计与编排', level: 85 },
      { name: '第三方 AI 产品集成对接', level: 82 },
    ],
  },
  {
    id: '2',
    category: '模型部署与推理',
    icon: '🚀',
    skills: [
      { name: 'vLLM 推理加速', level: 85 },
      { name: 'AWQ / GPTQ 模型量化', level: 80 },
      { name: 'Ollama 本地部署', level: 82 },
      { name: '大模型服务化架构', level: 85 },
      { name: '模型微调（LoRA / DPO）', level: 75 },
    ],
  },
  {
    id: '3',
    category: '后端开发',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'FastAPI', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Redis', level: 85 },
      { name: 'RabbitMQ', level: 80 },
    ],
  },
  {
    id: '4',
    category: '数据处理与检索',
    icon: '📊',
    skills: [
      { name: 'Milvus 向量数据库', level: 85 },
      { name: 'PaddleOCR 文档解析', level: 82 },
      { name: '文档切片与向量化', level: 88 },
      { name: 'BM25 / 混合检索', level: 85 },
      { name: 'Reranker 重排序', level: 80 },
    ],
  },
  {
    id: '5',
    category: 'DevOps / 部署工具',
    icon: '🛠️',
    skills: [
      { name: 'Docker / Docker Compose', level: 82 },
      { name: 'Linux 服务器运维', level: 80 },
      { name: 'Nginx 反向代理', level: 78 },
      { name: 'Git 版本控制', level: 85 },
      { name: 'CI/CD 基础', level: 72 },
    ],
  },
];

// ==================== 项目数据 ====================
// 项目图片使用占位图，后续可替换为真实截图
const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
  'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
  'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
];

export const MOCK_PROJECTS: IProject[] = [
  // ==================== 企业赋能项目 ====================
  {
    id: 'e1',
    type: 'enterprise',
    title: '企问RAG智能问答系统',
    description: '面向企业内部本地化智能问答需求，搭建多模态RAG系统，覆盖人事、财务、考勤等业务文档',
    techStack: ['PyMuPDF', 'PaddleOCR', 'Qwen3-VL', 'vLLM', 'DeepSeek', 'Milvus', 'bge-m3', 'bge-reranker', 'BM25', 'RRF', 'RAGAs', 'AWQ'],
    imageUrl: PLACEHOLDER_IMAGES[0],
    screenshots: [PLACEHOLDER_IMAGES[0], PLACEHOLDER_IMAGES[1], PLACEHOLDER_IMAGES[2]],
    detail:
      '主导多模态文档处理链路设计与落地，构建图文、表格混合解析策略；主导RAG检索优化，串联关键词、向量召回、Rerank重排序与RRF融合算法；负责向量库与嵌入模型选型；参与检索效果评估与持续调优。覆盖3000+份多模态文档，支持复杂表格与扫描件场景；减少人事财务岗位约35%人工咨询量；借助AWQ量化与vLLM推理加速满足高频查询并发需求。',
    links: [
      { label: '项目详情', url: '#' },
    ],
  },
  {
    id: 'e2',
    type: 'enterprise',
    title: '电商智能客服多轮对话机器人',
    description: '构建任务引导式多轮对话机器人，覆盖退换货、订单修改、物流查询等售后场景',
    techStack: ['DeepSeek-V3', 'FastAPI', 'LangGraph', 'Function Calling', 'MCP', 'Redis', 'RabbitMQ', 'SSE', 'vLLM', '状态机'],
    imageUrl: PLACEHOLDER_IMAGES[1],
    screenshots: [PLACEHOLDER_IMAGES[1], PLACEHOLDER_IMAGES[2], PLACEHOLDER_IMAGES[3]],
    detail:
      '主导对话流程编排设计，构建基于状态机的多轮任务对话链路；主导Function Calling流程重构，拆分槽位抽取、工具调用与话术模板填充逻辑；负责历史槽位动态增补与上下文管理；参与MCP服务机制设计，封装订单库、物流接口等外部系统工具；参与高并发消息链路建设。人工客服日均接待量减少42%，复杂业务自动化率提升60%；Redis与向量语义缓存拦截约60%高频相似咨询；系统峰值承载500 QPS+，大模型真实推理并发稳定30-50 QPS；构建100+业务场景自动化闭环，信息抽取准确率从85%提升至98%+。',
    links: [
      { label: '项目详情', url: '#' },
    ],
  },
  {
    id: 'e3',
    type: 'enterprise',
    title: '电商BI报表智能生成工具',
    description: '基于大模型开发自然语言转SQL的智能报表工具，降低业务人员取数门槛',
    techStack: ['LangChain', 'LangGraph', 'PostgreSQL', 'Text-to-SQL'],
    imageUrl: PLACEHOLDER_IMAGES[2],
    screenshots: [PLACEHOLDER_IMAGES[2], PLACEHOLDER_IMAGES[3], PLACEHOLDER_IMAGES[4]],
    detail:
      '负责Text-to-SQL核心链路设计，构建复杂数据库表结构理解与Prompt动态组装策略；参与LangGraph多节点工作流编排，实现意图解析、SQL生成、执行校验到结果可视化的全流程协同；负责数据查询、清洗分析与报表渲染链路设计。业务人员通过自然语言描述自动生成SQL并获取报表；显著减少BI团队重复性取数工作量；系统具备自纠错与校验机制，减少手工写SQL逻辑错误。',
    links: [
      { label: '项目详情', url: '#' },
    ],
  },
  {
    id: 'e4',
    type: 'enterprise',
    title: '企业内部中台RAG智能问答系统',
    description: '基于大模型RAG架构搭建垂直领域智能问答系统，解决中后台系统业务规则繁杂问题',
    techStack: ['PaddleOCR', 'BGE-M3', 'Milvus', 'LangChain', 'Streamlit', 'Qwen-7B'],
    imageUrl: PLACEHOLDER_IMAGES[3],
    screenshots: [PLACEHOLDER_IMAGES[3], PLACEHOLDER_IMAGES[4], PLACEHOLDER_IMAGES[5]],
    detail:
      '主导RAG核心数据管道建设，实现从文档切片、OCR结构化识别到向量库构建的自动化处理；负责语义理解与生成层设计，针对账务异常排查和报表逻辑优化系统Prompt；参与前端交互与意图识别模块搭建。整合分散的中后台业务规则与操作流程文档，打通内部数据孤岛；实现自然语言精准问答，降低人工咨询成本，提升新人培训速度；前端采用Streamlit构建轻量化交互界面。',
    links: [
      { label: '项目详情', url: '#' },
    ],
  },
  {
    id: 'e5',
    type: 'enterprise',
    title: '金融账务领域大模型LoRA轻量化微调',
    description: '针对通用大模型在金融账务场景专业术语理解不足问题，参与垂直领域轻量化微调',
    techStack: ['Hugging Face Transformers', 'PEFT', 'LoRA', 'DPO', 'Qwen-7B'],
    imageUrl: PLACEHOLDER_IMAGES[4],
    screenshots: [PLACEHOLDER_IMAGES[4], PLACEHOLDER_IMAGES[5], PLACEHOLDER_IMAGES[6]],
    detail:
      '参与LoRA微调训练流程设计，完成模型加载、权重注入与超参数迭代优化；参与DPO对齐训练策略实施，构建偏好数据集，引导模型输出符合金融领域严谨性标准的答案；参与模型效果验证与输出质量评估。微调后模型在金融账务专业术语理解和逻辑推理能力上优于原版通用模型；模型输出合规性显著增强，减少垂直场景下事实性幻觉。',
    links: [
      { label: '项目详情', url: '#' },
    ],
  },

  // ==================== 个人娱乐项目 ====================
  {
    id: 'p1',
    type: 'personal',
    title: '本地AI助手工具箱',
    description: '基于Ollama的本地大模型应用集合，包含文档问答、代码解释、翻译等实用功能',
    techStack: ['Ollama', 'Python', 'Gradio', 'LangChain'],
    imageUrl: PLACEHOLDER_IMAGES[5],
    screenshots: [PLACEHOLDER_IMAGES[5], PLACEHOLDER_IMAGES[6], PLACEHOLDER_IMAGES[7]],
    detail:
      '个人业余项目，基于Ollama本地部署大模型，封装文档问答、代码解释、翻译、摘要等实用功能。支持多种本地模型切换，无需联网即可使用，保护隐私。采用Gradio构建简洁交互界面，方便快速调用。',
    links: [
      { label: 'GitHub', url: 'https://github.com/XiYaMuYi/' },
    ],
  },
  {
    id: 'p2',
    type: 'personal',
    title: '个人知识库管理系统',
    description: '个人知识管理工具，支持Markdown笔记自动向量化、语义检索与关联推荐',
    techStack: ['Python', 'FastAPI', 'ChromaDB', 'Vue.js'],
    imageUrl: PLACEHOLDER_IMAGES[6],
    screenshots: [PLACEHOLDER_IMAGES[6], PLACEHOLDER_IMAGES[7], PLACEHOLDER_IMAGES[0]],
    detail:
      '个人知识管理工具，支持Markdown笔记自动解析、切片、向量化存储。提供语义检索功能，快速找到相关笔记；支持关联推荐，发现知识之间的联系。后端采用FastAPI + ChromaDB，前端采用Vue.js构建。',
    links: [
      { label: 'GitHub', url: 'https://github.com/XiYaMuYi/' },
    ],
  },
];

// ==================== 工作经历 ====================
export const MOCK_EXPERIENCE: IExperience[] = [
  {
    id: '1',
    period: '2025.06 - 至今',
    company: '浙江神首生物科技集团',
    position: 'AI FDE 部署工程师',
    description: [
      '负责第三方智能客服产品对接与落地，覆盖私域与公域多渠道接入，推动客服体系智能化升级',
      '主导自研多模态知识库系统开发与部署（架构参考 WeKnora），已完成核心功能上线，持续推进业务适配与小迭代优化',
      '负责 C 端对话型 Agent 解决方案设计与开发（参考通义千问、蚂蚁阿福），构建多轮对话编排与工具调用能力',
      '主导 AI 智能陪练项目的第三方产品调研与自研开发（参考星火陪练、职行力等 SaaS 平台），推进方案选型与核心模块落地',
    ],
  },
  {
    id: '2',
    period: '2024.05 - 2025.05',
    company: '深圳市立创电子商务有限公司',
    position: 'AI 应用开发工程师',
    description: [
      '主导电商智能客服多轮对话能力建设，设计任务型对话流程，引入 Function Calling、状态机与 MCP 工具解耦机制',
      '负责企业内部多模态文档解析链路建设，设计 OCR 与视觉大模型融合解析方案',
      '主导企业知识库 RAG 检索链路建设，设计关键词检索与语义检索结合的混合检索方案',
      '参与企业 BI 智能报表系统开发，构建 Text-to-SQL 能力，降低业务人员取数门槛',
      '参与金融账务领域大模型适配与对齐优化，基于 LoRA 微调与 DPO 偏好对齐提升垂直场景表现',
    ],
  },
  {
    id: '3',
    period: '2022.09 - 2024.04',
    company: '北京水木优品装饰有限公司',
    position: 'Python 自动化测试工程师',
    description: [
      '负责对接内部新零售中台及电商后台系统，主导跨部门、跨服务接口的逻辑联调与质量验证',
      '负责 API 接口交互设计与容错验证，积累较强的接口异常分析、问题定位与数据流梳理能力',
      '参与 Web、小程序等多端系统联调，对复杂业务链路中的数据同步、异常处理和稳定性验证有较强经验',
    ],
  },
  {
    id: '4',
    period: '2020.07 - 2022.08',
    company: '北京高科智博科技有限公司',
    position: '软件测试工程师',
    description: [
      '参与全球性海淘电商平台（FragranceNet）核心交易链路测试',
      '参与交易、订单、支付等关键链路测试，协助发现并推动修复多系统交互中的稳定性问题',
      '负责测试执行与缺陷跟踪，保证核心业务流程在多端环境下的稳定运行',
    ],
  },
];

// ==================== 教育背景 ====================
export const MOCK_EDUCATION: IEducation[] = [
  {
    id: '1',
    school: '中北大学（统招）',
    major: '土木工程',
    degree: '工学学士',
    period: '2016.09 - 2020.07',
    note: '自学转型AI工程方向，具备跨学科思维与快速学习能力。从土木工程专业自学编程，逐步转型为软件测试、自动化测试，最终聚焦AI应用开发，展现了较强的自我驱动与持续学习能力。',
    highlights: ['跨学科转型', '自学编程', '持续学习'],
  },
];

// ==================== 联系方式 ====================
export const MOCK_CONTACT: IContact = {
  id: '1',
  github: 'https://github.com/XiYaMuYi/',
  email: 'caihongwei71@gmail.com',
  email2: '1255905773@qq.com',
  linkedin: 'https://linkedin.com/',
  phone: '+86 136-4487-5947',
  location: '中国 · 杭州',
  status: '开放合作机会',
};
