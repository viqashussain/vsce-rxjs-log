import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.rxjs-subscribe-cl', () => {

		let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Please highlight an observable.');
            return; // No open text editor
		}
		
		const selection = editor.selection;
		const text = editor.document.getText(editor.selection);
		const newText = `${text}.subscribe(x => console.log(x));`;

		editor.edit(x => x.replace(selection, newText));
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
