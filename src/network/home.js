import {request} from "./request";

export function getHomeTestInfo() {
  return request({
    url: '/'
  })
}

// GET方式
// export function getTicketInfo(depCity,arrCity,depDate) {
//   return request({
//     url: '/getAirLineInfo',
//     params: {
//       depCity,
//       arrCity,
//       depDate
//     }
//   })
// }

// POST方式
export function getTicketInfo(depCity,arrCity,depDate) {
  return request({
    method: 'post',
    url: '/getAirLineInfo',
    data: {
      depCity:depCity,
      arrCity:arrCity,
      depDate:depDate
    }
  })
}
