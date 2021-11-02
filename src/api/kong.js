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
    url: 'http://36.250.0.19:8090/data/status.json',
    // url: '/monitor/rack/dbstatus',
    method: 'get',
    params
  })
}
