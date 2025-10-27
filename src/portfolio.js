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
    'I\'m a fourth-year Computer Engineering student at the University of Alberta, specializing in software. I like building things that work — and work well. Whether it\'s designing autonomous computer vision systems as the Software Lead of UAlberta Aero Design, developing personal projects, or applying machine learning and computer vision techniques, I’m always focused on creating elegant, impactful solutions. Currently looking for internships for summer 2026, particularly within machine learning and computer vision.',

  resume: 'https://m-esh-66.github.io/portfolio/Marcus_Eshleman_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/marcus-eshleman-22b21a296/',
    github: 'https://github.com/m-esh-66',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
    {
    name: 'Classifier using Convolution Neural Network',
    description: 'A convolutional neural network (CNN) built in  to classify handwritten digits from the MNIST dataset. The project implemented a simplified LeNet-style architecture and a 5-fold stratified cross-validation pipeline to tune hyperparameters (filter count and learning rate), achieving about 96.6% accuracy with the optimal configuration of 32 filters and 0.001 learning rate.',
    stack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Scikit-Learn', 'Matplotlib' ],
    sourceCode: 'https://github.com/m-esh-66/MiscML',
  },
      {
    name: 'LLM Maze Solver',
    description: 'A Tree-of-Thought prompting system in Python that guides an LLM to solve ASCII-based mazes through serialized maze representations, 3×3 neighborhood parsing, and backtracking. The project demonstrates structured multi-step reasoning and local decision-making using LLM prompts, evaluating both performance and cost while concluding that classical search algorithms remain superior for deterministic maze solving.',
    stack: ['Python', 'OpenAI API'],
    sourceCode: 'https://github.com/m-esh-66/MiscML',
    // livePreview: 'https://github.com',
  },
    {
    name: 'KNN Classification Pipeline',
    description: 'A k-Nearest Neighbors classification pipeline trained on the Breast Cancer Wisconsin Diagnostic dataset fetched via ucimlrepo. The model applied Min-Max feature scaling, 10-fold stratified cross-validation, and 100 randomized trials to evaluate performance across multiple k values, identifying k = 7 as optimal for diagnostic accuracy.',
    stack: ['Python', 'Scikit-Learn', 'Matplotlib', 'NumPy', 'Pandas'],
    sourceCode: 'https://github.com/m-esh-66/MiscML',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Autonomous Aerial Payload Delivery',
    description: 'An autonomous aerial payload delivery system in C++ with OpenCV that locates a designated drop zone via computer vision, adjusts flight path using telemetry, and times payload release. Designed as a prototype for the 2026 SAE Aero Design competition.',
    stack: ['C++', 'OpenCV'],
    sourceCode: 'https://github.com/m-esh-66/MiscML',
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
  'NumPy',
  'OpenCV',
  'Git',
  'Django',
  'Databricks',
  'Scikit-Learn',
  'TensorFlow',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'meshlema@ualberta.ca',
}

export { header, about, projects, skills, contact }
