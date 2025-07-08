import React from 'react';
import sideBarMenu from '../../data/sideBarMenu';
import sideBarAnalytics from '../../data/sideBarAnalytic';
import sideBarSettings from '../../data/sideBarSettings';
import sideBarApps from '../../data/sideBarApps';
import SidebarTagGroup from './sideBarTagGroup';

function SidebarTags() {
  return (
    <div className="flex flex-col gap-6 w-full pl-7 mb-4">
      <SidebarTagGroup title="MAIN MENU" items={sideBarMenu} />
      <SidebarTagGroup title="ANALYTICS" items={sideBarAnalytics} />
      <SidebarTagGroup title="APPS" items={sideBarApps} />
      <SidebarTagGroup title="SETTINGS" items={sideBarSettings} />
    </div>
  );
}

export default SidebarTags;
