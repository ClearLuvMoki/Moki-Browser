/**
 * Author: Moki
 * Date: 2023-02-19
 * FileName: 标签页
 **/

import React from 'react';
import { TabBarContainer } from './styles';
import { TabBarHeight } from '@/utils/BaseValue';
import RightActions from './components/RightActions';

const TabBar = () => {
  return (
    <TabBarContainer $height={TabBarHeight}>
      <RightActions/>
    </TabBarContainer>
  );
};

export default TabBar;



