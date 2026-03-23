
import React from 'react';
import { Page } from '../types';
import { ICONS, COLORS } from '../constants';

interface NavigationRailProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavigationRail: React.FC<NavigationRailProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { page: Page.HOME, icon: ICONS.Home, label: '首页' },
    { page: Page.PROJECTS, icon: ICONS.Projects, label: '业务项目' },
    { page: Page.AI_EXPLORATION, icon: ICONS.AI, label: 'AI' },
    { page: Page.HIGHLIGHTS, icon: ICONS.Highlights, label: '设计赋能' },
    { page: Page.ABOUT, icon: ICONS.About, label: '关于我' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 md:w-24 bg-white flex flex-col items-center py-8 z-50 border-r border-gray-100 shadow-sm">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center text-2xl font-black">
          H
        </div>
      </div>

      {/* Main Nav Items */}
      <div className="flex flex-col gap-6 flex-1">
        {navItems.map(({ page, icon: Icon, label }) => {
          const isActive = currentPage === page;
          return (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className="group flex flex-col items-center gap-1 focus:outline-none"
            >
              <div
                className={`w-14 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-black text-white shadow-lg' 
                    : 'text-gray-500 group-hover:bg-gray-50 group-hover:text-black'
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span className={`text-[10px] font-bold transition-colors uppercase tracking-tighter ${
                isActive ? 'text-black' : 'text-gray-400 group-hover:text-black'
              }`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="mt-auto flex flex-col gap-4">
      </div>
    </nav>
  );
};

export default NavigationRail;
