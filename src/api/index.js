import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;
    // if select any country than fetch this spacefic country data
    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }

    // this fetch data form global data
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate, 
        }

        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}


// second funtion api fetch for chart 
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData
    } catch (error) {

    }
}

// its api fetch for country picker
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return  countries.map((country) => country.name);  
    } catch (error){
        console.log(error);
    }
}