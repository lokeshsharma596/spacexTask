export const getApiCall = (arg) => {
    const params = new URLSearchParams(arg);
    URL = `https://api.spaceXdata.com/v3/launches?${params.toString()}`;
    console.log(URL,"url");
    return new Promise((resolve, reject) => {
        fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(response => {
            resolve(response)
        })
    })
}
