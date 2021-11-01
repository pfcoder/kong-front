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
  'allRackStatus': [
    {
      'name': 'bkk11',
      'host': '192.168.188.171:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 0,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:09.94+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 37,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:09.394+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 46,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:10.38+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 45,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:10.811+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 44,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:11.24+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 49,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:11.67+08:00'
        }
      }
    },
    {
      'name': 'bkk12',
      'host': '192.168.188.176:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:05.342+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 37,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:04.782+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 59,
          'status': 'status warning',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:05.78+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:06.203+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 44,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:06.65+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 44,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:07.11+08:00'
        }
      }
    },
    {
      'name': 'bkk13',
      'host': '192.168.188.181:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:01:58.941+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 37,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:01:58.461+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:01:59.371+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 40,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:01:59.82+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 48,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:00.311+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 45,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:00.762+08:00'
        }
      }
    },
    {
      'name': 'bkk14',
      'host': '192.168.188.186:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:01.772+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 37,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:01.291+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 40,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:02.181+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:02.632+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 46,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:03.09+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 44,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:03.591+08:00'
        }
      }
    },
    {
      'name': 'bkk15',
      'host': '192.168.188.191:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:02.55+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 36,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:02.12+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 43,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:03.001+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 39,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:03.499+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 41,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:03.991+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 45,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:04.501+08:00'
        }
      }
    },
    {
      'name': 'bkk16',
      'host': '192.168.188.196:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 32,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:04.769+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 38,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:04.3+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 44,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:05.201+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 41,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:05.632+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 44,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:06.101+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 46,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:06.54+08:00'
        }
      }
    },
    {
      'name': 'bkk17',
      'host': '192.168.188.201:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:09.481+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 37,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:09.05+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 44,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:10.021+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:10.5+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 41,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:10.94+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 47,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:11.391+08:00'
        }
      }
    },
    {
      'name': 'bkk18',
      'host': '192.168.1.171:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:08.14+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 36,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:07.659+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:08.631+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 37,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:09.07+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 43,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:09.53+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 45,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:10.059+08:00'
        }
      }
    },
    {
      'name': 'bkk19',
      'host': '192.168.1.176:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:06.35+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 37,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:05.959+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:06.778+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 47,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:07.21+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 43,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:07.631+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:08.09+08:00'
        }
      }
    },
    {
      'name': 'bkk20',
      'host': '192.168.1.181:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:07.701+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 36,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:07.271+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:08.14+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 41,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:08.67+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 43,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:09.21+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 45,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:09.71+08:00'
        }
      }
    },
    {
      'name': 'bkk21',
      'host': '192.168.1.186:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:07.32+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 37,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:06.908+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 41,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:07.759+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 45,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:08.221+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 43,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:08.67+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 46,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:09.158+08:00'
        }
      }
    },
    {
      'name': 'bkk22',
      'host': '192.168.1.191:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:04.782+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 37,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:04.333+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 0,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:05.319+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 41,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:05.75+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 43,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:06.17+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 43,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:06.621+08:00'
        }
      }
    },
    {
      'name': 'bkk23',
      'host': '192.168.1.196:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:09.391+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 36,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:08.942+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:10.021+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 41,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:10.45+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 46,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:10.89+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 45,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:11.31+08:00'
        }
      }
    },
    {
      'name': 'bkk24',
      'host': '192.168.1.201:502',
      'registerStatusMap': {
        '入水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:01:59.451+08:00'
        },
        '出水温度': {
          'type': 'temperature',
          'value': 36,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:01:58.981+08:00'
        },
        '油温1': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:01:59.911+08:00'
        },
        '油温2': {
          'type': 'temperature',
          'value': 41,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:00.451+08:00'
        },
        '油温3': {
          'type': 'temperature',
          'value': 42,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:00.912+08:00'
        },
        '油温4': {
          'type': 'temperature',
          'value': 44,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-01T02:02:01.379+08:00'
        }
      }
    }
  ]
})

module.exports = [
  {
    url: '/monitor/rack/dbstatus',
    type: 'get',
    response: config => {
      return {
        code: 0,
        data: {
          allRackStatus: data.allRackStatus
        }
      }
    }
  }
]
