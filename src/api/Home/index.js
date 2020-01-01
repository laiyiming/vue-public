import http from '@/utils/http';

export default {
  userLogin: form => http.post('/auth/login', form),
};
