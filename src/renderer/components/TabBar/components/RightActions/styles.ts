import styled from 'styled-components';

export const ActionsContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const ActionsItem = styled.div<{$hoverColor?: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 90%;
  margin-right: 6px;
  -webkit-app-region: no-drag;

  &:hover {
    background-color: ${props => props?.$hoverColor || 'rgb(208,210,213)'};
    > span {
      color: #fff !important;
    }
  }
`;

export const TabUl = styled.ul`
  flex: 1;
  display: flex;
`;
