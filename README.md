<p align="center"><h1 align="center">NODE HUT CLI</h1></p>
<p align="center">
	<em><code>npm install -g nodehut-cli</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/letrixlabs/nodehut-cli?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/letrixlabs/nodehut-cli?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/letrixlabs/nodehut-cli?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/letrixlabs/nodehut-cli?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

> [!WARNING]
> This CLI tool does not currently work and is in active development. The code is not final and very early stages.

The Node Hut CLI tool is a command-line interface designed to connect to your Node Hut account, allowing you to manage
your cloud services efficiently. With this tool, you can easily authenticate, check your status, and manage databases directly from your terminal.

## Table of Contents

- [Installation](#installation)
- [Version](#version)
- [Authentication Commands](#authentication-commands)
    - [Login](#login)
    - [Logout](#logout)
    - [Status](#status)
- [Cloud Services Commands](#cloud-services-commands)
    - [Databases](#databases)
        - [Create](#create)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the Node Hut CLI tool, run the following command:

```bash
npm install -g nodehut-cli
```

## Version

To check the current version of the Node Hut CLI tool, use the following command:

```bash
nodehut --version
```

This will display the version of the CLI tool along with the name:

```
Node Hut CLI Version:
v0.0.0
```

## Authentication Commands

### Login

Use the login command to authenticate with your Node Hut account.

```bash
nodehut auth login
```

When prompted, enter your API token, which you can generate from the Node Hut dashboard at
[https://nodehut.com/account/api-tokens](https://nodehut.com/account/api-tokens).

### Logout

Use the logout command to disconnect from your Node Hut account.

```bash
nodehut auth logout
```

This will remove your API token from local storage, and you'll need to log in again to use the CLI tool.

### Status

To check your current authentication status, use the status command.

```bash
nodehut auth status
```

This command will inform you whether you are currently logged in and provide your account details if applicable.

## Cloud Services Commands

### Databases

The CLI tool provides commands to manage databases.

#### Create

To create a new database, use the following command:

```bash
nodehut db create
```

This command will guide you through the process of creating a new database instance.

## Usage

After installation, you can access the CLI tool by typing `nodehut` followed by the command you wish to execute. For
example, to log in, use:

```bash
nodehut auth login
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is covered under the [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) License. For more details,
refer to the [LICENSE](https://github.com/harrisonratcliffe/laravel-api-responses/blob/main/LICENSE) file.
