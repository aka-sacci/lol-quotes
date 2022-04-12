import { Route, Routes } from 'react-router-dom'
import App from './pages/App'
import CreateUser from './pages/createUser';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='createUser' element={<CreateUser />} />
        </Routes>
    )
}

export default Router