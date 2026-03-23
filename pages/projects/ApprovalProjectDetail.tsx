import React from 'react';
import { ICONS } from '../../constants';

const ApprovalProjectDetail = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="animate-in fade-in duration-500 pb-32">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-black font-bold hover:gap-4 transition-all py-1 -mt-8"
      >
        <ICONS.Back className="w-5 h-5" /> 返回项目列表
      </button>
      
      <div className="mt-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
          <div className="lg:w-3/5">
            <header className="pt-0">
              <div className="flex items-center gap-4 mb-5 mt-[-20px]">
                <div className="inline-block px-4 py-1 rounded-full border border-black text-[10px] font-black uppercase tracking-widest">
                  Case Study / 提效/通用设计
                </div>
                <div className="px-4 py-1 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest">
                  2022-2024
                </div>
              </div>

              <h1 className="text-5xl md:text-[80px] font-bold tracking-tighter leading-[0.85] text-black mb-8">
                B端审批流程
              </h1>

              <p className="text-2xl text-gray-500 font-light max-w-4xl italic leading-8">
                通过原子化设计解决填写效率低问题，改版后支撑 200,000+ 企业用户。
              </p>
            </header>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-black/5 mt-24">
          <div>
            <div className="text-[10px] uppercase font-black text-gray-300 mb-2">MY ROLE</div>
            <div className="font-bold text-sm md:text-base">设计师（UI/UX + Vibe Coding）</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-black text-gray-300 mb-2">TECH STACK</div>
            <div className="font-bold text-sm md:text-base">AI Studio/Claude/Figma</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-black text-gray-300 mb-2">PLATFORM</div>
            <div className="font-bold text-sm md:text-base">AI Studio</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-black text-gray-300 mb-2">KEY RESULT</div>
            <div className="font-bold text-sm md:text-base">从想法到Demo到获得支持仅需1周</div>
          </div>
        </div>

        <section className="space-y-24 mt-24">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center gap-4 text-red-600 font-black italic">
              <span className="text-6xl leading-none">01</span>
              <span className="w-16 h-px bg-red-600/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">背景</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
              项目背景
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              企业流程表单存在字段冗余、填写繁琐、校验不友好等问题。用户需要在不同表单间重复输入相同信息，导致工作效率低下，用户体验差。
            </p>
          </div>
        </section>

        <section className="space-y-24 mt-24">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center gap-4 text-red-600 font-black italic">
              <span className="text-6xl leading-none">02</span>
              <span className="w-16 h-px bg-red-600/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">用研</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
              用户研究
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-10 rounded-[48px]">
              <p className="text-lg text-gray-500 leading-relaxed font-light">数据分析：表单平均填写时间15分钟，字段重复率40%</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-[48px]">
              <p className="text-lg text-gray-500 leading-relaxed font-light">用户反馈："不知道填什么"、"填错后无法修改"、"找不到提交按钮"</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-[48px]">
              <p className="text-lg text-gray-500 leading-relaxed font-light">竞品分析：主流OA系统表单设计模式与最佳实践</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-[48px]">
              <p className="text-lg text-gray-500 leading-relaxed font-light">技术评估：现有表单引擎能力与改造可行性</p>
            </div>
          </div>
        </section>

        <section className="space-y-24 mt-24">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center gap-4 text-red-600 font-black italic">
              <span className="text-6xl leading-none">03</span>
              <span className="w-16 h-px bg-red-600/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">设计过程</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
              设计过程
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-8 items-start">
              <div className="w-20 text-5xl font-black text-black/10">01</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">原子化组件设计</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light">构建表单原子组件库，实现字段复用和智能填充。</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-20 text-5xl font-black text-black/10">02</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">智能表单引擎</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light">支持动态字段、条件显示、实时校验、自动保存等功能。</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-20 text-5xl font-black text-black/10">03</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">体验优化</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light">优化填写流程，提供进度提示、错误引导、快捷操作等。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-24 mt-24">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center gap-4 text-red-600 font-black italic">
              <span className="text-6xl leading-none">04</span>
              <span className="w-16 h-px bg-red-600/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">成果</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
              项目成果
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black text-white p-10 rounded-[48px]">
              <div className="text-4xl font-black mb-4">提升70%</div>
              <div className="text-lg font-bold mb-2">填写效率</div>
              <div className="text-white/60 text-sm">平均填写时间从15分钟缩短至4.5分钟</div>
            </div>
            <div className="bg-black text-white p-10 rounded-[48px]">
              <div className="text-4xl font-black mb-4">降低85%</div>
              <div className="text-lg font-bold mb-2">错误率</div>
              <div className="text-white/60 text-sm">表单填写错误率大幅下降</div>
            </div>
            <div className="bg-black text-white p-10 rounded-[48px]">
              <div className="text-4xl font-black mb-4">20万+</div>
              <div className="text-lg font-bold mb-2">用户规模</div>
              <div className="text-white/60 text-sm">支撑企业用户规模持续增长</div>
            </div>
          </div>
        </section>

        <section className="space-y-24 mt-24">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center gap-4 text-red-600 font-black italic">
              <span className="text-6xl leading-none">05</span>
              <span className="w-16 h-px bg-red-600/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">作品展示</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
              作品展示 · Gallery
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-[48px] bg-gray-100 h-96">
              <img
                src="https://picsum.photos/1200/800?random=60"
                alt="B端审批流程 - 1"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-[48px] bg-gray-100 h-96">
              <img
                src="https://picsum.photos/1200/800?random=61"
                alt="B端审批流程 - 2"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-[48px] bg-gray-100 h-96">
              <img
                src="https://picsum.photos/1200/800?random=62"
                alt="B端审批流程 - 3"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ApprovalProjectDetail;