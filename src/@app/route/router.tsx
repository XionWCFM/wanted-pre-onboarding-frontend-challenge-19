import { createBrowserRouter } from 'react-router-dom';
import Root from '../../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);
