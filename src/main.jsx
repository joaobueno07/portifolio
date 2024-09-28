import './index.css';

import App from './App.jsx';
import About from './components/about/About.jsx';
import Projects from './components/projects/Projects.jsx';
import Contact from './components/contact/Contact.jsx';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path: "/", element: <App /> },
  {path: "/sobre", element: <About />},
  {path: '/projetos', element: <Projects />},
  {path: '/contato', element: <Contact />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
