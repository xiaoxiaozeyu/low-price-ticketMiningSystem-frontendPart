import {request} from "./request";

// POST方式
// flightNum,passagerName,depAirport,arrAirport,depDate,getPrice,refer
export function purchaseTicket(flightInfo, passagerName, refer) {
  return request({
    method: 'post',
    url: '/buyTicket',
    data: {
      flightNum:flightInfo.flightNumber,
      passagerName:passagerName,
      depAirport:flightInfo.departureAirportName,
      arrAirport:flightInfo.arrivalAirportName,
      depDate:flightInfo.departureDate,
      getPrice:flightInfo.lowestPrice,
      refer:refer
    }
  })
}
