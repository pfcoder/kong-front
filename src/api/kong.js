import request from '@/utils/request'

// batch query all kong temperatures
// params: id list array
export function getTemperatures(params) {
  console.log('getTemperatures api:', params)
  return request({
    url: `http://c.earthledger.com:8090/data/status-${params}.json`,
    // url: `/monitor/rack/dbstatus/${params}`,
    method: 'get',
    params
  })
}
