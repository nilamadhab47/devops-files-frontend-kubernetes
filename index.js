const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'D:\nilamadhab\devops-files-frontend-kubernetes'); // Path to your package's files
const targetDir = process.cwd(); // Path to the project's directory

function copyFileSync(source, target) {
  const targetFile = path.join(target, path.basename(source));
  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  const files = fs.readdirSync(source);
  files.forEach(file => {
    const sourceFile = path.join(source, file);
    const targetFile = path.join(target, file);
    if (fs.statSync(sourceFile).isDirectory()) {
      fs.mkdirSync(targetFile);
      copyFolderRecursiveSync(sourceFile, targetFile);
    } else {
      copyFileSync(sourceFile, target);
    }
  });
}

copyFolderRecursiveSync(sourceDir, targetDir);
console.log('Custom files and folders copied successfully.');
