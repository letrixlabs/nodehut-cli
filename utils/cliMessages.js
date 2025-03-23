import chalk from 'chalk';
import { emojify } from 'node-emoji';

export const errorMessage = (message) => {
	return console.log(
		`${chalk.bold.redBright(`${emojify(':x:')}  Error:`)} ${message}`
	);
};

export const successMessage = (message) => {
	return console.log(
		`${chalk.bold.greenBright(`${emojify(':white_check_mark:')}  Success:`)} ${message}`
	);
};
