export const Add_Contact =(pers)=>{
    return {type:"Add",payload:pers}
}
export const Edit_Contact=(newpers)=>{
    return{type:'Edit',payload:newpers}
}
export const Delete_Contact=(id)=>{
    return {type:"Delete",payload:id}
}