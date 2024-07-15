import { createStore } from '@reduxjs/toolkit'
import cooks from './basefunction';

export interface States{
  tagfilter: string[],
  userfilter: number,
  JWT:string|undefined,
  location: string,
}

const defaultState:States = {
  tagfilter: [],
  userfilter: 0,
  JWT: cooks.getJWT(),
  location: '*',
}

type Action = {
  type:string,
  buffer?:string,
  userId?:number,
  JWT?:string,
}
const reducer = (state = defaultState, action:Action) => {
  switch (action.type){
    case 'Filter':
      if (( 'buffer' in action) && (action.buffer !== undefined)) {
        const arr = action.buffer.split(' ');
        state = {...state,
          tagfilter: arr,
        }
      }
      return state;
    case 'setUserFilter':
      if (( 'userId' in action) && (action.userId !== undefined)) {
        state = {...state,
          userfilter: action.userId,
        }
      }
      return state
    case 'SetJWT':
      if ( ('JWT' in action) && (action.JWT !== undefined) ){
        state = {...state,
          JWT: action.JWT,
        }
        cooks.LogIn(action.JWT)
      // document.cookie = `JWT_token=${action.JWT}`
      }
      return state;
    case 'DelJwt':
      state = {
        ...state,
        JWT:'',
      }
      cooks.LogOut()
      return state;
    case 'setLocation':
      state = {
        ...state,
        location: location.pathname,
      }
      return state;
    case 'dropLocation':
      state = {
        ...state,
        location: '*',
      }
      return state;
    default:
      return state;
  }
}

export const store = createStore(reducer)
