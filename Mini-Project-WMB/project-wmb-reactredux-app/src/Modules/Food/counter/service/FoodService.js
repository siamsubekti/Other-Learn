// import Api from '../../../../Api/Api'

// export async function list(){
//     return await Api.get(`makanan`)
//     .then((res)=>res.data)
// }


export async function list() {
    return await fetch ('http://localhost:8080/menu')
    .then((res)=> res.json());
}