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
    (response: any, options: any) => {
      const data = response.json().then(
        (resolve: any) => {
          if (resolve.code === 0) {
            // 业务出错处理
            message.error(resolve.msg);
            return new Promise(() => {});
          }
          return resolve.data;
        },
        (err: any) => {
          // 请求出错处理
          message.error(err);
          return new Promise(() => {});
        },
      );
      return data;
    },
  ],
};
