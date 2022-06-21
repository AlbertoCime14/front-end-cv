import axios from "axios";
export const data = async() => {

   
    const { data } = await axios.get(`https://apinodejs-353918.uw.r.appspot.com/api_v1/user/infoCv`);

    
    
    return data;
}