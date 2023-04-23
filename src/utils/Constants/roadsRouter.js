import { createBrowserRouter } from 'react-router-dom';

import Root from '../rootLayout.jsx';
import ListEmployee from '../../Layouts/ListEmployee.jsx';
import AddEmployee from '../../Layouts/AddEmployee.jsx';
import Error from '../../Layouts/Error.jsx';

export const routerPaths = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <AddEmployee />,
                },
                {
                    path: '/list',
                    element: <ListEmployee />,
                },
                {
                    path: '*',
                    element: <Error />
                }
            ],
        },
    ],
);