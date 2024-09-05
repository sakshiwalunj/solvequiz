import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    top: '0',
                    left: '0',
                    zIndex: '-1',
                }}
            >
                <source src={`${process.env.PUBLIC_URL}/bgv.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                //padding: '20px',
                position: 'relative', // Ensure content is above the video
            }}>
                <div style={{
                    backgroundImage: 'url(https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '80%', // Adjust width as needed
                    maxWidth: '900px', // Optional: Set a maximum width
                    padding: '30px',
                    maxHeight:'900px',
                    borderRadius: '8px',
                    //boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    color: 'white', // Ensure text is readable against the background
                    position: 'relative',
                }}>
                    <div style={{
                        //backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for better text readability
                        padding: '20px',
                        borderRadius: '8px',
                    }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            marginBottom: '20px',
                            color: 'white',
                        }}>
                            Welcome to the Quiz App
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            marginBottom: '30px',
                            color: '#ddd', // Slightly lighter color for readability
                        }}>
                            Test your knowledge with our fun and challenging quizzes. Whether you're here to learn something new or just have some fun, we've got a quiz for you!
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link
                                to="/quiz"
                                style={{
                                    display: 'inline-block',
                                    margin: '0 10px',
                                    padding: '10px 10px',
                                    fontSize: '1rem',
                                    borderRadius: '5px',
                                    textDecoration: 'none',
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                            >
                                Take a Quiz
                            </Link>
                            <Link
                                to="/register"
                                style={{
                                    display: 'inline-block',
                                    margin: '0 10px',
                                    padding: '10px 20px',
                                    fontSize: '1rem',
                                    borderRadius: '5px',
                                    textDecoration: 'none',
                                    backgroundColor: '#6c757d',
                                    color: 'white',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
