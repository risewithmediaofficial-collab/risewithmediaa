import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error(`Dist directory does not exist: ${distDir}`);
  process.exit(1);
}

const baseHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error(`Base index.html does not exist: ${baseHtmlPath}`);
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

const routes = [
  {
    route: 'works',
    title: 'Case Studies & Client Results | Digital Marketing Krishnagiri | Rise With Media',
    description: 'Explore verified client results, 10x ROAS Meta ad campaigns, 2.5M+ viral reel views, and web design case studies from Rise With Media across Krishnagiri, Hosur, and Tamil Nadu.',
    canonical: 'https://risewithmedia.com/works',
    keywords: 'digital marketing case studies Krishnagiri, Meta ads results Hosur, Instagram reels marketing Tamil Nadu, client portfolio Rise With Media',
    h1: 'Case Studies & Verified Client Growth — Rise With Media',
    tagline: 'Real Results for Businesses in Krishnagiri, Hosur, Dharmapuri, Salem & Bengaluru',
    bodyText: 'Discover how Rise With Media helps regional and national brands achieve measurable scaling through high-converting Meta ads, viral short-form video production, SEO optimization, and bespoke website funnels.',
    highlights: [
      'Real Estate: 340+ Qualified Property Enquiries in 45 Days',
      'Healthcare: 180+ High-Intent Patient Bookings Generated',
      'E-Commerce & Retail: 4.8x Average Return On Ad Spend',
      'Hospitality: 2.5M+ Organic Reel Views Across Tamil Nadu'
    ]
  },
  {
    route: 'clients',
    title: 'Our Clients & Partner Reviews | Rise With Media Krishnagiri & Hosur',
    description: 'See why 50+ businesses in Krishnagiri, Hosur, Salem, and Bengaluru trust Rise With Media for performance marketing, social media reels, and web development.',
    canonical: 'https://risewithmedia.com/clients',
    keywords: 'digital marketing reviews Krishnagiri, client testimonials Hosur, trusted agency Tamil Nadu, Rise With Media clients',
    h1: 'Clients & Partner Reviews — Rise With Media',
    tagline: 'Trusted by 50+ Industry Leaders Across South India',
    bodyText: 'From local retail brands in Krishnagiri to fast-growing enterprises in Hosur and Bengaluru, our partners trust us for creative excellence and high-ROI execution.',
    highlights: [
      'Rated 4.9/5 by Local Business Owners & Founders',
      '99.8% Client Retention Across Active Campaigns',
      'Transparent Weekly Reporting & Live WhatsApp Dashboards',
      'Dedicated Account Management & Rapid Response'
    ]
  },
  {
    route: 'softwares',
    title: 'SaaS & WhatsApp CRM Automation Software | Rise With Media Krishnagiri',
    description: 'Streamline business operations with custom SaaS tools, automated WhatsApp lead management, and agency CRM systems built by Rise With Media.',
    canonical: 'https://risewithmedia.com/softwares',
    keywords: 'WhatsApp marketing software Krishnagiri, CRM software Tamil Nadu, business automation tools Hosur, custom SaaS development',
    h1: 'Custom SaaS & Business Automation Software — Rise With Media',
    tagline: 'Automate Lead Routing, Client Communication & Internal Workflows',
    bodyText: 'We build proprietary software solutions that eliminate manual bottlenecks, integrate WhatsApp Cloud API for instant lead response, and provide actionable analytics for growing businesses.',
    highlights: [
      'WhatsApp Cloud API Instant Auto-Responders',
      'Centralized Lead Management CRM for Sales Teams',
      'Automated Appointment Booking & Follow-Up Reminders',
      'Custom Multi-Tenant Dashboards & Analytics'
    ]
  },
  {
    route: 'contact',
    title: 'Contact Rise With Media | #1 Digital Marketing Agency in Krishnagiri & Hosur',
    description: 'Ready to scale your business? Contact Rise With Media in Krishnagiri, Tamil Nadu. Reach us on WhatsApp at +91 9345254648 or book a free strategy call.',
    canonical: 'https://risewithmedia.com/contact',
    keywords: 'contact digital marketing agency Krishnagiri, hire Meta ads expert Hosur, website designer near me, WhatsApp marketing consultation',
    h1: 'Contact Rise With Media — Free Strategy Consultation',
    tagline: 'Let’s Engineer Measurable Momentum for Your Brand',
    bodyText: 'Ready to scale? Connect directly with our team in Krishnagiri, Tamil Nadu. We respond within 15 minutes on WhatsApp and deliver tailored growth roadmaps.',
    highlights: [
      'Office: Krishnagiri Main Road, Krishnagiri, Tamil Nadu 635001',
      'Phone / WhatsApp: +91 9345254648',
      'Email: hello@risewithmedia.com',
      'Serving: Krishnagiri, Hosur, Dharmapuri, Salem, Bengaluru & Globally'
    ]
  },
  {
    route: 'services/content-social',
    title: 'Social Media Marketing & Instagram Reels Agency Krishnagiri | Rise With Media',
    description: 'Build a dominant social media brand in Krishnagiri & Hosur. Viral Instagram reel production, video editing, social media management, and content strategy.',
    canonical: 'https://risewithmedia.com/services/content-social',
    keywords: 'social media marketing Krishnagiri, Instagram reels agency Hosur, video editing company near me, short form content Tamil Nadu',
    h1: 'Content & Social Media Marketing — Rise With Media',
    tagline: 'Build a Brand People Want to Follow Across Instagram & YouTube',
    bodyText: 'We handle end-to-end content production in Krishnagiri, Hosur, and regional hubs: viral Instagram reels shooting, scriptwriting, professional color grading, motion graphics, and daily organic channel management.',
    highlights: [
      'On-Location Video Shooting in Krishnagiri & Hosur',
      'High-Retention Short-Form Reels & Shorts Editing',
      'Brand Identity, Visual Posters & Carousel Graphics',
      'Organic Community Growth & Influencer Collaborations'
    ]
  },
  {
    route: 'services/websites-funnels',
    title: 'Website Design & Conversion Funnels Company in Krishnagiri | Rise With Media',
    description: 'Fast, mobile-friendly business websites and high-converting lead funnels in Krishnagiri, Hosur, and Dharmapuri. SEO-optimized for Google search rankings.',
    canonical: 'https://risewithmedia.com/services/websites-funnels',
    keywords: 'website design Krishnagiri, web development company Hosur, landing page designer Dharmapuri, business website developer Tamil Nadu',
    h1: 'Websites & Conversion Funnels — Rise With Media',
    tagline: 'Turn Online Traffic Into Paying Customers with High-Speed Web Design',
    bodyText: 'We design and engineer bespoke modern websites, landing pages, and automated sales funnels tailored for local businesses and regional enterprises in Tamil Nadu.',
    highlights: [
      'Mobile-First, Ultra-Fast Loading (Under 1s)',
      'Built-in Local SEO Foundation for Google Top-Ranking',
      'WhatsApp Instant Lead Integration & CRM Sync',
      'Conversion Rate Optimized UI/UX Designs'
    ]
  },
  {
    route: 'services/performance-marketing',
    title: 'Meta Ads & Performance Marketing Agency Krishnagiri & Hosur | Rise With Media',
    description: 'High-ROAS Facebook & Instagram advertising in Krishnagiri, Hosur, and Tamil Nadu. Proven lead generation funnels, precise audience targeting, and measurable ROI.',
    canonical: 'https://risewithmedia.com/services/performance-marketing',
    keywords: 'Meta ads agency Krishnagiri, Facebook advertising Hosur, performance marketing agency Tamil Nadu, lead generation specialist Salem',
    h1: 'Performance Marketing & Meta Ads — Rise With Media',
    tagline: 'Targeted Facebook & Instagram Ads Engineered for Maximum ROAS',
    bodyText: 'Stop wasting budget on vanity clicks. We deploy laser-targeted paid ad campaigns that generate pre-qualified inbound phone calls, WhatsApp inquiries, and high-value customer acquisitions.',
    highlights: [
      'Precision Hyperlocal & Regional Audience Targeting',
      'Rigorous Creative A/B Testing & Video Ad Frameworks',
      'Retargeting & Dynamic Prospecting Funnels',
      'Transparent Real-Time Return On Ad Spend Tracking'
    ]
  },
  {
    route: 'services/saas-technology',
    title: 'Custom SaaS & Business Automation Software Tamil Nadu | Rise With Media',
    description: 'Custom CRM systems, WhatsApp Cloud API automation, and scalable cloud business software engineered in Krishnagiri, Tamil Nadu.',
    canonical: 'https://risewithmedia.com/services/saas-technology',
    keywords: 'custom software development Krishnagiri, WhatsApp automation Hosur, SaaS agency Tamil Nadu, business CRM solutions',
    h1: 'Custom SaaS & Business Technology — Rise With Media',
    tagline: 'Scalable Software & Automation Tailored to Your Operating Model',
    bodyText: 'Custom digital infrastructure built for founders looking to automate manual follow-ups, organize operations, and run scalable multi-tenant platforms.',
    highlights: [
      'Custom CRM & Inbound Pipeline Management',
      'WhatsApp Business API Multi-Agent Inboxes',
      'Custom Dashboards, KPI Tracking & Role Permissions',
      'Cloud Scalability on Cloudflare, AWS & Supabase'
    ]
  }
];

