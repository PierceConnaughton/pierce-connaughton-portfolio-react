import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import routes from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                {routes.map(({ path, element, index }) => (
                    <Route key={path || 'index'} path={path} element={element} index={index} />
                ))}
            </Route>
        </Routes>
    </BrowserRouter>
);
