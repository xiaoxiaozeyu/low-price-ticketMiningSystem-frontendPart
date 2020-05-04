import {request} from "./request";

// POST方式
export function addSchedule(flightInfo, refer) {
  return request({
    method: 'post',
    url: '/addSchedule',
    data: {
      depCity:flightInfo.departureCityName,
      arrCity:flightInfo.arrivalCityName,
      depDate:flightInfo.departureDate,
      refer:refer
    }
  })
}

export function getSchedule(refer) {
  return request({
    method: 'post',
    url: '/getSchedule',
    data: {
      refer:refer
    }
  })
}
