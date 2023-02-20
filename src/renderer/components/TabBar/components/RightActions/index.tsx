import React from 'react';
import { ActionsContainer, ActionsItem, TabUl } from './styles';
import { MinusOutlined, BlockOutlined, CloseOutlined } from '@ant-design/icons';
import { ActionsEnum } from '@/types/RightActions';
import { handleMainWindowStatus } from '@/src/renderer/channel';


const actions: { type: ActionsEnum, icon: React.ReactNode, hoverColor?: string }[] = [
  { type: ActionsEnum.Min, icon: <MinusOutlined style={{ color: '#8F8F8FFF' }}/> },
  { type: ActionsEnum.Max, icon: <BlockOutlined style={{ color: '#8F8F8FFF' }}/> },
  { type: ActionsEnum.Close, icon: <CloseOutlined style={{ color: '#8F8F8FFF' }}/>, hoverColor: 'rgb(232,17,35)' },
];

const RightActions = () => {

  return (
    <ActionsContainer>
      <TabUl>

      </TabUl>
      {
        actions.map((item, index) => (
          <ActionsItem
            key={index}
            $hoverColor={item?.hoverColor}
            onClick={() => {
              handleMainWindowStatus(item.type);
            }}
          >{item.icon}</ActionsItem>
        ))
      }
    </ActionsContainer>
  );
};

export default RightActions;
