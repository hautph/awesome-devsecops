'use client';

import React, { useState } from 'react';

interface CodeExample {
  id: string;
  title: string;
  description: string;
  category: string;
  language: string;
  code: string;
  usage: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  last_updated: string;
}

const CodeExamplesExpanded: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedExample, setExpandedExample] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Expanded examples data with 8 categories
  const examplesData: CodeExample[] = [
    // GitHub Actions Examples
    {
      id: "github-actions-sast",
      title: "SAST Integration with GitHub Actions",
      description: "GitHub Actions workflow for static application security testing using CodeQL with customizable scanning.",
      category: "github-actions",
      language: "yaml",
      code: `name: CodeQL Analysis
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 0 * * 1'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    strategy:
      fail-fast: false
      matrix:
        language: [ 'javascript', 'python' ]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Initialize CodeQL
      uses: github/codeql-action/init@v3
      with:
        languages: \${{ matrix.language }}

    - name: Autobuild
      uses: github/codeql-action/autobuild@v3

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v3
      with:
        category: "/language:\${{matrix.language}}"`,
      usage: "1. Create .github/workflows/codeql-analysis.yml\n2. Customize branches and languages\n3. Adjust schedule as needed\n4. Push to trigger workflow",
      tags: ["sast", "codeql", "github-actions", "security-scanning"],
      difficulty: "intermediate",
      last_updated: "2024-01-15T10:30:00Z"
    },
    {
      id: "github-actions-dependency-check",
      title: "Dependency Vulnerability Scanning",
      description: "Automated dependency scanning using Dependabot and custom vulnerability checks.",
      category: "github-actions",
      language: "yaml",
      code: `name: Dependency Security Check
on:
  schedule:
    - cron: '0 2 * * 1'
  push:
    branches: [ main ]
  pull_request:

jobs:
  dependency-check:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Set up Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run audit
      run: |
        npm audit --audit-level high
        npm audit --audit-level critical || exit 1
        
    - name: Run Snyk scan
      uses: snyk/actions/node@master
      env:
        SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
      with:
        command: monitor
        args: --severity-threshold=high`,
      usage: "1. Add SNYK_TOKEN to repository secrets\n2. Customize severity thresholds\n3. Schedule according to your release cycle",
      tags: ["dependency", "vulnerability", "snyk", "npm-audit"],
      difficulty: "beginner",
      last_updated: "2024-01-10T14:20:00Z"
    },

    // GitLab CI Examples
    {
      id: "gitlab-ci-container-scanning",
      title: "Container Security Scanning Pipeline",
      description: "GitLab CI pipeline for container image security scanning with Trivy and Clair.",
      category: "gitlab-ci",
      language: "yaml",
      code: `stages:
  - build
  - test
  - security
  - deploy

variables:
  DOCKER_IMAGE: \${CI_REGISTRY_IMAGE}:\${CI_COMMIT_SHA}
  TRIVY_VERSION: 0.48.0

before_script:
  - docker login -u \${CI_REGISTRY_USER} -p \${CI_REGISTRY_PASSWORD} \${CI_REGISTRY}

build-image:
  stage: build
  script:
    - docker build -t \${DOCKER_IMAGE} .
    - docker push \${DOCKER_IMAGE}
  only:
    - main
    - merge_requests

container-security:
  stage: security
  image: aquasec/trivy:\${TRIVY_VERSION}
  script:
    - trivy image --exit-code 1 --severity HIGH,CRITICAL \${DOCKER_IMAGE}
    - trivy fs --exit-code 1 --severity HIGH,CRITICAL .
  artifacts:
    reports:
      container_scanning: gl-container-scanning-report.json
  allow_failure: true

clair-scan:
  stage: security
  image: quay.io/coreos/clair:v4.7.0
  script:
    - clairctl report \${DOCKER_IMAGE}
  allow_failure: true`,
      usage: "1. Configure GitLab container registry\n2. Set registry credentials as CI variables\n3. Adjust severity levels based on your policy",
      tags: ["container", "trivy", "clair", "docker-security"],
      difficulty: "intermediate",
      last_updated: "2024-01-12T09:15:00Z"
    },

    // Jenkins Examples
    {
      id: "jenkins-pipeline-security",
      title: "Security Pipeline with Jenkins",
      description: "Declarative Jenkins pipeline with integrated security scanning stages.",
      category: "jenkins",
      language: "groovy",
      code: `pipeline {
    agent any
    
    tools {
        maven 'Maven 3.8.6'
        jdk 'OpenJDK 11'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }
        
        stage('Security Scan') {
            parallel {
                stage('OWASP Dependency Check') {
                    steps {
                        dependencyCheck additionalArguments: '--failOnAnyVulnerability', 
                                       odcInstallation: 'DependencyCheck'
                    }
                }
                
                stage('SonarQube Analysis') {
                    steps {
                        withSonarQubeEnv('SonarQube') {
                            sh 'mvn sonar:sonar'
                        }
                    }
                }
            }
        }
        
        stage('Docker Build & Scan') {
            steps {
                script {
                    def dockerImage = docker.build("\${env.JOB_NAME}:\${env.BUILD_NUMBER}")
                    sh "trivy image --exit-code 1 --severity HIGH,CRITICAL \${dockerImage.id}"
                }
            }
        }
    }
    
    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'target/dependency-check-report',
                reportFiles: 'index.html',
                reportName: 'Dependency Check Report'
            ])
        }
        failure {
            emailext (
                subject: "Pipeline failed: \${env.JOB_NAME} #\${env.BUILD_NUMBER}",
                body: """Build failed. Please check the logs.
                Job: \${env.JOB_NAME}
                Build: \${env.BUILD_NUMBER}
                URL: \${env.BUILD_URL}""",
                to: "dev-team@example.com"
            )
        }
    }
}`,
      usage: "1. Install required Jenkins plugins\n2. Configure SonarQube and DependencyCheck tools\n3. Set up email notifications\n4. Customize for your project structure",
      tags: ["jenkins", "pipeline", "owasp", "sonarqube", "trivy"],
      difficulty: "advanced",
      last_updated: "2024-01-08T16:45:00Z"
    },

    // Docker Examples
    {
      id: "docker-security-hardened",
      title: "Hardened Production Dockerfile",
      description: "Production-ready Dockerfile with security hardening, multi-stage builds, and vulnerability scanning.",
      category: "docker",
      language: "dockerfile",
      code: `# Build stage
FROM node:18-alpine AS builder

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nextjs -u 1001 -G nodejs

# Install runtime dependencies only
RUN apk add --no-cache dumb-init

# Set working directory
WORKDIR /app

# Copy built assets
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Copy health check script
COPY healthcheck.js .

# Change ownership
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
    CMD node healthcheck.js

# Use init system
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/server.js"]`,
      usage: "1. Replace application-specific parts\n2. Ensure healthcheck.js exists\n3. Scan with Trivy before deployment\n4. Review and customize security headers",
      tags: ["docker", "security", "multi-stage-build", "non-root-user"],
      difficulty: "intermediate",
      last_updated: "2024-01-14T11:30:00Z"
    },
    {
      id: "docker-compose-security",
      title: "Secure Docker Compose Configuration",
      description: "Docker Compose with security best practices including user namespaces and resource limits.",
      category: "docker",
      language: "yaml",
      code: `version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - LOG_LEVEL=info
    volumes:
      - ./logs:/app/logs:rw
    user: "1001:1001"
    security_opt:
      - no-new-privileges:true
    read_only: true
    tmpfs:
      - /tmp
      - /var/log
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "node", "healthcheck.js"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M

  redis:
    image: redis:7-alpine
    user: "999:999"
    read_only: true
    security_opt:
      - no-new-privileges:true
    tmpfs:
      - /data
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    restart: unless-stopped

volumes:
  redis_data:`,
      usage: "1. Adjust resource limits based on your application needs\n2. Customize user IDs for your environment\n3. Review volume mount permissions\n4. Test thoroughly in staging",
      tags: ["docker-compose", "security", "resource-limits", "user-namespaces"],
      difficulty: "intermediate",
      last_updated: "2024-01-11T13:20:00Z"
    },

    // Kubernetes Examples
    {
      id: "kubernetes-security-pod",
      title: "Secure Pod Configuration",
      description: "Kubernetes pod manifest with securityContext and resource limits.",
      category: "kubernetes",
      language: "yaml",
      code: `apiVersion: v1
kind: Pod
metadata:
  name: secure-app
  labels:
    app: secure-application
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
    supplementalGroups: [1001]
  
  containers:
  - name: app
    image: myapp:latest
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop:
        - ALL
        add:
        - NET_BIND_SERVICE
      seccompProfile:
        type: RuntimeDefault
    
    ports:
    - containerPort: 8080
      protocol: TCP
    
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
    
    livenessProbe:
      httpGet:
        path: /health
        port: 8080
      initialDelaySeconds: 30
      periodSeconds: 10
    
    readinessProbe:
      httpGet:
        path: /ready
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5
    
    volumeMounts:
    - name: tmp-volume
      mountPath: /tmp
    - name: logs-volume
      mountPath: /var/log
  
  volumes:
  - name: tmp-volume
    emptyDir: {}
  - name: logs-volume
    emptyDir: {}`,
      usage: "1. Customize user IDs based on your base image\n2. Adjust resource limits for your application\n3. Modify probe endpoints to match your app\n4. Review and adjust capabilities as needed",
      tags: ["kubernetes", "pod-security", "security-context", "resource-limits"],
      difficulty: "intermediate",
      last_updated: "2024-01-09T15:45:00Z"
    },
    {
      id: "kubernetes-network-policy",
      title: "Network Security Policy",
      description: "Kubernetes NetworkPolicy to restrict pod communication and enhance security.",
      category: "kubernetes",
      language: "yaml",
      code: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: secure-backend-policy
spec:
  podSelector:
    matchLabels:
      app: backend-api
  
  policyTypes:
  - Ingress
  - Egress
  
  ingress:
  # Allow traffic from frontend pods only
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 8080
  
  # Allow health checks from kubelet
  - from:
    - namespaceSelector:
        matchLabels:
          name: kube-system
    ports:
    - protocol: TCP
      port: 8080
  
  egress:
  # Allow DNS resolution
  - to:
    - namespaceSelector:
        matchLabels:
          name: kube-system
    ports:
    - protocol: UDP
      port: 53
    - protocol: TCP
      port: 53
  
  # Allow database connections
  - to:
    - podSelector:
        matchLabels:
          app: database
    ports:
    - protocol: TCP
      port: 5432
  
  # Allow external API calls (limited)
  - to:
    - ipBlock:
        cidr: 0.0.0.0/0
        except:
        - 10.0.0.0/8
        - 172.16.0.0/12
        - 192.168.0.0/16
    ports:
    - protocol: TCP
      port: 443`,
      usage: "1. Customize pod selectors to match your deployment labels\n2. Adjust IP ranges based on your network topology\n3. Review and modify allowed ports\n4. Test connectivity after applying policies",
      tags: ["kubernetes", "network-policy", "network-security", "zero-trust"],
      difficulty: "advanced",
      last_updated: "2024-01-13T08:15:00Z"
    },

    // Terraform Examples
    {
      id: "terraform-aws-security",
      title: "AWS Security Infrastructure",
      description: "Terraform module for AWS security infrastructure including VPC, security groups, and IAM policies.",
      category: "terraform",
      language: "hcl",
      code: `# VPC Configuration
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = "secure-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-west-2a", "us-west-2b", "us-west-2c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true

  # Enable VPC flow logs
  enable_flow_log                                 = true
  create_flow_log_cloudwatch_log_group           = true
  create_flow_log_cloudwatch_iam_role            = true
  flow_log_max_aggregation_interval              = 60
  flow_log_cloudwatch_log_group_retention_in_days = 30

  tags = {
    Environment = "production"
    Owner       = "security-team"
  }
}

# Security Groups
resource "aws_security_group" "web_sg" {
  name        = "web-sg"
  description = "Security group for web servers"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description = "HTTPS from anywhere"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP redirect"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "web-security-group"
  }
}

