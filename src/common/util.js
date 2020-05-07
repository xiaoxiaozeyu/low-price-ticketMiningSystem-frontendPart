//放防置工具方法
const getYearMonthDay = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return {year, month, day};
}

const getDate = (year, month, day) => {
  return new Date(year, month, day)
}

const sortResultByPrice = (data,obj) => {
  const len = data.length
  for(let i = 0;i<len-1;i++) {
    for(let j=0;j<len-i-1;j++) {
      if(Number(data[j].lowestPrice) > Number(data[j+1].lowestPrice)) {
        let temp = data[j];
        // data[j] = data[j+1];
        // data[j+1] = temp;
        obj.$set(data, j, data[j+1]);
        obj.$set(data, j+1, temp);
      }
    }
  }
  return data
}

const sortOrderList = (data,obj) => {
  const len = data.length
  for(let i = 0;i<len-1;i++) {
    for(let j=0;j<len-i-1;j++) {
      if(data[j].depDate > data[j+1].depDate) {
        let temp = data[j];
        // data[j] = data[j+1];
        // data[j+1] = temp;
        obj.$set(data, j, data[j+1]);
        obj.$set(data, j+1, temp);
      }
    }
  }
  return data
}

const searchSameFlight = (data, flightNo) => {
  const len = data.length
  let flightList = []
  for(let i = 0;i<len;i++) {
      if(data[i].flightNumber.toUpperCase() == flightNo.toUpperCase()) {
        flightList.push(data[i])
      }
  }
  return flightList
}

export {
  getYearMonthDay,
  getDate,
  sortResultByPrice,
  sortOrderList,
  searchSameFlight
}
