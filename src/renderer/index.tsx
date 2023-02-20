/**
 * Author: Moki
 * Date: 2022-09-09
 * FileName: 渲染进程入口文件
 **/
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'mobx-react';
import ErrorBoundary from '@/components/ErrorBoundary';
import stores from "@/store/index"
import App from "@/src/renderer/app";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ErrorBoundary>
        <Provider store={stores}>
            <App/>
        </Provider>
    </ErrorBoundary>
);
