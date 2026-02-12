# DevSecOps Data Files

This directory contains structured JSON data files for the Awesome DevSecOps website. All data follows strict schemas to ensure consistency and validation.

## File Structure

```
data/
├── tools.json          # DevSecOps tools database
├── resources.json      # Learning resources and educational content
├── roadmap.json        # DevSecOps implementation roadmap
├── examples.json       # Code examples and templates
├── categories.json     # Category definitions and metadata
└── README.md          # This documentation
```

## Data Schemas

Each JSON file references a schema for validation:

- `tools.json` → `../schemas/tools.schema.json`
- `resources.json` → `../schemas/resources.schema.json`
- `roadmap.json` → `../schemas/roadmap.schema.json`
- `examples.json` → `../schemas/examples.schema.json`
- `categories.json` → `../schemas/categories.schema.json`

## Versioning

All data files follow semantic versioning:
- **MAJOR**: Breaking changes to the schema
- **MINOR**: New fields or backwards-compatible changes
- **PATCH**: Bug fixes, data corrections

## Contributing

### Adding New Entries

1. **Fork the repository**
2. **Choose the appropriate data file**
3. **Follow the schema requirements**
4. **Add your entry in alphabetical order by ID**
5. **Update the `last_updated` timestamp**
6. **Increment the version number appropriately**
7. **Submit a pull request**

### Required Fields

#### Tools (`tools.json`)
```json
{
  "id": "unique-identifier",           // lowercase, hyphens only
  "name": "Tool Name",                 // 1-100 characters
  "description": "Brief description",  // 10-500 characters
  "category": ["sast"],               // from predefined list
  "type": "open-source",              // open-source, commercial, freemium
  "website": "https://example.com",   // valid URL
  "tags": ["tag1", "tag2"]           // 1-20 tags, unique
}
```

#### Resources (`resources.json`)
```json
{
  "id": "unique-identifier",
  "title": "Resource Title",          // 1-200 characters
  "description": "Detailed description", // 10-1000 characters
  "type": "book",                     // book, course, video, etc.
  "category": ["fundamentals"],      // from predefined list
  "difficulty": "beginner",           // beginner, intermediate, advanced
  "cost": "free",                     // free, paid, freemium
  "url": "https://example.com",      // valid URL
  "tags": ["tag1", "tag2"]           // 1-15 tags, unique
}
```

### Validation

Before submitting, validate your JSON:

```bash
# Using ajv-cli
ajv validate -s ../schemas/tools.schema.json -d tools.json

# Or use online JSON schema validators
```

### Style Guide

- **IDs**: Use lowercase letters, numbers, and hyphens only
- **Descriptions**: Use clear, concise language
- **Tags**: Use existing tags when possible, create new ones sparingly
- **Dates**: Use ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ)
- **URLs**: Always include https:// prefix
- **Ordering**: Keep entries alphabetically sorted by ID

## Categories Reference

### Tool Categories
- `sast` - Static Application Security Testing
- `dast` - Dynamic Application Security Testing
- `sca` - Software Composition Analysis
- `secrets-management` - Secrets and Credential Management
- `container-security` - Container and Image Security
- `iac-security` - Infrastructure as Code Security
- `api-security` - API Security Testing
- `cloud-security` - Cloud Security Tools
- `sbom` - Software Bill of Materials
- `policy-as-code` - Policy as Code Tools
- `security-observability` - Security Monitoring and Observability

### Resource Categories
- `fundamentals` - Core DevSecOps concepts
- `sast` - Static analysis learning
- `dast` - Dynamic testing education
- `sca` - Software composition learning
- `container-security` - Container security training
- `cloud-security` - Cloud security education
- `iac-security` - Infrastructure security learning
- `threat-modeling` - Threat modeling resources
- `compliance` - Compliance and governance
- `incident-response` - Incident response training

## Data Quality Guidelines

### Tools
- Include GitHub stars for open-source projects when available
- Provide official documentation links
- List supported platforms
- Mark featured tools that are particularly noteworthy

### Resources
- Include duration information when applicable
- Add ratings from 0-5 scale
- Specify prerequisites when relevant
- Link related resources for comprehensive learning paths

### Examples
- Include clear usage instructions
- Provide multiple language examples
- Add difficulty levels
- Link to related tools and resources

## Maintenance

Regular maintenance tasks:
- Update star counts and metrics monthly
- Review and update broken links quarterly
- Refresh featured content based on community feedback
- Update version numbers for significant changes

## Questions?

For questions about contributing or data structure:
- Open an issue on GitHub
- Join our Discord community
- Contact the maintainers team

## 🛠️ Technical Details

This data management system provides:

- **JSON Schema Validation**: Strict validation using AJV for data integrity
- **TypeScript Interfaces**: Strong typing for all data structures
- **Automated Validation**: CLI tool for validating all data files
- **Version Tracking**: Semantic versioning for data evolution
- **Community Contributions**: Easy-to-follow contribution guidelines

## 📈 Current Statistics

- **Tools**: 50+ security tools catalogued
- **Resources**: 30+ learning resources organized
- **Examples**: 15+ code templates and configurations
- **Categories**: 18 well-defined categories
- **Roadmap Items**: 15+ implementation steps across 3 phases

Thank you for helping make DevSecOps more accessible to everyone!