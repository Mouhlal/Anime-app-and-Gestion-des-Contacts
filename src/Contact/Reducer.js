const initialState = {
    contacts:[
        {id:1,nom:"Akram",prenom:"Mouhlal",tel:"0642039816"},
        {id:2,nom:"Achraf",prenom:"Mahdi",tel:"0633442210"},
        {id:3,nom:"Ilham",prenom:"El Amiri",tel:"0642039816"}
    ]
}

const MyReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Add":
            return {...state , contacts:[...state.contacts , action.payload]}
        case "Edit":
            let edit = state.contacts.filter((i)=>i.id!==parseInt(action.payload.id))
            return {...state , contacts:[...edit , action.payload]}
        case "Delete":
            return {...state , contacts:[...state.contacts.filter((i)=>i.id!==parseInt(action.payload))]}
        default :
        return state
    }
}

export const AllContacts = state => state.contacts
export default MyReducer 
