
export async function list() {
    return await fetch ('http://localhost:8080/order')
    .then((res)=> res.json());
}