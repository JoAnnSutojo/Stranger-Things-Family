import React, { useContext } from 'react';

// Components
// import Header from '../Header/Header.jsx';
// import AuthForm from '../AuthForm/AuthForm.jsx';

// Contexts
import { AuthContext } from '../context/auth/index.js';

// Style
// import './HomePage.css';

function HomePage() {
    const { isSignup } = useContext(AuthContext);

    return ( 
        <div >
            <div >
          
                
            </div>
        </div>
     );
}

export default HomePage;