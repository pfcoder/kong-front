import request from '@/utils/request'

// batch query all kong temperatures
// params: id list array
export function getTemperatures(params) {
  /* const reqs = []
  params.forEach(kid => {
    reqs.push(request({
      url: '/kong/temperature?kid=' + kid,
      method: 'get'
    }))
  })

  return Promise.all(reqs).then(results => {
    console.log('results:', results)
  }) */
  console.log('getTemperatures api')
  return request({
    url: '/monitor/rack/dbstatus?name=serial1',
    method: 'get',
    params
  })
}
