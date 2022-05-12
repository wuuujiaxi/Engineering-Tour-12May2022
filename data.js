var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.13060882774538385,
        "pitch": 0.000021855498168577014,
        "fov": 1.4581901255025689
      },
      "linkHotspots": [
        {
          "yaw": -0.1091805491006479,
          "pitch": -0.26702990179549424,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.013218353412375095,
          "pitch": 0.29869297369281433,
          "title": "Welcome!",
          "text": "To the Faculty of Engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.0831111375158109,
        "pitch": -0.24714230575229656,
        "fov": 1.4581901255025689
      },
      "linkHotspots": [
        {
          "yaw": -0.09138346631580951,
          "pitch": 0.02167728559307136,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -2.1459225060008507,
          "pitch": 0.12244947731000977,
          "rotation": 7.0685834705770345,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1364590593633341,
          "pitch": -0.3337706324105998,
          "title": "A sculpture",
          "text": "of something."
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.08868784816478836,
        "pitch": 0.014101153082423323,
        "fov": 1.4581901255025689
      },
      "linkHotspots": [
        {
          "yaw": -2.6208876244265333,
          "pitch": 0.14405118624494406,
          "rotation": 5.497787143782138,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7372461692357817,
          "pitch": 0.2215793389555607,
          "title": "Spinelli Coffee Company",
          "text": "Beverages and snacks."
        }
      ]
    }
  ],
  "name": "Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
