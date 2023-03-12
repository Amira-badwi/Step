const initialValues ={
    load:false
   
}
export default function reducer (state=initialValues , action){
    // eslint-disable-next-line default-case
    switch( action.type){
        case "LOAD":{
        return({
            ...state,
            load:action.payload
        })
        }
    }}