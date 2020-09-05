// REDUCERS

import {actionTypes} from './../types'
  


export const reducer = (state = exampleInitialState, action) => {
  console.log("vccc",action);
    switch (action.type) {
     
      case actionTypes.SPACEX_LIST:
         console.log(action);
        return Object.assign({}, state, {
          data: action.data        
        })
        default:
        return state
    }
  }