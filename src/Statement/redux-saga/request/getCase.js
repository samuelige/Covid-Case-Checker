import axios from "axios";

function requestGetCases() {
    return axios.request({
        method: 'get',
        url: 'https://covidnigeria.herokuapp.com/api'
    });
}

export default requestGetCases


