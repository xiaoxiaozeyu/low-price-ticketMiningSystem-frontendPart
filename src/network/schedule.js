import {request} from "./request";

// POST方式
export function addSchedule(flightInfo, passagerName, refer) {
  return request({
    method: 'post',
    url: '/addSchedule',
    data: {
      depCity:flightInfo.departureCityName,
      arrCity:flightInfo.arrivalCityName,
      depDate:flightInfo.departureDate,
      passagerName:passagerName,
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
