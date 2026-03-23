1
import React, { useState, useMemo, useEffect } from 'react';
import { Page, Project, SystemPost, HighlightId, TimelineItem, Principle } from './types';
import NavigationRail from './components/NavigationRail';
import SectionHeader from './components/SectionHeader';
import { ICONS } from './constants';
import { generateDesignCritique } from './services/geminiService';
import CalendarProjectDetail from './pages/projects/CalendarProjectDetail';
import OaProjectDetail from './pages/projects/OaProjectDetail';
import ApprovalProjectDetail from './pages/projects/ApprovalProjectDetail';
import AIAssistantProjectDetail from './pages/projects/AIAssistantProjectDetail';

// --- Static Data ---
const PROJECTS: Project[] = [
  {
    id: '2',
    title: '智能日历',
    category: 'AI驱动创新',
    description: '全流程AI驱动 的创新项目',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
    color: '#333333',
    date: '2025.12 - 今',
    // Demo相关数据
    demoTitle: 'DEMO',
    demoDescription: 'AI辅助构建的可交互动态网站原型。从静态设计到实时交互，体验完整的智能日历功能流程。',
    demoLink: 'https://your-demo-link.com',
    demoBuildTime: '1 周',
    // 详情页面数据
    background: '智能日历是一个<span class="font-bold text-gray-800">全流程AI驱动</span>的创新项目。\n\n从产品经理使用AI Studio生成原型，到设计师通过AI编程快速构建可交互Demo，再到向高层领导确认需求，整个过程颠覆传统流程。\n\nAI驱动的工作流缩短了产品验证周期，尤其适用于<span class="font-bold text-gray-800">转型AI类产品</span>的快速迭代。',
    research: [
      'AI工具链调研：产品经理使用AI Studio快速生成原型，设计师通过Cursor等AI编程工具实现功能',
      '验证模式创新：用可交互Demo替代静态设计稿，直接向高层领导演示并收集反馈',
      '效率提升：传统流程需要2周完成原型+设计稿，AI流程仅需3天即可产出可验证Demo',
      '团队协作：产品、设计、开发通过AI工具实现无缝协作，减少沟通成本'
    ],
    designProcess: [
      {
        title: 'AI原型生成',
        description: '产品经理使用AI Studio工具，基于需求描述快速生成高保真原型，包含完整的交互逻辑和数据结构。',
        image: 'https://picsum.photos/1200/800?random=30'
      },
      {
        title: 'AI编程实现',
        description: '设计师（我）通过Cursor等AI编程工具，将原型转化为可交互的Web应用，实现核心功能逻辑。',
        image: 'https://picsum.photos/1200/800?random=31'
      },
      {
        title: '高层领导验证',
        description: '拿着可交互Demo直接向高层领导演示，现场收集反馈并快速迭代，避免了传统流程中反复修改设计稿的低效问题。',
        image: 'https://picsum.photos/1200/800?random=32'
      },
      {
        title: '详细设计落地',
        description: '在需求确认后，进行适老化设计优化，包括16px+字号、7:1高对比度配色、一屏式布局等，确保符合领导使用习惯。',
        image: 'https://picsum.photos/1200/800?random=33'
      }
    ],
    results: [
      { metric: '验证周期', value: '缩短70%', description: '从2周缩短至3天，大幅提升产品迭代效率' },
      { metric: '开发效率', value: '提升3倍', description: 'AI编程工具让设计师能够快速实现功能原型' },
      { metric: '需求准确性', value: '提升90%', description: '通过可交互Demo直接验证，避免需求理解偏差' }
    ],
    gallery: [
      'https://picsum.photos/1200/800?random=40',
      'https://picsum.photos/1200/800?random=41',
      'https://picsum.photos/1200/800?random=42'
    ]
  },
  {
    id: '4',
    title: 'AIGC项目',
    category: 'AI/智能助手',
    description: '基于大模型的智能助手，提供自然语言交互和智能决策支持。',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    color: '#00A1E4',
    date: '2025-今',
    // Demo相关数据
    demoTitle: 'DEMO',
    demoDescription: '体验AIGC项目的核心功能，包括自然语言交互、智能决策和个性化推荐。',
    demoLink: 'https://ai-assistant-demo.com',
    demoBuildTime: '2 周',
    background: '企业用户在日常工作中面临信息过载、决策复杂等问题，需要智能化工具辅助。',
    research: [
      '用户痛点：信息获取效率低、决策过程繁琐、重复性工作多',
      '技术评估：大模型能力与企业场景结合的可行性',
      '竞品分析：市场主流AIGC项目产品功能与体验',
      '安全评估：企业数据安全与隐私保护方案'
    ],
    designProcess: [
      {
        title: '交互设计',
        description: '设计自然语言交互界面，确保用户能够轻松与AIGC项目沟通。',
        image: 'https://picsum.photos/1200/800?random=70'
      },
      {
        title: '功能设计',
        description: '设计智能问答、任务自动化、决策支持等核心功能。',
        image: 'https://picsum.photos/1200/800?random=71'
      },
      {
        title: '集成方案',
        description: '设计与企业现有系统的集成方案，确保数据流通和功能协同。',
        image: 'https://picsum.photos/1200/800?random=72'
      }
    ],
    results: [
      { metric: '工作效率', value: '提升60%', description: '用户处理日常任务的时间大幅缩短' },
      { metric: '决策质量', value: '提升45%', description: '基于AI分析的决策更加准确' },
      { metric: '用户满意度', value: '95%', description: '用户对AIGC项目的使用体验高度满意' }
    ],
    gallery: [
      'https://picsum.photos/1200/800?random=80',
      'https://picsum.photos/1200/800?random=81',
      'https://picsum.photos/1200/800?random=82'
    ]
  },
  {
    id: '1',
    title: 'OA办公平台',
    category: '用研/客户体验提升',
    description: '从0到1的复杂业务。<br/>深度用研，体验优先的设计。<br/>无障碍设计、通用设计。',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
    color: '#000000',
    date: '2024-2025',
    // Demo相关数据
    demoTitle: 'DEMO',
    demoDescription: '体验央国企OA办公平台的核心功能，包括公文流转、会议管理和多屏协同办公。',
    demoLink: 'https://oa-demo-link.com',
    demoBuildTime: '2 周',
    background: '央国企OA系统普遍存在界面复杂、操作繁琐、适配性差等问题。高层管理者需要处理大量公文流转、会议安排和事务审批，但传统系统学习成本高，无法满足移动办公和多屏协同的需求。',
    research: [
      '调研范围：8家央企，覆盖政府、能源、金融等行业',
      '用户画像：决策层（55-65岁）、执行层（35-45岁）、操作层（25-35岁）',
      '核心需求：公文流转效率、会议管理、移动办公支持',
      '技术约束：私有化部署、数据安全、国产化适配'
    ],
    designProcess: [
      {
        title: '场景化设计',
        description: '围绕"办文、办会、办事"三大核心场景，构建统一的信息架构和交互模式。',
        image: 'https://picsum.photos/1200/800?random=20'
      },
      {
        title: '多屏适配方案',
        description: '针对PC、平板、手机三端进行差异化设计，支持跨设备无缝切换。',
        image: 'https://picsum.photos/1200/800?random=21'
      },
      {
        title: '无障碍与适老化',
        description: '遵循WCAG AA标准，实现高对比度、大字体、语音辅助等功能。',
        image: 'https://picsum.photos/1200/800?random=22'
      }
    ],
    results: [
      { metric: '公文处理效率', value: '提升45%', description: '平均处理时间从2小时缩短至1小时' },
      { metric: '用户覆盖率', value: '100%', description: '覆盖全组织层级，从高层到基层员工' },
      { metric: '移动办公占比', value: '65%', description: '移动端使用率，支持随时随地办公' }
    ],
    gallery: [
      'https://picsum.photos/1200/800?random=50',
      'https://picsum.photos/1200/800?random=51',
      'https://picsum.photos/1200/800?random=52'
    ]
  },
  {
    id: '3',
    title: 'B端审批流程',
    category: '提效/通用设计',
    description: '通过原子化设计解决填写效率低问题，改版后支撑 200,000+ 企业用户。',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    color: '#666666',
    date: '2022-2024',
    // Demo相关数据
    demoTitle: 'DEMO',
    demoDescription: '体验原子化表单设计的核心功能，包括智能填充、动态字段和实时校验。',
    demoLink: 'https://form-demo-link.com',
    demoBuildTime: '1.5 周',
    background: '企业流程表单存在字段冗余、填写繁琐、校验不友好等问题。用户需要在不同表单间重复输入相同信息，导致工作效率低下，用户体验差。',
    research: [
      '数据分析：表单平均填写时间15分钟，字段重复率40%',
      '用户反馈："不知道填什么"、"填错后无法修改"、"找不到提交按钮"',
      '竞品分析：主流OA系统表单设计模式与最佳实践',
      '技术评估：现有表单引擎能力与改造可行性'
    ],
    designProcess: [
      {
        title: '原子化组件设计',
        description: '构建表单原子组件库，实现字段复用和智能填充。',
        image: 'https://picsum.photos/1200/800?random=25'
      },
      {
        title: '智能表单引擎',
        description: '支持动态字段、条件显示、实时校验、自动保存等功能。',
        image: 'https://picsum.photos/1200/800?random=26'
      },
      {
        title: '体验优化',
        description: '优化填写流程，提供进度提示、错误引导、快捷操作等。',
        image: 'https://picsum.photos/1200/800?random=27'
      }
    ],
    results: [
      { metric: '填写效率', value: '提升70%', description: '平均填写时间从15分钟缩短至4.5分钟' },
      { metric: '错误率', value: '降低85%', description: '表单填写错误率大幅下降' },
      { metric: '用户规模', value: '20万+', description: '支撑企业用户规模持续增长' }
    ],
    gallery: [
      'https://picsum.photos/1200/800?random=60',
      'https://picsum.photos/1200/800?random=61',
      'https://picsum.photos/1200/800?random=62'
    ]
  },
];