# IAM Role with least privilege
resource "aws_iam_role" "ec2_role" {
  name = "ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })

  tags = {
    Environment = "production"
  }
}

resource "aws_iam_role_policy" "ec2_policy" {
  name = "ec2-policy"
  role = aws_iam_role.ec2_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:ListBucket"
        ]
        Resource = [
          "arn:aws:s3:::my-app-bucket",
          "arn:aws:s3:::my-app-bucket/*"
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:*:*:*"
      }
    ]
  })
}`,
      usage: "1. Customize CIDR blocks for your environment\n2. Adjust IAM policies based on application needs\n3. Review and modify security group rules\n4. Enable CloudTrail for audit logging",
      tags: ["terraform", "aws", "vpc", "iam", "security-groups"],
      difficulty: "advanced",
      last_updated: "2024-01-07T12:30:00Z"
    },

    // Pre-commit Examples
    {
      id: "pre-commit-security-hooks",
      title: "Security Pre-commit Hooks Configuration",
      description: "Pre-commit configuration with security-focused hooks for code quality and vulnerability detection.",
      category: "pre-commit",
      language: "yaml",
      code: `repos:
  # Security scanning hooks
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.5.0
    hooks:
      - id: detect-private-key
        name: Private Key Detection
        description: Detects private keys in committed files
      - id: detect-aws-credentials
        name: AWS Credential Detection
        description: Prevents committing AWS credentials
      - id: check-added-large-files
        name: Large File Checker
        description: Prevents adding large files (>5MB)
        args: ['--maxkb=5120']

  # Secret scanning
  - repo: https://github.com/Yelp/detect-secrets
    rev: v1.4.0
    hooks:
      - id: detect-secrets
        name: Secret Scanner
        description: Detects various types of secrets
        args: [
          '--baseline',
          '.secrets.baseline',
          '--exclude-files',
          'package-lock.json|yarn.lock'
        ]

  # Docker security
  - repo: https://github.com/goodwithtech/dockle
    rev: v0.4.13
    hooks:
      - id: dockle
        name: Dockerfile Security Checker
        description: Checks Dockerfiles for security issues
        files: Dockerfile.*
        args: [
          '--exit-code',
          '1',
          '--exit-level',
          'warn'
        ]

  # Terraform security
  - repo: https://github.com/terraform-linters/tflint
    rev: v0.50.3
    hooks:
      - id: tflint
        name: Terraform Linter
        description: Lints Terraform configuration files
        args:
          - '--enable-rule=aws-instance-no-public-ip'
          - '--enable-rule=aws-s3-enable-bucket-encryption'

  # Kubernetes security
  - repo: https://github.com/nokia/kubekube
    rev: v1.1.0
    hooks:
      - id: kubekube
        name: Kubernetes Manifest Validator
        description: Validates Kubernetes manifests
        files: \.(yaml|yml)$
        args: [
          '--strict',
          '--ignore-missing-schemas'
        ]

  # Code quality and security
  - repo: https://github.com/PyCQA/bandit
    rev: 1.7.6
    hooks:
      - id: bandit
        name: Python Security Checker
        description: Finds common security issues in Python code
        args: [
          '-c',
          'bandit.yaml',
          '-lll'
        ]`,
      usage: "1. Install pre-commit: pip install pre-commit\n2. Run: pre-commit install\n3. Create .secrets.baseline: detect-secrets scan > .secrets.baseline\n4. Customize hooks based on your tech stack",
      tags: ["pre-commit", "security", "secret-detection", "docker-security"],
      difficulty: "intermediate",
      last_updated: "2024-01-16T14:10:00Z"
    },

    // Scripts Examples
    {
      id: "script-security-scan",
      title: "Automated Security Scan Script",
      description: "Bash script for automated security scanning with multiple tools and reporting.",
      category: "scripts",
      language: "bash",
      code: `#!/bin/bash

