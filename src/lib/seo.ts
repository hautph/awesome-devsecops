import type { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  keywords?: string[];
}

export const SITE_CONFIG = {
  name: 'Awesome DevSecOps',
  description: 'A comprehensive guide to DevSecOps practices and implementation',
  url: 'https://awesome-devsecops.example.com',
  image: '/og-image.png',
  twitter: '@devsecops',
  keywords: [
    'DevSecOps',
    'security',
    'development',
    'operations',
    'CI/CD',
    'automation',
    'SAST',
    'DAST',
    'container security',
    'cloud security'
  ]
};

export function generatePageMetadata({
  title,
  description,
  pathname,
  image = `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description.substring(0, 100))}`,
  keywords = []
}: PageMetadata): Metadata {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;
  const fullUrl = `${SITE_CONFIG.url}${pathname}`;
  const allKeywords = [...SITE_CONFIG.keywords, ...keywords].join(', ');

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: fullUrl
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: SITE_CONFIG.twitter,
      images: [image]
    }
  };
}

// Structured data generators
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    sameAs: [
      'https://github.com/awesome-devsecops',
      'https://twitter.com/devsecops',
      'https://linkedin.com/company/devsecops'
    ],
    description: SITE_CONFIG.description
  };
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateBreadcrumbJsonLd(pathname: string, pageTitle: string) {
  const breadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_CONFIG.url
    }
  ];

  // Add intermediate breadcrumbs based on pathname
  const pathParts = pathname.split('/').filter(Boolean);
  let currentPath = '';

  pathParts.forEach((part, index) => {
    currentPath += `/${part}`;
    breadcrumbs.push({
      '@type': 'ListItem',
      position: index + 2,
      name: part.charAt(0).toUpperCase() + part.slice(1),
      item: `${SITE_CONFIG.url}${currentPath}`
    });
  });

  // Add current page
  breadcrumbs.push({
    '@type': 'ListItem',
    position: breadcrumbs.length + 1,
    name: pageTitle,
    item: `${SITE_CONFIG.url}${pathname}`
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs
  };
}

export function generateFAQJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is DevSecOps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DevSecOps is the integration of security practices within the DevOps process. It aims to bridge the gap between development, security, and operations teams by introducing security controls earlier in the software development lifecycle.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why is DevSecOps important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DevSecOps is important because it helps organizations shift security left in the development process, reducing vulnerabilities, improving compliance, and enabling faster, more secure software delivery.'
        }
      },
      {
        '@type': 'Question',
        name: 'What tools are commonly used in DevSecOps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common DevSecOps tools include SAST tools like SonarQube and CodeQL, DAST tools like OWASP ZAP, container security tools like Trivy, and infrastructure security tools like Checkov and tfsec.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I get started with DevSecOps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start by establishing security champions in your development teams, implementing basic security training, setting up vulnerability scanning in your CI/CD pipelines, and gradually integrating security practices throughout your development lifecycle.'
        }
      }
    ]
  };
}