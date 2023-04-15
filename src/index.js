import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { routerPaths } from './utils/Constants/roadsRouter.js';

import { store } from './utils/Redux/storeRedux.js';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={routerPaths} />
        </Provider>
    </React.StrictMode>
);
