import request from '@/utils/request'

// batch query all kong temperatures
// params: id list array
export function getTemperatures(params) {
  console.log('getTemperatures api:', params)
  return request({
    url: `http://47.119.173.119:8090/data/status-${params}.json`,
    // url: `/monitor/rack/dbstatus/${params}`,
    method: 'get',
    params
  })
}

export function getRackHistory(name, period) {
  //const baseUrl = 'http://47.119.173.119:8090/data/'
  //const baseUrl = 'http://localhost:8000/'
  // http://47.119.173.119:8090/monitor/rack/history?area=tianjun&end=1652843319&start=1652836119&name=TA30%E5%9B%9E%E6%B0%B4%E6%B8%A9%E5%BA%A6
  let end = new Date();
  let start
  switch (period) {
    case '2h':
      start = new Date(end.getTime() - 2 * 60 * 60 * 1000);
      break;
    case '24h':
      start = new Date(end.getTime() - 24 * 60 * 60 * 1000);
      break;
    case '7d':
      start = new Date(end.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;
  }
  start = Math.floor(start / 1000);
  end = Math.floor(end / 1000);
  const baseUrl = `http://47.119.173.119:8090/monitor/rack/history?area=tianjun&start=${start}&end=${end}&name=`
  return Promise.all([
    request({ url: `${baseUrl}${name}-1%23温度`, method: 'get' }),
    request({ url: `${baseUrl}${name}-2%23温度`, method: 'get' }),
    request({ url: `${baseUrl}${name}-3%23温度`, method: 'get' }),
    request({ url: `${baseUrl}${name}-4%23温度`, method: 'get' }),
    request({ url: `${baseUrl}${name}供水温度`, method: 'get' }),
    request({ url: `${baseUrl}${name}回水温度`, method: 'get' })
  ])
}