const SYSTEM_POSTS: SystemPost[] = [
  { 
    id: '1', 
    title: 'B端 OA 适老化设计指南', 
    date: '2024.12', 
    summary: '沉淀 7:1 高对比度配色、16px+ 字号及针对高龄决策者的“去教导化”逻辑。', 
    imageUrl: 'https://picsum.photos/1200/800?random=10', 
    tag: '设计规范',
    principles: [
      { title: '看得清 (Vision)', description: '无衬线字体、16px+字号、行高1.5+，对比度坚持 7:1。', icon: 'visibility' },
      { title: '点得准 (Touch)', description: '点击区域不小于 44x44px，提供明确、高对比的视觉反馈。', icon: 'touch_app' },
      { title: '看得懂 (Cognition)', description: '避免术语，图标配文字。结构扁平，关键信息高亮。', icon: 'psychology' }
    ],
    details: '在政府与大型企业的数字化转型中，高层管理者往往面临着视力衰退与工作繁琐的双重压力。通过对央企一把手（平均57.56岁）的深度访谈，我们定义了这套“领导友好”的设计标准。'
  },
];

const TIMELINE: TimelineItem[] = [
  { year: '2024-2025', company: '金蝶 · 云之家', desc: '资深 UX 设计师 | 负责适老化、无障碍及 OA 核心产品升级' },
  { year: '2019-2021', company: '贝尔科教集团', desc: 'UI/UX 设计师 | 机器人 APP | 教务系统' },
  { year: '2011-2015', company: '广外大学', desc: '计算机科学与技术 | 码农出身的设计师' },
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [activeHighlight, setActiveHighlight] = useState<HighlightId | null>(null);
  const [selectedSystemPostId, setSelectedSystemPostId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResult, setAiResult] = useState<any>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // 监听导航事件
  useEffect(() => {
    const handleNavigateToHighlight = (event: Event) => {
      const customEvent = event as CustomEvent<HighlightId>;
      const highlightId = customEvent.detail;
      setActiveHighlight(highlightId);
      setCurrentPage(Page.HIGHLIGHTS);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('navigateToHighlight', handleNavigateToHighlight as EventListener);
    return () => {
      window.removeEventListener('navigateToHighlight', handleNavigateToHighlight as EventListener);
    };
  }, []);
  const handleAiExploration = async () => {
    if (!aiPrompt) return;
    setIsAiLoading(true);
    try {
      const result = await generateDesignCritique(aiPrompt);
      setAiResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHome = () => (
    <div className="space-y-24 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-3/5">
          <SectionHeader
            title="Hi，<br/>I'm Hoho"
            subtitle="4年UI+4年UX+2年产品设计 <br/> 从互联网世界的翻译官，到 AI世界的探索者"
            pillText="Senior UX Designer | 10Y Experience"
          />
          <div className="flex gap-4">
            <button
              onClick={() => handlePageChange(Page.ABOUT)}
              className="px-10 py-5 rounded-full bg-black text-white font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              关于我
            </button>
            <button
              onClick={() => window.open('https://kwchenxi.github.io', '_blank')}
              className="px-10 py-5 rounded-full border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              我的AI
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 relative group">
           <div className="w-full aspect-square bg-black rounded-[64px] flex items-center justify-center text-white overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/1000/1000?random=42" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="孔维辰曦" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <div className="text-4xl font-black mb-2">5年UI + 5年UX</div>
                <div className="text-sm font-bold uppercase tracking-[0.4em] opacity-60 italic">Hybrid Designer-Engineer</div>
              </div>
           </div>
        </div>
      </div>

      <section className="pt-12">
        <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-8">
          <h2 className="text-4xl font-bold text-black tracking-tight">近期作品 · Projects</h2>
          <button onClick={() => handlePageChange(Page.PROJECTS)} className="text-gray-400 hover:text-black font-bold uppercase tracking-widest text-sm transition-colors">View All Works —</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(p => (
            <div 
              key={p.id} 
              onClick={() => {
                setSelectedProjectId(p.id);
                handlePageChange(Page.PROJECT_DETAIL);
              }}
              className="bg-white rounded-[40px] overflow-hidden group hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-gray-50 cursor-pointer"
            >
              <div className="relative overflow-hidden h-72">
                <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-black">
                  {p.category}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8 h-12 line-clamp-2 font-light" dangerouslySetInnerHTML={{ __html: p.description }}></p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-black"></div>
                  <span className="text-[10px] text-black uppercase tracking-[0.2em] font-black">{p.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderProjects = () => (
    <div className="animate-in slide-in-from-bottom duration-500">
      <div className="inline-block px-4 py-1 rounded-full border border-black text-[10px] font-black uppercase tracking-widest mb-6">Portfolio</div>
      <SectionHeader 
        title="项目集" 
        subtitle="从 0 到 1 的央国企 OA 平台构建，到千万级用户的流程系统升级。"
      />
      <div className="grid grid-cols-1 gap-12">
        {PROJECTS.map(p => (
          <div key={p.id} className="flex flex-col md:flex-row gap-10 bg-white rounded-[56px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700">
            <div className="w-full md:w-1/2 h-96 overflow-hidden">
                <img src={p.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={p.title} />
            </div>
            <div className="p-12 flex flex-col justify-center flex-1">
              <span className="text-[10px] font-black text-gray-400 mb-4 uppercase tracking-[0.3em]">{p.category} | {p.date}</span>
              <h3 className="text-5xl font-bold mb-6 tracking-tighter">{p.title}</h3>
              <p className="text-xl text-gray-500 leading-relaxed mb-10 font-light" dangerouslySetInnerHTML={{ __html: p.description }}></p>
              <button 
                onClick={() => {
                  setSelectedProjectId(p.id);
                  handlePageChange(Page.PROJECT_DETAIL);
                }}
                className="self-start px-8 py-3 rounded-full border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xs"
              >
                详情
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHighlights = () => {
    // --- Detailed Case Study for Accessibility ---
    if (activeHighlight === 'accessibility') {
        return (
          <div className="animate-in slide-in-from-right duration-500 pb-32">
          <button onClick={() => setActiveHighlight(null)} className="flex items-center gap-2 text-black font-bold hover:gap-4 transition-all py-1 -mt-8">
            <ICONS.Back className="w-5 h-5" /> 返回亮点列表
          </button>
          
          <div className="mt-24 space-y-24">
          <header className="space-y-8">
            <div className="inline-block px-4 py-1 rounded-full border border-black text-[10px] font-black uppercase tracking-widest">UX Research & Design Strategy</div>
            <h1 className="text-6xl md:text-[108px] font-bold tracking-tighter leading-[0.85]">领导友好的设计 <br/>(适老化及无障碍)</h1>
            <p className="text-2xl text-gray-500 font-light max-w-4xl italic leading-8">
              整理近一年对央国企客户的调研资料。主要从客户的现状、需求、心理进行分析，阐述如何为高阶决策者打造"去教导化"的办公体验。
            </p>
          </header>

          {/* Section 1: Analysis */}
          <section className="space-y-12">
            <h2 className="text-4xl font-bold italic tracking-tight border-b border-gray-200 pb-6">01 / 现状分析 · Status Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">设备现状</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  多电脑屏幕办公，广泛使用华为平板及折叠屏手机。在体制内，大屏幕看文件是刚需。
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">年龄分布</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  央企一把手平均 57.56 岁，领导班子平均 53 岁。生理机能下降（老花、听力、认知陌生感）是核心设计门槛。
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">生理机能</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  视力老花、听力弱化、对飞速发展的 AI 及数字化产品存在“认知不对称”。
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Psychology */}
          <section className="space-y-12">
            <h2 className="text-4xl font-bold italic tracking-tight border-b border-gray-200 pb-6">02 / 客户心理洞察 · Psychology</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { t: '严谨性', d: '高知人群，按规矩办事，分工明确。' },
                  { t: '安全性', d: '私有化部署，数据保密是红线。' },
                  { t: '仪式感', d: '偏好手写墨宝，象征荣誉与权威。' },
                  { t: '权威性', d: '决策责任重大，话语权极高。' }
                ].map(item => (
                  <div key={item.t} className="p-8 bg-white border border-gray-100 rounded-3xl">
                    <div className="font-bold text-lg mb-2">{item.t}</div>
                    <div className="text-gray-400 text-sm">{item.d}</div>
                  </div>
                ))}
              </div>
              <div className="bg-black text-white p-12 rounded-[56px] flex flex-col justify-center space-y-8">
                 <h3 className="text-2xl font-bold uppercase tracking-widest text-white/40">核心潜规则</h3>
                 <p className="text-3xl font-light italic leading-tight">
                   “不要教领导怎么做（下达命令者不需要学习），要懂得为领导着想，避免隐私干扰。”
                 </p>
              </div>
            </div>
          </section>

          {/* Section 3: Strategies */}
          <section className="space-y-12">
            <h2 className="text-4xl font-bold italic tracking-tight border-b border-gray-200 pb-6">03 / 方案解析 · 6大响应策略</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { title: '框架：模块化展示', desc: '采用“聚焦视角”，针对平板端独立设计，功能聚焦，减少操作路径。' },
                 { title: '布局：一屏式展示', desc: '减少系统层级的递进。领导习惯关注屏幕正中央区域。' },
                 { title: '交互：简化流程', desc: '减少弹窗叠加。支持秘书代理模式，处理平均每天几十个甚至上百个待办。' },
                 { title: '图形：增强视觉表现', desc: '图标配文字描述，采用识别度强的具象图形，贴近客户认知范畴。' },
                 { title: '字体：极致易读', desc: '正文 16px+，行距 1.5+。支持字体缩放而不破坏布局，选用厚重无衬线体。' },
                 { title: '颜色：对比度标准', desc: '适老化建议视觉对比度达 7:1。不唯一依赖颜色传达信息（照顾色弱群体）。' }
               ].map((s, idx) => (
                 <div key={idx} className="flex gap-8 group">
                   <div className="text-5xl font-black text-gray-100 group-hover:text-black transition-colors shrink-0">0{idx+1}</div>
                   <div>
                     <h4 className="text-2xl font-bold mb-3">{s.title}</h4>
                     <p className="text-gray-500 font-light">{s.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </section>

          {/* Section 4: Result */}
          <section className="bg-gray-100 p-20 rounded-[72px] space-y-12">
             <div className="text-center">
               <h2 className="text-4xl font-bold tracking-tighter mb-4">设计原则总结</h2>
               <div className="flex flex-wrap justify-center gap-4">
                 {['领导友好', '适老化', '通用性与包容性', '无障碍设计'].map(p => (
                   <span key={p} className="px-6 py-2 bg-white rounded-full text-xs font-black uppercase tracking-widest shadow-sm">{p}</span>
                 ))}
               </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center pt-8">
               <div>
                 <div className="text-7xl font-black mb-2 tracking-tighter">7:1</div>
                 <div className="text-sm font-bold opacity-40 uppercase">适老化文本对比度</div>
               </div>
               <div>
                 <div className="text-7xl font-black mb-2 tracking-tighter">16px</div>
                 <div className="text-sm font-bold opacity-40 uppercase">最小正文字号标准</div>
               </div>
               <div>
                 <div className="text-7xl font-black mb-2 tracking-tighter">WCAG</div>
                 <div className="text-sm font-bold opacity-40 uppercase">AA/AAA 级对标验收</div>
               </div>
             </div>
          </section>
        </div>
        </div>
      );
    }

    // Default Highlights List
    return (
      <div className="animate-in fade-in duration-500 space-y-20">
        <header>
          <div className="inline-block px-4 py-1 rounded-full border border-black text-[10px] font-black uppercase tracking-widest mb-6">Design System</div>
          <h1 className="text-7xl md:text-[108px] font-bold text-black tracking-tighter mb-12 leading-[0.85]">
            设计方法与体系
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { 
              id: 'accessibility', 
              title: '领导友好：适老化设计体系', 
              subtitle: '01: Accessibility & Leadership UX',
              desc: '针对 50-70 岁央企高层调研，输出 7:1 高对比度及去教导化交互方案。',
              image: 'https://picsum.photos/1200/800?random=20'
            },
            { 
              id: 'research', 
              title: '从 0 到 1 体系化用研', 
              subtitle: '02: Research & Insights',
              desc: '沉淀中煤、广晟等数十家央国企客户访谈资料，构建 B 端用研基础设施。',
              image: 'https://picsum.photos/1200/800?random=21'
            }
          ].map(h => (
            <div 
              key={h.id} 
              onClick={() => {
                setActiveHighlight(h.id as HighlightId);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex flex-col group cursor-pointer transition-all"
            >
              <div className="h-[200px] overflow-hidden rounded-[48px] mb-6 bg-gray-100 relative">
                <img 
                  src={h.image} 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700" 
                  alt={h.title} 
                />
              </div>
              
              <div className="px-4 flex-1 flex flex-col">
                <h4 className="text-[10px] font-black text-gray-400 mb-4 uppercase tracking-[0.4em]">{h.subtitle}</h4>
                <h3 className="text-4xl font-bold text-black mb-6 tracking-tighter group-hover:translate-x-4 transition-transform">{h.title} —</h3>
                <p className="text-xl text-gray-500 leading-relaxed font-light line-clamp-2">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAIExploration = () => (
    <div className="animate-in fade-in duration-500 space-y-20">
      <SectionHeader 
        title="AI 实验室" 
        subtitle="作为一名‘设计师+码农’，我致力于利用生成式 AI 重塑设计生产力。目前已在全公司发起“AI 工具分享会”。"
        pillText="AI Laboratory"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-black p-12 rounded-[56px] text-white flex flex-col justify-between group overflow-hidden relative">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8">Experiment 01</h4>
            <h3 className="text-5xl font-bold mb-6 tracking-tighter">无障碍 AI 辅助工具</h3>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
              利用 AI 自动生成图片的 Alt 描述，并辅助 WCAG 标准的自动化测试，大幅提升 B 端项目交付质量。
            </p>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/5 text-xs">Accessibility AI</span>
            <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/5 text-xs">Vite + React</span>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[56px] border border-gray-100 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-8">Experiment 02</h4>
            <h3 className="text-5xl font-bold mb-6 tracking-tighter">设计提效白皮书</h3>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-10">
              落实设计师主动使用 AI。号召团队成员每两周沉淀 1-2 个 AI 工作流案例。
            </p>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">Workflow Ops</span>
            <span className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">AI Sharing</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-12 md:p-20 rounded-[64px] border border-gray-200">
         <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 tracking-tight text-black">更多 AI 研究课题</h3>
            <p className="text-xl text-gray-500 mb-12 font-light leading-relaxed">
              从 AI 插件开发到大模型微调辅助设计，我将所有研究过程沉淀在我的 GitHub Pages。
            </p>
            <a 
              href="https://kwchenxi.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-black text-white font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-2xl"
            >
              访问我的 AI 实验室主页 <ICONS.Search className="w-5 h-5" />
            </a>
         </div>
      </div>
    </div>
  );

  const renderProjectDetail = () => {
    const project = PROJECTS.find(p => p.id === selectedProjectId);
    if (!project) return <div>项目未找到</div>;

    const handleBack = () => {
      setSelectedProjectId(null);
      handlePageChange(Page.PROJECTS);
    };

    switch (project.id) {
      case '1':
        return <OaProjectDetail onBack={handleBack} />;
      case '2':
        return <CalendarProjectDetail onBack={handleBack} />;
      case '3':
        return <ApprovalProjectDetail onBack={handleBack} />;
      case '4':
        return <AIAssistantProjectDetail onBack={handleBack} />;
      default:
        return <div>项目未找到</div>;
    }
  };

  const renderAbout = () => (
    <div className="w-full animate-in fade-in duration-500 space-y-20">
      {/* 第一个模块：图片、标签和标题 */}
      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        <div className="w-full md:w-2/5 relative">
          <img src="https://picsum.photos/800/1000?random=100" className="w-full aspect-[4/5] object-cover rounded-[56px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Profile" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-black rounded-full flex items-center justify-center shadow-2xl transform rotate-12">
            <div className="text-white text-center">
               <div className="text-xs uppercase tracking-widest mb-1 opacity-50">Career Style</div>
               <div className="text-3xl font-black">翻译官</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          <header>
            <span className="inline-block px-4 py-1.5 rounded-full border border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-8 flex flex-col gap-6">
              <div>Hi，我是孔维辰曦。</div>
              <div>除了名字特长，</div>
              <div>还有点其他特长。</div>
            </h1>
          </header>
          <p className="text-2xl text-gray-500 leading-relaxed font-light">
            从一名码农开始，<br/>
            成为互联网世界的翻译官：用户体验设计师<br/>
            然后成为AI世界的探索者：AI产品设计师
          </p>
        </div>
      </div>

      {/* 第二个模块：2+2 MATRIX */}
      <div className="w-full">
        <section className="space-y-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-[56px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700">

              {/* Group 1: Hard Skills - The Logic Layer */}
              <div className="bg-white p-12 md:p-24 space-y-20">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">2个硬技能</h2>
                  <div className="flex items-center gap-4">
                     <div className="h-2 w-24 bg-black"></div>
                     <div className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Logic & Foundation</div>
                  </div>
                </div>

                <div className="space-y-24">
                  {/* Skill: User Research */}
                  <div className="group relative">
                    <div className="flex items-baseline gap-6 mb-6">
                      <span className="text-3xl font-black tracking-tighter group-hover:italic transition-all">01.</span>
                      <h3 className="text-2xl font-bold tracking-tight">用研</h3>
                    </div>
                    <div className="pl-16 space-y-4">
                      <p className="text-xl text-gray-500 font-light leading-relaxed">
                        从0到1搭建<span className="text-black font-bold">公司级用研体系</span>。将用研深度嵌入流程，正式纳入所有设计师年度 OKR 考核。
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-mono uppercase text-gray-400">
                        Structure: Process Driven
                      </div>
                    </div>
                  </div>

                  {/* Skill: Code */}
                  <div className="group relative">
                    <div className="flex items-baseline gap-6 mb-6">
                      <span className="text-3xl font-black tracking-tighter group-hover:italic transition-all">02.</span>
                      <h3 className="text-2xl font-bold tracking-tight">代码</h3>
                    </div>
                    <div className="pl-16 space-y-8">
                      <p className="text-xl text-gray-500 font-light leading-relaxed">
                        运用 <span className="text-black font-black bg-yellow-300 px-2 italic">Vibe Coding</span> 输出复杂交互，消除落地偏差。
                      </p>
                      <div className="p-8 bg-black text-white rounded-[40px] shadow-xl transform group-hover:scale-105 transition-transform">
                        <div className="text-[10px] uppercase font-black tracking-widest text-white/30 mb-4">Innovation Node</div>
                        <p className="text-lg italic font-light leading-relaxed">
                          "通过<span className="text-white font-bold">搭建用户场景模拟器</span>，让原本抽象的用研成果，变成可感知、可测试的动态交互。"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group 2: Soft Skills - The Catalyst Layer */}
              <div className="bg-[#0A0A0A] p-12 md:p-24 space-y-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full"></div>

                <div className="space-y-4 relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">2个软技能</h2>
                  <div className="flex items-center gap-4">
                     <div className="h-2 w-24 bg-white/40"></div>
                     <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Growth & Insight</div>
                  </div>
                </div>

                <div className="space-y-24 relative z-10">
                  {/* Skill: AI */}
                  <div className="group relative">
                    <div className="flex items-baseline gap-6 mb-6">
                      <span className="text-3xl font-black tracking-tighter text-white/20 group-hover:text-white transition-all">03.</span>
                      <h3 className="text-2xl font-bold italic tracking-tight">AI</h3>
                    </div>
                    <div className="pl-16 space-y-8">
                      <p className="text-xl text-white/60 font-light leading-relaxed">
                        深度应用并推广 AI 提效。曾获财务部门授予称号：<span className="text-white font-bold border-b border-white/20 pb-1">"报销届的爱因斯坦"</span>。
                      </p>
                      <div className="grid grid-cols-2 gap-8 border-l border-white/10 pl-8">
                         <div>
                           <div className="text-3xl font-black tracking-tighter">7W+</div>
                           <div className="text-[10px] uppercase font-black text-white/30 tracking-widest mt-2">RedBook Views</div>
                         </div>
                         <div className="flex flex-col justify-end">
                           <div className="text-xs text-white/40 font-light leading-relaxed italic">Sharing technical <br/>insights globally.</div>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Skill: English */}
                  <div className="group relative">
                    <div className="flex items-baseline gap-6 mb-6">
                      <span className="text-3xl font-black tracking-tighter text-white/20 group-hover:text-white transition-all">04.</span>
                      <h3 className="text-2xl font-bold italic tracking-tight">英语</h3>
                    </div>
                    <div className="pl-16 space-y-6">
                      <p className="text-xl text-white/60 font-light leading-relaxed">
                        无障碍获取全球前沿资讯，反哺团队实践。
                      </p>
                      <div className="flex flex-col gap-4">
                         <div className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">The Positive Loop</span>
                         </div>
                         <div className="flex items-center gap-4 text-xs font-bold uppercase italic">
                           <span>Learning</span>
                           <span className="text-white/20">→</span>
                           <span>Application</span>
                           <span className="text-white/20">→</span>
                           <span>Settlement</span>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Value Prop */}
              <div className="col-span-1 lg:col-span-2 max-w-4xl mx-auto py-12 text-center space-y-6 border-t border-gray-100">
                 <div className="text-[10px] font-black uppercase tracking-[0.6em] text-black/20">Value Proposition</div>
                 <p className="text-2xl md:text-3xl font-black tracking-tighter leading-tight italic">
                   "我的价值在于，能系统性地解决复杂问题，落地极致用户体验。"
                 </p>
              </div>
          </div>
        </section>
      </div>

      {/* 第三个模块：职业历程和生活方式 */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Career Journey</h4>
          <div className="space-y-6">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="w-32 text-sm font-bold text-black border-r border-black/10 transition-colors group-hover:border-black">{item.year}</div>
                <div>
                  <div className="text-lg font-bold text-black">{item.company}</div>
                  <div className="text-base text-gray-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12 pt-12 border-t border-gray-100">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black mb-6">Lifestyle</h4>
            <ul className="space-y-4 text-lg text-black font-bold">
              <li>🎻 小提琴 2 年 7 级</li>
              <li>🏃 夜跑 15 公里 / 徒步</li>
              <li>🧘 瑜伽 5 年</li>
              <li>⛰️ 户外群主</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black mb-6">Connect</h4>
            <ul className="space-y-4 text-lg text-black font-bold">
              <li>1512579030@qq.com</li>
              <li>15013534317 (Wechat)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const content = useMemo(() => {
    switch (currentPage) {
      case Page.HOME: return renderHome();
      case Page.PROJECTS: return renderProjects();
      case Page.PROJECT_DETAIL: return renderProjectDetail();
      case Page.AI_EXPLORATION: return renderAIExploration();
      case Page.HIGHLIGHTS: return renderHighlights();
      case Page.ABOUT: return renderAbout();
      default: return renderHome();
    }
  }, [currentPage, activeHighlight, selectedSystemPostId, selectedProjectId, aiPrompt, aiResult, isAiLoading]);

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <NavigationRail 
        currentPage={currentPage} 
        onNavigate={(p) => { 
          setCurrentPage(p); 
          if (p !== Page.HIGHLIGHTS) {
            setActiveHighlight(null); 
            setSelectedSystemPostId(null);
          }
          if (p !== Page.PROJECT_DETAIL) {
            setSelectedProjectId(null);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />
      
      <main className="flex-1 ml-20 md:ml-24 px-8 md:px-24 py-16 md:py-32 overflow-y-auto">
        <div className="max-w-[1400px] mx-auto">
          {content}
        </div>
      </main>
    </div>
  );
};

export default App;
