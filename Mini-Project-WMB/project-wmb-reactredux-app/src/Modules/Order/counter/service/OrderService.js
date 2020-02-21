export async function list() {
    return await fetch('')
    .then((res)=> res.json());
}

export async function  get(id) {
    return await fetch ('')
    .then((res) => res.json());
}

export async function save(orders) {
    let res = await fetch('http://localhost:8080/order', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(orders)
    });

    console.log('service', res)
    return res;
    
}

// export async function save(user , method = 'POST') {
//     const body = new FomData();

//     for (const [ key, value ] of Object.entries(user)) {
//         body.append(key, value);
//     }

//     console.log('before-request:', user, ', method:', method);
//     return await fetch('',
//     {
//         method,
//         body
//     }
//     ).then((res)=> {
//         return res.json();
//     })
// }