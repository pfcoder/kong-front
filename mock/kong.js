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
  'tala': [
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
  ],
  'tianjun': [
    {
      'name': 'tianjun-bkk2',
      'host': '\\\\.\\COM5',
      'registerStatusMap': {
        'TA08-1#温度': {
          'type': 'temperature',
          'value': 41,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:46.088+08:00'
        },
        'TA08-2#温度': {
          'type': 'temperature',
          'value': 42.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:46.539+08:00'
        },
        'TA08-3#温度': {
          'type': 'temperature',
          'value': 43.3,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:47.022+08:00'
        },
        'TA08-4#温度': {
          'type': 'temperature',
          'value': 44.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:47.49+08:00'
        },
        'TA08供水温度': {
          'type': 'temperature',
          'value': 32,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:45.164+08:00'
        },
        'TA08回水温度': {
          'type': 'temperature',
          'value': 35.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:45.621+08:00'
        },
        'TA09-1#温度': {
          'type': 'temperature',
          'value': 42.3,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:48.791+08:00'
        },
        'TA09-2#温度': {
          'type': 'temperature',
          'value': 40.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:49.258+08:00'
        },
        'TA09-3#温度': {
          'type': 'temperature',
          'value': 37.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:49.701+08:00'
        },
        'TA09-4#温度': {
          'type': 'temperature',
          'value': 58.3,
          'status': 'status warning',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:50.209+08:00'
        },
        'TA09供水温度': {
          'type': 'temperature',
          'value': 30.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:47.915+08:00'
        },
        'TA09回水温度': {
          'type': 'temperature',
          'value': 34.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:48.35+08:00'
        },
        'TA10-1#温度': {
          'type': 'temperature',
          'value': 39.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:51.527+08:00'
        },
        'TA10-2#温度': {
          'type': 'temperature',
          'value': 40.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:51.951+08:00'
        },
        'TA10-3#温度': {
          'type': 'temperature',
          'value': 42.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:52.377+08:00'
        },
        'TA10-4#温度': {
          'type': 'temperature',
          'value': 45.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:52.794+08:00'
        },
        'TA10供水温度': {
          'type': 'temperature',
          'value': 28.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:50.659+08:00'
        },
        'TA10回水温度': {
          'type': 'temperature',
          'value': 33,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:51.093+08:00'
        },
        'TA11-1#温度': {
          'type': 'temperature',
          'value': 36.3,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:54.185+08:00'
        },
        'TA11-2#温度': {
          'type': 'temperature',
          'value': 40.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:54.594+08:00'
        },
        'TA11-3#温度': {
          'type': 'temperature',
          'value': 38.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:55.004+08:00'
        },
        'TA11-4#温度': {
          'type': 'temperature',
          'value': 39.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:55.428+08:00'
        },
        'TA11供水温度': {
          'type': 'temperature',
          'value': 31.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:53.235+08:00'
        },
        'TA11回水温度': {
          'type': 'temperature',
          'value': 35.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:53.693+08:00'
        },
        'TA12-1#温度': {
          'type': 'temperature',
          'value': 48.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:56.746+08:00'
        },
        'TA12-2#温度': {
          'type': 'temperature',
          'value': 48.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:57.205+08:00'
        },
        'TA12-3#温度': {
          'type': 'temperature',
          'value': 51,
          'status': 'status warning',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:57.639+08:00'
        },
        'TA12-4#温度': {
          'type': 'temperature',
          'value': 51.6,
          'status': 'status warning',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:58.199+08:00'
        },
        'TA12供水温度': {
          'type': 'temperature',
          'value': 31,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:55.853+08:00'
        },
        'TA12回水温度': {
          'type': 'temperature',
          'value': 37.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:56.304+08:00'
        },
        'TA13-1#温度': {
          'type': 'temperature',
          'value': 54.9,
          'status': 'status warning',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:59.575+08:00'
        },
        'TA13-2#温度': {
          'type': 'temperature',
          'value': 49.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:00.024+08:00'
        },
        'TA13-3#温度': {
          'type': 'temperature',
          'value': 64.2,
          'status': 'status warning',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:00.476+08:00'
        },
        'TA13-4#温度': {
          'type': 'temperature',
          'value': 46.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:00.935+08:00'
        },
        'TA13供水温度': {
          'type': 'temperature',
          'value': 29.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:58.7+08:00'
        },
        'TA13回水温度': {
          'type': 'temperature',
          'value': 38.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:21:59.133+08:00'
        },
        'TA14-1#温度': {
          'type': 'temperature',
          'value': 38.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:02.41+08:00'
        },
        'TA14-2#温度': {
          'type': 'temperature',
          'value': 39,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:02.861+08:00'
        },
        'TA14-3#温度': {
          'type': 'temperature',
          'value': 40.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:03.303+08:00'
        },
        'TA14-4#温度': {
          'type': 'temperature',
          'value': 39.3,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:03.865+08:00'
        },
        'TA14供水温度': {
          'type': 'temperature',
          'value': 29.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:01.418+08:00'
        },
        'TA14回水温度': {
          'type': 'temperature',
          'value': 33.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:01.901+08:00'
        },
        'TA15-1#温度': {
          'type': 'temperature',
          'value': 41.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:05.365+08:00'
        },
        'TA15-2#温度': {
          'type': 'temperature',
          'value': 41.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:05.823+08:00'
        },
        'TA15-3#温度': {
          'type': 'temperature',
          'value': 40.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:06.258+08:00'
        },
        'TA15-4#温度': {
          'type': 'temperature',
          'value': 40,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:06.7+08:00'
        },
        'TA15供水温度': {
          'type': 'temperature',
          'value': 29.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:04.456+08:00'
        },
        'TA15回水温度': {
          'type': 'temperature',
          'value': 33.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:04.922+08:00'
        },
        'TA16-1#温度': {
          'type': 'temperature',
          'value': 23.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:08.017+08:00'
        },
        'TA16-2#温度': {
          'type': 'temperature',
          'value': 23.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:08.469+08:00'
        },
        'TA16-3#温度': {
          'type': 'temperature',
          'value': 22.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:08.944+08:00'
        },
        'TA16-4#温度': {
          'type': 'temperature',
          'value': 19.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:09.436+08:00'
        },
        'TA16供水温度': {
          'type': 'temperature',
          'value': -200,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:07.133+08:00'
        },
        'TA16回水温度': {
          'type': 'temperature',
          'value': 30.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:07.558+08:00'
        },
        'TA17-1#温度': {
          'type': 'temperature',
          'value': 20.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:10.879+08:00'
        },
        'TA17-2#温度': {
          'type': 'temperature',
          'value': 21.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:11.321+08:00'
        },
        'TA17-3#温度': {
          'type': 'temperature',
          'value': 20.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:11.755+08:00'
        },
        'TA17-4#温度': {
          'type': 'temperature',
          'value': 17.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:12.232+08:00'
        },
        'TA17供水温度': {
          'type': 'temperature',
          'value': 29.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:09.936+08:00'
        },
        'TA17回水温度': {
          'type': 'temperature',
          'value': 30,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:10.403+08:00'
        },
        'TA18-1#温度': {
          'type': 'temperature',
          'value': 18.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:13.557+08:00'
        },
        'TA18-2#温度': {
          'type': 'temperature',
          'value': 19.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:13.981+08:00'
        },
        'TA18-3#温度': {
          'type': 'temperature',
          'value': 18.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:14.423+08:00'
        },
        'TA18-4#温度': {
          'type': 'temperature',
          'value': 14.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:14.857+08:00'
        },
        'TA18供水温度': {
          'type': 'temperature',
          'value': 28.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:12.673+08:00'
        },
        'TA18回水温度': {
          'type': 'temperature',
          'value': 26,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:13.112+08:00'
        },
        'TA19-1#温度': {
          'type': 'temperature',
          'value': 19.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:16.141+08:00'
        },
        'TA19-2#温度': {
          'type': 'temperature',
          'value': 19.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:16.565+08:00'
        },
        'TA19-3#温度': {
          'type': 'temperature',
          'value': 18.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:16.99+08:00'
        },
        'TA19-4#温度': {
          'type': 'temperature',
          'value': 14.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:17.417+08:00'
        },
        'TA19供水温度': {
          'type': 'temperature',
          'value': 17.3,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:15.273+08:00'
        },
        'TA19回水温度': {
          'type': 'temperature',
          'value': 18.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:15.707+08:00'
        },
        'TA20-1#温度': {
          'type': 'temperature',
          'value': 18.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:18.767+08:00'
        },
        'TA20-2#温度': {
          'type': 'temperature',
          'value': 18.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:19.26+08:00'
        },
        'TA20-3#温度': {
          'type': 'temperature',
          'value': 18.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:19.744+08:00'
        },
        'TA20-4#温度': {
          'type': 'temperature',
          'value': 15.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:20.245+08:00'
        },
        'TA20供水温度': {
          'type': 'temperature',
          'value': 28.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:17.875+08:00'
        },
        'TA20回水温度': {
          'type': 'temperature',
          'value': 27.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:18.308+08:00'
        },
        'TA21-1#温度': {
          'type': 'temperature',
          'value': 19.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:21.61+08:00'
        },
        'TA21-2#温度': {
          'type': 'temperature',
          'value': 18.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:22.064+08:00'
        },
        'TA21-3#温度': {
          'type': 'temperature',
          'value': 20.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:22.523+08:00'
        },
        'TA21-4#温度': {
          'type': 'temperature',
          'value': 15.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:23.007+08:00'
        },
        'TA21供水温度': {
          'type': 'temperature',
          'value': 29.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:20.754+08:00'
        },
        'TA21回水温度': {
          'type': 'temperature',
          'value': 28.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:21.18+08:00'
        },
        'TA22-1#温度': {
          'type': 'temperature',
          'value': 15.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:24.476+08:00'
        },
        'TA22-2#温度': {
          'type': 'temperature',
          'value': 16.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:24.96+08:00'
        },
        'TA22-3#温度': {
          'type': 'temperature',
          'value': 14.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:25.421+08:00'
        },
        'TA22-4#温度': {
          'type': 'temperature',
          'value': 11.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:25.855+08:00'
        },
        'TA22供水温度': {
          'type': 'temperature',
          'value': 14,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:23.492+08:00'
        },
        'TA22回水温度': {
          'type': 'temperature',
          'value': 14.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:23.975+08:00'
        },
        'TA23-1#温度': {
          'type': 'temperature',
          'value': 18.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:27.188+08:00'
        },
        'TA23-2#温度': {
          'type': 'temperature',
          'value': 18.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:27.63+08:00'
        },
        'TA23-3#温度': {
          'type': 'temperature',
          'value': 16.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:28.072+08:00'
        },
        'TA23-4#温度': {
          'type': 'temperature',
          'value': 13.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:28.496+08:00'
        },
        'TA23供水温度': {
          'type': 'temperature',
          'value': 28.3,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:28.93+08:00'
        },
        'TA23回水温度': {
          'type': 'temperature',
          'value': 26.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:26.721+08:00'
        },
        'TA24-1#温度': {
          'type': 'temperature',
          'value': 16.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:29.989+08:00'
        },
        'TA24-2#温度': {
          'type': 'temperature',
          'value': 17.3,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:30.447+08:00'
        },
        'TA24-3#温度': {
          'type': 'temperature',
          'value': 16,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:30.906+08:00'
        },
        'TA24-4#温度': {
          'type': 'temperature',
          'value': 12.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:31.356+08:00'
        },
        'TA24供水温度': {
          'type': 'temperature',
          'value': 16.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:31.798+08:00'
        },
        'TA24回水温度': {
          'type': 'temperature',
          'value': 25.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:29.544+08:00'
        },
        'TA25-1#温度': {
          'type': 'temperature',
          'value': 16.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:32.724+08:00'
        },
        'TA25-2#温度': {
          'type': 'temperature',
          'value': 17,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:33.198+08:00'
        },
        'TA25-3#温度': {
          'type': 'temperature',
          'value': 15.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:33.657+08:00'
        },
        'TA25-4#温度': {
          'type': 'temperature',
          'value': 12.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:34.115+08:00'
        },
        'TA25回水温度': {
          'type': 'temperature',
          'value': 17.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:32.265+08:00'
        },
        'TA26-1#温度': {
          'type': 'temperature',
          'value': 17.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:35.474+08:00'
        },
        'TA26-2#温度': {
          'type': 'temperature',
          'value': 17.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:35.898+08:00'
        },
        'TA26-3#温度': {
          'type': 'temperature',
          'value': 16.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:36.315+08:00'
        },
        'TA26-4#温度': {
          'type': 'temperature',
          'value': 13.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:36.741+08:00'
        },
        'TA26供水温度': {
          'type': 'temperature',
          'value': 17.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:34.557+08:00'
        },
        'TA26回水温度': {
          'type': 'temperature',
          'value': 17.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:35.049+08:00'
        },
        'TA27-1#温度': {
          'type': 'temperature',
          'value': 17.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:38.025+08:00'
        },
        'TA27-2#温度': {
          'type': 'temperature',
          'value': 18.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:38.452+08:00'
        },
        'TA27-3#温度': {
          'type': 'temperature',
          'value': 16.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:38.876+08:00'
        },
        'TA27-4#温度': {
          'type': 'temperature',
          'value': 14.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:39.301+08:00'
        },
        'TA27供水温度': {
          'type': 'temperature',
          'value': 18,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:37.19+08:00'
        },
        'TA27回水温度': {
          'type': 'temperature',
          'value': 18.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:37.607+08:00'
        },
        'TA28-1#温度': {
          'type': 'temperature',
          'value': 18.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:40.652+08:00'
        },
        'TA28-2#温度': {
          'type': 'temperature',
          'value': 18.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:41.076+08:00'
        },
        'TA28-3#温度': {
          'type': 'temperature',
          'value': 16.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:41.501+08:00'
        },
        'TA28-4#温度': {
          'type': 'temperature',
          'value': 14.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:41.952+08:00'
        },
        'TA28供水温度': {
          'type': 'temperature',
          'value': 29.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:39.726+08:00'
        },
        'TA28回水温度': {
          'type': 'temperature',
          'value': 26.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:40.219+08:00'
        },
        'TA29-1#温度': {
          'type': 'temperature',
          'value': 17.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:43.269+08:00'
        },
        'TA29-2#温度': {
          'type': 'temperature',
          'value': 17.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:43.727+08:00'
        },
        'TA29-3#温度': {
          'type': 'temperature',
          'value': 16.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:44.211+08:00'
        },
        'TA29-4#温度': {
          'type': 'temperature',
          'value': 14.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:44.662+08:00'
        },
        'TA29供水温度': {
          'type': 'temperature',
          'value': 18.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:42.418+08:00'
        },
        'TA29回水温度': {
          'type': 'temperature',
          'value': 17.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:42.836+08:00'
        },
        'TA30-1#温度': {
          'type': 'temperature',
          'value': 17.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:46.054+08:00'
        },
        'TA30-2#温度': {
          'type': 'temperature',
          'value': 17.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:46.611+08:00'
        },
        'TA30-3#温度': {
          'type': 'temperature',
          'value': 16.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:47.072+08:00'
        },
        'TA30-4#温度': {
          'type': 'temperature',
          'value': 14.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:47.513+08:00'
        },
        'TA30供水温度': {
          'type': 'temperature',
          'value': 18.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:45.136+08:00'
        },
        'TA30回水温度': {
          'type': 'temperature',
          'value': 18.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:45.595+08:00'
        },
        'TA31-1#温度': {
          'type': 'temperature',
          'value': 16.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:48.874+08:00'
        },
        'TA31-2#温度': {
          'type': 'temperature',
          'value': 16.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:49.332+08:00'
        },
        'TA31-3#温度': {
          'type': 'temperature',
          'value': 15.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:49.783+08:00'
        },
        'TA31-4#温度': {
          'type': 'temperature',
          'value': 14.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:50.35+08:00'
        },
        'TA31供水温度': {
          'type': 'temperature',
          'value': 16.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:47.955+08:00'
        },
        'TA31回水温度': {
          'type': 'temperature',
          'value': 17.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:48.416+08:00'
        },
        'TA32-1#温度': {
          'type': 'temperature',
          'value': -200,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:51.876+08:00'
        },
        'TA32-2#温度': {
          'type': 'temperature',
          'value': 16.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:52.36+08:00'
        },
        'TA32-3#温度': {
          'type': 'temperature',
          'value': 14.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:52.795+08:00'
        },
        'TA32-4#温度': {
          'type': 'temperature',
          'value': 13.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:53.236+08:00'
        },
        'TA32供水温度': {
          'type': 'temperature',
          'value': 16.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:50.868+08:00'
        },
        'TA32回水温度': {
          'type': 'temperature',
          'value': 16.6,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:51.377+08:00'
        },
        'TA33-1#温度': {
          'type': 'temperature',
          'value': 19.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:54.581+08:00'
        },
        'TA33-2#温度': {
          'type': 'temperature',
          'value': 18.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:55.005+08:00'
        },
        'TA33-3#温度': {
          'type': 'temperature',
          'value': 17.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:55.439+08:00'
        },
        'TA33-4#温度': {
          'type': 'temperature',
          'value': 23.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:55.898+08:00'
        },
        'TA33供水温度': {
          'type': 'temperature',
          'value': 18.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:53.666+08:00'
        },
        'TA33回水温度': {
          'type': 'temperature',
          'value': 17.9,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:54.112+08:00'
        },
        'TA34-1#温度': {
          'type': 'temperature',
          'value': 20.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:57.19+08:00'
        },
        'TA34-2#温度': {
          'type': 'temperature',
          'value': 19.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:57.641+08:00'
        },
        'TA34-3#温度': {
          'type': 'temperature',
          'value': 18.1,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:58.082+08:00'
        },
        'TA34-4#温度': {
          'type': 'temperature',
          'value': 16.7,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:58.542+08:00'
        },
        'TA34供水温度': {
          'type': 'temperature',
          'value': 18.8,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:56.323+08:00'
        },
        'TA34回水温度': {
          'type': 'temperature',
          'value': -200,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:56.757+08:00'
        },
        'TA35-1#温度': {
          'type': 'temperature',
          'value': 21.3,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:59.916+08:00'
        },
        'TA35-2#温度': {
          'type': 'temperature',
          'value': 21.2,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:23:00.391+08:00'
        },
        'TA35-3#温度': {
          'type': 'temperature',
          'value': 20.3,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:23:00.818+08:00'
        },
        'TA35-4#温度': {
          'type': 'temperature',
          'value': 18.3,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:23:01.234+08:00'
        },
        'TA35供水温度': {
          'type': 'temperature',
          'value': 19.5,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:59+08:00'
        },
        'TA35回水温度': {
          'type': 'temperature',
          'value': 19.4,
          'status': 'status normal',
          'StatusAppearTimes': 0,
          'Alarm': '',
          'createdAt': '2021-11-03T22:22:59.458+08:00'
        }
      }
    }
  ]
})

module.exports = [
  {
    url: '/monitor/rack/dbstatus/tala',
    type: 'get',
    response: config => {
      return {
        code: 0,
        data: {
          allRackStatus: data.tala
        }
      }
    }
  },
  {
    url: '/monitor/rack/dbstatus/tianjun',
    type: 'get',
    response: config => {
      return {
        code: 0,
        data: {
          allRackStatus: data.tianjun
        }
      }
    }
  }
]
