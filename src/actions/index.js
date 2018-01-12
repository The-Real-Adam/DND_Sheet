import History from '../components/History'
import Cookies from 'universal-cookie'

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const loginUser = (credentials) => {
  return async (dispatch) => {
    console.log('credentials: ', credentials)

    const request = await fetch(`${process.env.REACT_APP_API_URL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
    const body = await request.json()
    const cookies = new Cookies()
    cookies.set('dnd-jwt', body.token, {path:'/'})
    const raw = await request.status
      console.log(raw)
      if (request.status === 200){
        window.location.href = '/'
      } else {
        window.location.href = '/register'
      }
    // const json = await request.json()
    // console.log(json)
  };
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const registerUser = (credentials) => {
  return async (dispatch) => {
    console.log(credentials)

    const request = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
    if (request.status === 200) {
      History.push('/login')
    } else {
      History.push('/FourOhFour')
    }
  }
}

export const CHARACTER_CREATE = 'CHARACTER_CREATE'
export const createSheet = (character) => {
  return async (dispatch) => {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/sheet`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(character)
    })
    if (request.status === 200) {
      window.location.href = '/SheetList'
    } else {
      History.push('/FourOhFour')
    }
  }
}

export const GET_SHEETS = 'GET_SHEETS'
export const getSheets = () => {
  return async (dispatch) => {
    console.log('getSheets hit')
    const request = await fetch(`${process.env.REACT_APP_API_URL}/sheet`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    // console.log('headers is: ', headers);
    const string = await request.json()
    console.log('get sheets response is: ', string);
    console.log('string.data is: ', string[0])
    dispatch({
      type: GET_SHEETS,
      payload: string
    })

    // if (request.status === 200) {
    //   History.push('/Sheet')
    // } else {
    //   History.push('/FourOhFour')
    // }
  }
}

export const GET_SHEET = 'GET_SHEET'
export const getSheet = (character) => {
  return async (dispatch) => {
    console.log(character)
    let id = this.props.id
    const request = await fetch(`${process.env.REACT_APP_API_URL}/sheet/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    // console.log('headers is: ', headers);
    const string = await request.json()
    console.log('get sheet response is: ', string);
    dispatch({
      type: GET_SHEET,
      payload: string
    })

    // if (request.status === 200) {
    //   History.push('/Sheet')
    // } else {
    //   History.push('/FourOhFour')
    // }
  }
}

export const CHARACTER_UPDATE = 'CHARACTER_UPDATE'
export const updateSheet = (character) => {
  return async (dispatch) => {
    let id = this.sheet.id
    const request = await fetch(`${process.env.REACT_APP_API_URL}/sheet/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(character)
    })
    // if (request.status === 200) {
    //   window.location.href = '/SheetList'
    // } else {
    //   History.push('/FourOhFour')
    // }
  }
}

// export const FETCH_HIKES = 'FETCH_HIKES'
// export const fetchHikes = (location) => {
//  return async (dispatch) => {
//    const url = ROOT_URL + location;
//    // const request = axios.get(url)
//    const request = await fetch(url)
//    const json = await request.json()
//
//    console.log(json)
//
//    dispatch({
//      type: FETCH_HIKES,
//      payload: json.data
//    })
//  }
// }

async function request(path, method = 'GET', body = null) {
  if (body) body = JSON.stringify(body)
  return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: body
  })
}
