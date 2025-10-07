// OS-neutral run script for Vite React
const { execSync } = require('child_process');

try {
  execSync('npm install', { stdio: 'inherit' });
  execSync('npm run dev', { stdio: 'inherit' });
} catch (err) {
  console.error('Run failed:', err);
  process.exit(1);
}
