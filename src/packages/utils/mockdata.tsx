import React from 'react';
import {
  Department,
  Employee,
  LaunchPadNavItem,
  NewsItem,
  PCSNavItem,
  PerksItem,
  Role,
  Seniority,
  Skill,
  VideoItem,
  Workplace,
} from './mockdata.types';
import { IconName, Link, LinkButtonVariant } from '@eightfold.ai/octuple';

// BEGIN TODO: Add to octuple.
export const mdiAccountSearchOutline: IconName =
  'M10,13C9.65,13.59 9.36,14.24 9.19,14.93C6.5,15.16 3.9,16.42 3.9,17V18.1H9.2C9.37,18.78 9.65,19.42 10,20H2V17C2,14.34 7.33,13 10,13M10,4A4,4 0 0,1 14,8C14,8.91 13.69,9.75 13.18,10.43C12.32,10.75 11.55,11.26 10.91,11.9L10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,5.9A2.1,2.1 0 0,0 7.9,8A2.1,2.1 0 0,0 10,10.1A2.1,2.1 0 0,0 12.1,8A2.1,2.1 0 0,0 10,5.9M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14Z' as IconName;
export const mdiRadioboxMarked: IconName =
  'M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' as IconName;
export const mdiBrush: IconName =
  'M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z' as IconName;
export const mdiSilverwareForkKnife: IconName =
  'M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z' as IconName;
// END TODO: Add to octuple.

export const mockAvatarProps = {
  src: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
  alt: 'random profile image',
};

export const launchPadNavigationList: LaunchPadNavItem[] = ([] = [
  {
    disabled: false,
    text: 'PCS',
    url: '/pcs/loggedout?firstRun=0',
    variant: LinkButtonVariant.Neutral,
  },
  {
    disabled: true,
    text: 'TA',
    url: '/ta',
    variant: LinkButtonVariant.Neutral,
  },
  {
    disabled: true,
    text: 'TM',
    url: '/tm',
    variant: LinkButtonVariant.Neutral,
  },
  {
    disabled: true,
    text: 'Admin console',
    url: '/admin',
    variant: LinkButtonVariant.Neutral,
  },
]);

export const samplePCSNavigationList: PCSNavItem[] = ([] = [
  {
    disabled: false,
    text: 'Back to launchpad',
    url: '/',
    variant: LinkButtonVariant.Primary,
  },
  {
    disabled: true,
    text: 'Join talent network',
    url: '/pcs/loggedout?firstRun=1',
    variant: LinkButtonVariant.Primary,
  },
  {
    disabled: true,
    text: 'Candidate login',
    url: '/pcs/loggedout?firstRun=1',
    variant: LinkButtonVariant.Primary,
  },
]);

export const samplePerksList: PerksItem[] = [
  {
    description: 'Lunch',
    icon: mdiSilverwareForkKnife,
  },
  {
    description: 'Vacation',
    icon: IconName.mdiAirplane,
  },
  {
    description: 'Insurance',
    icon: IconName.mdiDoctor,
  },
  {
    description: 'Remote Work',
    icon: IconName.mdiHome,
  },
  {
    description: '401k',
    icon: IconName.mdiPiggyBank,
  },
];

