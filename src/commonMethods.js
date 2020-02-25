
export const getItem= (state,id) =>{
    return state.products.find(item => item.id===id);
}