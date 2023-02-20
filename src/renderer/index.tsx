/**
 * Author: Moki
 * Date: 2022-09-09
 * FileName: 渲染进程入口文件
 **/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import ErrorBoundary from '@/components/ErrorBoundary';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import stores from '@/store/index';
import App from '@/src/renderer/app';


const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = {
  main: 'primary'
};

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

root.render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Provider store={stores}>
        <App/>
      </Provider>
    </ThemeProvider>
  </ErrorBoundary>
);
