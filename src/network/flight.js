import {request} from "./request";

// POST方式
export function getFlightDetail(flightNum,depDate) {
  return request({
    method: 'post',
    url: '/getFlightDetail',
    data: {
      flightNum:flightNum,
      depDate:depDate
    }
  })
}
