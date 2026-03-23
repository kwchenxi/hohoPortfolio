import React from 'react';
import { ICONS } from '../../constants';

const AIAssistantProjectDetail = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="animate-in fade-in duration-500 pb-32">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-black font-bold hover:gap-4 transition-all py-1 -mt-8"
      >
        <ICONS.Back className="w-5 h-5" /> 返回项目列表
      </button>

      <div className="mt-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="lg:w-2/5">
            <header className="pt-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="inline-block px-4 py-1 rounded-full border border-black text-[10px] font-black uppercase tracking-widest">
                  Case Study / AI/智能助手
                </div>
                <div className="px-4 py-1 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest">
                  2025-今
                </div>
              </div>

              <h1 className="text-5xl md:text-[80px] font-bold tracking-tighter leading-[0.85] text-black mb-8">
                AIGC项目
              </h1>

              <p className="text-2xl text-gray-500 font-light max-w-4xl italic leading-8 mb-12">
                从对话到执行：<br/>重塑企业协作的 AI 闭环
              </p>
            </header>
          </div>

          <div className="lg:w-3/5 relative group">
            <div className="w-full aspect-square rounded-[64px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
              <div className="text-white text-center p-12">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-40">AIGC 企业级应用设计案例</div>
                <div className="text-6xl font-black tracking-tighter mb-4">AI-Driven</div>
                <div className="text-6xl font-black tracking-tighter">Workflow</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-black/5 mb-48">
          <div>
            <div className="text-[10px] uppercase font-black text-gray-300 mb-2">MY ROLE</div>
            <div className="font-bold text-sm md:text-base">Product Designer</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-black text-gray-300 mb-2">TIMELINE</div>
            <div className="font-bold text-sm md:text-base">2 Weeks (Concept to Prototype)</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-black text-gray-300 mb-2">TOOLS</div>
            <div className="font-bold text-sm md:text-base">React, Tailwind, Gemini API</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-black text-gray-300 mb-2">KEY RESULT</div>
            <div className="font-bold text-sm md:text-base">工作效率提升60%</div>
          </div>
        </div>

        {/* Section 01: Project Background */}
        <section className="space-y-16 mb-48">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-4 text-black font-black italic">
              <span className="text-6xl leading-none">01</span>
              <span className="w-16 h-px bg-black/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">项目背景</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
              为什么需要AI智能助手？
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-500 leading-relaxed font-light mb-12">
              探索人工智能如何打通"会议-待办-日程"的业务断点。一个能够自动提取会议决策、智能规划日程、并实时同步消息的下一代企业工作台。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-[48px] border border-gray-100">
                <div className="text-4xl font-black mb-4">信息过载</div>
                <p className="text-gray-500">会议记录整理耗时，待办事项散落在文档中，极易遗漏</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-[48px] border border-gray-100">
                <div className="text-4xl font-black mb-4">决策复杂</div>
                <p className="text-gray-500">缺乏智能决策支持工具，人工处理效率低下</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-[48px] border border-gray-100">
                <div className="text-4xl font-black mb-4">流程断点</div>
                <p className="text-gray-500">会议、待办、日程之间缺乏自动化衔接</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: AI Loop */}
        <section className="space-y-16 mb-48">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-black font-black italic">
                <span className="text-6xl leading-none">02</span>
                <span className="w-16 h-px bg-black/20"></span>
                <span className="uppercase tracking-[0.3em] text-xs">场景 + AI 探索实践</span>
              </div>
              <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
                从真实办公场景出发
              </h2>
              <p className="text-xl text-gray-500 font-light">
                让 AI 像一位默契的助手，自然地融入从沟通到执行的每一个环节。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "信息采集与生成",
                desc: "会议中，AI 静默聆听并梳理脉络，自动生成结构化纪要。"
              },
              {
                number: "02",
                title: "待办提取与清洗",
                desc: "它读懂的不仅是文字，更是上下文中的任务与决策意图。"
              },
              {
                number: "03",
                title: "自动排程与落地",
                desc: "基于你的忙闲状态，AI 贴心地建议最佳执行时间，供你确认。"
              },
              {
                number: "04",
                title: "通知与分发",
                desc: "一键确认，待办即刻转化为日程与通知，让想法落地为行动。"
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all duration-700">
                <div className="text-5xl font-black text-gray-200 mb-6 text-center">{step.number}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Section 03: Phase 1 - Meetings */}
        <section className="space-y-16 mb-48">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold mb-6">
                  <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[10px]">1</span>
                  第一阶段：会议模块
                </div>
                <h2 className="text-4xl font-bold mb-6 tracking-tighter">
                  信息采集与生成：<br/>让对话沉淀为资产
                </h2>
                <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                  在会议场景中，AI 的核心任务是"听懂"并"结构化"。我们设计了实时转写与智能摘要双屏互动的界面。
                </p>

                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-[32px] border border-gray-100">
                    <h4 className="font-bold text-lg mb-3">AI 如何运行 (How it works)</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      系统接入实时音频流，通过 ASR (自动语音识别) 将语音转为文本流。随后，LLM (大语言模型) 对文本进行分段处理，识别发言人，并实时提取关键信息。
                    </p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="text-2xl">✓</span>
                      <span><strong className="font-bold">实时转写：</strong> 区分发言人，生成带时间戳的剧本式记录。</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="text-2xl">✓</span>
                      <span><strong className="font-bold">结构化摘要：</strong> 会议结束后，AI 自动生成"关键决策"、"遗留问题"和"待办事项"。</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mock UI: Meeting Interface */}
              <div className="bg-gray-900 rounded-[48px] p-3 shadow-2xl border border-gray-800">
                <div className="bg-gray-800 rounded-[32px] overflow-hidden border border-gray-700">
                  <div className="bg-gray-900/50 p-3 border-b border-gray-700 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-xs text-gray-300 font-mono">REC 00:42:15</span>
                    </div>
                    <span className="text-xs text-gray-400">Q1 产品规划会</span>
                  </div>

                  <div className="grid grid-cols-2 h-64">
                    <div className="p-4 border-r border-gray-700 space-y-4 overflow-hidden relative">
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">A</div>
                        <div className="flex-1">
                          <p className="text-[10px] text-gray-400 mb-1">Alice 09:42</p>
                          <p className="text-xs text-gray-200 leading-relaxed">我们需要在下周三之前完成 API 文档的更新。</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">B</div>
                        <div className="flex-1">
                          <p className="text-[10px] text-gray-400 mb-1">Bob 09:43</p>
                          <p className="text-xs text-gray-200 leading-relaxed">没问题，我会跟进这个事情，并同步给前端团队。</p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-800 to-transparent"></div>
                    </div>

                    <div className="p-4 bg-gray-800/50">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-gray-300">✨ AI 实时摘要</span>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-white/10 border border-white/20 p-2 rounded text-[10px] text-gray-200">
                          <span className="block font-bold mb-1 text-gray-300">待办事项检测:</span>
                          • 更新 API 文档 (负责人: Bob, 截止: 下周三)
                        </div>
                        <div className="bg-gray-700/50 p-2 rounded text-[10px] text-gray-400">
                          <span className="block font-bold mb-1 text-gray-500">关键决策:</span>
                          • 确认 Q1 发布时间表...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Phase 2 - Assistant Sidebar */}
        <section className="space-y-16 mb-48 bg-gray-50 -mx-8 md:-mx-24 px-8 md:px-24 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold mb-6">
                  <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[10px]">2</span>
                  第二阶段：智能助手侧边栏
                </div>
                <h2 className="text-4xl font-bold mb-6 tracking-tighter">待办提取与清洗：<br/>从非结构化到结构化</h2>
                <p className="text-lg text-gray-500 mb-6 leading-relaxed font-light">
                  AI 不会直接污染你的日历。侧边栏充当了"过滤器"，让用户对提取出的待办进行确认和清洗。
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-[32px] border border-gray-200 shadow-sm">
                    <h4 className="font-bold mb-2">AI 如何生成内容 (Generative Content)</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      AI 使用 NLP (自然语言处理) 技术分析会议纪要，提取实体信息（Who, When, What）。它会计算"置信度评分"，如果评分较低，会提示用户人工确认。同时，它会保留"上下文引用"，让用户知道这个任务是基于哪句话生成的。
                    </p>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="text-2xl">✓</span>
                      <span><strong className="font-bold">置信度评分：</strong> 显性化展示 AI 的把握程度，建立信任。</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="text-2xl">✓</span>
                      <span><strong className="font-bold">上下文溯源：</strong> 点击待办即可回溯原始对话，拒绝断章取义。</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                {/* Mock UI for Sidebar */}
                <div className="bg-white rounded-[48px] p-6 border border-gray-200 shadow-xl max-w-sm mx-auto">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm">✨ AI 待办提取</span>
                    </div>
                    <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full font-medium">3 New</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-sm relative">
                      <div className="absolute -top-2 -right-2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded shadow-sm">
                        92% 置信度
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-red-50 text-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded border border-red-100">High</span>
                      </div>
                      <p className="font-bold text-sm mb-3">更新 Q1 季报 PPT 演示稿</p>

                      <div className="bg-gray-50 p-2 rounded border border-gray-100 mb-3">
                        <p className="text-[9px] text-gray-400 mb-0.5">来源上下文:</p>
                        <p className="text-[10px] text-gray-600 italic">"Bob, 你需要在周五前把 Q1 的 PPT 准备好..."</p>
                      </div>

                      <button className="w-full bg-black text-white text-[10px] py-2 rounded font-bold">
                        确认添加
                      </button>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 opacity-40">
                      <div className="h-2 w-1/3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05: Phase 3 - Calendar */}
        <section className="space-y-16 mb-48">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold mb-6">
                  <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[10px]">3</span>
                  第三阶段：日历模块
                </div>
                <h2 className="text-4xl font-bold mb-6 tracking-tighter">自动排程与落地：<br/>智能解决时间冲突</h2>
                <p className="text-lg text-gray-500 mb-6 leading-relaxed font-light">
                  当用户确认待办后，AI 负责最复杂的"落位"工作。它不仅是填空，更是资源调度。
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-[32px] border border-gray-100">
                    <h4 className="font-bold mb-2">AI 运行逻辑</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      AI 读取用户的 Calendar Availability (忙闲状态)。如果建议时间段有空，直接落位并标记为 AI生成。如果冲突，AI 会触发 Conflict Resolution 策略，建议"改期"或"委派"。
                    </p>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="text-2xl">✓</span>
                      <span><strong className="font-bold">智能空闲检测：</strong> 自动寻找最佳时间槽，避免碎片化时间。</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="text-2xl">✓</span>
                      <span><strong className="font-bold">冲突解决建议：</strong> 遇到冲突不报错，而是提供解决方案（如：改期至 16:00）。</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mock UI: Calendar Grid */}
              <div className="bg-white rounded-[48px] p-8 shadow-2xl border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold">2026年1月25日</h3>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    <span className="text-[10px] text-gray-500">工作</span>
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                    <span className="text-[10px] text-gray-500">AI 生成</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-xs text-gray-400 w-10 pt-2">09:00</span>
                    <div className="flex-1 bg-gray-50 border-l-4 border-black p-3 rounded text-sm">
                      <span className="font-bold block">产品周会</span>
                      <span className="text-xs text-gray-500">09:00 - 10:00</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-xs text-gray-400 w-10 pt-2">14:00</span>
                    <div className="flex-1 bg-white border-2 border-dashed border-gray-400 p-3 rounded text-sm relative shadow-lg">
                      <div className="absolute -top-3 -right-3 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                        ✨ AI 建议落位
                      </div>
                      <span className="font-bold block">更新 Q1 季报 PPT</span>
                      <span className="text-xs text-gray-500">14:00 - 15:00 | 来源：周会待办</span>
                      <button className="absolute bottom-2 right-2 bg-black text-white text-[10px] px-3 py-1 rounded font-bold">
                        确认
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-4 opacity-50">
                    <span className="text-xs text-gray-400 w-10 pt-2">15:00</span>
                    <div className="flex-1 bg-gray-50 border-l-4 border-gray-300 p-3 rounded text-sm text-gray-600">
                      <span className="font-bold block">Deep Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06: Phase 4 - Messages */}
        <section className="space-y-16 mb-48 bg-gray-50 -mx-8 md:-mx-24 px-8 md:px-24 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold mb-6">
                  <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[10px]">4</span>
                  第四阶段：消息模块
                </div>
                <h2 className="text-4xl font-bold mb-6 tracking-tighter">通知与分发：<br/>闭环的最后一公里</h2>
                <p className="text-lg text-gray-500 mb-6 leading-relaxed font-light">
                  任务不仅仅是创建，更需要触达。AI 自动将指派的任务分发给相关人员，确保信息同步。
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-[32px] border border-gray-200 shadow-sm">
                    <h4 className="font-bold mb-2">AI 运行逻辑</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      当待办事项的状态变更为"已确认"且包含"指派人"时，系统会自动触发消息推送服务。AI 会基于任务内容生成自然的通知文案，并通过 IM 接口发送给接收者。
                    </p>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="text-2xl">✓</span>
                      <span><strong className="font-bold">任务指派通知：</strong> 自动通知被指派人，附带任务详情卡片。</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="text-2xl">✓</span>
                      <span><strong className="font-bold">每日简报：</strong> 每天早上自动汇总昨日会议待办与今日日程，生成 Morning Brief。</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                {/* Mock UI for Messages */}
                <div className="bg-white rounded-[48px] border border-gray-200 shadow-xl max-w-sm mx-auto overflow-hidden">
                  <div className="bg-gray-50 p-3 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">AI</div>
                    <div>
                      <p className="text-sm font-bold">AI Assistant</p>
                      <p className="text-[10px] text-gray-400">Bot • Just now</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white font-bold text-xs mt-1">AI</div>
                      <div className="space-y-2 max-w-[85%]">
                        <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-sm text-gray-700">
                          <p className="mb-2">👋 Hi Bob, Alice 在 [Q1 产品周会] 中指派了一个新任务给你。</p>

                          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-xs">✓ 更新 API 文档</span>
                            </div>
                            <p className="text-[10px] text-gray-500 mb-2">截止日期: 下周三</p>
                            <button className="w-full bg-black text-white text-[10px] py-1.5 rounded font-bold">
                              查看详情 & 添加到日历
                            </button>
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-400 ml-1">10:45 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 border-t border-gray-100 flex gap-2">
                    <input className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-xs outline-none" placeholder="Reply to AI..." />
                    <button className="p-1.5 bg-black text-white rounded-full">→</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 07: Design Logic & Metrics */}
        <section className="space-y-16 mb-48">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-4 text-black font-black italic">
              <span className="text-6xl leading-none">04</span>
              <span className="w-16 h-px bg-black/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">设计背后的逻辑与度量</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
              不仅仅是功能的堆砌
            </h2>
            <p className="text-xl text-gray-500 font-light">
              更是对用户心智模型与业务效率的深度重构。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[48px] border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-black mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-6">痛点与解法</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">Problem</p>
                  <p className="text-gray-600 text-sm">会议记录整理耗时，待办事项散落在文档中，极易遗漏。</p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
                <div>
                  <p className="text-xs font-bold text-black uppercase mb-2">Solution</p>
                  <p className="text-gray-600 text-sm">AI 实时转写并提取意图，侧边栏即时确认，无缝衔接日程。</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[48px] border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-black mb-6">⏱️</div>
              <h3 className="text-2xl font-bold mb-6">体验度量</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">会后整理时间</span>
                    <span className="font-bold">-93%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full" style={{ width: '7%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">30分钟 → 2分钟</p>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">任务执行率</span>
                    <span className="font-bold">+40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[48px] border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-black mb-6">📐</div>
              <h3 className="text-2xl font-bold mb-6">设计原则</h3>
              <ul className="space-y-6">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></div>
                  <div>
                    <p className="font-bold text-sm mb-1">无感介入 (Invisible AI)</p>
                    <p className="text-xs text-gray-500">AI 不打扰用户心流，只在侧边栏静默处理。</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></div>
                  <div>
                    <p className="font-bold text-sm mb-1">可控性 (Controllability)</p>
                    <p className="text-xs text-gray-500">用户始终拥有最终决定权，AI 仅提供建议。</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></div>
                  <div>
                    <p className="font-bold text-sm mb-1">信任构建 (Trust)</p>
                    <p className="text-xs text-gray-500">显性化展示"置信度"与"来源"。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 05: Project Results */}
        <section className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-4 text-black font-black italic">
              <span className="text-6xl leading-none">05</span>
              <span className="w-16 h-px bg-black/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">项目成果</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
              我们取得了什么成果？
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black text-white p-10 rounded-[48px]">
              <div className="text-4xl font-black mb-4">提升60%</div>
              <div className="text-lg font-bold mb-2">工作效率</div>
              <div className="text-white/60 text-sm">用户处理日常任务的时间大幅缩短</div>
            </div>
            <div className="bg-black text-white p-10 rounded-[48px]">
              <div className="text-4xl font-black mb-4">提升45%</div>
              <div className="text-lg font-bold mb-2">决策质量</div>
              <div className="text-white/60 text-sm">基于AI分析的决策更加准确</div>
            </div>
            <div className="bg-black text-white p-10 rounded-[48px]">
              <div className="text-4xl font-black mb-4">95%</div>
              <div className="text-lg font-bold mb-2">用户满意度</div>
              <div className="text-white/60 text-sm">用户对AIGC项目的使用体验高度满意</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIAssistantProjectDetail;