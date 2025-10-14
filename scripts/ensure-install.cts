const { execSync } = require('child_process');
const { existsSync } = require('fs');
const { join } = require('path');

const projectRoot = join(__dirname, '..');
const nodeModulesPath = join(projectRoot, 'node_modules');

// Check if node_modules exists and has content
const hasNodeModules = existsSync(nodeModulesPath);

if (!hasNodeModules) {
  console.log('📦 Installing dependencies...');
  try {
    // Use npm install with --legacy-peer-deps if needed
    execSync('npm install', { 
      cwd: projectRoot, 
      stdio: 'inherit',
      shell: process.platform === 'win32' ? 'cmd.exe' : undefined
    });
    console.log('✅ Dependencies installed successfully!');
  } catch (error) {
    console.error('❌ Failed to install dependencies');
    console.error('Please run: npm install');
    process.exit(1);
  }
} else {
  console.log('✅ Dependencies already installed');
}
