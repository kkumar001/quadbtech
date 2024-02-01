import axios from 'axios';
import storage from 'local-storage-fallback';

const ApiHelper = () => {
    // const Auth_Token = storage.getItem('Token');
  
    const getData = async (method) => {

		return axios({
			method: method,
			url:`https://api.tvmaze.com/search/shows?q=all`,
			headers: {
				// Authorization: `Token ${Auth_Token}`,
				'Content-Type': 'application/json',
			},
		});
	};

    return { getData }
};

export default ApiHelper


