// OS-neutral build script for Vite React
const { execSync } = require('child_process');

try {
  execSync('npm install', { stdio: 'inherit' });
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully.');
} catch (err) {
  console.error('Build failed:', err);
  process.exit(1);
}
