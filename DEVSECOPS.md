# Awesome DevSecOps [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of awesome tools, resources, and best practices for DevSecOps. This list focuses on integrating security practices within the DevOps process.

## Contents

- [Infrastructure as Code (IaC) Security](#infrastructure-as-code-iac-security)
- [Static Application Security Testing (SAST)](#static-application-security-testing-sast)
- [Dynamic Application Security Testing (DAST)](#dynamic-application-security-testing-dast)
- [Software Composition Analysis (SCA)](#software-composition-analysis-sca)
- [Container & Kubernetes Security](#container--kubernetes-security)
- [Secrets Management & Scanning](#secrets-management--scanning)
- [Cloud Security Posture Management (CSPM)](#cloud-security-posture-management-cspm)
- [Runtime Application Self-Protection (RASP)](#runtime-application-self-protection-rasp)
- [Threat Modeling](#threat-modeling)
- [Learning Resources](#learning-resources)

## Infrastructure as Code (IaC) Security

Tools to scan configuration files (Terraform, CloudFormation, Kubernetes, etc.) for misconfigurations before deployment.

- [Checkov](https://www.checkov.io/) - A static code analysis tool for infrastructure-as-code. Scans Terraform, CloudFormation, Kubernetes, Helm, and ARM templates.
- [Tfsec](https://aquasecurity.github.io/tfsec/) - A security scanner for your Terraform code.
- [Terrascan](https://runterrascan.io/) - Detect compliance and security violations across Infrastructure as Code to mitigate risks before provisioning cloud native infrastructure.
- [Kics](https://kics.io/) - An open-source solution for static code analysis of Infrastructure as Code.
- [Cdk-nag](https://github.com/cdklabs/cdk-nag) - Check security best practices for AWS CDK projects.

## Static Application Security Testing (SAST)

Tools that analyze source code for security flaws without executing the program.

- [SonarQube](https://www.sonarqube.org/) - A popular tool for continuous inspection of code quality and security.
- [Semgrep](https://semgrep.dev/) - A fast, open-source, static analysis tool for finding bugs, detecting security vulnerabilities, and enforcing code standards.
- [Bandit](https://bandit.readthedocs.io/) - A tool designed to find common security issues in Python code.
- [ESLint Security Plugin](https://github.com/eslint-community/eslint-plugin-security) - ESLint rules for Node.js Security.
- [SpotBugs](https://spotbugs.github.io/) - A program which uses static analysis to look for bugs in Java code (successor of FindBugs).
- [Snyk Code](https://snyk.io/product/snyk-code/) - AI-powered static analysis for fast, real-time security scanning.

## Dynamic Application Security Testing (DAST)

Tools that analyze a running application for security vulnerabilities.

- [OWASP ZAP](https://www.zaproxy.org/) - The world’s most widely used web app security scanner. Free and open source.
- [Burp Suite](https://portswigger.net/burp) - A leading range of cybersecurity tools, widely used for web application security testing.
- [Nuclei](https://github.com/projectdiscovery/nuclei) - A fast, customizable vulnerability scanner powered by the global community.
- [Wapiti](https://wapiti.sourceforge.io/) - A web application vulnerability scanner allowing you to audit the security of your websites or web apps.

## Software Composition Analysis (SCA)

Tools to identify open-source components, libraries, and their known vulnerabilities (CVEs).

- [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/) - A software composition analysis utility that detects publicly disclosed vulnerabilities in application dependencies.
- [Trivy](https://github.com/aquasecurity/trivy) - A comprehensive security scanner; reliable, fast, and easy to use. Scans containers, file systems, and git repos.
- [Snyk Open Source](https://snyk.io/product/open-source-security-management/) - Finds and fixes vulnerabilities in open source dependencies.
- [Renovate](https://github.com/renovatebot/renovate) - Automated dependency updates; keeps dependencies secure and up-to-date.
- [Dependabot](https://docs.github.com/en/code-security/dependabot) - GitHub's built-in tool to keep dependencies up-to-date and secure.

## Container & Kubernetes Security

Tools focused on securing container images, registries, and orchestration platforms.

- [Clair](https://github.com/quay/clair) - Vulnerability Static Analysis for Containers.
- [Docker Bench for Security](https://github.com/docker/docker-bench-security) - A script that checks for dozens of common best-practices around deploying Docker containers in production.
- [Falco](https://falco.org/) - Cloud Native Runtime Security tool designed to detect anomalous activity in your containers.
- [Kube-bench](https://github.com/aquasecurity/kube-bench) - Checks whether Kubernetes is deployed securely by running the checks documented in the CIS Kubernetes Benchmark.
- [Kube-hunter](https://github.com/aquasecurity/kube-hunter) - Hunt for security weaknesses in Kubernetes clusters.
- [Grype](https://github.com/anchore/grype) - A vulnerability scanner for container images and filesystems.

## Secrets Management & Scanning

Tools to detect accidentally committed secrets and manage secrets securely.

- [TruffleHog](https://github.com/trufflesecurity/trufflehog) - Searches through git repositories for high entropy strings and secrets, digging deep into commit history.
- [Git-secrets](https://github.com/awslabs/git-secrets) - Prevents you from committing secrets to a git repository.
- [Gitleaks](https://github.com/gitleaks/gitleaks) - A SAST tool for detecting hardcoded secrets like passwords, api keys, and tokens in git repos.
- [HashiCorp Vault](https://www.vaultproject.io/) - A tool for secrets management, encryption as a service, and privileged access management.

## Cloud Security Posture Management (CSPM)

Tools to monitor cloud infrastructure for misconfigurations and compliance violations.

- [ScoutSuite](https://github.com/nccgroup/ScoutSuite) - Open source multi-cloud security-auditing tool, which enables security posture assessment of cloud environments.
- [Prowler](https://github.com/prowler-cloud/prowler) - An Open Source security tool to perform AWS security best practices assessments, audits, incident response, and continuous monitoring.
- [CloudSploit](https://github.com/aquasecurity/cloudsploit) - An open-source tool for detecting security risks in cloud infrastructure accounts.

## Runtime Application Self-Protection (RASP)

Security tools that run inside the application to detect attacks in real-time.

- [OpenRASP](https://github.com/baidu/openrasp) - An open-source RASP solution by Baidu.

## Threat Modeling

Tools to identify potential threats early in the design phase.

- [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/) - A free, open-source, cross-platform application for creating threat models.
- [STRIDE](https://docs.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats) - A threat modeling methodology often used with Microsoft's Threat Modeling Tool.

## Learning Resources

- [OWASP DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/) - A guide to understanding and implementing DevSecOps.
- [DevSecOps Hub](https://snyk.io/devsecops/) - Resources and guides provided by Snyk.
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) - Configuration guidelines for various technologies (Docker, Kubernetes, AWS, etc.).

## Contributing

Contributions are welcome! Please read the [contribution guidelines](https://github.com/sindresorhus/awesome/blob/main/contributing.md) first.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)