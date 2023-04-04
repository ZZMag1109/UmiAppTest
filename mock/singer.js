// 提供歌曲相关的mock数据
import mockjs from 'mockjs';

export default {
  'GET /song/list': mockjs.mock({
    code: 1,
    msg: '获取数据失败！',
    'data|10': [{ title: '@ctitle', singer: '@name', date: '@now' }],
  }),
};
