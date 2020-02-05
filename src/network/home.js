import {request} from "./request";

export function getHomeTestInfo() {
  return request({
    url: '/'
  })
}
