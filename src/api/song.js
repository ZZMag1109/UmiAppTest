import { request } from 'umi';

export const songlist = () => {
  return request('/song/list', {
    methods: 'GET',
  });
};
