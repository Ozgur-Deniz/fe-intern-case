import React from 'react';
import Dropdown from './Dropdown';

function SidebarTagGroup({ title, items }) {
  return (
    <div className="flex flex-col items-start justify-center gap-8 w-full">
      <p className="max-md:hidden font-open text-[#C7C7C7]">{title}</p>
      {items.map((item) => {
        const Icon = item.icon;
        const {id, label, children} = item;
        return (children ? <Dropdown item={item} key={id} /> :
          <div
            key={id}
            className="flex flex-row items-center justify-center gap-3 overflow-visible pl-2 cursor-pointer text-[#878787] hover:text-[#4f56d3]"
          >
            <Icon className="w-6 h-6  aspect-square" />
            <p className="max-md:hidden font-open text-[15px]">{label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SidebarTagGroup;