set -euo pipefail

# Colors for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
NC='\\033[0m' # No Color

# Configuration
REPORT_DIR="./security-reports"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
EXIT_CODE=0

# Create report directory
mkdir -p "\${REPORT_DIR}"

echo -e "\${GREEN}=== Starting Security Scan Pipeline ===\${NC}"
echo "Timestamp: \${TIMESTAMP}"

# Function to run security checks
run_check() {
    local check_name=\$1
    local check_command=\$2
    local report_file=\$3
    
    echo -e "\\n\${YELLOW}Running \${check_name}...\${NC}"
    
    if eval "\${check_command}" > "\${REPORT_DIR}/\${report_file}" 2>&1; then
        echo -e "\${GREEN}✓ \${check_name} completed successfully\${NC}"
    else
        echo -e "\${RED}✗ \${check_name} found issues\${NC}"
        EXIT_CODE=1
        cat "\${REPORT_DIR}/\${report_file}"
    fi
}

# Check for hardcoded secrets
run_check "Secret Detection" \\
    "grep -r --exclude-dir=node_modules --exclude-dir=.git --exclude='*.lock' -E '(password|pwd|token|key)[[:space:]]*=[[:space:]]*[\"'\\''\\\\\"]{0,1}[a-zA-Z0-9]{8,}' ." \\
    "secrets_scan_\${TIMESTAMP}.txt"

