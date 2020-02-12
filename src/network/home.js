import {request} from "./request";

export function getHomeTestInfo() {
  return request({
    url: '/'
  })
}

export function getTicketInfo(depCity,arrCity,depDate) {
  return request({
    url: '/getAirLineInfo',
    params: {
      depCity,
      arrCity,
      depDate
    }
  })
}
