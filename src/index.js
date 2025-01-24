
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import './index.css'; // Import your CSS
import App from './App.jsx'; // Make sure extension is correct if it's a JSX file
import { BrowserRouter } from 'react-router';
// const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
// root.render(
//   // Use render method on the root
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
