import { defineConfig } from 'umi';
import routes from './routes';
// import routes from '../src/router/index';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    // name: 'Your APP',
    locale: true,
    layout: 'side',
  },
  routes,
  fastRefresh: {},
});
