import { NavItem, Service, ProcessStep, FAQ } from '../types/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    title: 'Gold Hallmarking',
    description: 'BIS-certified hallmarking services with highest accuracy standards for gold jewelry verification and certification.',
    icon: 'shield-check',
  },
  {
    title: 'HUID Registration',
    description: 'Unique Identification Number (HUID) registration for jewelry items as per the latest government regulations.',
    icon: 'fingerprint',
  },
  {
    title: 'Quality Testing',
    description: 'High-precision testing using XRF spectrometer and fire assay techniques to ensure accurate gold purity assessment.',
    icon: 'microscope',
  },
  {
    title: 'Compliance Consultation',
    description: 'Expert advice for manufacturers and retailers on hallmarking compliance, standards, and best practices.',
    icon: 'clipboard-check',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Jewelry Submission',
    description: 'Drop off your jewelry items at our center for testing and hallmarking.',
    icon: 'package',
  },
  {
    step: 2,
    title: 'Quality Testing',
    description: 'Gold quality and purity is verified using advanced technology including XRF spectrometer and fire assay methods.',
    icon: 'flaskconical',
  },
  {
    step: 3,
    title: 'Hallmark Application',
    description: 'BIS-certified hallmark is stamped on approved pieces, certifying the gold purity.',
    icon: 'stamper',
  },
  {
    step: 4,
    title: 'HUID Registration',
    description: 'Each piece receives a unique HUID number that is registered in the national database.',
    icon: 'qrcode',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'What is hallmarking and why is it important?',
    answer: 'Hallmarking is the accurate determination and official recording of the proportionate content of precious metal in jewelry. It is important as it protects consumers from potential fraud and ensures the jewelry you purchase has the precious metal content as claimed by the seller.'
  },
  {
    question: 'What is HUID and why is it necessary?',
    answer: 'HUID (Hallmark Unique Identification) is a unique number given to every piece of jewelry during the hallmarking process. It helps in tracing the origin of the jewelry and ensures transparency in the jewelry business, protecting both consumers and ethical businesses.'
  },
  {
    question: 'How long does the hallmarking process take?',
    answer: 'The standard processing time for hallmarking is 24-48 hours. However, this may vary based on the volume of items submitted and complexity of testing required.'
  },
  {
    question: 'What types of jewelry can be hallmarked?',
    answer: 'All gold jewelry of 14K, 18K, and 22K can be hallmarked. As per BIS regulations, gold of 9K, 23K and other purities are also eligible for hallmarking.'
  },
];

export const contactInfo = {
  address: '60A Nalini Seth Road, Sonapatty, Bara Bazar, Kolkata – 700007',
  phone: '+91 98765 43210',
  email: 'contact@ushahallmarking.com',
  hours: 'Monday to Saturday: 10:00 AM - 7:00 PM',
};