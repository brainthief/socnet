const initialState = {
 friends: [
  { id: 0, name: "Vaida", imgUrl: "vaida.JPG" },
  { id: 1, name: "Viltė", imgUrl: "vilte.JPG" },
  { id: 2, name: "Vinksė", imgUrl: "vinkse.JPG" },
 ]
}
const sideBarPageReducer = (state = initialState, action) => {
 switch (action.type) {
  default:
   return state
 }
}

export default sideBarPageReducer