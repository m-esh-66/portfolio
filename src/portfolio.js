const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://m-esh-66.github.io/portfolio',
  title: 'Marcus Esh',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Marcus Eshleman',
  role: 'Software Engineering Student',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/marcus-eshleman-22b21a296/',
    github: 'https://github.com/m-esh-66',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Autonomous Aerial Payload Delivery',
    description: 'An autonomous aerial payload delivery system in C++ with OpenCV that locates a designated drop zone via computer vision, adjusts flight path using telemetry, and times payload release. Designed as a prototype for the 2026 SAE Aero Design competition.',
    stack: ['C++', 'OpenCV'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Simulation of Laser Projections in the Infrared Range',
    description:
      'Simulation environment for faculty research modeling laser heating on surfaces. Simulated thermal changes over time using PDEs and diffusion equations, visualized with real-time Matplotlib animations. The simulation is highly configurable, allowing customization of material types, laser properties, and movement patterns.',
    stack: ['Python', 'Matplotlib'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'PowTracker Snowfall Monitoring App',
    description:
      'A snowfall monitoring app that helps skiers identify resorts with optimal snow conditions. Implemented HTML web scraping to gather real-time weather data and dynamically update an interactive map. Won first place in category at the University of Alberta’s largest hackathon, judged by a panel of industry professionals.',
    stack: ['HTML', 'Python', 'Selenium'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
    {
    name: 'Key Card Security System',
    description:
      'Digital access control system in VHDL using Vivado, integrated with the Zybo Z7 FPGA. Designed multiplexer and demultiplexer logic to manage lab access and trigger alarms via key card inputs. Improved system security through simulation, testing, and proposed enhancements for greater reliability.',
    stack: ['VHDL', 'FPGA', 'Vivado'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C/C++',
  'Java',
  'SQL',
  'HTML',
  'CSS',
  'VHDL',
  'Assembly',
  'OpenCV',
  'Git',
  'Django',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'meshlema@ualberta.ca',
}

export { header, about, projects, skills, contact }
