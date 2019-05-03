export class Networking{
    static post=(url,formData)=>{
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: formData,
        }).then(Networking.handelMessage).then((response) => response.json()).catch((error)=>{
            return Promise.reject(error)
        })
    };

    static get=(url)=>{
        console.log(" --->url " ,url );
        return fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(Networking.handelMessage).then((response) => response.json()).catch((error)=>{
            return Promise.reject(error)
        })
    };


    static handelMessage=(response)=>{
        return response;
    }

}
