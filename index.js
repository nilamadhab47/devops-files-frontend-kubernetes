const fs = require('fs-extra');
const path = require('path');

const sourceDirs = ['deployments', 'ingresses', 'issuers', 'services', '.github', 'Dockerfile']; // List of directories to copy

const targetDir = process.cwd(); // Path to the project's directory

async function copyFiles() {
  try {
    for (const sourceDir of sourceDirs) {
      await fs.copy(path.join(__dirname, sourceDir), path.join(targetDir, sourceDir));
    }
    console.log('Custom files and folders copied successfully.');
  } catch (err) {
    console.error('Error copying files:', err);
  }
}
console.log("hiihi")
copyFiles();
