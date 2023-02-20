/**
 * Author: Moki
 * Date: 2023-01-27
 * FileName: 错误边界
 **/
import React, { ErrorInfo } from 'react';
import { Result, Space, Button, Modal, Typography } from 'antd';


type ErrorBoundaryProps = {
  onError?: (error: Error, stack: ErrorInfo) => void;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

type ErrorBoundaryState = {
  hasError: boolean;
  errInfo: any
}
export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errInfo: null
    };
  }

  /**
   * Author: Moki
   * Date: 2023-01-27
   * Todo: 错误捕捉返回
   **/
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props;
    this.setState({
      hasError: true,
      errInfo: errorInfo
    });
    console.log(error);
    onError && onError(error, errorInfo);
  }


  render() {
    const { fallback } = this.props;
    const { hasError, errInfo } = this.state;
    if (hasError) {
      if (fallback && React.isValidElement(fallback)) {
        return fallback;
      }
      return (
        <div className={'w-full h-full flex justify-center items-center'}>
          <Result
            status="500"
            title="程序异常,请关闭软件重新打开!"
            extra={<Space>
              <Button onClick={() => {

              }}>关闭软件</Button>
              <Button onClick={() => {
                Modal.error({
                  title: '报错信息',
                  footer: null,
                  content: <div className={'max-h-[300px] overflow-y-scroll'}>
                    <Typography.Paragraph copyable>{JSON.stringify(errInfo) || ''}</Typography.Paragraph>
                  </div>
                });
              }}>查看报错信息</Button>
            </Space>}
          ></Result>
        </div>
      );
    }
    return this.props.children;
  }
}
