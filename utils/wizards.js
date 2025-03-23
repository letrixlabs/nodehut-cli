import { confirm } from '@inquirer/prompts';
import inquirer from 'inquirer';
import { errorMessage } from './cliMessages.js';

export const inputWizard = (prompts, callback) => {
	return inquirer
		.prompt(prompts)
		.then((answers) => {
			if (callback && typeof callback === 'function') {
				callback(answers);
			}
		})
		.catch((error) => {
			if (error.isTtyError) {
				errorMessage(
					'Inputs are not supported on this device/terminal.'
				);
			} else {
				errorMessage('Something went wrong.');
			}
		});
};

export const confirmWizard = (message, callback) => {
	return confirm({ message: message })
		.then((answers) => {
			if (callback && typeof callback === 'function') {
				callback(answers);
			}
		})
		.catch((error) => {
			if (error.isTtyError) {
				errorMessage(
					'Inputs are not supported on this device/terminal.'
				);
			} else {
				errorMessage('Something went wrong.');
			}
		});
};
