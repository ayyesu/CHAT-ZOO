import {Routes, Route, Navigate} from 'react-router-dom';
import CHAT from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';
import {useContext} from 'react';
import {AuthContext} from './context/AuthContext';
import {ChatContextProvider} from './context/ChatContext';

function App() {
    const {user} = useContext(AuthContext);
    return (
        <ChatContextProvider user={user}>
            <>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={user ? <CHAT /> : <Login />} />
                        <Route
                            path='/register'
                            element={user ? <CHAT /> : <Register />}
                        />
                        <Route
                            path='/login'
                            element={user ? <CHAT /> : <Login />}
                        />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </div>
            </>
        </ChatContextProvider>
    );
}

export default App;
