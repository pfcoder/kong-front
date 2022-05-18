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
  // const baseUrl = 'http://47.119.173.119:8090/data/'
  const baseUrl = 'http://localhost:8000/'
  return Promise.all([
    request({ url: `${baseUrl}${name}-1%23温度-${period}.json`, method: 'get' }),
    request({ url: `${baseUrl}${name}-2%23温度-${period}.json`, method: 'get' }),
    request({ url: `${baseUrl}${name}-3%23温度-${period}.json`, method: 'get' }),
    request({ url: `${baseUrl}${name}-4%23温度-${period}.json`, method: 'get' }),
    request({ url: `${baseUrl}${name}供水温度-${period}.json`, method: 'get' }),
    request({ url: `${baseUrl}${name}回水温度-${period}.json`, method: 'get' })
  ])
}
