import chalk from 'chalk';
import { Command } from 'commander';
import yoctoSpinner from 'yocto-spinner';
import { deleteStorage, getStorage } from '../../utils/appStorage.js';
import { errorMessage, successMessage } from '../../utils/cliMessages.js';
import { config } from '../../utils/helpers.js';
import { confirmWizard } from '../../utils/wizards.js';

export const authLogout = () => {
	const appName = config('app_name');

	return new Command('logout')
		.description(`logout of ${config('name')}`)
		.action(async () => {
			if (!getStorage('api_token')) {
				return errorMessage(
					`You are not currently logged in to ${config('name')}. Run ${chalk.yellowBright(`${config('command')} auth login`)} to login.`
				);
			}

			console.log(
				chalk.yellowBright(
					`Once you logout of ${config('name')} you will need to re-authenticate if you want to use it again.`
				)
			);

			await confirmWizard(
				`Are you sure you want to logout of the ${config('name')}?`,
				async (answer) => {
					if (answer === true) {
						const spinner = yoctoSpinner({
							text: `Logging out of ${appName}...`,
						}).start();

						deleteStorage('api_token');

						await new Promise((resolve) =>
							setTimeout(resolve, 2000)
						);

						spinner.stop();
						return successMessage(
							`You have been logged out of your ${config('app_name')} account.`
						);
					}
				}
			);
		});
};
