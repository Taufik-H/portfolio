import React from 'react';
import TabMenu from './TabMenu';
import TabItem from './TabItem';
import './Tab.scss';
import { images } from '../../constant';
function Tab() {
  return (
    <div>
      <TabMenu />
      <TabItem />
    </div>
  );
}

export default Tab;
