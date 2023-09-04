import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <Link className="bg-primary text-white text-lg px-4 py-2" to="/LoginPage">LoginPage</Link>
        </div>
    );
}

export default Home;
