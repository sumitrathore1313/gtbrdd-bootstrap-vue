const dev = true

var constants = {
  apiHost: 'https://api.getboarded.tech',
  domain: 'getboarded.tech',
  cookieScope: 'getboarded.tech',
  url: 'https://opp.getboarded.tech',
  ciUrl: 'https://www.getboarded.tech',
  aiUrl: 'https://ai.getboarded.tech/api'
}

if (dev === true) {
  constants.apiHost = 'http://localhost:3030'
  constants.domain = 'localhost'
  constants.cookieScope = 'localhost'
  constants.url = 'http://localhost:3000'
  constants.ciUrl = 'http://localhost/getboarded'
  constants.aiUrl = 'http://localhost:8000'
}

export default constants
