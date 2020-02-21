
export async function list() {
    return await fetch ('http://localhost:8080/drink')
    .then((res)=> res.json());
}