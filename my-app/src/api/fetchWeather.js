// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const URL='https://openweathermap.org/data/2.5/weather';
const API_key='35ec2cfba829f501bb0c259af5eb465d';

export const fetchWeather =async(query)=>{

    const {data}=await axios.get(URL,{
    params:{
        q:query,
        units:'metric',
        APPID:API_key
    }
    
    });
    return data;
}