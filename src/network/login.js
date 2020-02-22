import {request} from "./request";

// POST方式
export function getLoginToken(username,password) {
  return request({
    method: 'post',
    url: '/loginCheck',
    data: {
      username:username,
      password:password
    }
  })
}
