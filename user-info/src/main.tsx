import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom'; // Use HashRouter for routing
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <HashRouter basename="">
    <App />
  </HashRouter>
);
