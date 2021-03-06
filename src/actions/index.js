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
    cookies.set('dnd', body.token, {path:'/'})
    window.localStorage.setItem('token', body.token)
    const raw = await request.status
      console.log(raw)
      if (request.status === 200){
        window.location.href = '/Welcome'
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
  let token = window.localStorage.getItem('token')
  return async (dispatch) => {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/sheet`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-token': token,
      },
      body: JSON.stringify(character)
    })
    if (request.status === 200) {
      History.push('/SheetList')
    } else {
      History.push('/FourOhFour')
    }
  }
}

export const GET_SHEETS = 'GET_SHEETS'
export const getSheets = () => {
  let token = window.localStorage.getItem('token')
  console.log('inside of the SheetList Action');
  return async (dispatch) => {
    console.log('getSheets hit')
    const request = await fetch(`${process.env.REACT_APP_API_URL}/sheet`, {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-token': token,
      }
    })
    // console.log('headers is: ', headers);
    const string = await request.json()
    // console.log('get sheets response is: ', string);
    // console.log('string.data is: ', string[0])
    dispatch({
      type: GET_SHEETS,
      payload: string
    })
  }
}

export const GET_SHEET = 'GET_SHEET'
export const getSheet = (id) => {
  let token = window.localStorage.getItem('token')
  console.log('get a single sheet and the id of that sheet is: ', id);
  return async (dispatch) => {
    console.log('inside Async request', id)
    // let id = this.props.id
    const request = await fetch(`${process.env.REACT_APP_API_URL}/sheet/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-token': token,

      }
    })
    console.log('Post Async Request');
    const json = await request.json()
    console.log('get sheet response is: ', json);
    dispatch({
      type: GET_SHEET,
      payload: json
    })
    // console.log('dispatch: ', dispatch({ type: GET_SHEET,payload: json}))
    // if (request.status === 200) {
    //   window.location.href = '/Sheet'
    // }
    // else {
    //   window.location.href = '/FourOhFour'
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
    if (request.status === 200) {
    }
    // else {
    //   History.push('/FourOhFour')
    // }
  }
}

export const GET_FEATS = 'GET_FEATS'
export const getFeats = (id) => {
  let token = window.localStorage.getItem('token')
  console.log('inside of the SheetList Action');
  return async (dispatch) => {
    console.log('getSheets hit')
    const request = await fetch(`${process.env.REACT_APP_API_URL}/feats/${id}`, {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-token': token,
      }
    })
    // console.log('headers is: ', headers);
    const string = await request.json()
    console.log('get feats response is: ', string);
    console.log('string.data is: ', string[0])
    dispatch({
      type: GET_FEATS,
      payload: string
    })
  }
}

export const GET_SPELLS = 'GET_SPELLS'
export const getSpells = (id) => {
  let token = window.localStorage.getItem('token')
  console.log('inside of the SheetList Action');
  return async (dispatch) => {
    console.log('getSheets hit')
    const request = await fetch(`${process.env.REACT_APP_API_URL}/spells/${id}`, {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-token': token,
      }
    })
    // console.log('headers is: ', headers);
    const string = await request.json()
    console.log('get spells response is: ', string);
    console.log('string.data is: ', string[0])
    dispatch({
      type: GET_SPELLS,
      payload: string
    })
  }
}

export const GET_WEAPONS = 'GET_WEAPONS'
export const getWeapons = (id) => {
  let token = window.localStorage.getItem('token')
  console.log('inside of the SheetList Action');
  return async (dispatch) => {
    console.log('getSheets hit')
    const request = await fetch(`${process.env.REACT_APP_API_URL}/weapons/${id}`, {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-token': token,
      }
    })
    // console.log('headers is: ', headers);
    const string = await request.json()
    console.log('get spells response is: ', string);
    console.log('string.data is: ', string[0])
    dispatch({
      type: GET_WEAPONS,
      payload: string
    })
  }
}

export const GET_ARMORS = 'GET_ARMORS'
export const getArmors = (id) => {
  let token = window.localStorage.getItem('token')
  console.log('inside of the SheetList Action');
  return async (dispatch) => {
    console.log('getSheets hit')
    const request = await fetch(`${process.env.REACT_APP_API_URL}/armor/${id}`, {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-token': token,
      }
    })
    // console.log('headers is: ', headers);
    const string = await request.json()
    console.log('get spells response is: ', string);
    console.log('string.data is: ', string[0])
    dispatch({
      type: GET_ARMORS,
      payload: string
    })
  }
}

export const DAMAGE_HANDLER = 'DAMAGE_HANDLER'
export const damageHandler = (hitpoints, id) => {
  console.log('hit damageHandler in actions');
  return async (dispatch) => {
    console.log('hit damageHandler in async req');

    const request = await fetch(`${process.env.REACT_APP_API_URL}/sheet/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(hitpoints)
    })
    const json = await request.status
    console.log('damage request.json is: ', json)
    dispatch({
      type: DAMAGE_HANDLER,
      payload: json
    })
    if (request.status === 200) {
      History.push(`/Sheet/${id}`)
    }

  }
}


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
