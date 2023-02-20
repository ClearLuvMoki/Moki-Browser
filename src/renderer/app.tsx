import React from 'react';
import styled from 'styled-components';
import TabBar from '@/components/TabBar';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <MainContainer>
      <TabBar/>
    </MainContainer>
  );
};

export default App;
