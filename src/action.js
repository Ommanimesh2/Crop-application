import data from "./roorkee";
export const map_data ="map_data";
export const addmap_data ={
    type: map_data,
    payload: {data}
};
export default addmap_data;
console.log(addmap_data);