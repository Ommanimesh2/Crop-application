import data from "../roorkee";
import addmap_data from "../action"


var initialState = {
  type: " ",
  properties: { Name: " " },
  geometry: { type: " " },
  geometry: { cocoordinates: [[]] },
}
const changeMapData = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "map_data":
      return {
        ...state,
        properties: { Name: action.payload.feature.properties.Name},
        geometry: { cocoordinates: action.payload.feature.geometry.coordinates },
      }
    default:
      return state;
  }

}

export default changeMapData;   