# Run Trivy scan if Dockerfile exists
if [ -f "Dockerfile" ]; then
    run_check "Trivy Container Scan" \\
        "trivy fs --exit-code 0 --severity HIGH,CRITICAL ." \\
        "trivy_scan_\${TIMESTAMP}.txt"
fi

# Run npm audit if package.json exists
if [ -f "package.json" ]; then
    run_check "NPM Audit" \\
        "npm audit --audit-level high" \\
        "npm_audit_\${TIMESTAMP}.txt"
fi

# Check for security headers in web files
if ls *.html *.js >/dev/null 2>&1; then
    run_check "Security Headers Check" \\
        "grep -r --include='*.html' --include='*.js' -E '(eval|document.write|innerHTML)' ." \\
        "headers_check_\${TIMESTAMP}.txt"
fi

# Final report
echo -e "\\n\${GREEN}=== Security Scan Summary ===\${NC}"
echo "Reports saved to: \${REPORT_DIR}"
echo "Scan completed at: \$(date)"

if [ \$EXIT_CODE -eq 0 ]; then
    echo -e "\${GREEN}All security checks passed! ✓\${NC}"
else
    echo -e "\${RED}Security issues detected! Please review reports. ✗\${NC}"
fi

exit \$EXIT_CODE`,
      usage: "1. Make executable: chmod +x security-scan.sh\n2. Run: ./security-scan.sh\n3. Review reports in security-reports directory\n4. Integrate into CI/CD pipeline",
      tags: ["bash", "security-script", "automation", "trivy", "secret-detection"],
      difficulty: "intermediate",
      last_updated: "2024-01-06T17:25:00Z"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Examples', count: examplesData.length },
    { id: 'github-actions', name: 'GitHub Actions', count: examplesData.filter(e => e.category === 'github-actions').length },
    { id: 'gitlab-ci', name: 'GitLab CI', count: examplesData.filter(e => e.category === 'gitlab-ci').length },
    { id: 'jenkins', name: 'Jenkins', count: examplesData.filter(e => e.category === 'jenkins').length },
    { id: 'docker', name: 'Docker', count: examplesData.filter(e => e.category === 'docker').length },
    { id: 'kubernetes', name: 'Kubernetes', count: examplesData.filter(e => e.category === 'kubernetes').length },
    { id: 'terraform', name: 'Terraform', count: examplesData.filter(e => e.category === 'terraform').length },
    { id: 'pre-commit', name: 'Pre-commit', count: examplesData.filter(e => e.category === 'pre-commit').length },
    { id: 'scripts', name: 'Scripts', count: examplesData.filter(e => e.category === 'scripts').length }
  ];

  const filteredExamples = examplesData.filter(example => {
    const matchesCategory = activeCategory === 'all' || example.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      example.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      example.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      example.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (exampleId: string) => {
    setExpandedExample(expandedExample === exampleId ? null : exampleId);
  };

  const copyToClipboard = async (code: string, exampleId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(exampleId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Code Examples Library
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive DevSecOps templates with syntax highlighting and copy functionality
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">Syntax Highlighting</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">Copy to Clipboard</span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">Usage Instructions</span>
        </div>
      </div>

      <div className="bg-card-bg/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Search Examples
            </label>
            <input
              type="text"
              placeholder="Search by title, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-end">
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-white">{filteredExamples.length}</span> examples found
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <div className="bg-card-bg/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 sticky top-6">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{category.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeCategory === category.id 
                        ? 'bg-primary/30 text-primary' 
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="font-semibold mb-3 text-gray-300">Difficulty Levels</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-green-400">Beginner</span>
                  <span className="text-gray-500">{examplesData.filter(e => e.difficulty === 'beginner').length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400">Intermediate</span>
                  <span className="text-gray-500">{examplesData.filter(e => e.difficulty === 'intermediate').length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-400">Advanced</span>
                  <span className="text-gray-500">{examplesData.filter(e => e.difficulty === 'advanced').length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4">
          {filteredExamples.length === 0 ? (
            <div className="bg-card-bg/50 backdrop-blur-sm rounded-2xl p-12 text-center border border-gray-700">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">No examples found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredExamples.map(example => (
                <div 
                  key={example.id} 
                  className="bg-card-bg/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-primary/30 transition-all"
                >
                  <button
                    onClick={() => toggleExpand(example.id)}
                    className="w-full p-5 text-left hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg">{example.title}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            example.difficulty === 'beginner' ? 'bg-green-500/20 text-green-300' :
                            example.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-red-500/20 text-red-300'
                          }`}>
                            {example.difficulty}
                          </span>
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                            {example.language}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{example.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {example.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className={`transform transition-transform ${
                          expandedExample === example.id ? 'rotate-180' : ''
                        }`}>
                          ▼
                        </span>
                      </div>
                    </div>
                  </button>

                  {expandedExample === example.id && (
                    <div className="border-t border-gray-700/50">
                      <div className="p-5 bg-gray-900/30">
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-lg">Code Example</h4>
                            <button
                              onClick={() => copyToClipboard(example.code, example.id)}
                              className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                            >
                              {copiedId === example.id ? (
                                <>
                                  <span>✓</span>
                                  <span>Copied!</span>
                                </>
                              ) : (
                                <>
                                  <span>📋</span>
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="p-4 bg-gray-900/80 rounded-lg overflow-x-auto text-sm text-gray-200">
                            {example.code}
                          </pre>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-lg mb-3">Usage Instructions</h4>
                          <div className="bg-gray-800/50 rounded-lg p-4">
                            <ol className="list-decimal list-inside space-y-2 text-gray-300">
                              {example.usage.split('\n').map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                        
                        <div className="mt-4 text-xs text-gray-500">
                          Last updated: {new Date(example.last_updated).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeExamplesExpanded;