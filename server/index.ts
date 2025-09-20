import { spawn } from 'child_process';

console.log('Starting NextJS development server...');

const nextProcess = spawn('npx', ['next', 'dev', '--port', '8000'], {
  stdio: 'inherit',
  shell: true
});

nextProcess.on('error', (error) => {
  console.error('Error starting NextJS:', error);
  process.exit(1);
});

nextProcess.on('close', (code) => {
  console.log(`NextJS process exited with code ${code}`);
  process.exit(code || 0);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('Shutting down NextJS...');
  nextProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Shutting down NextJS...');
  nextProcess.kill('SIGTERM');
});