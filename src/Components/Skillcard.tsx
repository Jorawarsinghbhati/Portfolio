import { HoverEffect } from "./ui/CardHover";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Machine Learning",
    description: "Developing intelligent systems with algorithms like regression, classification, clustering, and neural networks for predictive analytics and automation.",
    link: "https://www.ibm.com/topics/machine-learning",
  },
  {
    title: "NumPy",
    description: "A powerful numerical computing library in Python used for matrix operations, complex mathematical functions, and data preprocessing in ML projects.",
    link: "https://numpy.org/",
  },
  {
    title: "Pandas",
    description: "A high-performance data manipulation and analysis library that helps process structured data efficiently, essential for data science and machine learning tasks.",
    link: "https://pandas.pydata.org/",
  },
  {
    title: "Next.js",
    description: "A React framework enabling server-side rendering, static site generation, and API development, improving SEO and web app performance.",
    link: "https://nextjs.org/",
  },
  {
    title: "Context API",
    description: "A built-in React feature for managing global state efficiently, eliminating the need for prop drilling in component trees.",
    link: "https://react.dev/reference/react/useContext",
  },
  {
    title: "Node.js",
    description: "A runtime environment that allows running JavaScript on the server side, enabling fast, scalable backend development with frameworks like Express.js.",
    link: "https://nodejs.org/",
  },
  {
    title: "HTML & CSS",
    description: "The backbone of web development, defining structure and styling of web pages using modern techniques like Flexbox, Grid, and responsive design.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  },
  {
    title: "Express.js",
    description: "A minimalist and fast web framework for Node.js, simplifying backend development with robust routing, middleware, and API handling.",
    link: "https://expressjs.com/",
  },
  {
    title: "JavaScript",
    description: "A versatile scripting language that powers dynamic web applications, enabling interactivity, event handling, and asynchronous operations using APIs.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "SQL (Advanced)",
    description: "Expertise in database design, query optimization, indexing, and stored procedures for efficient data retrieval and management in relational databases.",
    link: "https://www.w3schools.com/sql/",
  },
];
