// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require("fs");
const path = require("path");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.createTemplate', function () {
		const htmlContent = `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta http-equiv="X-UA-Compatible" content="ie-edge" />
			<title>index.html</tile>
			<link rel="stylesheet" href="styles.css" />
		</head>
		<body>
			<!-- Your Code Goes Here -->
			<script type="text/javascript" src="app.js"></script>
		</body>
		</html>`;

		const cssContent = `.body{}`;
		const jsContent = `//Javascript code should goes here`;

		//Code to get the folderPath
		var folderPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
						

		//Code to create the index.html
		fs.writeFile(path.join(folderPath, "index.html"), htmlContent, err => {
			if(err){
				console.error(err);
				return vscode.window.showErrorMessage("Failed to create index.html.");
			}
			
			vscode.window.showInformationMessage("index.html has been created successfully.");
		});

		//Code to create the styles.css
		fs.writeFile(path.join(folderPath, "styles.css"), cssContent, err => {
			if(err){
				console.error(err);
				return vscode.window.showErrorMessage("Failed to create styles.css.");
			}
			vscode.window.showInformationMessage("styles.css has been created successfully.");
		});

		//Code to create the app.js
		fs.writeFile(path.join(folderPath, "app.js"), jsContent, err => {
			if(err){
				console.error(err);
				return vscode.window.showErrorMessage("Failed to create app.js.");
			}
			vscode.window.showInformationMessage("app.js has been successfully created.");
		});
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
