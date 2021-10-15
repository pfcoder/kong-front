const Mock = require('mockjs')

/*
{
	"code": 0,
	"data": {
		"name": "serial1",
		"host": "\\.\COM6",
		"registerStatusMap": {
			"channel-0": {
				"type": "temperature",
				"value": 34,
				"status": "status normal",
				"createdAt": "2021-10-13T22:32:15+08:00"
			},
			"channel-3": {
				"type": "temperature",
				"value": 33,
				"status": "status normal",
				"createdAt": "2021-10-13T22:32:25+08:00"
			}
		}
	}
}
*/

const data = Mock.mock({
  'channels': {
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
