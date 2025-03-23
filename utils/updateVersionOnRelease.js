import inquirer from "inquirer";
import fs from 'node:fs';
import { configData } from '../config.js';

async function main() {
	const { version } = await inquirer.prompt([
		{
			type: 'input',
			name: 'version',
			message: 'Enter the new version (e.g 1.2.3):',
			validate: input => /^(\d+\.)?(\d+\.)?(\*|\d+)$/.test(input) || 'Please enter a valid version number.'
		}
	]);

	// Update package.json
	const packageJsonPath = './package.json';
	const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
	packageJson.version = version;
	fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

	// Update README.md
	const readmePath = './README.md';
	let readmeContent = fs.readFileSync(readmePath, 'utf8');
	const versionRegex = /Node Hut CLI Version:\nv[\d]+\.[\d]+\.[\d]+/;
	readmeContent = readmeContent.replace(versionRegex, `Node Hut CLI Version:\nv${version}`);
	fs.writeFileSync(readmePath, readmeContent);

	// Update config.js
	configData.version = version;
	const configContent = `export const configData = ${JSON.stringify(configData, null, 2)};`;
	fs.writeFileSync('./config.js', configContent);

	console.log(`Version updated to ${version} in package.json, README.md, and config.js`);
}

main().catch(err => {
	console.error(err);
	// eslint-disable-next-line
	process.exit(1);
});
