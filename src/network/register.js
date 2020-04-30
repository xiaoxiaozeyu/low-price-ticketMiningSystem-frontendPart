import {request} from "./request";

// POST方式
export function registerUser(username,password) {
  return request({
    method: 'post',
    url: '/regUser',
    data: {
      username:username,
      password:password
    }
  })
}
