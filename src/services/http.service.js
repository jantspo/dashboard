import fetch from 'isomorphic-fetch';
const dev = process.env.NODE_ENV !== 'production';

const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';

export default function http(url){
    return fetch(`${server}/${url}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
}

