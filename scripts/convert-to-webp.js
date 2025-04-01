// Script to convert images to WebP format for better performance
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sharp from 'sharp';
import { execSync } from 'child_process';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Directories to process
const directories = [
  path.join(__dirname, '../public/imagenes'),
];

// Supported image formats
const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif'];

// Function to convert an image to WebP
async function convertToWebP(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    if (!supportedFormats.includes(ext)) return;

    const outputPath = filePath.replace(ext, '.webp');
    
    // Skip if WebP version already exists
    if (fs.existsSync(outputPath)) return;
    
    console.log(`Converting ${filePath} to WebP...`);
    
    await sharp(filePath)
      .webp({ quality: 80 }) // 80% quality offers good balance between quality and file size
      .toFile(outputPath);
      
    console.log(`Created ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${filePath} to WebP:`, error);
  }
}

// Function to process a directory recursively
async function processDirectory(directory) {
  try {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else {
        await convertToWebP(filePath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Main function
async function main() {
  console.log('Starting image conversion to WebP...');
  
  // Install sharp if not already installed
  try {
    await import('sharp');
    console.log('sharp is already installed');
  } catch (e) {
    console.log('Installing sharp package...');
    execSync('npm install sharp --save-dev', { stdio: 'inherit' });
  }
  
  // Process all directories
  for (const directory of directories) {
    if (fs.existsSync(directory)) {
      console.log(`Processing directory: ${directory}`);
      await processDirectory(directory);
    } else {
      console.warn(`Directory does not exist: ${directory}`);
    }
  }
  
  console.log('Image conversion complete!');
}

main().catch(console.error);