export const sampleVideoList: VideoItem[] = [
  {
    description:
      'Hear from Cheryl Marquez, Director of Training , what she Loves About Eightfold',
    title: 'Cheryl Marquez, Director Of Training - What I Love About Eightfold',
    desktopVideo: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bauDWDAWUqw?si=na8jkSa4AKxV8aLc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
    mobileVideo: (
      <iframe
        width="200"
        height="315"
        src="https://www.youtube.com/embed/bauDWDAWUqw?si=na8jkSa4AKxV8aLc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    description:
      "Do you also thrive in environments that support growth mindsets? Hear Andrea talk about how she found that at Eightfold, and how she's realizing her passion to have a direct impact on people's lives through her work on the Eightfold Exchange",
    title:
      'Andrea Constantine - Talent Network Insights Manager At Eightfold.Ai',
    desktopVideo: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fPwsqRVuKjc?si=yL0SkV7W_04loq4w"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
    mobileVideo: (
      <iframe
        width="200"
        height="315"
        src="https://www.youtube.com/embed/fPwsqRVuKjc?si=yL0SkV7W_04loq4w"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    description:
      'This is why Michael Watson is so passioned about Eightfold\'s mission of helping everyone to find the right career. "I look back on the veterans that transition out the military and I am passioned about helping those folks because that is my story, that\'s the story of my family".',
    title: 'Michael Watson - Sr. Director Of Talent Transformation Advisory',
    desktopVideo: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/REB7GmJDIfo?si=GDevxIIFwPpa2KAb"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
    mobileVideo: (
      <iframe
        width="200"
        height="315"
        src="https://www.youtube.com/embed/REB7GmJDIfo?si=GDevxIIFwPpa2KAb"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    title: "Cultivate '21 Day 1 Highlights",
    desktopVideo: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/06QsJLy3uGA?si=xdfi-N-zVoG8lO1Y"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
    mobileVideo: (
      <iframe
        width="200"
        height="315"
        src="https://www.youtube.com/embed/06QsJLy3uGA?si=xdfi-N-zVoG8lO1Y"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    description:
      '"The thing that excite me most about Eightfold is that is a mission driven company. We have assembled one of the smartest teams imaginable in the space of talent" Partha Sarathi, Product Leader at Eightfold',
    title: 'Partha Sarathi, Product Leader At Eightfold',
    desktopVideo: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XBvC_-uC4tI?si=z0-CMuKllmaQliJ8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
    mobileVideo: (
      <iframe
        width="200"
        height="315"
        src="https://www.youtube.com/embed/XBvC_-uC4tI?si=z0-CMuKllmaQliJ8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    description:
      '"What\'s next for me, I mean, the sky is the limit and that is the exciting part about Eightfold" see why Hope Baker, Global Channel Business Manager, loves Eightfold, both, personally and professionally.',
    title: 'Hope Baker - Global Channel Business Manager At Eightfold',
    desktopVideo: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5Y7h57Tj3zk?si=ybtRFdDLOBMFdry9"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
    mobileVideo: (
      <iframe
        width="200"
        height="315"
        src="https://www.youtube.com/embed/5Y7h57Tj3zk?si=ybtRFdDLOBMFdry9"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    description:
      'Eightfold has raised a Series D funding round, and the amount, the valuation, and the enthusiasm of the investor community have placed us into rare air.',
    title: 'Eightfold AI Has Secured An Additional $125M In Funding',
    desktopVideo: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Fdpi5JmMO2c?si=XJjmSXZ4RZPYv2v_"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
    mobileVideo: (
      <iframe
        width="200"
        height="315"
        src="https://www.youtube.com/embed/Fdpi5JmMO2c?si=XJjmSXZ4RZPYv2v_"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    description:
      'Eightfold.ai is the first and only company applying AI/ML to the recruiting and talent management lifecycle. In this short video, Foundation Capital Founder, Ashu Garg, explains how Eightfold.ai is transforming the entire process to significantly improve the experience for both the candidate and the employer.',
    title: 'Eightfold.Ai Is Transforming The Recruiting Life Cycle',
    desktopVideo: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Vty-cWllieA?si=1ZjhRoCu8t7GD3M7"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
    mobileVideo: (
      <iframe
        width="200"
        height="315"
        src="https://www.youtube.com/embed/Vty-cWllieA?si=1ZjhRoCu8t7GD3M7"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    description:
      '"Eightfold has the most humanity-serving goals of any company I have ever worked at, and here is why"',
    title: 'Eightfold Senior Solutions Engineer Quin Adler',
    desktopVideo: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wEXsZuVX24A?si=bO5HsdajFFfwLdGr"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
    mobileVideo: (
      <iframe
        width="200"
        height="315"
        src="https://www.youtube.com/embed/wEXsZuVX24A?si=bO5HsdajFFfwLdGr"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
];

export const sampleNewsList: NewsItem[] = [
  {
    image:
      'https://static01.nyt.com/images/2018/12/07/business/07hiring/07hiring-facebookJumbo-v2.jpg?year=2018&h=550&w=1050&s=2eeab6d10918406e76cba5b6c68e8c1192e50528bbc9d5b639e1af40cf6dee62&k=ZQJBKqZ0VN',
    description:
      'A form of artificial intelligence is being used to surface job candidates with the attributes of a perfect fit, even without conventional credentials.',
    title: 'A.I. as Talent Scout: Unorthodox Hires, and Maybe Lower Pay',
    url: 'https://static01.nyt.com/images/2018/12/07/business/07hiring/07hiring-facebookJumbo-v2.jpg?year=2018&h=550&w=1050&s=2eeab6d10918406e76cba5b6c68e8c1192e50528bbc9d5b639e1af40cf6dee62&k=ZQJBKqZ0VN',
  },
  {
    image:
      'https://eightfold.ai/wp-content/uploads/Future_of_Work_with_Jenny_Dearborn.jpg',
    description:
      'With 25+ years in data analytics, talent technologies, and corporate learning, Jenny Dearborn recently joined our board of advisors.',
    title: 'Leading the future of work: An interview with Jenny Dearborn',
    url: 'https://stage.eightfold.ai/r?evt=article_click&ns=smartapply&domain=eightfold.ai&n=https%3A%2F%2Feightfold.ai%2Fblog%2Fleading-the-future-of-work-an-interview-with-jenny-dearborn%2F',
  },
  {
    image: 'https://eightfold.ai/wp-content/uploads/image3-18.jpg',
    description:
      "The data is clear: Diversity and inclusivity boost a company's bottom line. Here are five ways to foster an inclusive culture in your organization.",
    title:
      '5 things any company can do right now to promote an inclusive culture',
    url: 'https://stage.eightfold.ai/r?evt=article_click&ns=smartapply&domain=eightfold.ai&n=https%3A%2F%2Feightfold.ai%2Fblog%2Fpromote-inclusive-culture%2F',
  },
  {
    image: 'https://eightfold.ai/wp-content/uploads/image3-13.jpg',
    description:
      'Unconscious biases can hinder your hiring efforts. AI-enabled tools can help eliminate hiring biases and improve your entire process.',
    title:
      'How AI eliminates hiring biases across the entire recruitment process',
    url: 'https://stage.eightfold.ai/r?evt=article_click&ns=smartapply&domain=eightfold.ai&n=https%3A%2F%2Feightfold.ai%2Fblog%2Fhiring-biases%2F',
  },
  {
    image:
      'https://eightfold.ai/wp-content/uploads/EconomicsTimes-Tata-Communications-copy-2.png',
    description:
      'Tata Communications turns to AI for hiring and uses Eightfold to create a unified platform bridging multiple ATS, HRIS, and CRM systems. Read blog.',
    title:
      "Front page news: The Economic Times recognizes Tata Communication's success using Eightfold's Talent Intelligence Platform",
    url: 'https://stage.eightfold.ai/r?evt=article_click&ns=smartapply&domain=eightfold.ai&n=https%3A%2F%2Feightfold.ai%2Fblog%2Ffront-page-news-the-economic-times-recognizes-tata-communications-success-using-eightfolds-talent-intelligence-platform%2F',
  },
  {
    image:
      'https://eightfold.ai/wp-content/uploads/image2-3-e1549909690648.jpg',
    description:
      "Want to identify future leaders and nurture your organization's top performing talent? Here's how data can help.",
    title:
      'Recognizing talent: How data helps companies identify future leaders',
    url: 'https://stage.eightfold.ai/r?evt=article_click&ns=smartapply&domain=eightfold.ai&n=https%3A%2F%2Feightfold.ai%2Fblog%2Fidentify-future-leaders%2F',
  },
  {
    image: 'https://eightfold.ai/wp-content/uploads/iStock-682104014.jpg',
    description:
      'We started Eightfold because we believe that AI technology has a unique potential to help companies and workers find each other, making the job search process better and solving many of the intractable challenges of modern recruiting.',
    title: 'New York Times: Eightfold AI finds people for hard-to-fill roles',
    url: 'https://stage.eightfold.ai/r?evt=article_click&ns=smartapply&domain=eightfold.ai&n=https%3A%2F%2Feightfold.ai%2Fblog%2Fnew-york-times-eightfold-ai-finds-people-for-hard-to-fill-roles%2F',
  },
  {
    image:
      'https://eightfold.ai/wp-content/uploads/Better_Resume_and_Job_descriptions.jpg',
    description:
      'According to a recent Harris Media poll, 73% of senior execs say that finding talent is a critical problem at their company—despite an overload of resumes.',
    title: "That resume stinks. But that job description's not much better.",
    url: 'https://stage.eightfold.ai/r?evt=article_click&ns=smartapply&domain=eightfold.ai&n=https%3A%2F%2Feightfold.ai%2Fblog%2Fthat-resume-stinks-but-that-job-descriptions-not-much-better%2F',
  },
];

export const sampleDepartmentList: Department[] = [
  {
    role: 'Customer Engineering',
    index: 0,
    selected: false,
  },
  {
    role: 'Customer Experience',
    index: 1,
    selected: false,
  },
  {
    role: 'Customer Support',
    index: 2,
    selected: false,
  },
  {
    role: 'Engineering',
    index: 3,
    selected: false,
  },
  {
    role: 'G&A',
    index: 4,
    selected: false,
  },
  {
    role: 'Marketing',
    index: 5,
    selected: false,
  },
  {
    role: 'Operations',
    index: 6,
    selected: false,
  },
  {
    role: 'Product',
    index: 7,
    selected: false,
  },
  {
    role: 'Product Delivery',
    index: 8,
    selected: false,
  },
  {
    role: 'Sales',
    index: 9,
    selected: false,
  },
];

export const sampleEmployeeList: Employee[] = [
  {
    department: 'Customer Engineering',
    index: 0,
    initials: 'JD',
    level: 1,
    location: 'Bengaluru, KA, India',
    name: 'Jane Doe',
    selected: false,
    skills: ['Python', 'Distributed Systems', 'Java', 'Saas'],
    title: 'Software Engineer, Customer Engineering',
  },
  {
    department: 'Customer Experience',
    index: 1,
    initials: 'AB',
    level: 2,
    location: 'San Francisco, CA, USA',
    name: 'Alex Brown',
    selected: false,
    skills: ['JavaScript', 'React', 'Node.js', 'GraphQL'],
    title: 'Senior Software Engineer, Customer Experience',
  },
  {
    department: 'Customer Support',
    index: 2,
    initials: 'LS',
    level: 1,
    location: 'New York, NY, USA',
    name: 'Lisa Smith',
    selected: false,
    skills: ['HTML', 'CSS', 'JavaScript', 'Troubleshooting'],
    title: 'Customer Support Specialist',
  },
  {
    department: 'Engineering',
    index: 3,
    initials: 'MP',
    level: 3,
    location: 'London, UK',
    name: 'Mark Parker',
    selected: false,
    skills: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
    title: 'Director of Engineering',
  },
  {
    department: 'G&A',
    index: 4,
    initials: 'KH',
    level: 1,
    location: 'Berlin, Germany',
    name: 'Kevin Harris',
    selected: false,
    skills: ['Finance', 'Accounting', 'Budgeting'],
    title: 'Finance Manager',
  },
  {
    department: 'Marketing',
    index: 5,
    initials: 'EM',
    level: 2,
    location: 'Paris, France',
    name: 'Emma Martin',
    selected: false,
    skills: ['Digital Marketing', 'Social Media', 'Content Creation'],
    title: 'Senior Marketing Specialist',
  },
  {
    department: 'Operations',
    index: 6,
    initials: 'RP',
    level: 1,
    location: 'Tokyo, Japan',
    name: 'Ryuji Park',
    selected: false,
    skills: ['Supply Chain Management', 'Logistics', 'Process Improvement'],
    title: 'Operations Analyst',
  },
  {
    department: 'Product',
    index: 7,
    initials: 'SC',
    level: 2,
    location: 'Sydney, Australia',
    name: 'Sophie Clark',
    selected: false,
    skills: ['Product Management', 'User Research', 'Wireframing'],
    title: 'Senior Product Manager',
  },
  {
    department: 'Product Delivery',
    index: 8,
    initials: 'JL',
    level: 1,
    location: 'Toronto, ON, Canada',
    name: 'John Lee',
    selected: false,
    skills: ['Agile Methodology', 'Scrum', 'Project Management'],
    title: 'Product Delivery Manager',
  },
  {
    department: 'Sales',
    index: 9,
    initials: 'MW',
    level: 3,
    location: 'Mexico City, Mexico',
    name: 'Maria Wong',
    selected: false,
    skills: ['Sales Strategy', 'Negotiation', 'Relationship Building'],
    title: 'Director of Sales',
  },
  {
    department: 'Customer Engineering',
    index: 10,
    initials: 'SD',
    level: 2,
    location: 'Bengaluru, KA, India',
    name: 'Samuel Davis',
    selected: false,
    skills: ['Python', 'Distributed Systems', 'Java', 'Saas'],
    title: 'Senior Software Engineer, Customer Engineering',
  },
  {
    department: 'Customer Experience',
    index: 11,
    initials: 'CH',
    level: 1,
    location: 'San Francisco, CA, USA',
    name: 'Chris Harris',
    selected: false,
    skills: ['JavaScript', 'React', 'Node.js', 'GraphQL'],
    title: 'Software Engineer, Customer Experience',
  },
  {
    department: 'Customer Support',
    index: 12,
    initials: 'MS',
    level: 1,
    location: 'New York, NY, USA',
    name: 'Michael Scott',
    selected: false,
    skills: ['HTML', 'CSS', 'JavaScript', 'Troubleshooting'],
    title: 'Customer Support Specialist',
  },
  {
    department: 'Engineering',
    index: 13,
    initials: 'AS',
    level: 3,
    location: 'London, UK',
    name: 'Anna Smith',
    selected: false,
    skills: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
    title: 'Director of Engineering',
  },
  {
    department: 'G&A',
    index: 14,
    initials: 'JW',
    level: 1,
    location: 'Berlin, Germany',
    name: 'Jessica Williams',
    selected: false,
    skills: ['Finance', 'Accounting', 'Budgeting'],
    title: 'Finance Manager',
  },
  {
    department: 'Marketing',
    index: 15,
    initials: 'DM',
    level: 2,
    location: 'Paris, France',
    name: 'David Miller',
    selected: false,
    skills: ['Digital Marketing', 'Social Media', 'Content Creation'],
    title: 'Senior Marketing Specialist',
  },
  {
    department: 'Operations',
    index: 16,
    initials: 'TK',
    level: 1,
    location: 'Tokyo, Japan',
    name: 'Takumi Kimura',
    selected: false,
    skills: ['Supply Chain Management', 'Logistics', 'Process Improvement'],
    title: 'Operations Analyst',
  },
  {
    department: 'Product',
    index: 17,
    initials: 'LC',
    level: 2,
    location: 'Sydney, Australia',
    name: 'Liam Campbell',
    selected: false,
    skills: ['Product Management', 'User Research', 'Wireframing'],
    title: 'Senior Product Manager',
  },
  {
    department: 'Product Delivery',
    index: 18,
    initials: 'AM',
    level: 1,
    location: 'Toronto, ON, Canada',
    name: 'Alexis Martinez',
    selected: false,
    skills: ['Agile Methodology', 'Scrum', 'Project Management'],
    title: 'Product Delivery Manager',
  },
  {
    department: 'Sales',
    index: 19,
    initials: 'JG',
    level: 3,
    location: 'Mexico City, Mexico',
    name: 'Juan Garcia',
    selected: false,
    skills: ['Sales Strategy', 'Negotiation', 'Relationship Building'],
    title: 'Director of Sales',
  },
];

export const sampleSeniorityList: Seniority[] = [
  {
    level: 2,
    index: 0,
    selected: false,
    title: 'Mid/Senior',
  },
  {
    level: 1,
    index: 1,
    selected: false,
    title: 'Entry',
  },
  {
    level: 0,
    index: 2,
    selected: false,
    title: 'Intern',
  },
  {
    level: 3,
    index: 3,
    selected: false,
    title: 'Director',
  },
];

export const sampleSkillList: Skill[] = [
  {
    name: 'Python',
    index: 0,
    selected: false,
  },
  {
    name: 'Distributed Systems',
    index: 1,
    selected: false,
  },
  {
    name: 'Java',
    index: 2,
    selected: false,
  },
  {
    name: 'Saas',
    index: 3,
    selected: false,
  },
  {
    name: 'Project Management',
    index: 4,
    selected: false,
  },
  {
    name: 'Web Applications',
    index: 5,
    selected: false,
  },
  {
    name: 'Api',
    index: 6,
    selected: false,
  },
  {
    name: 'Aws',
    index: 7,
    selected: false,
  },
  {
    name: 'Artificial Intelligence',
    index: 8,
    selected: false,
  },
  {
    name: 'Flask',
    index: 9,
    selected: false,
  },
  {
    name: 'Machine Learning',
    index: 10,
    selected: false,
  },
  {
    name: 'React',
    index: 11,
    selected: false,
  },
  {
    name: 'Sql',
    index: 12,
    selected: false,
  },
  {
    name: 'Technical Support',
    index: 13,
    selected: false,
  },
  {
    name: 'Agile Methodologies',
    index: 14,
    selected: false,
  },
  {
    name: 'Algorithms',
    index: 15,
    selected: false,
  },
  {
    name: 'Back End Development',
    index: 16,
    selected: false,
  },
  {
    name: 'Data Analysis',
    index: 17,
    selected: false,
  },
  {
    name: 'Data Science',
    index: 18,
    selected: false,
  },
  {
    name: 'Deep Learning',
    index: 19,
    selected: false,
  },
  {
    name: 'Frontend Development',
    index: 20,
    selected: false,
  },
  {
    name: 'Javascript',
    index: 21,
    selected: false,
  },
  {
    name: 'Microservices',
    index: 22,
    selected: false,
  },
  {
    name: 'Natural Language Processing',
    index: 23,
    selected: false,
  },
  {
    name: 'Troubleshooting',
    index: 24,
    selected: false,
  },
  {
    name: 'Ats',
    index: 25,
    selected: false,
  },
  {
    name: 'Apache Spark',
    index: 26,
    selected: false,
  },
  {
    name: 'Budget Management',
    index: 27,
    selected: false,
  },
  {
    name: 'Compliance',
    index: 28,
    selected: false,
  },
  {
    name: 'Consulting',
    index: 29,
    selected: false,
  },
  {
    name: 'Customer Support',
    index: 30,
    selected: false,
  },
  {
    name: 'Database',
    index: 31,
    selected: false,
  },
  {
    name: 'Full Stack Development',
    index: 32,
    selected: false,
  },
  {
    name: 'Marketing Communications',
    index: 33,
    selected: false,
  },
  {
    name: 'Marketing Strategy',
    index: 34,
    selected: false,
  },
  {
    name: 'Neural Networks',
    index: 35,
    selected: false,
  },
  {
    name: 'Problem Solving',
    index: 36,
    selected: false,
  },
  {
    name: 'Product Management',
    index: 37,
    selected: false,
  },
  {
    name: 'Product Roadmap',
    index: 38,
    selected: false,
  },
  {
    name: 'Product Strategy',
    index: 39,
    selected: false,
  },
  {
    name: 'Product Support',
    index: 40,
    selected: false,
  },
  {
    name: 'Programming',
    index: 41,
    selected: false,
  },
  {
    name: 'Python (Programming Language)',
    index: 42,
    selected: false,
  },
  {
    name: 'Rest Api',
    index: 43,
    selected: false,
  },
  {
    name: 'React.Js',
    index: 44,
    selected: false,
  },
  {
    name: 'Saas Software',
    index: 45,
    selected: false,
  },
  {
    name: 'Scripting',
    index: 46,
    selected: false,
  },
  {
    name: 'Software As A Service',
    index: 47,
    selected: false,
  },
  {
    name: 'Solution Selling',
    index: 48,
    selected: false,
  },
  {
    name: 'System Design',
    index: 49,
    selected: false,
  },
  {
    name: 'Tensorflow',
    index: 50,
    selected: false,
  },
  {
    name: 'Xml',
    index: 51,
    selected: false,
  },
  {
    name: 'Product Launch',
    index: 52,
    selected: false,
  },
  {
    name: 'Startup',
    index: 53,
    selected: false,
  },
  {
    name: 'Ai',
    index: 54,
    selected: false,
  },
  {
    name: 'Api Integrations',
    index: 55,
    selected: false,
  },
  {
    name: 'Applicant Tracking Systems',
    index: 56,
    selected: false,
  },
  {
    name: 'Application Support',
    index: 57,
    selected: false,
  },
  {
    name: 'Automation',
    index: 58,
    selected: false,
  },
  {
    name: 'B2b Software',
    index: 59,
    selected: false,
  },
  {
    name: 'B2c Software',
    index: 60,
    selected: false,
  },
  {
    name: 'Branding',
    index: 61,
    selected: false,
  },
  {
    name: 'Campaigns',
    index: 62,
    selected: false,
  },
  {
    name: 'Communication Skills',
    index: 63,
    selected: false,
  },
  {
    name: 'Conferences',
    index: 64,
    selected: false,
  },
  {
    name: 'Content Marketing Strategy',
    index: 65,
    selected: false,
  },
  {
    name: 'Conversational Ai',
    index: 66,
    selected: false,
  },
  {
    name: 'Customer Engagement',
    index: 67,
    selected: false,
  },
  {
    name: 'Data Structures',
    index: 68,
    selected: false,
  },
  {
    name: 'Data Structures And Algorithms',
    index: 69,
    selected: false,
  },
  {
    name: 'Debugging',
    index: 70,
    selected: false,
  },
  {
    name: 'Deployment',
    index: 71,
    selected: false,
  },
  {
    name: 'Docker',
    index: 72,
    selected: false,
  },
  {
    name: 'Email Marketing',
    index: 73,
    selected: false,
  },
  {
    name: 'Enterprise Software',
    index: 74,
    selected: false,
  },
  {
    name: 'Event Technology',
    index: 75,
    selected: false,
  },
  {
    name: 'Field Marketing',
    index: 76,
    selected: false,
  },
  {
    name: 'Flows',
    index: 77,
    selected: false,
  },
  {
    name: 'Generative Ai',
    index: 78,
    selected: false,
  },
  {
    name: 'Graphql',
    index: 79,
    selected: false,
  },
  {
    name: 'Hld',
    index: 80,
    selected: false,
  },
  {
    name: 'Hris',
    index: 81,
    selected: false,
  },
  {
    name: 'Help Desk Support',
    index: 82,
    selected: false,
  },
  {
    name: 'Integrated Marketing',
    index: 83,
    selected: false,
  },
  {
    name: 'Internal Communications',
    index: 84,
    selected: false,
  },
  {
    name: 'Kubernetes',
    index: 85,
    selected: false,
  },
  {
    name: 'Lld',
    index: 86,
    selected: false,
  },
  {
    name: 'Lamda',
    index: 87,
    selected: false,
  },
  {
    name: 'Leadership',
    index: 88,
    selected: false,
  },
  {
    name: 'Marketing',
    index: 89,
    selected: false,
  },
  {
    name: 'Marketing Initiatives',
    index: 90,
    selected: false,
  },
  {
    name: 'Marketing Operations',
    index: 91,
    selected: false,
  },
  {
    name: 'Marketing Programs',
    index: 92,
    selected: false,
  },
  {
    name: 'Micro Services',
    index: 93,
    selected: false,
  },
  {
    name: 'Presentation Skills',
    index: 94,
    selected: false,
  },
  {
    name: 'Product Design',
    index: 95,
    selected: false,
  },
  {
    name: 'Python Flask',
    index: 96,
    selected: false,
  },
  {
    name: 'Redis',
    index: 97,
    selected: false,
  },
  {
    name: 'Remote Troubleshooting',
    index: 98,
    selected: false,
  },
  {
    name: 'Reporting And Analysis',
    index: 99,
    selected: false,
  },
];

export const sampleWorkplaceList: Workplace[] = [
  {
    location: 'Hybrid',
    index: 0,
    selected: false,
  },
  {
    location: 'Onsite',
    index: 1,
    selected: false,
  },
  {
    location: 'Remote',
    index: 2,
    selected: false,
  },
];

export const sampleRoleList: Role[] = [
  {
    cart: false,
    geo: 'Bangalore, Karnataka, India',
    index: 0,
    jd: (
      <>
        <h3 style={{ color: 'var(--primary-color)' }}>About Us:</h3>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <strong>Our customers- </strong>
            <Link
              href="https://eightfold.ai/customers/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/
            </Link>
          </p>
          <p>
            <strong>Press- </strong>
            <Link
              href="https://eightfold.ai/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/press/
            </Link>
          </p>
          <p>
            <span>You may want to refer to the media coverage on </span>
            <Link
              href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOi04NDg4OTM5NTEzMTUxNjYxMjU5fQ._NS1VwT4eE55aDSDvPtC2I2h2VY&amp;n=https%3A%2F%2Ftechcrunch.com%2F2021%2F06%2F10%2Fai-startup-eightfold-valued-at-2-1b-in-softbank-led-220m-funding%2F%3Fguccounter%3D1"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              TechCrunch
            </Link>
            <span> and </span>
            <Link
              href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOjUyMzYwNDQzNzAwMDE1MjA0Nzh9.C-GpQuorBapAlzOk1xHVoU0nXrs&amp;n=https%3A%2F%2Fwww.reuters.com%2Fbusiness%2Ftalent-matching-startup-eightfold-ai-raises-220-mln-round-led-by-softbank-vision-2021-06-10%2F"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              Reuters.
            </Link>
          </p>
        </div>
        <h3>Job Description: As a Software Engineer;</h3>
        <h3 style={{ color: 'var(--primary-color)' }}>What You'll DO:</h3>
        <ul>
          <li>
            <p>
              Develop robust, scalable, and configurable applications and
              modules with an emphasis on quality, performance, design, and
              re-usability.
            </p>
          </li>
          <li>
            <p>
              Explore and learn the distributed systems, microservices,
              scalability etc.
            </p>
          </li>
          <li>
            <p>
              Collaborate with Product Management, Design, and the rest of
              Engineering to iterate and enhance our product
            </p>
          </li>
          <li>
            <p>
              Prototype new ideas and iterate toward the ideal user experience
            </p>
          </li>
          <li>
            <p>
              Participate in technical discussions and plans to improve our
              overall software code and quality
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What We Look For:</h3>
        <ul>
          <li>
            <p>
              A solid grounding in Computer Science fundamentals with a prior
              work experience of 1-2 years.
            </p>
          </li>
          <li>
            <p>Strong hold on data structures and algorithms</p>
          </li>
          <li>
            <p>
              Passionate about designing, building, launching, and maintaining
              products
            </p>
          </li>
          <li>
            <p>
              Self-starter who loves to solve challenging problems in technology
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>Our Backend Stack:</h3>
        <p>
          We majorly use and are not limited to the below technologies. Also, we
          hire engineers coming with an experience in any of the mainstream
          programming languages.
        </p>
        <ul>
          <li>
            <p>Python, Flask, Tensorflow</p>
          </li>
          <li>
            <p>Apache Spark, Solr, Mysql, Docker</p>
          </li>
          <li>
            <p>
              Major AWS services like Aurora, S3, Redshift, Cloudformation, SNS,
              SQS etc
            </p>
          </li>
          <li>
            <p>Extensive use of AI and machine learning technologies</p>
          </li>
          <li>
            <p>Distributed system &amp; Microservices</p>
          </li>
        </ul>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in your work and see your work's positive impact
          on your colleagues, our customers, and the world. We believe in
          providing transparency and support so you can do the best work of your
          career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
      </>
    ),
    level: 1,
    location: 'Hybrid',
    priority: 0,
    role: 'Engineering',
    selected: true,
    skills: ['Python', 'Distributed Systems', 'Java', 'Saas'],
    title: 'Software Engineer, Customer Engineering',
  },
  {
    cart: false,
    geo: ['Bangalore', 'Noida, Uttar Pradesh, India'],
    index: 1,
    jd: (
      <>
        <h3 style={{ color: 'var(--primary-color)' }}>About Eightfold</h3>
        <p>
          Eightfold was founded with a vision to solve for employment in our
          society. For decades, the connection between individuals and
          opportunities has been based on who the individuals are and the
          strength of their network, vs. their potential. Eightfold leverages
          artificial intelligence to transform how to think about skills and
          capabilities for individuals as well as how jobs and career decisions
          are made. Eightfold offers the industry's first AI-powered Talent
          Intelligence Platform to transform how organizations plan, hire,
          develop and retain a diverse workforce, enabling individuals to
          transform their career.
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <p>
          <span>You may want to refer to the media coverage on </span>
          <Link
            href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOi04NDg4OTM5NTEzMTUxNjYxMjU5fQ._NS1VwT4eE55aDSDvPtC2I2h2VY&amp;n=https://techcrunch.com/2021/06/10/ai-startup-eightfold-valued-at-2-1b-in-softbank-led-220m-funding/?guccounter=1%22%20%5Ct%20%22_blank"
            target="_blank"
            variant="primary"
          >
            TechCrunch
          </Link>{' '}
          <span>and </span>
          <Link
            href="https://www.reuters.com/business/talent-matching-startup-eightfold-ai-raises-220-mln-round-led-by-softbank-vision-2021-06-10/"
            target="_blank"
            variant="primary"
          >
            Reuters.
          </Link>{' '}
          <Link href="https://eightfold.ai/" target="_blank" variant="primary">
            <strong>Eightfold.ai</strong>
          </Link>{' '}
          <span>is led by </span>
          <strong>Ashutosh Garg, </strong>
          <span>
            a PhD in Machine Learning/IIT Delhi alumni who managed Search and
            Personalization at Google, and{' '}
          </span>
          <strong>Varun Kacholia-</strong>
          <span>
            IIT Bombay alumni, who led the News Feed Ranking team at Facebook
            and developed YouTube Search at Google.
          </span>
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          What You do:
        </h3>
        <ul>
          <li>
            <p>Define product specifications and deliver with quality</p>
          </li>
          <li>
            <p>
              Listen to the voice of our customers connect their needs to the
              product roadmap
            </p>
          </li>
          <li>
            <p>Connect business outcomes to product roadmap</p>
          </li>
          <li>
            <p>
              Partner with and drive support for your vision across executive
              leadership, product design, marketing, customer success, and sales
            </p>
          </li>
          <li>
            <p>
              Conduct in-depth analysis of the market landscape for talent
              management to develop differentiating products in the market
            </p>
          </li>
          <li>
            <p>
              Foster our values of ownership, compassion, excellence,
              transparency, and integrity.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What you bring</h3>
        <ul>
          <li>
            <p>
              A passion for Eightfold's vision: The right career for everyone in
              the world.
            </p>
          </li>
          <li>
            <p>
              Technical knowledge and hands-on background of shipping large
              scale platform technology
            </p>
          </li>
          <li>
            <p>
              Exceptional interpersonal and communication skills, both written
              and verbal
            </p>
          </li>
          <li>
            <p>
              Exceptional stakeholder management capabilities and cross
              functional team management
            </p>
          </li>
          <li>
            <p>
              Deep passion for data driven execution and user-centric
              solutioning
            </p>
          </li>
          <li>
            <p>An aptitude for rapid learning</p>
          </li>
        </ul>
        <p>
          We believe in giving you responsibility, not a task. We want you to
          have ownership and pride in the work you are doing, and see the
          positive impact of your work on your colleagues, our customers, and
          the world. We believe in providing transparency and support, so you
          can do the best work of your career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, our employees will return to
            the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 0,
    role: 'Product',
    selected: false,
    skills: ['Product Management', 'Product Roadmap', 'Product Strategy'],
    title: 'Product Manager II - Talent Management',
  },
  {
    cart: false,
    geo: 'Bangalore, Karnataka, India',
    index: 2,
    jd: (
      <>
        <h3 style={{ color: 'var(--primary-color)' }}>About Us:</h3>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <h3>What You'll learn to do:</h3>
        <p>
          As an Engineer specialising in VPAT (Voluntary Product Accessibility
          Template) or WCAG (Web Content Accessibility Guidelines)
          Assessability, you will play a crucial role in ensuring that digital
          products, services, and platforms comply with accessibility standards
          for users with disabilities. You will utilize your technical expertise
          and in-depth knowledge of accessibility guidelines to assess, enhance,
          and maintain the accessibility of software applications and digital
          assets. Collaborating with cross-functional teams, you will lead
          accessibility initiatives, provide technical guidance, and drive the
          implementation of best practices to achieve inclusive design and
          development.
        </p>
        <h3>Key Responsibilities:</h3>
        <ul>
          <li>
            <p>
              <strong style={{ color: 'var(--primary-color)' }}>
                Accessibility Assessments and Audits:
              </strong>
            </p>
          </li>
          <li>
            <p>
              Conduct comprehensive accessibility assessments of software
              applications, websites, and digital content to evaluate compliance
              with WCAG guidelines or VPAT requirements.
            </p>
          </li>
          <li>
            <p>
              Utilize automated testing tools, assistive technologies, and
              manual testing techniques to identify accessibility barriers and
              issues.
            </p>
          </li>
          <li>
            <p>
              Document assessment findings, prioritize accessibility gaps, and
              provide actionable recommendations for remediation.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <strong style={{ color: 'var(--primary-color)' }}>
                Accessibility Integration and Solutions:
              </strong>
            </p>
          </li>
          <li>
            <p>
              Collaborate with development teams to integrate accessibility
              considerations into the design, development, and testing phases of
              projects.
            </p>
          </li>
          <li>
            <p>
              Provide technical expertise in accessible design patterns, coding
              techniques, and assistive technologies to ensure inclusive user
              experiences.
            </p>
          </li>
          <li>
            <p>
              Implement accessibility solutions, including modifying code,
              adjusting markup, and enhancing user interfaces to meet WCAG or
              VPAT standards.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <strong style={{ color: 'var(--primary-color)' }}>
                Technical Guidance and Training:
              </strong>
            </p>
          </li>
          <li>
            <p>
              Offer technical guidance and mentorship to development teams,
              promoting accessibility best practices and standards.
            </p>
          </li>
          <li>
            <p>
              Provide training on accessibility principles, guidelines, and
              tools to raise awareness and improve the accessibility skill set
              of team members.
            </p>
          </li>
          <li>
            <p>
              Serve as a subject matter expert on accessibility-related topics,
              staying abreast of evolving standards, regulations, and emerging
              technologies.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <strong style={{ color: 'var(--primary-color)' }}>
                Collaboration and Communication:
              </strong>
            </p>
          </li>
          <li>
            <p>
              Collaborate with designers, product managers, and stakeholders to
              advocate for accessibility in the product development lifecycle.
            </p>
          </li>
          <li>
            <p>
              Communicate effectively with cross-functional teams, translating
              technical concepts into accessible language and providing guidance
              on accessibility requirements and solutions.
            </p>
          </li>
          <li>
            <p>
              Collaborate with quality assurance teams to ensure that
              accessibility is included in the testing process and that
              accessibility-related defects are identified and addressed.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <strong style={{ color: 'var(--primary-color)' }}>
                Accessibility Standards and Compliance:
              </strong>
            </p>
          </li>
          <li>
            <p>
              Stay up-to-date with accessibility laws, regulations, and
              standards, such as ADA, Section 508, WCAG, and VPAT.
            </p>
          </li>
          <li>
            <p>
              Keep abreast of accessibility-related advancements, research, and
              industry trends, and apply relevant knowledge to enhance
              accessibility practices within the organization.
            </p>
          </li>
          <li>
            <p>
              Contribute to the development and implementation of accessibility
              policies, guidelines, and strategies to ensure compliance with
              relevant standards.
            </p>
          </li>
        </ul>
        <h3>Qualifications:</h3>
        <ul>
          <li>
            <p>
              Bachelor's or Master's degree in Computer Science, Software
              Engineering, or a related field.
            </p>
          </li>
          <li>
            <p>
              In-depth knowledge of WCAG guidelines (WCAG 2.1 or later) or VPAT
              requirements and their application in software development.
            </p>
          </li>
          <li>
            <p>
              Proficiency in using automated accessibility testing tools (e.g.,
              Axe, WAVE, Lighthouse) and assistive technologies (e.g., screen
              readers, keyboard navigation) for accessibility assessments.
            </p>
          </li>
          <li>
            <p>
              Familiarity with accessibility-related technologies and frameworks
              (e.g., ARIA, responsive design, mobile accessibility).
            </p>
          </li>
          <li>
            <p>
              Excellent problem-solving skills and ability to troubleshoot
              accessibility issues.
            </p>
          </li>
          <li>
            <p>
              Professional certifications in accessibility, such as Certified
              Professional in Accessibility Core Competencies (CPACC) or Web
              Accessibility Specialist (WAS), are a plus.
            </p>
          </li>
        </ul>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in your work and see your work's positive impact
          on your colleagues, our customers, and the world. We believe in
          providing transparency and support so you can do the best work of your
          career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 0,
    role: 'Engineering',
    selected: false,
    skills: ['VPAT', 'WCAG', 'Accessibility', 'Software Development'],
    title: 'Lead SDET (Accessibility)',
  },
  {
    cart: false,
    geo: 'Santa Clara, CA, United States',
    index: 3,
    jd: (
      <>
        <h3 style={{ color: 'var(--primary-color)' }}>About the Team</h3>
        <p>
          The AI / Machine Learning team is building the industry's leading
          Machine Learning models for use cases at scale. This team is also
          responsible for pushing the boundaries of applied Machine Learning and
          state-of-the-art Generative AI techniques on a challenging and diverse
          dataset. The team is at the forefront of building frameworks for
          Responsible AI development.
        </p>
        <h3>Primary Responsibilities:</h3>
        <ul>
          <li>
            <p>
              In this senior-level role, you will own, train, build and deploy
              cutting edge deep learning models across all Eightfold products,
              end to end.
            </p>
          </li>
          <li>
            <p>
              Build on top of Open Source LLM (Large Language Models) to
              leverage a diverse dataset.
            </p>
          </li>
          <li>
            <p>Apply innovative solutions from Generative AI</p>
          </li>
          <li>
            <p>
              Create industry best practices for Machine Learning for Recruiting
              and HR industry around the globe
            </p>
          </li>
          <li>
            <p>
              Do it responsibly to provide equal opportunity for everyone by
              extending our internal model fairness platform
            </p>
          </li>
          <li>
            <p>Create innovative algorithms for Machine Learning & AI</p>
          </li>
          <li>
            <p>Implement best practices for building AI-enabled products</p>
          </li>
          <li>
            <p>
              Develop AI-based systems for Natural Language Processing (NLP)
            </p>
          </li>
          <li>
            <p>
              Optimize Machine Learning models for time efficiency, performance,
              cost, scalability, and accuracy
            </p>
          </li>
          <li>
            <p>
              Develop tools and processes for automatically train, updating and
              evaluate LLM (Large Language Models)
            </p>
          </li>
        </ul>
        <h3>Qualifications:</h3>
        <ul>
          <li>
            <p>
              Strong foundation in Machine Learning (ML), Deep Learning, LLMs
              and NLP
            </p>
          </li>
          <li>
            <p>
              Hands-on experience in applying Natural Language Processing
              solutions to challenging real-world problems.
            </p>
          </li>
          <li>
            <p>
              Ability to work cross-functionally & interface with data science
              experts across all Eightfol's customer base
            </p>
          </li>
          <li>
            <p>
              Familiar with LLM (Large Language Models), transformers like BERT,
              GPTs, T-5, HuggingFace etc.
            </p>
          </li>
          <li>
            <p>
              Exceptionally strong knowledge of CS fundamental concepts and ML
              languages ( like Python, C, C++, Java, JavaScript, R, and Scala,
              etc. )
            </p>
          </li>
          <li>
            <p>
              Ability to innovate, as proven by a track record of software
              artifacts or academic publications in applied machine learning.
            </p>
          </li>
          <li>
            <p>
              Prior experience building and deploying machine learning models in
              production at scale
            </p>
          </li>
          <li>
            <p>
              Understanding of data and ML systems with the ability to think
              across stack layers - REST APIs, microservices, data ingestion and
              processing systems, and distributed systems.
            </p>
          </li>
          <li>
            <p>
              Extensive experience with scientific libraries in Python (numba,
              pandas) and machine learning tools and frameworks (scikit-learn,
              tensorflow, torch, etc.).
            </p>
          </li>
          <li>
            <p>
              Experience implementing production machine learning systems,
              working with large-scale datasets, and a solid understanding of
              machine learning theory.
            </p>
          </li>
          <li>
            <p>
              Familiar with a cloud-based environment such as AWS, Azure or GCP
            </p>
          </li>
        </ul>
        <h3>Preferred Qualifications:</h3>
        <ul>
          <li>
            <p>
              Metrics-focused and passionate about delivering high-quality
              models.
            </p>
          </li>
          <li>
            <p>
              Experience with analyzing large data sets, using Hadoop, Spark
            </p>
          </li>
          <li>
            <p>
              Familiar with Spark, MLLib, Databricks MLFlow, Apache Airflow and
              similar related technologies.
            </p>
          </li>
          <li>
            <p>
              Familiarity with MLOps tools and pipelines (MLflow, Metaflow).
            </p>
          </li>
          <li>
            <p>
              PhD or Masters in Computer Science or Data Science is preferred
            </p>
          </li>
        </ul>
        <p>
          At Eightfold, We are a team of self-starters who excel in their
          fields. We believe in giving you responsibility, not a task. We want
          you to have ownership and pride in your work and see your work's
          positive impact on your colleagues, our customers, and the world. We
          believe in providing transparency and support so you can do the best
          work of your career.
        </p>
        <h3 style={{ marginTop: 16 }}>Pay Transparency</h3>
        <p>
          <span>
            Please note this role is categorized as hybrid in Santa Clara, CA
            The base salary ranges below are provided for pay transparency. Base
            pay is only one piece of our total compensation package as this role
            may be eligible for bonus and equity awards. Compensation varies
            depending on a number of factors including qualifications, skills,
            competencies, experience and zone. Zones are determined by location.
          </span>
          <br />
          <span>
            Zone A is in SF Bay Area, CA . Base annual salary range: USD
            $$220,000 to $259,000 + discretionary bonus up to 20% + preIPO
            equity.
          </span>
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 2,
    priority: 0,
    role: 'Engineering',
    selected: false,
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Large Language Models',
      'NLP',
      'AI',
    ],
    title: 'Staff Machine Learning Engineer',
  },
  {
    cart: false,
    geo: 'London, England, United Kingdom',
    index: 4,
    jd: (
      <>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <h3>About the team</h3>
        <p>
          Join a high-caliber team of professionals that are dedicated to
          transforming how the world understands and leverages talent. Our Field
          Operations team believes that operational rigor is the foundation for
          driving performance, efficiency, and growth across Eightfold's Sales,
          Customer Success, and Professional Services teams. We empower our
          colleagues to reach their full potential by providing tailored
          strategies, tools, operational insights, and fostering a culture of
          continuous improvement. We are a diverse, collaborative global team
          that focuses on making a real impact - we use data-driven approaches
          to improve our understanding of the business and make operations more
          efficient and effective
        </p>
        <h3>About the Role</h3>
        <p>
          The Senior Director of Field Operations will play an integral role in
          enabling continued, accelerated revenue growth in both the EMEA and
          APJ regions. You will partner closely with our field leadership to
          design, implement and execute strategies and processes that underpin
          our ambitious go-to-market vision. This is a highly collaborative
          role, requiring close alignment with Sales, Finance, Marketing,
          Customer Success, and Professional Services among others. You will
          work to develop and refine long term plans, forecasting models,
          processes, reporting dashboards, and more. Your expertise will shape
          how we operate and scale globally. If you have a proven track record
          of building and scaling high-achieving go-to-market operations
          internationally, this is a phenomenal opportunity to make a
          significant impact.
        </p>
        <h3 style={{ marginTop: 16 }}>Responsibilities</h3>
        <ul>
          <li>
            <p>
              Strategic Planning: Collaborate with senior leaders across the
              business to formulate and execute long term plans (including OPEX,
              HC, financials) and GTM strategies for the EMEA and APJ regions,
              specifically focused on supporting Sales teams.
            </p>
          </li>
          <li>
            <p>
              Data-Driven Decision Making: Analyze sales data, market trends,
              and performance metrics to identify opportunities, address
              challenges, and drive continuous improvement within field
              operations.
            </p>
          </li>
          <li>
            <p>
              Forecasting & Reporting: Develop, maintain, and enhance revenue
              forecasting models and reporting systems, providing up-to-date
              insights for executive leadership.
            </p>
          </li>
          <li>
            <p>
              Pipeline Management: Collaborate with the sales leaders to drive
              effective pipeline management, ensuring visibility into sales
              health and revenue projections.
            </p>
          </li>
          <li>
            <p>
              Operational Efficiency: Design, implement, and refine effective
              sales processes, workflows, and systems to enhance team
              productivity and efficiency across the entire sales cycle.
            </p>
          </li>
          <li>
            <p>
              Process Optimization: Lead efforts to continually examine and
              refine sales methodologies and cross-functional hand-offs to
              achieve optimal sales performance.
            </p>
          </li>
          <li>
            <p>
              Cross-Functional Collaboration: Partner cross-functionally to
              align strategic objectives, streamline communication, and foster a
              cohesive, collaborative environment between sales, marketing,
              product, and other key teams.
            </p>
          </li>
        </ul>
        <h3>Qualifications</h3>
        <ul>
          <li>
            <p>
              Experience: At least 10+ years of experience in field operations
              or sales operations leadership roles, with a strong focus on
              international markets. Proven track record of scaling sales
              operations in EMEA and APJ regions.
            </p>
          </li>
          <li>
            <p>
              Data Expertise: Superior analytical skills and the ability to
              translate complex data into actionable insights and
              recommendations.
            </p>
          </li>
          <li>
            <p>
              Strategic Acumen: Demonstrated capacity to think strategically,
              formulate winning plans, and execute effectively, while adapting
              to dynamic international market conditions.
            </p>
          </li>
          <li>
            <p>
              Collaboration: Ability to partner effectively with
              cross-functional stakeholders at all levels of the organization.
            </p>
          </li>
          <li>
            <p>
              Influencing without Formal Authority: Proven ability to influence
              and drive alignment across a matrixed organization, even without
              direct authority over stakeholders.
            </p>
          </li>
          <li>
            <p>
              Tech Savvy: Proficiency with sales technology stacks, including
              CRM (Salesforce preferred), sales enablement tools, and business
              intelligence platforms (Clari).
            </p>
          </li>
        </ul>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in your work and see your work's positive impact
          on your colleagues, our customers, and the world. We believe in
          providing transparency and support so you can do the best work of your
          career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 3,
    location: 'Hybrid',
    priority: 0,
    role: 'Operations',
    selected: false,
    skills: [
      'Field Operations',
      'Sales Operations',
      'International Markets',
      'Marketing Strategy',
      'Integrated Marketing',
      'Sales Strategy',
      'Sales Management',
      'Sales Enablement',
      'Salesforce',
      'Business Intelligence',
      'CRM',
      'Sales Technology Stack',
    ],
    title: 'Senior Director, Field Operations - EMEA & APJ',
  },
  {
    cart: false,
    geo: 'Santa Clara, CA, United States',
    index: 5,
    jd: (
      <>
        <h3 style={{ color: 'var(--primary-color)' }}>About the AI/ML Team</h3>
        <p>
          The AI / Machine Learning team is building the industry's leading
          Machine Learning models for use cases at scale. This team is also
          responsible for pushing the boundaries of applied Machine Learning and
          state-of-the-art Generative AI techniques on a challenging and diverse
          dataset. The team is at the forefront of building frameworks for
          Responsible AI development.
        </p>
        <h3>What you will do (learn to do)</h3>
        <ul>
          <li>
            <p>
              You will own, build, train and productionize cutting-edge ML
              models across all Eightfold products, end to end - in production.
            </p>
          </li>
          <li>
            <p>
              Build on top of Open Source Large Language Models to leverage a
              diverse dataset.
            </p>
          </li>
          <li>
            <p>Apply innovative solutions from Generative AI</p>
          </li>
          <li>
            <p>
              Create industry best practices for Machine Learning in Recruiting
              and HR
            </p>
          </li>
          <li>
            <p>
              Do it responsibly to provide equal opportunity for everyone by
              extending our internal model fairness platform
            </p>
          </li>
          <li>
            <p>Create innovative algorithms for Machine Learning & AI</p>
          </li>
          <li>
            <p>Implement best practices for building AI-enabled products</p>
          </li>
          <li>
            <p>
              Develop AI-based systems for Natural Language Processing (NLP)
            </p>
          </li>
          <li>
            <p>
              Optimize Machine Learning models for time efficiency, performance,
              cost, scalability, and accuracy
            </p>
          </li>
          <li>
            <p>
              Develop tools and processes for automatically train, updating and
              evaluate LLM (Large Language Models)
            </p>
          </li>
        </ul>
        <h3>What you bring</h3>
        <ul>
          <li>
            <p>
              Good foundation in Machine Learning (ML), Deep Learning, Large
              Language Models (LLM) and Natural Language Processing (NLP).
            </p>
          </li>
          <li>
            <p>
              Hands-on experience in applying Natural Language Processing (NLP)
              solutions is a plus.
            </p>
          </li>
          <li>
            <p>
              Ability to work cross functionally & interface with Data
              Scientists
            </p>
          </li>
          <li>
            <p>
              Familiar with Large Language Models, transformers like BERT, GPTs,
              T-5, HuggingFace etc.
            </p>
          </li>
          <li>
            <p>
              Strong knowledge of CS fundamental concepts and ML languages (
              like Python, C, C++, Java, JavaScript, R, and Scala, etc. )
            </p>
          </li>
          <li>
            <p>
              Ability to innovate, as proven by a track record of software
              artifacts or academic publications in applied machine learning.
            </p>
          </li>
          <li>
            <p>
              Understanding of data and/or ML systems with ability to think
              across layers of the stack - REST APIs, microservices, data
              ingestion and processing systems, and distributed systems.
            </p>
          </li>
        </ul>
        <h3>Nice To Haves</h3>
        <ul>
          <li>
            <p>
              Experience with scientific libraries in Python (numba, pandas) and
              machine learning tools and frameworks (scikit-learn, tensorflow,
              torch, etc.).
            </p>
          </li>
          <li>
            <p>
              Experience with implementing production machine learning systems,
              and working with large scale datasets is a plus
            </p>
          </li>
          <li>
            <p>Solid understanding of machine learning theory</p>
          </li>
          <li>
            <p>
              Metrics-focused and passionate about delivering high quality
              models.
            </p>
          </li>
          <li>
            <p>Familiar with Pandas or Python machine learning libraries</p>
          </li>
          <li>
            <p>
              Familiar with Spark, MLLib, Databricks MLFlow, Apache Airflow and
              similar related technologies.
            </p>
          </li>
          <li>
            <p>Familiar with a cloud based environment such as AWS</p>
          </li>
          <li>
            <p>
              Experience with analyzing large data sets, using Hadoop, Spark or
              related technologies is a plus.
            </p>
          </li>
        </ul>
        <h3 style={{ marginTop: 16 }}>Pay Transparency</h3>
        <p>
          <span>
            Please note this role is categorized as hybrid in Santa Clara, CA
            The base salary ranges below are provided for pay transparency. Base
            pay is only one piece of our total compensation package as this role
            may be eligible for bonus and equity awards. Compensation varies
            depending on a number of factors including qualifications, skills,
            competencies, experience and zone. Zones are determined by location.
          </span>
          <br />
          <span>
            Zone A is in SF Bay Area, CA . Base annual salary range: $144,000 to
            169,000 + discretionary bonus up to 10% + preIPO equity.
          </span>
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
      </>
    ),
    level: 2,
    priority: 0,
    role: 'Engineering',
    selected: false,
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Large Language Models',
      'NLP',
      'AI',
    ],
    title: 'Machine Learning Engineer - AI/ML',
  },
  {
    cart: false,
    geo: ['Bangalore, Karnataka, India', 'Noida, Uttar Pradesh, India'],
    index: 6,
    jd: (
      <>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <h3 style={{ marginTop: 16 }}>As Lead Engineer;</h3>
        <h3 style={{ color: 'var(--primary-color)' }}>What You'll Do:</h3>
        <ul>
          <li>
            <p>Lead the projects/PODs end to end</p>
          </li>
          <li>
            <p>
              Lead the design discussion by working closely with the product
              managers, designers, and other cross-functional teams.
            </p>
          </li>
          <li>
            <p>Mentor the juniors by performing code reviews.</p>
          </li>
          <li>
            <p>
              Develop robust, scalable, and configurable server-side
              applications and modules with an emphasis on quality, performance,
              design, and re-usability.
            </p>
          </li>
          <li>
            <p>
              Design and develop new microservices or integrate applications
              with existing ones.
            </p>
          </li>
          <li>
            <p>
              Design and develop safe and reliable data pipelines for high-scale
              data integration for fortune 500 customers.
            </p>
          </li>
          <li>
            <p>
              Build for customization and generalization powered by
              configuration management.
            </p>
          </li>
          <li>
            <p>
              Improve code coverage and drive up the automated unit and selenium
              testing.
            </p>
          </li>
          <li>
            <p>
              Develop and improve internal tools for effective administration,
              monitoring, and altering.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What We Need:</h3>
        <ul>
          <li>
            <p>
              A solid grounding in Computer Science fundamentals with hands-on
              experience in back-end development of 6 to 10 or more years.
            </p>
          </li>
          <li>
            <p>Hands-on experience leading the projects/features/POD</p>
          </li>
          <li>
            <p>Sound foundation in distributed systems, and microservices.</p>
          </li>
          <li>
            <p>
              Passionate about designing, building, launching, and maintaining
              products
            </p>
          </li>
          <li>
            <p>Cares about the details in the user experience</p>
          </li>
          <li>
            <p>
              Ability to develop software/code in one mainstream programming
              language (brownie points if you know Python)
            </p>
          </li>
          <li>
            <p>Communicates and collaborates effectively across teams</p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>Our Backend Stack:</h3>
        <p>
          We mainly use and are not limited to the below technologies. Also, we
          hire engineers coming with experience in any of the mainstream
          programming languages.
        </p>
        <ul>
          <li>
            <p>Python, Flask, Tensorflow, SQL, Bash, Ansible</p>
          </li>
          <li>
            <p>Apache Spark, Solr, Mysql, Docker</p>
          </li>
          <li>
            <p>
              Major AWS services like Aurora, S3, Redshift, Cloudformation, SNS,
              SQS, etc
            </p>
          </li>
          <li>
            <p>Extensive use of AI and machine learning technologies</p>
          </li>
          <li>
            <p>Distributed Systems, Microservices</p>
          </li>
        </ul>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in your work and see your work's positive impact
          on your colleagues, our customers, and the world. We believe in
          providing transparency and support so you can do the best work of your
          career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 0,
    role: 'Engineering',
    selected: false,
    skills: [
      'Python',
      'Flask',
      'Tensorflow',
      'SQL',
      'Bash',
      'Ansible',
      'Apache Spark',
      'Solr',
      'Mysql',
      'Docker',
      'AWS',
      'Aurora',
      'S3',
      'Redshift',
      'Cloudformation',
      'SNS',
      'SQS',
      'AI',
      'Machine Learning',
      'Distributed Systems',
      'Microservices',
    ],
    title: 'Lead Engineer - Backend',
  },
  {
    cart: false,
    geo: 'Bangalore',
    index: 7,
    jd: (
      <>
        <h3 style={{ color: 'var(--primary-color)' }}>About Eightfold</h3>
        <p>
          Eightfold was founded with a vision to solve for employment in our
          society. For decades, the connection between individuals and
          opportunities has been based on who the individuals are and the
          strength of their network, vs. their potential. Eightfold leverages
          artificial intelligence to transform how to think about skills and
          capabilities for individuals as well as how jobs and career decisions
          are made. Eightfold offers the industry's first AI-powered Talent
          Intelligence Platform to transform how organizations plan, hire,
          develop and retain a diverse workforce, enabling individuals to
          transform their career.
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <p>
          <span>You may want to refer to the media coverage on </span>
          <Link
            href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOi04NDg4OTM5NTEzMTUxNjYxMjU5fQ._NS1VwT4eE55aDSDvPtC2I2h2VY&amp;n=https://techcrunch.com/2021/06/10/ai-startup-eightfold-valued-at-2-1b-in-softbank-led-220m-funding/?guccounter=1%22%20%5Ct%20%22_blank"
            target="_blank"
            variant="primary"
          >
            TechCrunch
          </Link>{' '}
          <span>and </span>
          <Link
            href="https://www.reuters.com/business/talent-matching-startup-eightfold-ai-raises-220-mln-round-led-by-softbank-vision-2021-06-10/"
            target="_blank"
            variant="primary"
          >
            Reuters.
          </Link>{' '}
          <Link href="https://eightfold.ai/" target="_blank" variant="primary">
            <strong>Eightfold.ai</strong>
          </Link>{' '}
          <span>is led by </span>
          <strong>Ashutosh Garg, </strong>
          <span>
            a PhD in Machine Learning/IIT Delhi alumni who managed Search and
            Personalization at Google, and{' '}
          </span>
          <strong>Varun Kacholia-</strong>
          <span>
            IIT Bombay alumni, who led the News Feed Ranking team at Facebook
            and developed YouTube Search at Google.
          </span>
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          The Opportunity
        </h3>
        <ul>
          <li>
            <p>
              Immense opportunity for innovation and growth as you would have
              the chance to leverage AI to contribute to groundbreaking
              solutions that can have a significant impact on all products
              across the entire talent management and talent acquisition space
            </p>
          </li>
          <li>
            <p>
              Work closely with the leadership team, the engineering team, and
              the product team to develop and execute capabilities for across
              Eightfold platform
            </p>
          </li>
          <li>
            <p>
              Listen to our developer partners and customers to internalize and
              understand their needs and develop a strategic product roadmap to
              address these needs.
            </p>
          </li>
          <li>
            <p>
              Foster our values of ownership, compassion, commitment to
              learning, transparency, and integrity.
            </p>
          </li>
          <li>
            <p>
              Partner with and drive support for your vision across executive
              leadership, product design, marketing, customer success, and sales
            </p>
          </li>
          <li>
            <p>
              Conduct in-depth analysis of the market landscape for talent
              acquisition and experience to develop differentiating products in
              the market
            </p>
          </li>
          <li>
            <p>
              Closely track industry trends and adapt your product strategy
              accordingly
            </p>
          </li>
          <li>
            <p>
              Unique opportunity to be part of the driving force behind one of
              the worlds 50 most innovative AI companies
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>Qualification</h3>
        <ul>
          <li>
            <p>
              A passion for Eightfold's vision: The right career for everyone in
              the world.
            </p>
          </li>
          <li>
            <p>
              Technical knowledge and hands-on background of shipping largescale
              platform technology
            </p>
          </li>
          <li>
            <p>
              Exceptional interpersonal and communication skills, both written
              and verbal
            </p>
          </li>
          <li>
            <p>
              Exceptional stakeholder management capabilities and cross
              functional team management
            </p>
          </li>
          <li>
            <p>
              Deep passion for data driven execution and user-centric
              solutioning
            </p>
          </li>
          <li>
            <p>An aptitude for rapid learning</p>
          </li>
        </ul>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in the work you are doing, and see the positive
          impact of your work on your colleagues, our customers, and the world.
          We believe in providing transparency and support, so you can do the
          best work of your career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, our employees will return to
            the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 0,
    role: 'Product',
    selected: false,
    skills: [
      'Product Management',
      'Talent Management',
      'Product Strategy',
      'Product Development',
      'Product Marketing',
    ],
    title: 'Sr Product Manager - Talent Management',
  },
  {
    cart: false,
    geo: ['Bangalore, Karnataka, India', 'Noida, Uttar Pradesh, India'],
    index: 8,
    jd: (
      <>
        <h3 style={{ color: 'var(--primary-color)' }}>About Us:</h3>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <strong>Our customers- </strong>
            <Link
              href="https://eightfold.ai/customers/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/
            </Link>
          </p>
          <p>
            <strong>Press- </strong>
            <Link
              href="https://eightfold.ai/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/press/
            </Link>
          </p>
          <p>
            <span>You may want to refer to the media coverage on </span>
            <Link
              href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOi04NDg4OTM5NTEzMTUxNjYxMjU5fQ._NS1VwT4eE55aDSDvPtC2I2h2VY&amp;n=https%3A%2F%2Ftechcrunch.com%2F2021%2F06%2F10%2Fai-startup-eightfold-valued-at-2-1b-in-softbank-led-220m-funding%2F%3Fguccounter%3D1"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              TechCrunch
            </Link>
            <span> and </span>
            <Link
              href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOjUyMzYwNDQzNzAwMDE1MjA0Nzh9.C-GpQuorBapAlzOk1xHVoU0nXrs&amp;n=https%3A%2F%2Fwww.reuters.com%2Fbusiness%2Ftalent-matching-startup-eightfold-ai-raises-220-mln-round-led-by-softbank-vision-2021-06-10%2F"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              Reuters.
            </Link>
          </p>
        </div>
        <h3 style={{ color: 'var(--primary-color)' }}>About the Team:</h3>
        <p>
          You will be part of the core team handling the Talent Acquisition
          product line, which is the flagship product of Eightfold. Technical
          contributions will span across the entire tech stack and will help in
          adding exciting new capabilities to the product and handle customer
          facing requests. Come join one of the most impactful teams in the
          company to further our mission of finding the right career for
          everyone in the world.
        </p>
        <h3 style={{ color: 'var(--primary-color)' }}>
          What You'll Learn To Do:
        </h3>
        <ul>
          <li>
            <p>
              Develop robust, scalable, and configurable server-side
              applications and modules with an emphasis on quality, performance,
              design, and re-usability.
            </p>
          </li>
          <li>
            <p>
              Design and develop new microservices or integrate applications
              with existing ones.
            </p>
          </li>
          <li>
            <p>
              Design and develop safe and reliable data pipelines for high-scale
              data integration for the fortune 500 customers.
            </p>
          </li>
          <li>
            <p>
              Build for customization and generalization powered by
              configuration management.
            </p>
          </li>
          <li>
            <p>
              Improve code coverage and drive up the automated unit and selenium
              testing.
            </p>
          </li>
          <li>
            <p>
              Develop and improve internal tools for effective administration,
              monitoring, and altering.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What We Look For:</h3>
        <ul>
          <li>
            <p>
              A solid grounding in Computer Science fundamentals with hands-on
              experience in back-end development of 3 to 6 years. (extra points
              for skills in Python and React.Js)
            </p>
          </li>
          <li>
            <p>Sound foundation in distributed systems, and microservices.</p>
          </li>
          <li>
            <p>
              Experience in building, launching, and maintaining SaaS products.
            </p>
          </li>
          <li>
            <p>
              Cares about the details in the User experience and is highly
              driven to solve real problems for millions of Users
            </p>
          </li>
          <li>
            <p>Communicates and collaborates effectively across teams</p>
          </li>
          <li>
            <p>
              Excellent problem-solving and trouble-shooting skills and
              debugging in cloud environments and/or SaaS products.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>Our Backend Stack:</h3>
        <p>
          We mainly use and are not limited to the below technologies. Also, we
          hire engineers coming with experience in any of the mainstream
          programming languages.
        </p>
        <ul>
          <li>
            <p>Python, Flask, Tensorflow, SQL, Bash, Ansible</p>
          </li>
          <li>
            <p>Apache Spark, Solr, Mysql, Docker</p>
          </li>
          <li>
            <p>
              Major AWS services like Aurora, S3, Redshift, Cloudformation, SNS,
              SQS, etc
            </p>
          </li>
          <li>
            <p>Extensive use of AI and machine learning technologies</p>
          </li>
          <li>
            <p>Distributed Systems, Microservices</p>
          </li>
        </ul>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in your work and see your work's positive impact
          on your colleagues, our customers, and the world. We believe in
          providing transparency and support so you can do the best work of your
          career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 0,
    role: 'Engineering',
    selected: false,
    skills: [
      'Python',
      'Flask',
      'Tensorflow',
      'SQL',
      'Bash',
      'Ansible',
      'Apache Spark',
      'Solr',
      'Mysql',
      'Docker',
      'AWS',
      'Aurora',
      'S3',
      'Redshift',
      'Cloudformation',
      'SNS',
      'SQS',
      'AI',
      'Machine Learning',
      'Distributed Systems',
      'Microservices',
    ],
    title: 'Senior Engineer',
  },
  {
    cart: false,
    geo: ['Bengalaru, Karnataka, India', 'Noida, Uttar Pradesh, India'],
    index: 9,
    jd: (
      <>
        <h3 style={{ color: 'var(--primary-color)' }}>About Eightfold:</h3>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <h3 style={{ marginTop: 16 }}>Founders:</h3>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <p>
              <span>Varun Kacholia </span>
              <Link
                href="https://www.linkedin.com/in/varunkacholia/"
                rel="noopener noreferrer"
                target="_blank"
                variant="primary"
              >
                (https://www.linkedin.com/in/varunkacholia/)
              </Link>
            </p>
          </li>
          <li>
            <p>
              <span>Ashutosh Garg </span>
              <Link
                href="https://www.linkedin.com/in/ashutoshgarg893/"
                rel="noopener noreferrer"
                target="_blank"
                variant="primary"
              >
                (https://www.linkedin.com/in/ashutoshgarg893/)
              </Link>
            </p>
          </li>
        </ul>
        <h3 style={{ marginTop: 16 }}>Our Engineering Leaders:</h3>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <p>
              <span>Vineet Abraham </span>
              <Link
                href="https://www.linkedin.com/in/vineet-a-9264707/"
                rel="noopener noreferrer"
                target="_blank"
                variant="primary"
              >
                (https://www.linkedin.com/in/vineet-a-9264707/)
              </Link>
            </p>
          </li>
          <li>
            <p>
              <span>Vinodh Ravindranath </span>
              <Link
                href="https://www.linkedin.com/in/vinodhkumarr/"
                rel="noopener noreferrer"
                target="_blank"
                variant="primary"
              >
                (https://www.linkedin.com/in/vinodhkumarr/)
              </Link>
            </p>
          </li>
          <li>
            <p>
              <span>Chandra </span>
              <Link
                href="https://www.linkedin.com/in/sivasankaran-chandrasekar-31803624/"
                rel="noopener noreferrer"
                target="_blank"
                variant="primary"
              >
                (https://www.linkedin.com/in/sivasankaran-chandrasekar-31803624/)
              </Link>
            </p>
          </li>
        </ul>
        <div style={{ margin: '16px 0' }}>
          <p>
            <strong>Our customers- </strong>
            <Link
              href="https://eightfold.ai/customers/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/
            </Link>
          </p>
          <p>
            <strong>Press- </strong>
            <Link
              href="https://eightfold.ai/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/press/
            </Link>
          </p>
          <p>
            <span>You may want to refer to the media coverage on </span>
            <Link
              href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOi04NDg4OTM5NTEzMTUxNjYxMjU5fQ._NS1VwT4eE55aDSDvPtC2I2h2VY&amp;n=https%3A%2F%2Ftechcrunch.com%2F2021%2F06%2F10%2Fai-startup-eightfold-valued-at-2-1b-in-softbank-led-220m-funding%2F%3Fguccounter%3D1"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              TechCrunch
            </Link>
            <span> and </span>
            <Link
              href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOjUyMzYwNDQzNzAwMDE1MjA0Nzh9.C-GpQuorBapAlzOk1xHVoU0nXrs&amp;n=https%3A%2F%2Fwww.reuters.com%2Fbusiness%2Ftalent-matching-startup-eightfold-ai-raises-220-mln-round-led-by-softbank-vision-2021-06-10%2F"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              Reuters.
            </Link>
          </p>
        </div>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          About the Team:
        </h3>
        <p>This role is for the 'Talent Management' platform.</p>
        <p>
          Eightfold's Talent Management product is used in organizations to
          improve retention and employee experience, including
          upskilling/reskilling and opportunities for advancement, to develop
          and retain employees by giving them the power to drive their career
          paths, to identify internal talent with the potential to take on
          management roles, to take a skills-based approach to talent planning
          with AI-powered insights.
        </p>
        <h3 style={{ color: 'var(--primary-color)' }}>What you'll do:</h3>
        <ul>
          <li>
            <p>
              Being in a senior technical position, responsible for
              architecture, design, code, and delivery of multiple
              features/projects/products.
            </p>
          </li>
          <li>
            <p>
              Build modern & rich UI, frontend web applications, design and
              develop reusable components and front-end libraries
            </p>
          </li>
          <li>
            <p>
              Work closely with Product managers, UX designers, and backend
              engineers to address all the technical dependencies.
            </p>
          </li>
          <li>
            <p>
              Lead cross-team efforts to improve our frontend code base across
              the company and lead a few frontend engineering citizenship
              initiatives
            </p>
          </li>
          <li>
            <p>
              Mentor/coach other engineers to help them perform at their best by
              performing code/design reviews, and providing all the technical
              directions.
            </p>
          </li>
          <li>
            <p>
              Being hands-on, get into the ground-level technical details/depth
              whenever required.
            </p>
          </li>
          <li>
            <p>Actively participate in interviewing & hiring top talent.</p>
          </li>
          <li>
            <p>
              Innovate and suggest industry best practices, and participate in
              internal/external technical presentations.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What We Need:</h3>
        <ul>
          <li>
            <p>
              Excellent track record of building responsive frontend web
              applications
            </p>
          </li>
          <li>
            <p>
              Experience in TypeScript is must, ReactJS is good to have. Solid
              foundation in HTML5, CSS3 is required.
            </p>
          </li>
          <li>
            <p>
              Experience in various JS frameworks, libraries, design patterns,
              and architecture qualities of front-end applications like
              usability, accessibility, performance, etc.
            </p>
          </li>
          <li>
            <p>Cares about the details in the user experience</p>
          </li>
          <li>
            <p>
              10 or more years of industry experience working with product
              companies.
            </p>
          </li>
          <li>
            <p>
              Startup experience and SaaS product development experience are
              added advantages.
            </p>
          </li>
          <li>
            <p>
              Excellent communication skills with a can-do
              attitude/Self-starter.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>Our Frontend Stack:</h3>
        <ul>
          <li>
            <p>TypeScript, React, Redux, Webpack</p>
          </li>
          <li>
            <p>HTML5, CSS3</p>
          </li>
          <li>
            <p>Jquery, VanillaJS, Jinja templates (Limited)</p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>
          Eightfold Engineering Values:
        </h3>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in the work you are doing, and see the positive
          impact of your work on your colleagues, our customers, and people
          around the world. We have a mindset of continuously improving. There
          is no detail that is beneath us, and we can dive into anything needed.
          We focus on executing fast and delivering value to our customers every
          single day. We believe in providing transparency and support, so you
          can do the best work of your career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 0,
    role: 'Engineering',
    selected: false,
    skills: [
      'TypeScript',
      'React',
      'Redux',
      'Webpack',
      'HTML5',
      'CSS3',
      'Jquery',
      'VanillaJS',
      'Jinja templates',
    ],
    title: 'Staff/Lead Engineer - Frontend',
  },
  {
    cart: false,
    geo: 'Santa Clara, CA, United States',
    index: 10,
    jd: (
      <>
        <h3 style={{ color: 'var(--primary-color)' }}>About the Team</h3>
        <p>
          Our product development teams at Eightfold.AI build new product
          experiences for Eightfold's enterprise customers and consumer users.
          We build B2B2C products that will be used by employees across many
          Fortune 100-500 companies.
        </p>
        <p>
          With our modern AI , we offer new ways to leverage AI for people to
          find, learn & grow their own careers. This will innovate how every
          person can better manage every step of their career journey using AI.
          You will build best-in-class consumer-facing products that will
          forever change the way we steer our own careers.
        </p>
        <h3 style={{ marginTop: 16 }}>Check out these short videos</h3>
        <Link
          href="https://bit.ly/3iLcRoJ"
          rel="noopener noreferrer"
          target="_blank"
          variant="primary"
        >
          Video
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=DwajEW_8k4s&t=5s"
          rel="noopener noreferrer"
          target="_blank"
          variant="primary"
        >
          Video
        </Link>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          About the Role:
        </h3>
        <p>
          At Eightfold, we are looking for senior-level and "product-driven"
          Software Engineesr with extensive experience working with modern
          software architectures. We are looking for Engineers whom are hands-on
          in designing, building, and maintaining globally scalable distributed
          systems in the cloud. You will own features and product software
          features that are shipped directly to Customers/Users.
        </p>
        <h3 style={{ color: 'var(--primary-color)' }}>
          What you will do (or learn to do):
        </h3>
        <ul>
          <li>
            <p>Be part of a full-stack product development team.</p>
          </li>
          <li>
            <p>
              Own, design, code, and manage delivery of multiple software
              product features.
            </p>
          </li>
          <li>
            <p>Work closely with other engineers to help each other.</p>
          </li>
          <li>
            <p>
              Partner with cross-functional teams (product, design, QA) on
              defining the roadmap and execution.
            </p>
          </li>
          <li>
            <p>
              Work with other engineering teams & cross-functional teams to
              address all the technical dependencies.
            </p>
          </li>
          <li>
            <p>
              Actively participate in interviewing & hiring the top talents.
            </p>
          </li>
          <li>
            <p>
              Innovate and suggest industry best practices, and participate in
              internal/external technical presentations.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What you bring:</h3>
        <ul>
          <li>
            <p>
              Strong CS fundamentals with an excellent track record of
              architecting, designing, developing, and delivering highly
              scalable products.
            </p>
          </li>
          <li>
            <p>
              Experience in distributed systems at cloud scale, microservices,
              large-scale web applications, and cloud technologies.
            </p>
          </li>
          <li>
            <p>
              Excellent communication and collaboration skills. Ability to work
              with partners across teams and functions.
            </p>
          </li>
          <li>
            <p>
              Good product sense. Mindful of good design and user experience.
            </p>
          </li>
          <li>
            <p>Experience and passion for mentoring team members.</p>
          </li>
          <li>
            <p>
              3-7+ years of relevant experience building enterprise-class
              software applications or consumer-facing software applications and
              features.
            </p>
          </li>
          <li>
            <p>SaaS product development and shipping experience.</p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>Our Tech Stack:</h3>
        <p>
          We majorly use and are not limited to the below technologies:
          React/Typescript frontends backed by Python Flask, RDS, Solr, GaphQL
          APIs, AWS lambda services. Redshift, Spark, Redis, AWS
        </p>
        <h3 style={{ color: 'var(--primary-color)' }}>Pay Transparency</h3>
        <p>
          Please note this role is categorized as hybrid in Santa Clara, CA The
          base salary ranges below are provided for pay transparency. Base pay
          is only one piece of our total compensation package as this role may
          be eligible for bonus and equity awards. Compensation varies depending
          on a number of factors including qualifications, skills, competencies,
          experience and location by zone.
        </p>
        <p>
          Zone A is in SF Bay Area, CA . Base annual salary range: USD $142,000
          - $177,000 + discretionary bonus up to 15% + preIPO equity
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 2,
    priority: 0,
    role: 'Engineering',
    selected: false,
    skills: [
      'React',
      'Typescript',
      'Python',
      'Flask',
      'RDS',
      'Solr',
      'GaphQL',
      'AWS',
      'lambda',
      'Redshift',
      'Spark',
      'Redis',
    ],
    title: 'Senior Software Engineer - AI Product Dev Teams',
  },
  {
    cart: false,
    geo: 'Bangalore, Karnataka, India',
    index: 11,
    jd: (
      <>
        <h3 style={{ color: 'var(--primary-color)' }}>About Eightfold:</h3>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <strong>Our customers- </strong>
            <Link
              href="https://eightfold.ai/customers/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/
            </Link>
          </p>
          <p>
            <strong>Press- </strong>
            <Link
              href="https://eightfold.ai/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/press/
            </Link>
          </p>
          <p>
            <span>You may want to refer to the media coverage on </span>
            <Link
              href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOi04NDg4OTM5NTEzMTUxNjYxMjU5fQ._NS1VwT4eE55aDSDvPtC2I2h2VY&amp;n=https%3A%2F%2Ftechcrunch.com%2F2021%2F06%2F10%2Fai-startup-eightfold-valued-at-2-1b-in-softbank-led-220m-funding%2F%3Fguccounter%3D1"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              TechCrunch
            </Link>
            <span> and </span>
            <Link
              href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOjUyMzYwNDQzNzAwMDE1MjA0Nzh9.C-GpQuorBapAlzOk1xHVoU0nXrs&amp;n=https%3A%2F%2Fwww.reuters.com%2Fbusiness%2Ftalent-matching-startup-eightfold-ai-raises-220-mln-round-led-by-softbank-vision-2021-06-10%2F"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              Reuters.
            </Link>
          </p>
        </div>
        <h3 style={{ color: 'var(--primary-color)' }}>About the Role:</h3>
        <p>
          As an AI Data Annotator, you will play a pivotal role in advancing our
          machine learning models by annotating and labelling data in the French
          language. Your primary responsibility will be to ensure the quality
          and accuracy of annotated datasets, contributing directly to the
          success of our AI-driven talent intelligence platform.
        </p>
        <h3 style={{ color: 'var(--primary-color)' }}>
          What You Will Learn To Do:
        </h3>
        <ul>
          <li>
            <p>
              Annotate and label diverse datasets in French to facilitate the
              training of machine learning models.
            </p>
          </li>
          <li>
            <p>
              Adhere to project guidelines and specifications to maintain
              high-quality annotations.
            </p>
          </li>
          <li>
            <p>
              Collaborate closely with cross-functional teams to understand
              project requirements and objectives.
            </p>
          </li>
          <li>
            <p>
              Identify and rectify data inconsistencies or errors, maintaining a
              meticulous eye for detail.
            </p>
          </li>
          <li>
            <p>
              Stay informed about industry best practices and emerging trends in
              annotation methodologies.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What We Look For:</h3>
        <ul>
          <li>
            <p>
              Proficiency in the French language is essential, with a deep
              understanding of linguistic nuances.
            </p>
          </li>
          <li>
            <p>
              Previous experience in data annotation, particularly within
              machine learning or AI projects is a plus.
            </p>
          </li>
          <li>
            <p>
              Familiarity with annotation tools and methodologies is
              advantageous.
            </p>
          </li>
          <li>
            <p>
              Detail-oriented with a commitment to delivering accurate and
              high-quality annotations.
            </p>
          </li>
          <li>
            <p>Strong communication and collaboration skills.</p>
          </li>
          <li>
            <p>
              Ability to work both independently and collaboratively in a
              fast-paced environment.
            </p>
          </li>
          <li>
            <p>
              Passion for the transformative potential of AI in talent
              management.
            </p>
          </li>
        </ul>
        <p>
          <strong>Note: </strong>
          <span>This will be a one-year direct contract with</span>{' '}
          <span>
            <Link
              href="http://eightfold.ai/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              Eightfold.AI
            </Link>
          </span>{' '}
          <span>
            and will be extended depending on your contribution, performance and
            the business need.
          </span>
        </p>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in your work and see your work's positive impact
          on your colleagues, our customers, and the world. We believe in
          providing transparency and support so you can do the best work of your
          career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
      </>
    ),
    level: 1,
    location: 'Hybrid',
    priority: 0,
    role: 'Engineering',
    selected: false,
    skills: [
      'French',
      'Data Annotation',
      'Machine Learning',
      'AI',
      'Linguistic',
    ],
    title: 'Support Language Specialist (On Contract)',
  },
  {
    cart: false,
    geo: ['Bangalore, Karnataka, India', 'Noida, Uttar Pradesh, India'],
    index: 12,
    jd: (
      <>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who the individuals are and the strength of their
            network, vs. their potential. Eightfold leverages artificial
            intelligence to transform how to think about skills and capabilities
            for individuals as well as how jobs and career decisions are made.
            Eightfold offers the industry's first AI-powered Talent Intelligence
            Platform to transform how organizations plan, hire, develop and
            retain a diverse workforce, enabling individuals to transform their
            careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <p>
          <span>You may want to refer to the media coverage on </span>
          <Link
            href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOi04NDg4OTM5NTEzMTUxNjYxMjU5fQ._NS1VwT4eE55aDSDvPtC2I2h2VY&amp;n=https://techcrunch.com/2021/06/10/ai-startup-eightfold-valued-at-2-1b-in-softbank-led-220m-funding/?guccounter=1%22%20%5Ct%20%22_blank"
            target="_blank"
            variant="primary"
          >
            TechCrunch
          </Link>{' '}
          <span>and </span>
          <Link
            href="https://www.reuters.com/business/talent-matching-startup-eightfold-ai-raises-220-mln-round-led-by-softbank-vision-2021-06-10/"
            target="_blank"
            variant="primary"
          >
            Reuters.
          </Link>{' '}
          <Link href="https://eightfold.ai/" target="_blank" variant="primary">
            <strong>Eightfold.ai</strong>
          </Link>{' '}
          <span>is led by </span>
          <strong>Ashutosh Garg, </strong>
          <span>
            a PhD in Machine Learning/IIT Delhi alumni who managed Search and
            Personalization at Google, and{' '}
          </span>
          <strong>Varun Kacholia-</strong>
          <span>
            IIT Bombay alumni, who led the News Feed Ranking team at Facebook
            and developed YouTube Search at Google.
          </span>
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <strong>Our customers- </strong>
            <Link
              href="https://eightfold.ai/customers/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/
            </Link>
          </p>
          <p>
            <strong>Press- </strong>
            <Link
              href="https://eightfold.ai/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/press/
            </Link>
          </p>
        </div>
        <h3 style={{ color: 'var(--primary-color)' }}>
          What you will be doing:
        </h3>
        <p>
          As a UX Designer at Eightfold AI, you will help define and create the
          future of employment. In this role, you will apply your love of user
          experience, craftsmanship and the design process.
        </p>
        <p>
          Eightfold's UX designers make the complex simple and know the details
          aren't the details, they are the product. We love clean design and
          making the complex clear. We are passionate about creating products
          that customers love.
        </p>
        <h3 style={{ color: 'var(--primary-color)' }}>Responsibilities</h3>
        <ul>
          <li>
            <p>
              Work closely with Product Managers to identify the problems,
              business goals, and user outcomes
            </p>
          </li>
          <li>
            <p>
              Collaborate closely with the development teams throughout the
              lifecycle of the product/feature you are working on
            </p>
          </li>
          <li>
            <p>
              Gather requirements and create user-centered experience flows for
              the Eightfold AI platform, including the collaboration with other
              teams at Eightfold
            </p>
          </li>
          <li>
            <p>
              Partner with User Researchers to determine and execute the ideal
              research methodology to evaluate your designs
            </p>
          </li>
          <li>
            <p>
              Articulate design decisions with product stakeholders by providing
              design rationale and walkthroughs of the process
            </p>
          </li>
          <li>
            <p>Design usable, useful and delightful flows & interactions</p>
          </li>
          <li>
            <p>
              Give and solicit feedback from designers and cross-disciplinary
              partners
            </p>
          </li>
          <li>
            <p>
              Take charge of product initiatives under the mentorship of design
              leadership
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>Qualifications</h3>
        <ul>
          <li>
            <p>1-4 years of experience with product design</p>
          </li>
          <li>
            <p>Strong visual design skills</p>
          </li>
          <li>
            <p>Highly conceptual thinking in visual and interaction design</p>
          </li>
          <li>
            <p>
              A strong interest in the latest trends in design and technology
              with a focus on the future of computing and experience platforms
            </p>
          </li>
          <li>
            <p>A passion for innovation and problem solving</p>
          </li>
          <li>
            <p>
              A portfolio that demonstrates a strong understanding of UX
              process, consistency, design systems, and attention to detail
            </p>
          </li>
          <li>
            <p>
              Have contributed as a design partner and a strong collaborator
              with product managers and engineers
            </p>
          </li>
          <li>
            <p>
              Practical experience working with User Researchers (or conducting
              User Research yourself) and utilizing the results of that research
              to shape your designs
            </p>
          </li>
          <li>
            <p>Have excellent written and verbal communication skills</p>
          </li>
          <li>
            <p>
              Complete focus on users and solving for their needs and wants. You
              put users first and have experience driving impact from insights.
            </p>
          </li>
          <li>
            <p>Have shipped digital products</p>
          </li>
          <li>
            <p>
              Have cross-platform design experiences (Web, android, iOS, emails)
            </p>
          </li>
        </ul>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in your work and see your work's positive impact
          on your colleagues, our customers, and the world. We believe in
          providing transparency and support so you can do the best work of your
          career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 1,
    priority: 0,
    role: 'Product',
    selected: false,
    skills: [
      'UX Design',
      'Visual Design',
      'Interaction Design',
      'Design Systems',
      'System Design',
      'User Research',
      'User Experience',
      'Design Thinking',
      'Product Design',
      'Web Design',
    ],
    title: 'UX Designer',
  },
  {
    cart: false,
    geo: 'Santa Clara, CA, United States',
    index: 13,
    jd: (
      <>
        <p>
          Eightfold offers the industry's first AI-powered Talent Intelligence
          SaaS Platform to transform how organizations plan, hire, develop and
          retain a diverse workforce, enabling individuals to transform their
          career - leveraging modern AI.
        </p>
        <p>
          <span>
            <Link
              href="https://www.prnewswire.com/news-releases/chano-fernandez-joins-eightfold-ai-as-co-ceo-leading-hrs-next-chapter-through-ai-301934288.html"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              The future of HR is bright with Chano Fernandez at the helm of
              Eightfold AI.
            </Link>
          </span>{' '}
          <span>
            Chano Fernandez joining Eightfold represents a significant step
            toward a more AI-driven HR world.
          </span>
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          About Core Infrastructure Team
        </h3>
        <ul>
          <li>
            <p>
              The Infra team at Eightfold is responsible for building,
              maintaining and enhancing the very core parts of our stack -
              everything from Search, Databases, Machine Learning
              Infrastructure, Data Warehouse, Developer Platform, and
              Application Infrastructure.
            </p>
          </li>
          <li>
            <p>
              This Infrastructure is used by every team and powers every single
              product at Eightfold. Behind everything our Users and customers
              see - is the architecture built by the Core Infrastructure team to
              keep it running.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>
          What you will do (or learn to do):
        </h3>
        <ul>
          <li>
            <p>
              Being in a Staff level role, you will be responsible for the
              architecture, design, code, and delivery of multiple highly
              scalable systems
            </p>
          </li>
          <li>
            <p>
              Mentor/coach other engineers to help them perform at their best by
              performing code/design reviews, and providing all the technical
              directions.
            </p>
          </li>
          <li>
            <p>
              Being hands-on and curious about the technology, get into the
              ground-level technical details/depth whenever required.
            </p>
          </li>
          <li>
            <p>
              Work with other engineering teams & cross-functional teams to
              address all the technical dependencies.
            </p>
          </li>
          <li>
            <p>Actively participate in interviewing & hiring the top talent.</p>
          </li>
          <li>
            <p>
              Innovate and suggest industry best practices, and participate in
              internal/external technical presentations.
            </p>
          </li>
          <li>
            <p>
              Architect, design, develop, maintain, and support distributed
              systems in Eightfold's core infrastructure.
            </p>
          </li>
          <li>
            <p>
              Build out large-scale software platforms that are used by millions
              of users that process huge terabytes of data.
            </p>
          </li>
          <li>
            <p>
              Build out microservices using frameworks such as Docker and
              Kubernetes to power all our products.
            </p>
          </li>
          <li>
            <p>
              Build distributed Microservice-based architectures to maximize
              system extensibility, scalability, and availability.
            </p>
          </li>
          <li>
            <p>
              Support the deployment and operations of our products across
              multiple environments.
            </p>
          </li>
          <li>
            <p>
              Deliver high-performance, reliable, and scalable products
              leveraging best-of-breed technology.
            </p>
          </li>
          <li>
            <p>
              We support customers all over the world, including governments and
              enterprises, and help them meet strict security standards.
            </p>
          </li>
          <li>
            <p>
              Diagnose problems that can arise in a complex distributed
              environment.
            </p>
          </li>
          <li>
            <p>
              Design and implement data structures, algorithms, and artificial
              intelligence models to improve overall system performance.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What you bring</h3>
        <ul>
          <li>
            <p>
              Strong CS fundamentals with an excellent track record of
              architecting, designing, developing, and delivering highly
              scalable systems.
            </p>
          </li>
          <li>
            <p>Passionate about coding and designing,</p>
          </li>
          <li>
            <p>
              Passionate about building high-quality software that is secure,
              scalable and highly available
            </p>
          </li>
          <li>
            <p>Expertise in building distributed systems at cloud scale</p>
          </li>
          <li>
            <p>Familiarity with SaaS environments (AWS or Azure or GCP)</p>
          </li>
          <li>
            <p>Expertise in backend software development.</p>
          </li>
          <li>
            <p>
              Strong Coding, Data Structures, Algorithms, and Problem-Solving
              skills.
            </p>
          </li>
          <li>
            <p>You can design large-scale distributed systems</p>
          </li>
          <li>
            <p>Strong problem-solving, and data analysis skills.</p>
          </li>
          <li>
            <p>
              Experience in technical leadership role leading project teams and
              setting technical direction.
            </p>
          </li>
          <li>
            <p>
              Familiarity with CloudOps and SRE principles. We are
              tools-agnostic and often build our own, or extend existing tools
              and services.
            </p>
          </li>
          <li>
            <p>
              Bonus points for strength in any of these areas: Database, Data
              Warehouse, Application infrastructure, Search infrastructure,
              Security, Big data systems etc.
            </p>
          </li>
          <li>
            <p>
              Excellent communication skills with a can-do attitude and is a
              self-starter.
            </p>
          </li>
          <li>
            <p>Natural leadership abilities and can mentor and train others.</p>
          </li>
          <li>
            <p>BS or MS or PhD is preferred or equiv relevant experience.</p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>Pay Transparency</h3>
        <p>
          Please note this role is categorized as hybrid in Santa Clara, CA The
          base salary ranges below are provided for pay transparency. Base pay
          is only one piece of our total compensation package as this role may
          be eligible for bonus and equity awards. Compensation varies depending
          on a number of factors including qualifications, skills, competencies,
          experience and location by zone.
        </p>
        <p>
          Zone A is in SF Bay Area, CA . Base annual salary range: $198,000 to
          $233,000 + discretionary bonus up to 20% + preIPO equity.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 2,
    priority: 0,
    role: 'Engineering',
    selected: false,
    skills: [
      'CS Fundamentals',
      'Architecture',
      'Design',
      'Development',
      'Scalable Systems',
      'Cloud Scale',
      'SaaS',
      'Backend Software Development',
      'Coding',
      'Data Structures',
      'Algorithms',
      'Problem-Solving',
      'Distributed Systems',
      'CloudOps',
      'SRE',
      'Database',
      'Data Warehouse',
      'Application Infrastructure',
      'Search Infrastructure',
      'Security',
      'Big Data Systems',
      'Communication',
      'Leadership',
      'Mentorship',
      'Training',
      'BS',
      'MS',
      'PhD',
    ],
    title:
      'Staff Software Engineer - Core Infrastructure (Distributed Systems)',
  },
  {
    cart: false,
    geo: 'San Francisco, CA, United States',
    index: 14,
    jd: (
      <>
        <p>
          Eightfold was founded with a vision to solve for employment in our
          society. For decades, the connection between individuals and
          opportunities has been based on who the individuals are and the
          strength of their network, vs. their potential. Eightfold leverages
          artificial intelligence to transform how to think about skills and
          capabilities for individuals as well as how jobs and career decisions
          are made. Eightfold offers the industry's first AI-powered Talent
          Intelligence Platform to transform how organizations plan, hire,
          develop and retain a diverse workforce, enabling individuals to
          transform their career.
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <p>
          The Senior Events Marketing Contractor will help the company build
          world class interactive experiences that can drive demand generation
          through planning and execution of both industry sponsored and
          Eightfold hosted programs/events.
        </p>
        <p>
          The Senior Events Marketing Contractor will be detail-oriented,
          creative and technically capable marketer who can work
          cross-functionally with stakeholders across the entire company. The
          Senior Events Marketing Contractor will be a self-starter to thrive in
          a dynamic environment and demonstrate seamless project management
          skills while contributing to overall company goals. This position will
          be covering a maternity leave with an anticipated duration of six
          months.
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          Responsibilities:
        </h3>
        <ul>
          <li>
            <p>
              Conceptualize, design, develop and promote the execution of both
              virtual and in-person events from start to finish, for all
              assigned industry sponsored tradeshows, corporate events and field
              marketing programs.
            </p>
          </li>
          <li>
            <p>
              Manage event plans and deliverables including: setting timelines,
              division of duties, event sponsorship contract management, vendor
              sourcing and relationships, promotions, collateral/marketing
              materials, giveaways and promotional items, A/V, food & beverage,
              labor, shipping logistics, staffing, hotels, etc.
            </p>
          </li>
          <li>
            <p>
              Support company efforts in accessing event/field marketing needs
              to build a strong Eightfold brand presence.
            </p>
          </li>
          <li>
            <p>
              Oversee the creation of all event related content and
              communications including event briefs, marketing emails, creative
              assets, and internal event updates.
            </p>
          </li>
          <li>
            <p>
              Collaborate with other marketing functions including product
              marketing, partner marketing, demand generation, content,
              brand/design, social, PR/AR and Sales to plan event strategy and
              execute on all event related deliverables.
            </p>
          </li>
          <li>
            <p>
              Track and measure metrics for all events in order to make
              decisions on event success and future programs.
            </p>
          </li>
          <li>
            <p>
              Successful management of overall event budget, track and negotiate
              vendor payments and actual expenses.
            </p>
          </li>
          <li>
            <p>Manage outside partner and vendor relationships.</p>
          </li>
          <li>
            <p>
              Willing to travel as needed to support site visits, set-up,
              on-site execution and tear-down.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>Qualifications:</h3>
        <ul>
          <li>
            <p>
              6+ years of experience working in event marketing related role,
              B2B tech company preferred
            </p>
          </li>
          <li>
            <p>
              BA degree in Marketing, related field or equivalent work
              experience
            </p>
          </li>
          <li>
            <p>
              Strong project management, organization, attention to detail,
              timelines, and collaboration
            </p>
          </li>
          <li>
            <p>
              Vendor sourcing, management and event contract negotiation skills
            </p>
          </li>
          <li>
            <p>
              Registration and event communication best practices (experience
              with event platforms)
            </p>
          </li>
          <li>
            <p>
              Team player willing to pitch in on events and other projects as
              needed
            </p>
          </li>
          <li>
            <p>
              Experience with marketing automation systems (e.g. Marketo) and
              CRM (e.g. Salesforce) preferred
            </p>
          </li>
          <li>
            <p>Self-starter with a sense of urgency and strong work ethic</p>
          </li>
          <li>
            <p>Ability to think strategically and execute tactically</p>
          </li>
          <li>
            <p>Excellent written and verbal communication skills</p>
          </li>
        </ul>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in the work you are doing, and see the positive
          impact of your work on your colleagues, our customers, and the world.
          We believe in providing transparency and support, so you can do the
          best work of your career.
        </p>
        <p>
          We offer competitive compensation and benefits, including family
          medical, vision, and dental coverage. We also offer a 401k plan, stock
          options, and unlimited paid time off for all eligible employees.
        </p>
        <p>
          We embrace a hybrid work model that aims to boost collaboration,
          enhance our culture, and drive innovation through a blend of remote
          and in-person work. We are committed to creating a dynamic and
          flexible work environment that nurtures the collaborative spirit of
          our team. Starting February 1, 2024, employees residing near Santa
          Clara, California, or our Bangalore and Noida offices in India will
          return to the office twice a week.
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          The salary ranges below are provided for pay transparency. Zone A -
          $15,000 a month + periodic completion bonuses
        </p>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 2,
    role: 'Marketing',
    selected: false,
    skills: [
      'Event Marketing',
      'B2b Software',
      'B2c Software',
      'Project Management',
      'Organization',
      'Attention to Detail',
      'Timelines',
      'Collaboration',
      'Vendor Sourcing',
      'Vendor Management',
      'Event Contract Negotiation',
      'Registration',
      'Event Communication',
      'Marketing Automation Systems',
      'CRM',
      'Self-Starter',
      'Sense of Urgency',
      'Work Ethic',
      'Strategic Thinking',
      'Tactical Execution',
      'Communication',
    ],
    title: 'Senior Events Marketing Contractor',
  },
  {
    cart: false,
    geo: 'London, England, United Kingdom',
    index: 15,
    jd: (
      <>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          About the Role
        </h3>
        <p>
          We are looking for a highly motivated, results-oriented Sales
          Operations Manager with a specialty in Deal Desk. The primary focus of
          this position will be to help our sales team through the sales cycle
          process and ensure orders are correctly set up in our CRM and
          subscription systems. The right person for this job has a team player
          approach, attention to detail, excels at problem solving through
          critical analysis, and is challenged by process review and continuous
          improvement.
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          What you will do:
        </h3>
        <ul>
          <li>
            <p>
              Providing sales support (Pricing, Quoting, CRM, Sales Process,
              etc.)
            </p>
          </li>
          <li>
            <p>
              Accurately processing orders using the Company's internal CRM
              system
            </p>
          </li>
          <li>
            <p>
              Understand our CRM and subscription systems and work on continuous
              improvement
            </p>
          </li>
          <li>
            <p>
              Cultivating strong working relationships with key business
              partners (e.g. Finance, Legal, Channel, Support, etc.) to help
              facilitate the review and approval process
            </p>
          </li>
          <li>
            <p>
              Building and reviewing a variety of order forms with differing
              levels of complexity for accuracy, while ensuring all required
              approvals, such as discounts and contractual terms, are obtained
              and clearly documented as well as being fully compliant with our
              internal policies
            </p>
          </li>
          <li>
            <p>
              Assisting in delivering ongoing education and training to ensure
              Sales understanding of and compliance with all deal processes
            </p>
          </li>
          <li>
            <p>
              Safeguarding and managing data quality in SFDC for all proposed
              and closed quotes/deals
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What we need:</h3>
        <ul>
          <li>
            <p>4+ years of Deal Desk & Sales Operations experience</p>
          </li>
          <li>
            <p>
              Demonstrated capability to build strong working relationships with
              internal business units
            </p>
          </li>
          <li>
            <p>
              Demonstrated participation in process improvement initiatives
              and/or project management experience
            </p>
          </li>
          <li>
            <p>Demonstrated proficiency in Salesforce is required</p>
          </li>
          <li>
            <p>
              Strong communication, organizational and problem-solving skills
            </p>
          </li>
          <li>
            <p>
              Knowledge of Quote to Cash life cycle and understanding of SaaS
              (Software as a Service) pricing and licensing model
            </p>
          </li>
          <li>
            <p>
              Ability to work without supervision in a fast-paced high-tech
              environment
            </p>
          </li>
          <li>
            <p>
              Experience in structuring multi-element (subscriptions, services
              and support) contracts
            </p>
          </li>
        </ul>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in the work you are doing, and see the positive
          impact of your work on your colleagues, our customers, and the world.
          We believe in providing transparency and support, so you can do the
          best work of your career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, our employees will return to
            the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 2,
    role: 'Operations',
    selected: false,
    skills: [
      'Deal Desk',
      'Sales Operations',
      'Sales Support',
      'Pricing',
      'Quoting',
      'CRM',
      'Sales Process',
      'Continuous Improvement',
      'Process Review',
      'Relationship Building',
      'Vendor Management',
      'Contract Negotiation',
      'Order Forms',
      'Discounts',
      'Contractual Terms',
      'Approvals',
      'Compliance',
      'Education',
      'Training',
      'Data Quality',
      'SFDC',
      'Project Management',
      'Communication',
      'Organization',
      'Problem-Solving',
      'Quote to Cash',
      'SaaS',
      'Pricing',
      'Licensing',
      'Supervision',
      'High-Tech Environment',
      'Multi-Element Contracts',
    ],
    title: 'Deal Desk Manager - EMEA',
  },
  {
    cart: false,
    geo: ['Bangalore, Karnataka, India', 'Noida, Uttar Pradesh, India'],
    index: 16,
    jd: (
      <>
        <p>
          The Technical Support Team is focused on delivering great customer
          experiences to individuals and companies using Eightfold.ai products.
          Reporting to the Head of Customer Support, the Senior Technical
          Support Engineer role provides direct support to business leaders,
          hiring managers, and recruiters leveraging Eightfold.ai products to
          hire top talent.
        </p>
        <p>
          Senior Technical Support Engineer is responsible for managing and
          resolving challenging issues for Eightfold.ai customers and helps to
          ensure that SLA's are met. This includes developing subject matter
          expertise within the customer success department and collaborating
          with other team members. The successful candidate will be able to
          quickly gain an understanding of the Eightfold.ai products, platform,
          API, and internal applications. You will work on developing and
          maintaining internal support tools. This is a customer-facing role in
          a very collaborative environment and therefore it requires strong
          interpersonal skills. You will build strong relationships with
          customer IT teams to ensure smooth product deployments and timely
          resolution of technical problems during the Pilot and Go-live phases
          of product deployment and continue to support during adoption and the
          rest of the contract life.
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          What you'll do:
        </h3>
        <ul>
          <li>
            <p>
              Assist customers in solving problems related to Eightfold.ai
              product features, usability, technical issues, and product
              performance, including participation in all aspects of pre-sale,
              customer onboarding/development, diagnosing/resolving technical
              issues, and escalation support
            </p>
          </li>
          <li>
            <p>
              Develop processes around Zendesk and other tools to deliver
              world-class customer support
            </p>
          </li>
          <li>
            <p>
              Work closely with engineering to translate customer feedback into
              potential fixes/enhancements
            </p>
          </li>
          <li>
            <p>
              Achieve team targets for response times, service level, and
              customer satisfaction, as established by the Manager of Customer
              Support
            </p>
          </li>
          <li>
            <p>
              Collaborate with team members across Technical Services, Customer
              Success, Product, Marketing, and Engineering as needed to resolve
              issues and deliver great customer experiences
            </p>
          </li>
          <li>
            <p>
              Monitor CSAT/NPS scores and drive increased customer advocacy by
              compiling and sharing feedback with relevant stakeholders
              including your Manager, the Product Team, Technical Services, and
              Customer Success
            </p>
          </li>
          <li>
            <p>
              Maintain and create detailed documentation through logging of
              support cases, email, and knowledge base articles for the customer
              and internal use
            </p>
          </li>
          <li>
            <p>
              Work on projects that provide value to the department,
              Eightfold.ai, and the Self-Serve and Employer customer bases
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What we need:</h3>
        <ul>
          <li>
            <p>Minimum of 5 years of experience in a Technical Support role</p>
          </li>
          <li>
            <p>
              Working knowledge of Technical Support, SQL, Debugging,
              Troubleshooting, API, Programming, and Support Engineering
            </p>
          </li>
          <li>
            <p>
              Strong customer focus and ability to deliver great customer
              experiences
            </p>
          </li>
          <li>
            <p>
              A track record of meeting and exceeding KPIs and working well in
              team-based settings
            </p>
          </li>
          <li>
            <p>Outstanding written and verbal communication skills</p>
          </li>
          <li>
            <p>Strong troubleshooting and problem-solving skills</p>
          </li>
          <li>
            <p>High personal productivity and excellent time management</p>
          </li>
          <li>
            <p>Demonstrated ability to troubleshoot technical issues</p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>
          Preferred Qualification:
        </h3>
        <ul>
          <li>
            <p>
              Experience in a B2B supporting an Enterprise or SaaS-based
              application experience preferred
            </p>
          </li>
          <li>
            <p>
              Familiarity with applicant tracking systems, human resources,
              recruiting, employer branding, and the online recruitment
              advertising space
            </p>
          </li>
          <li>
            <p>Familiarity with at least one programming language</p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>About us:</h3>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <p>
          <span>You may want to refer to the media coverage on </span>
          <Link
            href="https://employee.eightfold.ai/vsimp?d=eyJtc2dfaWQiOjY4NzMwODY1MjU1LCJldmVudCI6ImNsaWNrIiwibmhhc2giOi04NDg4OTM5NTEzMTUxNjYxMjU5fQ._NS1VwT4eE55aDSDvPtC2I2h2VY&amp;n=https://techcrunch.com/2021/06/10/ai-startup-eightfold-valued-at-2-1b-in-softbank-led-220m-funding/?guccounter=1%22%20%5Ct%20%22_blank"
            target="_blank"
            variant="primary"
          >
            TechCrunch
          </Link>{' '}
          <span>and </span>
          <Link
            href="https://www.reuters.com/business/talent-matching-startup-eightfold-ai-raises-220-mln-round-led-by-softbank-vision-2021-06-10/"
            target="_blank"
            variant="primary"
          >
            Reuters.
          </Link>{' '}
          <Link href="https://eightfold.ai/" target="_blank" variant="primary">
            <strong>Eightfold.ai</strong>
          </Link>{' '}
          <span>is led by </span>
          <strong>Ashutosh Garg, </strong>
          <span>
            a PhD in Machine Learning/IIT Delhi alumni who managed Search and
            Personalization at Google, and{' '}
          </span>
          <strong>Varun Kacholia-</strong>
          <span>
            IIT Bombay alumni, who led the News Feed Ranking team at Facebook
            and developed YouTube Search at Google.
          </span>
        </p>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in the work you are doing, and see the positive
          impact of your work on your colleagues, our customers, and the world.
          We believe in providing transparency and support, so you can do the
          best work of your career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, our employees will return to
            the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              Our customers
            </Link>
          </p>
          <p>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              Press
            </Link>
          </p>
        </div>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 2,
    role: 'Customer Support',
    selected: false,
    skills: [
      'Technical Support',
      'SQL',
      'Debugging',
      'Troubleshooting',
      'API',
      'Programming',
      'Support Engineering',
      'Customer Focus',
      'KPIs',
      'Team-Based Settings',
      'Communication',
      'Organization',
      'Problem-Solving',
      'Time Management',
      'Troubleshooting',
      'B2B',
      'Enterprise',
      'SaaS',
      'Applicant Tracking Systems',
      'Human Resources',
      'Recruiting',
      'Employer Branding',
      'Online Recruitment Advertising',
      'Programming Languages',
    ],
    title: 'Senior Technical Support Engineer',
  },
  {
    cart: false,
    geo: ['Bangalaru, Karnataka, India', 'Noida, Uttar Pradesh, India'],
    index: 17,
    jd: (
      <>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          What You Will Be Doing:
        </h3>
        <ul>
          <li>
            <p>
              Assist with month-end, quarter-end and year-end accounting close
              activities
            </p>
          </li>
          <li>
            <p>
              Prepare journal entries, account analysis, and monthly balance
              sheet reconciliations including prepaids, fixed assets, and
              accruals.
            </p>
          </li>
          <li>
            <p>
              Review income statement accounts to determine whether the accounts
              are correctly stated and initiate any changes needed in the
              general ledger by preparing the necessary journal entries
            </p>
          </li>
          <li>
            <p>
              Assisting consultants in filing the statutory returns and
              maintaining timely statutory compliances
            </p>
          </li>
          <li>
            <p>Assist with internal controls implementation and compliance</p>
          </li>
          <li>
            <p>Support in various audits, Statutory, Tax, GST and IFC ect.</p>
          </li>
          <li>
            <p>
              Help with accounting system implementation projects to scale
              accounting operations
            </p>
          </li>
          <li>
            <p>
              Be a key member of the accounting team by assisting with other
              responsibilities including the participation in special projects
              and other ad hoc analysis.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>
          What We Will Expect From You:
        </h3>
        <ul>
          <li>
            <p>5+ years of Accounting/Finance experience in MNCs</p>
          </li>
          <li>
            <p>
              Bachelor's degree (or equivalent) in Accounting/Finance/Business
            </p>
          </li>
          <li>
            <p>Netsuite or other ERP tool experience preferred</p>
          </li>
          <li>
            <p>India Statutory filing and audit support experience preferred</p>
          </li>
          <li>
            <p>
              Proven ability to prioritize workloads across team members with
              minimal supervision
            </p>
          </li>
          <li>
            <p>
              Detail-oriented, organized and able to perform work at the highest
              levels of accuracy
            </p>
          </li>
          <li>
            <p>
              Excellent verbal, written communication and interpersonal skills
              to develop a collaborative working relationship with cross
              functional teams
            </p>
          </li>
        </ul>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, our employees will return to
            the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 2,
    role: 'G&A',
    selected: false,
    skills: [
      'Accounting',
      'Finance',
      'MNCs',
      'ERP',
      'Statutory Filing',
      'Audit Support',
      'Prioritization',
    ],
    title: 'Sr. Accountant',
  },
  {
    cart: false,
    geo: 'London, England, United Kingdom',
    index: 18,
    jd: (
      <>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          About the Role
        </h3>
        <p>
          We are looking for motivated leaders who are passionate about
          delivering successful outcomes for enterprise customers. The Product
          Delivery Manager (PDM) is part Functional Consultant, Project Manager
          and Enablement Manager. In this critical role - the PDM will
          accelerate time to value of business outcomes and ensure successful
          large-scale and complex implementations integrating with a robust tech
          stack (Workday, Success Factors, Oracle, etc.).
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          What you will do:
        </h3>
        <ul>
          <li>
            <p>
              The PDM serves as the primary point of contact for Eightfold.AI's
              enterprise customers throughout Eightfold's Talent Intelligence
              Platform implementation and successful go-live journey.
            </p>
          </li>
          <li>
            <p>
              Provide functional leadership while guiding enterprise customers
              through complex implementations.
            </p>
          </li>
          <li>
            <p>
              Clearly understand customer business challenges and use cases.
            </p>
          </li>
          <li>
            <p>
              Serve as an advocate and escalation point and ensure issues are
              being addressed.
            </p>
          </li>
          <li>
            <p>
              Demonstrate benefits of the Eightfold Talent Intelligence platform
              to address customer challenges.
            </p>
          </li>
          <li>
            <p>
              Configure EF's AI Platform according to Best Practices for quick
              Time to Value.
            </p>
          </li>
          <li>
            <p>
              Perform testing on the platform to ensure accurate configuration.
            </p>
          </li>
          <li>
            <p>
              Provide expertise and guidance to Eightfold partners/customers.
            </p>
          </li>
          <li>
            <p>Ensure timely delivery of assigned implementation.</p>
          </li>
          <li>
            <p>
              Create Project Plans - measure, track & report progress against
              the plans.
            </p>
          </li>
          <li>
            <p>
              Manage Eightfold project team resources and their day-to-day
              project tasks.
            </p>
          </li>
          <li>
            <p>
              Serve as an escalation point for Customers on project issues,
              Eightfold team members or issues related to performance of the
              Eightfold applications.
            </p>
          </li>
          <li>
            <p>
              Manage scope, resources and project budget according to the SOW
              and apply Change Orders as necessary.
            </p>
          </li>
          <li>
            <p>
              Build relationships and partner with internal teams such as
              Product, Engineering and Solution Architects.
            </p>
          </li>
          <li>
            <p>
              Continuous review and improvement of methodology and delivery best
              practices- encouraging innovation in technology and process.
            </p>
          </li>
          <li>
            <p>Conduct Post Implementation Reviews to refine best practices</p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What we need:</h3>
        <ul>
          <li>
            <p>
              5-10+ years of experience in: functional consulting, professional
              services, and/or project management
            </p>
          </li>
          <li>
            <p>
              Experience with successfully managing large-scale ATS/HRIS system
              implementations such as Workday, SuccessFactors, Oracle or other
              talent/recruitment management software platforms for multiple
              enterprise customers
            </p>
          </li>
          <li>
            <p>
              Extra points for demonstrated success working on Workday Talent
              implementations. Configuration of Workday HCM, Talent Acquisition,
              Talent Management, Performance and related Reporting
            </p>
          </li>
          <li>
            <p>Strong Project execution and project management skills</p>
          </li>
          <li>
            <p>Functional Consulting experience</p>
          </li>
          <li>
            <p>
              Experience in defining business requirements and additional scope
              for change orders and expansion
            </p>
          </li>
          <li>
            <p>Excellent written and verbal communication skills</p>
          </li>
          <li>
            <p>
              Experience in managing IT, consulting, or SaaS
              projects/implementations
            </p>
          </li>
          <li>
            <p>Strong resource planning</p>
          </li>
          <li>
            <p>
              Ability to work with different functional & technical consultants
            </p>
          </li>
          <li>
            <p>
              Bachelor's degree in IT or Engineering or equivalent work
              experience
            </p>
          </li>
          <li>
            <p>
              Direct hands-on experience with enterprise-grade HCM systems, SaaS
              and project management technology is a plus
            </p>
          </li>
        </ul>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in your work and see your work's positive impact
          on your colleagues, our customers, and the world. We believe in
          providing transparency and support so you can do the best work of your
          career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. We ask employees within commuting distance of our London
            office, located at <strong>52 Grosvenor Gardens</strong>, to work
            from the office one to two days a week based on their commute time.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 2,
    role: 'Product Delivery',
    selected: false,
    skills: [
      'Functional Consulting',
      'Professional Services',
      'Project Management',
      'ATS',
      'HRIS',
      'Workday',
      'SuccessFactors',
      'Oracle',
      'Talent/Recruitment Management Software Platforms',
      'Workday Talent',
      'Configuration',
      'HCM',
      'Talent Acquisition',
      'Talent Management',
      'Performance',
      'Reporting',
      'Project Execution',
      'Project Management',
      'Business Requirements',
      'Change Orders',
      'Expansion',
      'Communication',
      'IT',
      'Consulting',
      'SaaS',
      'Resource Planning',
      'Resource Management',
      'Functional & Technical Consulting',
      'IT',
      'Engineering',
      'HCM Systems',
      'SaaS',
      'Project Management Technology',
    ],
    title: 'Product Delivery Manager - EMEA',
  },
  {
    cart: false,
    geo: 'United States',
    index: 19,
    jd: (
      <>
        <p>
          <Link
            href="https://eightfold.ai/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Eightfold
          </Link>
          <span>
            {' '}
            was founded with a vision to solve for employment in our society.
            For decades, the connection between individuals and opportunities
            has been based on who they are and their network's strength vs.
            their potential. Eightfold leverages artificial intelligence to
            transform how to think about skills and capabilities for individuals
            and how jobs and career decisions are made. Eightfold offers the
            industry's first AI-powered Talent Intelligence Platform to
            transform how organizations plan, hire, develop and retain a diverse
            workforce, enabling individuals to transform their careers.
          </span>
        </p>
        <p>
          <span>To date, Eightfold AI has received more than </span>
          <Link
            href="https://eightfold.ai/blog/eightfold-ai-raises-220m/"
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            $410 million in funding and a valuation of over $2B
          </Link>
          <span>
            {' '}
            from leading investors to further our mission of finding the right
            career for everyone in the world. If you are passionate about
            solving one of the most fundamental challenges of our society -
            employment, working on hard business problems, and being part of an
            amazing growth story - Eightfold is the place to be!
          </span>
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          About the Team
        </h3>
        <p>
          The US West Solutions Consulting team at Eightfold is a fun, tight
          knit, and diverse group of high performers. In a fast paced
          environment, we deliver spectacular experiences for all of our
          prospects, customers and partners. We believe to be successful you
          must have grit, be authentic, and stay a student of the game for
          Solutions Consulting and Human Resources. We collaborate closely with
          our Sales peers, work with Product team members often, and build long
          term relationships with our customers. Our efforts are rewarded with
          public recognition, career development spend, spiffs, President's
          Club, and accelerators on variable comp.
        </p>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 16 }}>
          What you will do:
        </h3>
        <ul>
          <li>
            <p>
              Work with our sales team to consult customers, show how our
              solutions will help them, and execute technical sales discussions
            </p>
          </li>
          <li>
            <p>
              Discover, identify and present to prospects and customers how our
              solutions can improve current business processes
            </p>
          </li>
          <li>
            <p>
              Create and deliver compelling demonstrations and stories that
              cultivate a deep understanding of, and desire for, the solution
              and value we provide
            </p>
          </li>
          <li>
            <p>
              Provide technical and functional guidance during the sales process
              to the sales team and potential customers to ensure that deals are
              closed consistently and quickly
            </p>
          </li>
          <li>
            <p>
              Influence our product strategy by effectively communicating
              feedback from customers and prospects, as well as working with the
              product team to develop new product features
            </p>
          </li>
          <li>
            <p>
              Lead the design of solutions for prospects and customers,
              communicate with the delivery team to ensure successful outcomes
            </p>
          </li>
          <li>
            <p>Maintain customer relationships pre and post-sale</p>
          </li>
          <li>
            <p>
              Communicate the technology vision to business leaders and analysts
            </p>
          </li>
          <li>
            <p>Represent our company at industry events and panels</p>
          </li>
          <li>
            <p>Mentor and help your SC team members</p>
          </li>
          <li>
            <p>
              Create automated demo content for repeatable fast wins; videos,
              verticalized demo instances, etc.
            </p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>What we need:</h3>
        <ul>
          <li>
            <p>A desire to fix employment</p>
          </li>
          <li>
            <p>
              A strong focus on helping customers define and achieve success
            </p>
          </li>
          <li>
            <p>Exceptional communication and technical skills</p>
          </li>
          <li>
            <p>
              An affinity for the startup space, AI technology, and a desire to
              own, build, and grow both yourself, your team, and the entire
              organization
            </p>
          </li>
          <li>
            <p>
              Experience in, or selling to, Human Resources, Talent Acquisition,
              Talent Management
            </p>
          </li>
          <li>
            <p>3+ years customer-facing Sales Engineering experience</p>
          </li>
          <li>
            <p>A positive attitude</p>
          </li>
        </ul>
        <h3 style={{ color: 'var(--primary-color)' }}>
          Great to have, but not required:
        </h3>
        <ul>
          <li>
            <p>Experience with demo automation software</p>
          </li>
          <li>
            <p>Experience using or selling AI software</p>
          </li>
          <li>
            <p>Exceptional communication and technical skills</p>
          </li>
          <li>
            <p>
              Have worked in Hospitality, Food Services, Performing Arts, Sales,
              or HR
            </p>
          </li>
          <li>
            <p>Proficiency in other languages</p>
          </li>
        </ul>
        <p>
          If you feel you don't meet 100% of the qualifications above, we want
          you to apply! Eightfold believes in hiring people for their potential,
          not the job they did before. If you are passionate about learning and
          excited about what we are doing, then we want to hear from you.
        </p>
        <p>
          We are a team of self-starters who excel in their fields. We believe
          in giving you responsibility, not a task. We want you to have
          ownership and pride in your work and see your work's positive impact
          on your colleagues, our customers, and the world. We believe in
          providing transparency and support so you can do the best work of your
          career.
        </p>
        <p>
          <strong>Hybrid Work @ Eightfold: </strong>
          <span>
            We embrace a hybrid work model that aims to boost collaboration,
            enhance our culture, and drive innovation through a blend of remote
            and in-person work. We are committed to creating a dynamic and
            flexible work environment that nurtures the collaborative spirit of
            our team. Starting February 1, 2024, employees residing near Santa
            Clara, California, or our Bangalore and Noida offices in India will
            return to the office twice a week.
          </span>
        </p>
        <p>
          Eightfold.ai provides equal employment opportunities (EEO) to all
          employees and applicants for employment without regard to race, color,
          religion, sex, sexual orientation, gender identity, national origin,
          age, or disability.
        </p>
        <p>
          Experience our comprehensive benefits with family medical, vision and
          dental coverage, a competitive base salary, and eligibility for equity
          awards and discretionary bonuses or commissions.
        </p>
        <p>
          Please note this role is open to most US locations and categorized as
          remote in Zone B. The base salary ranges below are provided for pay
          transparency. Base pay is only one piece of our total compensation
          package as this role may be eligible for commissions and equity
          awards. Compensation varies depending on a number of factors including
          qualifications, skills, competencies, and experience. Zones are
          determined by location.
        </p>
        <p>Zone B: Annual Base Salary Range: $134,400 to $182,400.</p>
        <div style={{ margin: '16px 0' }}>
          <p>
            <span>Our customers stories- </span>
            <Link
              href="https://eightfold.ai/customers/customer-stories"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/customers/customer-stories
            </Link>
          </p>
          <p>
            <span>Press- </span>
            <Link
              href="https://eightfold.ai/about/press/"
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              https://eightfold.ai/about/press/
            </Link>
          </p>
        </div>
      </>
    ),
    level: 2,
    location: 'Hybrid',
    priority: 2,
    role: 'Sales',
    selected: false,
    skills: [
      'Sales Engineering',
      'Human Resources',
      'Customer Support',
      'Troubleshootng',
      'Technical Sales',
      'Business Processes',
      'Demonstrations',
      'Product Strategy',
      'Product Features',
      'Solution Design',
      'Customer Relationships',
      'Communication',
      'Technology Vision',
      'Industry Events',
      'Demo Automation',
      'AI Software',
      'Hospitality',
      'Food Services',
      'Performing Arts',
      'Sales',
      'HR',
      'Languages',
    ],
    title: 'Senior Solutions Consultant',
  },
];
