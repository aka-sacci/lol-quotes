import { Route, Routes } from 'react-router-dom'
import App from '../pages/App'
import CreateUser from '../pages/createUser';
import Login from '../pages/Login';
import Success from '../pages/Success';
import AdmPanel from '../pages/AdmPanel';
import QuotesView from '../pages/QuotesView';
import { AuthContextProvider } from '../providers/AuthProvider';
import AuthProtectedRoute from './AuthProtectedRoute';
import AuthUnprotectedRoute from './AuthUnprotectedRoute';



const Router = () => {

    return (
        <AuthContextProvider>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='createUser' element={
                    <AuthUnprotectedRoute>
                        <CreateUser />
                    </AuthUnprotectedRoute>
                } />
                <Route path='createuser/success' element={
                    <AuthProtectedRoute>
                        <Success />
                    </AuthProtectedRoute>} />
                <Route path='login' element={
                    <AuthUnprotectedRoute>
                        <Login />
                    </AuthUnprotectedRoute>} />
                <Route path='admpanel' element={
                    <AuthProtectedRoute>
                        <AdmPanel />
                    </AuthProtectedRoute>} />
                <Route path='admpanel/quotes' element={
                    <AuthProtectedRoute>
                        <QuotesView />
                    </AuthProtectedRoute>
                } />
            </Routes>
        </ AuthContextProvider>
    )
}


export default Router