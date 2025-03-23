import { Command } from 'commander';
import yoctoSpinner from 'yocto-spinner';
import { apiRequest } from '../utils/apiRequest.js';

export const createDatabase = () => {
	return new Command('create')
		.description('create a new database')
		.action(async () => {
			const spinner = yoctoSpinner({
				text: 'Creating database...',
			}).start();

			await new Promise((resolve) => setTimeout(resolve, 2000));

			spinner.stop();
			await apiRequest('post', '/test');
		});
};
