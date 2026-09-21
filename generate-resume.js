import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  unit: 'pt',
  format: 'letter' // 612 x 792 pt
});

const pageWidth = 612;
const margin = 40;
const contentWidth = pageWidth - margin * 2; // 532 pt

// Colors
const black = '#111111';
const gray = '#444444';
const lightGray = '#777777';
const lineCol = '#CCCCCC';

// Helper for section header
function drawSectionHeader(title, y) {
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(black);
  doc.text(title.toUpperCase(), margin, y);
  doc.setDrawColor(20, 20, 20);
  doc.setLineWidth(0.75);
  doc.line(margin, y + 3, margin + contentWidth, y + 3);
  return y + 16;
}

// Helper for multi-line text
function drawWrappedText(text, x, y, width, lineHeight = 12, font = 'times', style = 'normal', size = 9.5, color = black) {
  doc.setFont(font, style);
  doc.setFontSize(size);
  doc.setTextColor(color);
  const lines = doc.splitTextToSize(text, width);
  lines.forEach((line, index) => {
    doc.text(line, x, y + index * lineHeight);
  });
  return y + lines.length * lineHeight;
}

// Helper for bullet items
function drawBullet(text, y, font = 'times', style = 'normal', size = 9.5, lineHeight = 12) {
  doc.setFont('times', 'bold');
  doc.setFontSize(size);
  doc.setTextColor(black);
  doc.text('•', margin + 8, y);
  
  doc.setFont(font, style);
  doc.setFontSize(size);
  doc.setTextColor(black);
  const lines = doc.splitTextToSize(text, contentWidth - 22);
  lines.forEach((line, index) => {
    doc.text(line, margin + 20, y + index * lineHeight);
  });
  return y + lines.length * lineHeight + 3;
}

// ==========================================
// PAGE 1
// ==========================================
let curY = 48;

// Name
doc.setFont('times', 'bold');
doc.setFontSize(18);
doc.setTextColor(black);
doc.text('SUBHAM KUMAR', pageWidth / 2, curY, { align: 'center' });
curY += 16;

