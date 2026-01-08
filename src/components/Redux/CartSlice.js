import { createSlice } from "@reduxjs/toolkit";

const loadCart = ()=>{
  const data = localStorage.getItem("cart")
  return data?JSON.parse(data):[]
}

const cartSlice = createSlice({
  name:"cart",
  initialState:{
    items:loadCart()
  },
  reducers:{
    addToCart:(state,action)=>{
      const products = action.payload;
      const item = state.items.find(i=>i.id===products.id)
      if(item){
        item.qty +=1
      }else{
        state.items.push({...products,qty:1})
      }
      localStorage.setItem("cart",JSON.stringify(state.items))

    },
    removeToCart:(state,action)=>{
      state.items=state.items.filter(
        item=>item.id!==action.payload
      )
      localStorage.setItem("cart",JSON.stringify(state.items))

    },
    increaseQty:(state,action)=>{
      const item = state.items.find(item=>item.id===action.payload)
      if(item){
        item.qty +=1
      }
      localStorage.setItem("cart",JSON.stringify(state.items))

    },
    decreaseQty:(state,action)=>{
       
   const item = state.items.find(item=>item.id===action.payload)
      if(item && item.qty>1){
        item.qty -=1
      }
      localStorage.setItem("cart",JSON.stringify(state.items))
    },
    clear:(state,action)=>{
      state.items=[]
      localStorage.removeItem("cart")
    }
  }

})
export const {
  addToCart,
  removeToCart,
  increaseQty,
  decreaseQty,
  clear

}=cartSlice.actions

export default cartSlice.reducer