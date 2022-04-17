import { Route, Routes, useParams } from 'react-router-dom'
import App from './pages/App'
import CreateUser from './pages/createUser';
import Login from './pages/Login';
import Success from './pages/Success';
import AdmPanel from './pages/AdmPanel';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='createUser' element={<CreateUser />} />
            <Route path='createuser/success' element={<Success />} />
            <Route path='login' element={<Login />} />
            <Route path='admpanel' element={<AdmPanel />}/>

        </Routes>
    )
}

export default Router