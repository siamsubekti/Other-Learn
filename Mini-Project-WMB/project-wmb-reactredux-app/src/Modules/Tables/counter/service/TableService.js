
export async function list() {
    return await fetch ('http://localhost:8080/table')
    .then((res)=> res.json());
}