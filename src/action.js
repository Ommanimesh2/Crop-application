// import data from "./roorkee";

const addmap_data = (data) => {
    return {
        type: "map_data",
        payload: { data }
    }
}
export default addmap_data();

console.log(addmap_data);

