import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL + process.env.SUB_DOMAIN}>
    <App />
  </BrowserRouter>,
  rootElement);
