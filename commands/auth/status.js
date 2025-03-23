import chalk from 'chalk';
import { Command } from 'commander';
import { emojify } from 'node-emoji';
import { getStorage } from '../../utils/appStorage.js';
import { config } from '../../utils/helpers.js';

export const authStatus = () => {
	return new Command('status')
		.description(`get auth status for ${config('name')}`)
		.action(async () => {
			if (getStorage('api_token')) {
				return console.log(
					chalk.yellowBright(
						`${emojify(':white_check_mark:')}  You are logged in to ${config('name')} as ${chalk.greenBright('Name Here')}. Run ${chalk.redBright(`${config('command')} auth logout`)} to logout.`
					)
				);
			} else {
				return console.log(
					chalk.yellowBright(
						`${emojify(':x:')}  You are not currently logged in to ${config('name')}. Run ${chalk.redBright(`${config('command')} auth login`)} to login.`
					)
				);
			}
		});
};
