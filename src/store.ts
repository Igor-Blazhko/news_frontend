import { configureStore, createStore } from '@reduxjs/toolkit'

export interface States{
  tagfilter: string,
}

const defaultState = {
  tagfilter: '',
}

type Action = {
  type:string,
  buffer?:string,
}
const reducer = (state = defaultState, action:Action) => {
  switch (action.type){
    case 'Filter':
      if (( 'buffer' in action) && (action.buffer !== undefined)) {
        state = {...state,
          tagfilter: action.buffer,
        }
      }
      return state
    default:
      return state;
  }
}

export const store = createStore(reducer)
