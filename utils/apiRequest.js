import axios from 'axios';
import { errorMessage, successMessage } from './cliMessages.js';
import { config } from './helpers.js';

export const apiRequest = async (method, endpoint, data = null) => {
	try {
		const apiUrl = `${config('api_url')}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
		const response = await axios({
			method: method,
			url: apiUrl,
			data: data,
		});

		return successMessage(response.data.message);
	} catch (error) {
		return errorMessage(error.response.data.error.message);
	}
};
