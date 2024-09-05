import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Import Layout component
import Home from './components/Home';
import QuizScreen from './components/QuizScreen';
import Register from './components/Register';
import About from './components/About';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="quiz" element={<QuizScreen />} />
                    <Route path="register" element={<Register />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;

