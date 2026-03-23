import React, { useState } from 'react';
import { ICONS } from '../../constants';

const OaProjectDetail = ({ onBack }: { onBack: () => void }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setPreviewImage(image);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <div className="animate-in fade-in duration-500 pb-32">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-black font-bold hover:gap-4 transition-all py-1 -mt-8"
      >
        <ICONS.Back className="w-5 h-5" /> 返回项目列表
      </button>
      
      <div className="mt-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <header className="pt-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="inline-block px-4 py-1 rounded-full border border-black text-[10px] font-black uppercase tracking-widest">
                  Case Study / 用研/客户体验提升
                </div>
                <div className="px-4 py-1 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest">
                  2024-2025
                </div>
              </div>

              <h1 className="text-5xl md:text-[80px] font-bold tracking-tighter leading-[0.85] text-black mb-8">
                OA办公平台
              </h1>

              <p className="text-2xl text-gray-500 font-light max-w-4xl italic leading-8 mb-12">
                从0到1的复杂业务。<br/>通过深度用研，设计出领导体验优先的方案。
              </p>
            </header>
          </div>

          <div className="lg:w-3/5 relative group">
            <div className="w-full aspect-square rounded-[64px] flex items-center justify-center overflow-hidden">
              <img 
                src="/source/OA21.png" 
                alt="OA办公平台" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-black/5 mt-24">
          <div>
            <div className="text-[10px] uppercase font-black text-gray-300 mb-2">MY ROLE</div>
            <div className="font-bold text-sm md:text-base">设计师 / 用研</div>
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

        <section className="space-y-16 mt-48">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-4 text-red-600 font-black italic">
              <span className="text-6xl leading-none">01</span>
              <span className="w-16 h-px bg-red-600/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">售前阶段：深入了解业务</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight mb-6">
              面对复杂又陌生的业务，<br/>设计师如何下手？
            </h2>
          </div>
          
          <div className="w-full space-y-8">
            <div className="space-y-2 text-[18px] text-black font-light leading-relaxed">
              <p className="mb-4">通过主动介入业务，确保设计决策不再是"盲人摸象"。</p>
              <p>✦  设计师参与到一线现场的 <span className="font-bold">售前阶段</span> ，在市场中感受自己的产品与竞品</p>
              <p>✦  田野调查，<span className="font-bold">到客户现场</span> ，收集不同行业、不同角色的用户反馈</p>
              <p>✦  邀请专家培训，提升研发团队对业务的理解</p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img src="/source/OA01.png" alt="我的售前笔记" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <span className="text-sm text-gray-500 font-light">我的售前笔记</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img src="/source/OA02.png" alt="客户使用现场" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <span className="text-sm text-gray-500 font-light">客户使用场景</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="space-y-16 mt-48">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-4 text-red-600 font-black italic">
              <span className="text-6xl leading-none">02</span>
              <span className="w-16 h-px bg-red-600/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">用研成果转化</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
              我们发现了什么？
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1">
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                B端OA产品利益相关方中<br/>
                "领导"这一类用户<span class='text-red-600 font-bold'>最为关注产品体验</span><br/>
                此外，领导还是<span class='text-red-600 font-bold'>达成业务目标</span>的关键点
              </p>
            </div>
            <div className="col-span-2 rounded-[48px] overflow-hidden border border-gray-100">
              <img 
                src="/source/OA03.png" 
                alt="用户痛点分析" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
          
          <div className="w-full my-24 flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <div className="mx-4 text-lg text-gray-400">✦</div>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-8">调研后，我们发现了领导这些特点</h3>
            <div className="mb-12">
              <button 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
                onClick={() => window.open('https://kwchenxi.github.io/portal_simulator.html', '_blank')}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  我将调用结果用AI可视化
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {
                [
                  {
                    title: "权威性 仪式感",
                    description: "领导的<span class='text-red-600 font-bold'>话语权极大</span>\n承担着重大的决策责任",
                    image: "/source/OA11.png"
                  },
                  {
                    title: "繁忙",
                    description: "领导层级很多\n领导<span class='text-red-600 font-bold'>事情很多、很杂</span>\n需要处理突发、紧急事件",
                    image: "/source/OA12.png"
                  },
                  {
                    title: "墨守成规",
                    description: "可以慢，流程不能越过\n领导不喜欢更新，更不喜欢创新",
                    image: "/source/OA13.png",
                    smaller: true
                  },
                  {
                    title: "\"潜规则\"",
                    description: "不要教领导做事\n<span class='text-red-600 font-bold'>要懂得为领导着想</span>\n避免隐私和敏感话题",
                    image: "/source/OA14.png"
                  }
                ].map((card, idx) => (
                  <div key={idx} className="bg-white p-8 border border-gray-100 rounded-[48px] shadow-sm">
                    <div className="aspect-square mb-6 overflow-hidden flex items-center justify-center">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className={`object-cover ${card.smaller ? 'w-4/5 h-4/5' : 'w-full h-full'}`} 
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: card.description }}></p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        
        <section className="space-y-16 mt-48">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-4 text-red-600 font-black italic">
              <span className="text-6xl leading-none">03</span>
              <span className="w-16 h-px bg-red-600/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">设计过程</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic leading-tight">
              如何设计？
            </h2>
          </div>
          
          <div className="space-y-24">
            <div>
              <h3 className="text-2xl font-bold mb-6">1、框架：聚焦领导视角</h3>
              <p className="text-lg text-gray-500 leading-relaxed font-light mb-8">模块化展示·任务聚焦</p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-end">
                <div className="md:col-span-2 overflow-hidden">
                  <img src="/source/OA15.png" alt="模块化展示" className="w-full h-auto object-cover" />
                </div>
                <div className="md:col-span-3 overflow-hidden">
                  <img src="/source/OA16.png" alt="任务聚焦" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
            
            <div className="w-full my-24 flex items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <div className="mx-4 text-lg text-gray-400">✦</div>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-6">2、布局：减少层级递进</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light mb-6">简化步骤·提高效率</p>
                <ul className="text-lg text-gray-500 leading-relaxed font-light space-y-4">
                  <li>✦ 双屏模式</li>
                  <li>✦ 图标+文字，提升可读性</li>
                  <li>✦ 自动生成领导常用意见</li>
                </ul>
              </div>
              <div className="md:col-span-3 overflow-hidden">
                <img src="/source/OA04.png" alt="减少层级递进" className="w-full h-auto object-cover" />
              </div>
            </div>
            
            <div className="w-full my-24 flex items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <div className="mx-4 text-lg text-gray-400">✦</div>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-6">3、交互：流程简化</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light mb-6">为领导着想</p>
                <ul className="text-lg text-gray-500 leading-relaxed font-light space-y-2">
                  <li>✦ 秘书-代理领导</li>
                  <li>✦ 后台管理员-领导偏好设置</li>
                </ul>
              </div>
              <div className="md:col-span-3 overflow-hidden">
                <img src="/source/OA08.png" alt="流程简化" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="space-y-16 mt-48">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-4 text-red-600 font-black italic">
              <span className="text-6xl leading-none">04</span>
              <span className="w-16 h-px bg-red-600/20"></span>
              <span className="uppercase tracking-[0.3em] text-xs">项目资产</span>
            </div>
  
          </div>
          
          <div className="grid grid-cols-1 gap-16">
            <div className="overflow-hidden max-w-[80%] mx-auto">
              <img src="/source/OA05.png" alt="项目资产" className="w-full h-auto object-cover" />
            </div>
            <div className="overflow-hidden max-w-[80%] mx-auto">
              <img src="/source/OA06.png" alt="项目资产" className="w-full h-auto object-cover" />
            </div>
            <div className="max-w-[80%] mx-auto text-center py-16">
              <h3 className="text-3xl font-bold mb-6">完整的无障碍设计体系</h3>
              <p className="text-lg text-gray-500 mb-8">探索我们为 OA 办公平台建立的完整无障碍设计体系，确保所有用户都能平等使用产品。</p>
              <button 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
                onClick={() => {
                  // 跳转到领导友好：适老化设计体系详情页
                  // 由于我们在子组件中，需要通过 window 对象来触发导航
                  window.dispatchEvent(new CustomEvent('navigateToHighlight', { detail: 'accessibility' }));
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  查看完整体系
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></span>
              </button>
            </div>
          </div>
        </section>
        
        <section className="space-y-16 mt-48">
          <div className="max-w-3xl space-y-4">
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
            {[
                '/source/OA21.png',
                '/source/OA22.png',
                '/source/OA23.png'
              ].map((image, idx) => (
                <div key={idx} className="overflow-hidden rounded-[48px] bg-gray-100 h-96 cursor-pointer flex items-center justify-center" style={{ border: '4px solid #333333' }}>
                  <img
                    src={image}
                    alt={`OA办公平台 - ${idx + 1}`}
                    className="w-full h-full object-cover rounded-[44px] hover:scale-105 transition-all duration-700"
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          {/* Background overlay for click to close */}
          <div className="absolute inset-0 z-0" onClick={closePreview}></div>
          
          <button
            onClick={closePreview}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative z-10 max-w-full max-h-full">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OaProjectDetail;