// Subheader Contacts
doc.setFont('times', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(gray);
doc.text('+91 6201072469      Delhi, India      Open to Remote Opportunities', pageWidth / 2, curY, { align: 'center' });
curY += 13;
doc.text('subhamkumar614@gmail.com      LinkedIn      Dribbble      Portfolio', pageWidth / 2, curY, { align: 'center' });
curY += 22;

// 1. PROFESSIONAL SUMMARY
curY = drawSectionHeader('Professional Summary', curY);
const summaryText = "Product-focused UI/UX Designer with 2+ years of experience creating fintech, SaaS, web, and mobile experiences across the full product design lifecycle. Strong background in human-centered design, user research, information architecture, interaction patterns, usability evaluation, responsive interfaces, accessibility, and design systems. Advanced Figma expertise across Auto Layout, Components, Variants, prototyping, and developer handoff. Experienced collaborating across product, engineering, and business functions to translate requirements into intuitive, scalable, and accessible digital products within Agile/Scrum environments.";
curY = drawWrappedText(summaryText, margin, curY, contentWidth, 12.5, 'times', 'normal', 9.2);
curY += 12;

// 2. EDUCATION
curY = drawSectionHeader('Education', curY);
doc.setFont('times', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(black);
doc.text('Bachelor of Technology (B.Tech.) – Computer Science and Engineering', margin, curY);
doc.setFont('times', 'normal');
doc.text('2020 – 2024', margin + contentWidth, curY, { align: 'right' });
curY += 12;
doc.setFont('times', 'normal');
doc.setTextColor(gray);
doc.text('Silicon Institute of Technology', margin, curY);
curY += 18;

// 3. SKILLS
curY = drawSectionHeader('Skills', curY);

const skillsData = [
  { label: 'UX Research & Strategy:', desc: 'User Research, User Interviews, Usability Testing, Competitive Analysis, UX Audits, Design Thinking, Product Thinking, User-Centered Design' },
  { label: 'UX & Product Design:', desc: 'User Flows, Journey Mapping, Information Architecture, Interaction Design, Wireframing, Task Analysis, Prototyping, Prototype Validation' },
  { label: 'UI & Visual Design:', desc: 'UI Design, Visual Design, Responsive Design, Mobile UI, Web Design, Visual Hierarchy, Typography, Color Theory, Data Visualization' },
  { label: 'Design Systems & Accessibility:', desc: 'Design Systems, Component Libraries, Reusable Components, Design Tokens, Figma Auto Layout, Components, Variants, WCAG 2.1 AA, Inclusive Design, Accessible Interaction Patterns' },
  { label: 'Design Tools:', desc: 'Figma, FigJam, Adobe XD, Canva, Miro, Jira' },
  { label: 'Technical Skills:', desc: 'HTML, CSS, JavaScript, WordPress, Elementor, WooCommerce, Git, GitHub, VS Code' },
  { label: 'Collaboration:', desc: 'Agile, Scrum, Stakeholder Management, Cross-functional Collaboration, Design Reviews, Design Critiques, Design Documentation, Developer Handoff' },
];

skillsData.forEach((item) => {
  doc.setFont('times', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(black);
  doc.text(item.label, margin, curY);
  
  const labelWidth = doc.getTextWidth(item.label) + 4;
  doc.setFont('times', 'normal');
  const fullText = item.desc;
  
  const textLines = doc.splitTextToSize(fullText, contentWidth - labelWidth);
  doc.text(textLines[0], margin + labelWidth, curY);
  
  if (textLines.length > 1) {
    for (let i = 1; i < textLines.length; i++) {
      curY += 11;
      doc.text(textLines[i], margin, curY);
    }
  }
  curY += 12;
});
curY += 6;

// 4. EXPERIENCE
curY = drawSectionHeader('Experience', curY);
doc.setFont('times', 'bold');
doc.setFontSize(10);
doc.setTextColor(black);
doc.text('UI/UX Designer', margin, curY);
doc.setFont('times', 'normal');
doc.text('Sept 2024 – Present', margin + contentWidth, curY, { align: 'right' });
curY += 12;
doc.setFont('times', 'italic');
doc.setTextColor(gray);
doc.text('SwiftSBF', margin, curY);
doc.text('Remote, Full-Time', margin + contentWidth, curY, { align: 'right' });
curY += 13;

const expBullets = [
  "Owned the end-to-end product design lifecycle for financial-services web and mobile experiences, converting user needs and business requirements into user flows, wireframes, prototypes, responsive screens, and implementation-ready Figma specifications; shortened design-to-development handoff time by 30%.",
  "Analyzed navigation, content hierarchy, task paths, and interaction patterns to uncover friction points, translating findings into iterative solutions that improved product clarity and reduced UI-related support issues.",
  "Established a scalable Figma component library containing 60+ reusable elements across forms, buttons, modals, charts, tables, icons, and alerts, increasing interface consistency across product and growth initiatives.",
  "Embedded responsive behavior, WCAG 2.1 accessibility principles, inclusive design practices, and micro-interactions into desktop and mobile experiences to support consistent behavior across breakpoints.",
  "Coordinated cross-functional delivery across product, engineering, and business teams in Agile/Scrum workflows, facilitating design critiques and reviews, documenting decisions, resolving implementation questions, and incorporating structured feedback into subsequent iterations."
];

expBullets.forEach((bullet) => {
  curY = drawBullet(bullet, curY, 'times', 'normal', 9, 11.5);
});

// ==========================================
// PAGE 2
// ==========================================
doc.addPage();
curY = 48;

// 5. PROJECTS
curY = drawSectionHeader('Projects', curY);

const projectsData = [
  {
    title: 'AlphaTrade Pro – Trading Platform',
    bullets: [
      'Audited 5+ trading platforms to benchmark navigation, chart interaction, watchlists, market analysis, and order-placement workflows; mapped core user journeys to identify usability and information-hierarchy opportunities.',
      'Translated findings into low-fidelity concepts, high-fidelity screens, and interactive Figma prototypes supported by a 50+ component library; optimized dashboard hierarchy across 8+ responsive breakpoints, reducing data-interpretation time by 40%.'
    ]
  },
  {
    title: 'Aetheric Aviation – Flight Booking Website',
    bullets: [
      'Investigated a 9-screen booking journey through UX research and task analysis, identifying navigation and information-architecture barriers across key booking tasks.',
      'Restructured task flows and developed wireframes, polished interfaces, and interactive prototypes validated with 10+ participants across two rounds; streamlined the journey from 9 screens to 4, cutting task completion time by 35% and improving accessibility evaluation results by 60%.'
    ]
  },
  {
    title: 'Medi Care – Healthcare Appointment App',
    bullets: [
      'Interviewed 12+ participants to uncover usability barriers affecting older and less tech-savvy users across iOS and Android appointment workflows; identified opportunities to simplify navigation and reduce input complexity.',
      'Reframed the information architecture, eliminated redundant fields, and condensed the process from 7 stages to 3; established a WCAG 2.1 AA-focused component system with 40+ reusable elements, increasing task success by 50% and reducing measured drop-off by 45%.'
    ]
  },
  {
    title: 'FlowCRM – SaaS CRM Dashboard Redesign',
    bullets: [
      'Evaluated a SaaS CRM dashboard through user research, competitive benchmarking, and information-architecture analysis to uncover navigation and task-efficiency gaps.',
      'Produced wireframes, high-fidelity interfaces, Auto Layout components, and clickable prototypes in Figma; refined navigation and task structure to deliver 35% faster task completion and a 30% improvement in usability testing results.'
    ]
  },
  {
    title: 'QuickBite – Food Delivery Mobile App',
    bullets: [
      'Crafted a responsive food-delivery experience centered on streamlined navigation, accessible interaction patterns, visual hierarchy, and key ordering flows.',
      'Applied prototype validation and usability feedback to refine the ordering journey, contributing to a 28% increase in measured user satisfaction.'
    ]
  },
  {
    title: 'StyleCart – E-Commerce Website Redesign',
    bullets: [
      'Reworked an e-commerce experience using design thinking, responsive grids, information architecture, typography, and content hierarchy to improve browsing efficiency.',
      'Simplified category structures and discovery paths, making product exploration more intuitive and improving measured product discovery by 38%.'
    ]
  }
];

projectsData.forEach((proj) => {
  doc.setFont('times', 'bold');
  doc.setFontSize(9.8);
  doc.setTextColor(black);
  doc.text(proj.title, margin, curY);
  curY += 11;
  
  proj.bullets.forEach((bullet) => {
    curY = drawBullet(bullet, curY, 'times', 'normal', 9, 11.5);
  });
  curY += 4;
});

// 6. ACHIEVEMENTS
curY = drawSectionHeader('Achievements', curY);
const hackathonBullet = 'Finalist – Smart India Hackathon 2022: Selected as a finalist in a national-level innovation and software development competition involving 10,000+ participants across India.';
curY = drawBullet(hackathonBullet, curY, 'times', 'normal', 9.2, 12);

// Output and write files
const pdfOutput = doc.output('arraybuffer');
const targetDir = path.resolve('public');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'Subham_Kumar_Resume.pdf'), Buffer.from(pdfOutput));
fs.writeFileSync(path.join(targetDir, 'resume.pdf'), Buffer.from(pdfOutput));

console.log('Successfully generated Subham_Kumar_Resume.pdf and resume.pdf in public directory!');
