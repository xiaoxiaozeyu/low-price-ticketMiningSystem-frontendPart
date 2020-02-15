//防置工具方法

const getYearMonthDay = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return {year, month, day};
}

const getDate = (year, month, day) => {
  return new Date(year, month, day)
}

const sortResultByPrice = (data) => {
  const len = data.length
  // const len = 3
  for(let i = 0;i<len-1;i++) {
    for(let j=0;j<len-i-1;j++) {
      console.log(i+"--"+j);
      if(data[j].lowestPrice > data[j+1].lowestPrice) {
        console.log("----worked----")
        let temp = data[j];
        data[j] = data[j+1];
        data[j+1] = temp;
      }
      console.log(data);
      // console.log(data[j].lowestPrice);
    }

  }
  // this.result = data
  console.log(data);
  return data
}

export {
  getYearMonthDay,
  getDate,
  sortResultByPrice
}
