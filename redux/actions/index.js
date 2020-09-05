import {actionTypes} from './../types'

 export const getList = (data)=> async dispatch =>{

    console.log("In get list",data);
    

    dispatch({ type: actionTypes.SPACEX_LIST, data: data });
    return { type: actionTypes.SPACEX_LIST, data: data }

     
  }