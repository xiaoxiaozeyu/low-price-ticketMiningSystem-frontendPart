import {request} from "./request";

// POST方式
export function getTicketOrder(userid) {
  return request({
    method: 'post',
    url: '/getTicketOrder',
    data: {
      refer:userid
    }
  })
}

