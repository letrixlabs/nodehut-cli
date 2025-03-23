#!/usr/bin/env node

import chalk from 'chalk';
import { Command } from 'commander';
import { authLogin } from './commands/auth/login.js';
import { authLogout } from './commands/auth/logout.js';
import { authStatus } from './commands/auth/status.js';
import { createDatabase } from './commands/createDatabase.js';
import { cliHeader } from './utils/cliHeader.js';
import { config } from './utils/helpers.js';

const program = new Command();

program.hook('preAction', () => console.log(chalk.magentaBright(cliHeader)));

program
	.version(
		`${chalk.yellowBright(`${config('name')} Version:`)}
v${config('version')}`
	)
	.description(`Check the ${config('name')} version`);

/**
 * Auth Commands
 */
const authCommands = program.command('authenticate').alias('auth');

authCommands
	.addCommand(authLogin())
	.addCommand(authLogout())
	.addCommand(authStatus());

/**
 *  Database Commands
 */
const databaseCommands = program.command('database').alias('db');

databaseCommands.addCommand(createDatabase());

// eslint-disable-next-line
program.parse(process.argv);
