import Router from "next/dist/client/router";

async function login(body){
    return await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
}

async function logout(){
    const res = await fetch("/api/logout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(res.status !== 200) {
        console.log('error');
    } else {
        Router.push("/login");
    }
}


export {logout, login};