let generatedCount = 0;

for (const item of routes) {
  const targetDir = path.join(distDir, item.route);
  fs.mkdirSync(targetDir, { recursive: true });

  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${item.title}</title>`);

  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${item.description}" />`);

  // Replace Keywords
  html = html.replace(/<meta name="keywords" content=".*?" \/>/i, `<meta name="keywords" content="${item.keywords}" />`);

  // Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${item.canonical}" />`);

  // Replace OpenGraph & Twitter
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${item.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${item.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${item.canonical}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${item.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${item.description}" />`);

  // Build Route-Specific Crawler Content for inside #root
  const highlightsHtml = item.highlights.map(h => `<li style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>✓</strong> ${h}</li>`).join('\n');

  const rootContent = `
    <div id="root">
      <header style="padding: 20px; border-bottom: 1px solid #eaeaea; max-width: 1200px; margin: 0 auto;">
        <nav aria-label="Main Navigation" style="display: flex; gap: 15px; flex-wrap: wrap;">
          <a href="/" style="color: #555; text-decoration: none;">Home</a>
          <a href="/works" style="color: #555; text-decoration: none;">Case Studies</a>
          <a href="/clients" style="color: #555; text-decoration: none;">Clients</a>
          <a href="/softwares" style="color: #555; text-decoration: none;">Softwares</a>
          <a href="/contact" style="color: #555; text-decoration: none;">Contact</a>
          <a href="/services/content-social" style="color: #12b7d4; text-decoration: none;">Social Media</a>
          <a href="/services/websites-funnels" style="color: #12b7d4; text-decoration: none;">Websites</a>
          <a href="/services/performance-marketing" style="color: #12b7d4; text-decoration: none;">Meta Ads</a>
          <a href="/services/saas-technology" style="color: #12b7d4; text-decoration: none;">SaaS</a>
        </nav>
      </header>

      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif; line-height: 1.6;">
        <p style="text-transform: uppercase; font-size: 0.85rem; font-weight: bold; color: #12b7d4; margin-bottom: 8px;">
          Rise With Media • Krishnagiri &amp; Hosur, Tamil Nadu
        </p>
        <h1 style="font-size: 2.4rem; font-weight: 900; color: #000; margin-bottom: 12px; line-height: 1.2;">
          ${item.h1}
        </h1>
        <p style="font-size: 1.2rem; color: #12b7d4; font-weight: 600; margin-bottom: 20px;">
          ${item.tagline}
        </p>
        <p style="color: #444; font-size: 1.05rem; margin-bottom: 25px; max-width: 800px;">
          ${item.bodyText}
        </p>

        <div style="background: #fafafa; border: 1px solid #eaeaea; border-radius: 16px; padding: 25px; margin-bottom: 30px; max-width: 800px;">
          <h2 style="font-size: 1.3rem; margin-top: 0; color: #000;">Key Capabilities &amp; Highlights</h2>
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${highlightsHtml}
          </ul>
        </div>

        <section style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 16px; padding: 25px; margin-bottom: 30px; max-width: 800px;">
          <h2 style="font-size: 1.2rem; color: #166534; margin-top: 0;">Local Service Locations</h2>
          <p style="color: #15803d; font-size: 0.95rem; margin: 0;">
            Serving businesses with dedicated digital marketing in <strong>Krishnagiri</strong>, <strong>Hosur</strong>, <strong>Dharmapuri</strong>, <strong>Salem</strong>, <strong>Bengaluru</strong>, <strong>Chennai</strong>, and across <strong>Tamil Nadu</strong>.
          </p>
        </section>

        <div style="margin-top: 25px;">
          <a href="https://wa.me/919345254648" style="background: #25D366; color: #fff; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 12px;">Chat on WhatsApp (+91 9345254648)</a>
          <a href="/contact" style="background: #000; color: #fff; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; display: inline-block;">Get Free Consultation →</a>
        </div>
      </main>
    </div>
  `;

  // Replace content inside <div id="root">...</div>
  html = html.replace(/<div id="root">[\s\S]*?<\/div>/i, rootContent.trim());

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
  generatedCount++;
  console.log(`[prerender] Generated static route: /${item.route}/index.html`);
}

console.log(`[prerender] Successfully generated ${generatedCount} static routes for Googlebot SEO & Cloudflare static serving!`);
