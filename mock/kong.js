const Mock = require('mockjs')

/*
{
    "code": 0,
    "data": {
        "name": "bkk22",
        "host": "192.168.1.191:502",
        "registerStatusMap": {
            "入水温度": {},
            "出水温度": {
                "type": "temperature",
                "value": 35,
                "status": "status normal",
                "StatusAppearTimes": 0,
                "Alarm": "status normal",
                "createdAt": "2021-10-30T02:42:02.065836602Z"
            },
            "油温1": {},
            "油温2": {
                "type": "temperature",
                "value": 38,
                "status": "status normal",
                "StatusAppearTimes": 0,
                "Alarm": "status normal",
                "createdAt": "2021-10-30T02:42:02.081274763Z"
            },
            "油温3": {
                "type": "temperature",
                "value": 39,
                "status": "status normal",
                "StatusAppearTimes": 0,
                "Alarm": "status normal",
                "createdAt": "2021-10-30T02:42:02.086570014Z"
            },
            "油温4": {
                "type": "temperature",
                "value": 40,
                "status": "status normal",
                "StatusAppearTimes": 0,
                "Alarm": "status normal",
                "createdAt": "2021-10-30T02:42:02.091668404Z"
            }
        }
    }
}
*/

const data = Mock.mock({
  'channels':  {
    'channel-0': {
      type: 'temperature',
      value: '@integer(30, 70)',
      status: 'status normal',
      createdAt: '@datetime'
    },
    'channel-3': {
      type: 'temperature',
      value: '@integer(30, 70)',
      status: 'status normal',
      createdAt: '@datetime'
    }
  }
})

module.exports = [
  {
    url: '/monitor/rack/dbstatus',
    type: 'get',
    response: config => {
      return {
        code: 0,
        data: {
          name: 'serial1',
          host: '\\.\COM6',
          registerStatusMap: data.channels
        }
      }
    }
  }
]
