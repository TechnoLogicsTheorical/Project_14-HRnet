import { createBrowserRouter } from 'react-router-dom';

import Root from './rootLayout.jsx';
import ListEmployee from '../Layouts/ListEmployee.jsx';
import AddEmployee from '../Layouts/AddEmployee.jsx';

export const routerPaths = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <ListEmployee />,
                },
                {
                    path: '/add',
                    element: <AddEmployee />,
                },
            ],
        },
    ],
);