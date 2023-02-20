import styled from 'styled-components';

export const TabBarContainer = styled.div<{ $height?: number; normalColor?: string }>`
  width: 100%;
  height: ${props => `${props.$height}px`};
  background-color: ${props => props.normalColor || 'rgba(222,225,230,.6)'};
  -webkit-app-region: drag;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 18px;
  overflowX: hidden;
  box-sizing: border-box;
`;
