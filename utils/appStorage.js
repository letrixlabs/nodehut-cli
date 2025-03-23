import Configstore from 'configstore';
import {config} from "./helpers.js";

const configStore = new Configstore(`${config('command')}-cli-storage`, { api_token: null });

export const getStorage = (key) => {
	return configStore.get(key);
};

export const setStorage = (key, secret) => {
	return configStore.set(key, secret);
};

export const deleteStorage = (key) => {
	return configStore.delete(key);
};
