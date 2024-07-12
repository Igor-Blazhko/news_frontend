import { configureStore, createStore } from '@reduxjs/toolkit'

export interface States{
  tagfilter: string,
  userfilter: number
}

const defaultState = {
  tagfilter: '',
  userfilter: 0,
}

type Action = {
  type:string,
  buffer?:string,
  userId?:number,
}
const reducer = (state = defaultState, action:Action) => {
  switch (action.type){
    case 'Filter':
      if (( 'buffer' in action) && (action.buffer !== undefined)) {
        state = {...state,
          tagfilter: action.buffer,
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
    default:
      return state;
  }
}

export const store = createStore(reducer)
