import { configData } from '../config.js';

export const config = (key) => {
	return key ? configData[key] : configData;
};
