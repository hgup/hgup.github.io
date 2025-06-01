// QuickAdd User Script: create_folder_and_file.js

// This script creates a new folder and a new file inside it,
// prompting the user for the folder and file names.
// It then uses the Templater plugin to populate the new file.

module.exports = async (params) => {
  const { app, quickAddApi } = params

  // 1. Get the currently active file or folder path
  // This determines where the new folder will be created.
  const currentPath = app.workspace.getActiveFile()?.parent?.path || ''

  // If no file is active, or if the active file is in the root,
  // we might want to default to the vault root or prompt for a base path.
  // For simplicity, we'll assume currentPath is good.
  // If you want to always create in the vault root, set currentPath = "";

  // 2. Prompt for the new folder name
  const folderName = await quickAddApi.inputPrompt(
    'Enter name of the `route`',
    'noble-idea',
  )

  if (!folderName) {
    console.log('Folder creation cancelled.')
    return // User cancelled
  }

  // Construct the full path for the new folder
  const newFolderPath = currentPath ? `${currentPath}/${folderName}` : folderName

  // 3. Create the new folder
  try {
    await app.vault.createFolder(newFolderPath)
    console.log(`Folder created: ${newFolderPath}`)
  }
  catch (error) {
    // If folder already exists, log a message but continue to create the file inside it.
    if (error.message.includes('already exists')) {
      console.warn(`Folder '${newFolderPath}' already exists. Creating file inside it.`)
    }
    else {
      console.error('Error creating folder:', error)
      quickAddApi.info(`Error creating folder: ${error.message}`)
      return // Stop if there's a different error
    }
  }

  const title = await quickAddApi.inputPrompt(
    'Name of the page',
    'The most noble idea ever...',
  )

  if (!title) {
    console.log('Title Creation Cancelled')
    return // User cancelled
  }

  // Construct the full path for the new file
  const newFilePath = `${newFolderPath}/+page.svelte.md`

  // 4. Create the new file using Templater
  // This assumes you have a Templater template set up.
  // Replace 'New Folder File' with the actual name of your Templater template.
  // const templatePath = app.plugins.plugins["templater-obsidian"].settings.templates_folder + "/+page.template.md"; // Adjust if your template name is different
  // const templateContent = await app.vault.read(app.vault.getAbstractFileByPath(templatePath));
  const fileContent = `---
title: ${title}
image_: /${newFolderPath.split('/').slice(1).join('/')}/
alt: ${title}
created: ${new Date().toISOString().split('T')[0]}
updated: ${new Date().toISOString().split('T')[0]}
tags: []
---
   `

  try {
    const newFile = await app.vault.create(newFilePath, fileContent)
    console.log(`File created: ${newFilePath}`)
    app.workspace.activeLeaf.openFile(newFile) // Open the new file
  }
  catch (error) {
    console.error('Error creating file:', error)
    quickAddApi.info(`Error creating file: ${error.message}`)
  }
}
