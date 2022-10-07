import data from "../roorkee";
import addmap_data from "../action"


var initialState = {
  type: " ",
  properties: { Name: " " },
  geometry: { type: " " },
  geometry: { cocoordinates: [[]] },
}
const changeMapData = (state = initialState, action) => {
  console.log(addmap_data.payload.feature)
  switch (action.type) {
    case "map_data":
      return {
        ...state,
        data: addmap_data.payload,
      }
    default:
      return state;
  }

}

export default changeMapData;   



