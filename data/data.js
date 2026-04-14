const skills = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Swift",
  "OpenGL",
  "HTML",
  "CSS",
  "Docker",
  "Django",
  "React",
  "Figma",
  "Maya",
  "Git",
  "GitHub",
];

const skillGroups = [
  {
    title: "Programming",
    items: ["Java", "Python", "JavaScript", "TypeScript", "Swift"],
  },
  {
    title: "Web & UI",
    items: ["HTML", "CSS", "React", "Django", "Responsive Design"],
  },
  {
    title: "Graphics & 3D",
    items: ["OpenGL", "GLSL", "Image Processing", "Maya", "3D Design"],
  },
  {
    title: "Data & Systems",
    items: ["SQL", "Databases", "Distributed Systems", "Networks", "Docker"],
  },
  {
    title: "Tools & Collaboration",
    items: ["Git", "GitHub", "Figma"],
  },
];

const projects = [
  {
    title: "food4future - AR Campus Guide",
    description:
      "An augmented reality campus guide that makes HTW Berlin's food4future research on sustainable nutrition interactive and easy to explore. The web app combines real campus locations with playful digital elements, including GPS navigation, AR experiences, quizzes, badges, a sliding puzzle, and a memory game.",
    tags: ["React", "TypeScript", "Vite", "WebXR", "Leaflet.js", "Blender"],
    featured: true,
    live: "https://showtime.f4.htw-berlin.de/ws25/bachelor/b2-food4future-ar-campusguide/",
    github: "https://github.com/zehraign/arpas-arc-f4f/tree/all-features-2001",
    image: "images/ar-campus.jpg",
    note: "Team project",
  },
  {
    title: "3D Graphics Scene - OpenGL Project",
    description:
      "A real-time 3D graphics application built with OpenGL and GLSL, demonstrating core concepts of modern rendering pipelines. The project features multiple 3D objects, including manually defined geometry and externally loaded models, with continuous transformations and hierarchical animation (e.g. orbital motion). Advanced texturing techniques such as mipmapping and filtering are applied, alongside custom vertex and fragment shaders with Phong shading for realistic lighting.",
    tags: ["OPENGL", "GLSL", "LWJGL", "JAVA", "SHADERS", "TEXTURING"],
    image: "images/opengl-cg.png",
    video: "videos/opengl-demo.mp4",
    live: "#",
    github: "#",
    note: "Coursework - source not public",
  },
  {
    title: "SwiftUI Address Book App",
    description:
      "A mobile application built with SwiftUI that allows users to manage contacts through a clean and intuitive interface. The app includes list views, detail views, basic state management, and user interaction patterns typical for iOS applications.",
    tags: ["Swift", "SwiftUI", "iOS", "UI Design"],
    gallery: [
      "images/swiftui-1.png",
      "images/swiftui-2.png",
      "images/swiftui-3.png",
      "images/swiftui-4.png",
    ],
    live: "#",
    github: "#",
    note: "Coursework - source not public",
  },
  {
    title: "Web Engineering Labs ",
    description:
      "A collection of hands-on lab projects exploring modern web development, from static websites to fullstack applications. Technologies include Express, Next.js, REST APIs, and Docker. Topics such as server-side rendering, data persistence, testing, and CI/CD were applied in practical exercises. A prototype of a virtual bookshelf was developed to experiment with fullstack integration and data handling.",
    tags: ["JavaScript", "Node.js", "Express", "Next.js", "Docker", "REST API", "Testing", "CI/CD"],
    live: "#",
    github: "https://github.com/zehraign/virtual-bookshelf-next",
    note: "Coursework collection",
  },
  {
    title: "3D Camera Model",
    description:
      "A 3D camera model created in Autodesk Maya as part of my 3D design coursework.",
    tags: ["3D Design", "Modeling", "Maya", "Rendering"],
    image: "images/vintage-camera.png",
    live: "#",
    github: "#",
    note: "Coursework - 3D asset",
  },
];

const experiences = [
  {
    year: "2023 - today",
    title: "B.Sc. International Media and Computing",
    place: "HTW Berlin",
    text: "Studying media informatics with a focus on web programming, databases, computer graphics, image processing, distributed systems, and usability.",
  },
];
