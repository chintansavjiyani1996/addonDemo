export class Network{

    static post=(url,formData)=>{
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                'X-Auth':"WKx0V4aULbHT8gf6i4fgDA&gws",

            },
            body:formData ,
        }).then(Network.handelMessage).then((response) => response.text()).catch((error)=>{
            return Promise.reject(error)
        })
    };

    static get=(url)=>{
        return fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-auth':"WKx0V4aULbHT8gf6i4fgDA&gws"
            },
        }).then(Network.handelMessage).then((response) => response.json()).catch((error)=>{
            return Promise.reject(error)
        })
    };


    static handelMessage=(response)=>{
        return response;
    }

}
