import chalk from 'chalk';
import { Command } from 'commander';
import yoctoSpinner from 'yocto-spinner';
import { getStorage, setStorage } from '../../utils/appStorage.js';
import { errorMessage, successMessage } from '../../utils/cliMessages.js';
import { config } from '../../utils/helpers.js';
import { inputWizard } from '../../utils/wizards.js';

export const authLogin = () => {
	const appName = config('app_name');

	return new Command('login')
		.description(`login to ${config('name')}`)
		.action(async () => {
			if (getStorage('api_token')) {
				return errorMessage(
					`You are already logged in to ${config('name')}. Run ${chalk.yellowBright(`${config('command')} auth logout`)} to logout.`
				);
			}

			console.log(
				chalk.yellowBright(
					`Please authenticate ${config('name')} for use with your ${appName} account. You can generate a token in the dashboard at ${config('website')}/account/api-tokens`
				)
			);

			await inputWizard(
				[
					{
						type: 'input',
						name: 'api_token',
						message: 'Enter your API token',
					},
				],
				async (answers) => {
					const spinner = yoctoSpinner({
						text: `Logging in to ${appName}...`,
					}).start();

					setStorage('api_token', answers.api_token);

					await new Promise((resolve) => setTimeout(resolve, 2000));

					spinner.stop();
					// await apiRequest('post', '/test');
					return successMessage(
						`You are now logged in to your ${config('app_name')} account.`
					);
				}
			);
		});
};
