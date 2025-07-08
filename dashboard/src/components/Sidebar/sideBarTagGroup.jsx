import React from 'react';

function SidebarTagGroup({ title, items }) {
  return (
    <div className="flex flex-col items-start justify-center gap-4 w-full">
      <p className="font-open text-[#C7C7C7]">{title}</p>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="flex flex-row items-center justify-center gap-3 overflow-visible pl-2"
          >
            <Icon className="w-6 h-6 text-[#878787] aspect-square" />
            <p className="text-[#878787] font-open text-[15px]">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SidebarTagGroup;
