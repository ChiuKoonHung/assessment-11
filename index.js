const axios = require('axios');

const API = axios.create({
    baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP'
});

(async ()=>{
    let allOwners = await API.get(`/en-GB`, {
        params: {
            query: 'Stockholm',
            country: 'UK',
            currency: 'GBP',
            locale: 'en-GB'
        },
        headers: {
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            'x-rapidapi-key': 'undefined'
        },
    })
    .then(function (response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config[3]);
    }).catch(function (error) {
        console.error(error);
    });
})();