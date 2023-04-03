// import routes from '../src/router/index';

export default [
  // ...routes
  { path: '/', component: '@/pages/index' },
  { path: '/song', component: '@/pages/song/index', name: '歌单管理' },
  { path: '/singer', component: '@/pages/singer/index', name: '歌手管理' },
];
