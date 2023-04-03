import { RequestConfig } from 'umi';
import { message } from 'antd';

export const request: RequestConfig = {
  timeout: 1000,
  //请求拦截器 让post请求的请求格式为urlencode格式
  // 1、统一处理了请求参数格式转换
  requestInterceptors: [
    (url: any, options: any) => {
      console.log('请求拦截器', url, options);
      return options;
    },
  ],

  //响应拦截器
  // 1、统一处理接口请求出错和业务处理出错的情况
  responseInterceptors: [
    (response: any) => {
      if (response.status === 200) {
        if (response.data && response.data.code === 0) {
          message.error(response.data.msg);
          // 返回一个pending状态的peomise,终端promise链
          return new Promise(() => {});
        }
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
  ],
};
