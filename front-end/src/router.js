import { createBrowserRouter } from "react-router-dom";
import Layout from './component/Layout';
import About from "./component/About";
import Skill from './component/Skill';
import Experience from "./component/Experience";
import Education from "./component/Education";
import Contact from "./component/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <About />
      },
      {
        path: '/skill',
        element: <Skill />
      },
      {
        path: '/experience',
        element: <Experience />
      },
      {
        path: '/education',
        element: <Education />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);

export default router;