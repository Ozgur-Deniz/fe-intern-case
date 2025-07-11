import React from 'react';

function SidebarTagGroup({ title, items }) {
  return (
    <div className="flex flex-col items-start justify-center gap-8 w-full">
      <p className="max-md:hidden font-open text-[#C7C7C7]">{title}</p>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="flex flex-row items-center justify-center gap-3 overflow-visible pl-2 cursor-pointer text-[#878787] hover:text-[#4f56d3]"
          >
            <Icon className="w-6 h-6  aspect-square" />
            <p className="max-md:hidden font-open text-[15px]">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SidebarTagGroup;
