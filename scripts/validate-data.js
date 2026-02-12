#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Initialize AJV with formats
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Schema mappings
const schemas = {
  'tools.json': 'tools.schema.json',
  'resources.json': 'resources.schema.json',
  'roadmap.json': 'roadmap.schema.json',
  'examples.json': 'examples.schema.json',
  'categories.json': 'categories.schema.json'
};

// Data files to validate
const dataFiles = Object.keys(schemas);

async function validateFile(dataFile, schemaFile) {
  try {
    // Read data file
    const dataPath = path.join(__dirname, '..', 'data', dataFile);
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Read schema file
    const schemaPath = path.join(__dirname, '..', 'src', 'schemas', schemaFile);
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    
    // Compile and validate
    const validate = ajv.compile(schema);
    const valid = validate(data);
    
    if (valid) {
      console.log(`✅ ${dataFile} - Valid`);
      return true;
    } else {
      console.log(`❌ ${dataFile} - Invalid`);
      console.log('Errors:');
      validate.errors.forEach(error => {
        console.log(`  - ${error.instancePath}: ${error.message}`);
      });
      return false;
    }
  } catch (error) {
    console.log(`❌ ${dataFile} - Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('Validating DevSecOps data files...\n');
  
  let allValid = true;
  
  for (const [dataFile, schemaFile] of Object.entries(schemas)) {
    const isValid = await validateFile(dataFile, schemaFile);
    if (!isValid) {
      allValid = false;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  if (allValid) {
    console.log('🎉 All data files are valid!');
    process.exit(0);
  } else {
    console.log('💥 Some data files have validation errors.');
    process.exit(1);
  }
}

// Run validation
main().catch(error => {
  console.error('Validation failed:', error);
  process.exit(1);
});