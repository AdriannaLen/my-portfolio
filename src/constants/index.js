import mockUp1 from '../assets/mockup1.webp'
import mockUp2 from '../assets/mockUp2.webp'
import mockUp3 from '../assets/mockUp3.webp'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import sass from '../assets/sass.svg'
import react from '../assets/react.svg'
import typescript from '../assets/typescript.svg'
import javascript from '../assets/javascript.svg'
import tailwind from '../assets/tailwind.svg'


export const navLinks = [
   
    {
      id: "me",
      title: "About Me",
    },
    {
      id: "projects",
      title: "Projects",
    },
    // {
    //   id: "carieer",
    //   title: "Carieer",
    // },
    // {
    //     id: "technologies",
    //     title: "Technologies",
    //   },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const projects = [
    {
      id: "project3",
      title: "Qubit",
      link: "www.qubit.cm",
      photo: mockUp1
  },
    {
        id: "project1",
        title: "Employeee Management System",
        link: "employee-app-three.vercel.app",
        photo: mockUp2
    },
    {
        id: "project2",
        title: "Far Away",
        link: "lets-pack-pi.vercel.app",
        photo: mockUp3
    },
  ]

  export const careerTimeline = [
    {
      year: "2020",
      title: "Started First Job",
      description: "Began working as a junior developer at ABC Corp.",
    },
    {
      year: "2021",
      title: "Promotion",
      description: "Promoted to mid-level developer at ABC Corp.",
    },
    {
      year: "2022",
      title: "Switched Jobs",
      description: "Joined XYZ Ltd as a senior developer.",
    },
    {
      year: "2023",
      title: "Lead Developer",
      description: "Promoted to lead developer at XYZ Ltd.",
    },
  ];

  export const technologies = [
    {
      id: 1,
      img: html,
      name: 'html',
    },
    {
      id: 2,
      img: css,
      name: 'css',
    },
    {
      id: 3,
      img: sass,
      name: 'sass',
    },
    {
      id: 4,
      img: javascript,
      name: 'javascript',
    },
    {
      id: 5,
      img: react,
      name: 'react',
    },
    {
      id: 6,
      img: typescript,
      name: 'typescript',
    },
    {
      id: 7,
      img: tailwind,
      name: 'tailwind',
    },

  ]