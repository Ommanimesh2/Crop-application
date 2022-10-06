import data from "./roorkee";
import {addmap_data} from "./action"
const initialState={
    type:" ",
    properties:{Name:" "},
    geometry:{type:" "},
    geometry:{cocoordinates:[[]]},
   }
export default function Reducer(){
    const counterreducer=(state=initialState,action)=>{
        switch(action.type){
          case addmap_data:
            return{
              ...state,
              data: addmap_data.payload,
            }
            default:
              return state;
        }
        
      }
}
