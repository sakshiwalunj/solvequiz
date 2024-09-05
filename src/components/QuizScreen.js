import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const QuizScreen = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [time, setTime] = useState(300); // 5 minutes in seconds

    const user = useSelector((state) => state.user); // Access user data from Redux store
    const navigate = useNavigate();

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correct: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Mars", "Saturn"],
            correct: "Jupiter"
        },
        {
            question: "What element does 'O' represent on the periodic table?",
            options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
            correct: "Oxygen"
        },
        {
            question: "Which ocean is the largest?",
            options: ["Atlantic", "Indian", "Pacific", "Arctic"],
            correct: "Pacific"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
            correct: "Harper Lee"
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    handleSubmit();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleAnswerChange = (e) => {
        setAnswers({
            ...answers,
            [currentQuestionIndex]: e.target.value
        });
    };

    const handlePrevious = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const handleNext = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleSubmit = () => {
        let calculatedScore = 0;
        questions.forEach((q, index) => {
            if (answers[index] === q.correct) {
                calculatedScore += 5;
            }
        });
        setScore(calculatedScore);
    };

    const handlePlayAgain = () => {
        navigate('/');
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (score !== null) {
        return (
            <div style={styles.container}>
                <h2>Quiz Results</h2>
                <div style={styles.resultBox}>
                    <p style={styles.resultText}>Hello {user.username},</p>
                    <p style={styles.resultText}>Your score: {score} out of {questions.length * 5}</p>
                    <p style={styles.resultText}>Thank you for playing the quiz!</p>
                    <button style={styles.playAgainButton} onClick={handlePlayAgain}>Play Again</button>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.quizBox}>
                <div style={styles.timer}>
                    <span id="timer">{formatTime(time)}</span>
                </div>
                <div style={styles.questionContainer}>
                    <div style={styles.questionBox}>
                        <h3>{questions[currentQuestionIndex].question}</h3>
                        {questions[currentQuestionIndex].options.map((option, i) => (
                            <div key={i} style={styles.option}>
                                <input
                                    type="radio"
                                    id={`option${i}`}
                                    name={`question${currentQuestionIndex}`}
                                    value={option}
                                    checked={answers[currentQuestionIndex] === option}
                                    onChange={handleAnswerChange}
                                />
                                <label htmlFor={`option${i}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={styles.navigation}>
                    {currentQuestionIndex > 0 && (
                        <button style={styles.button} onClick={handlePrevious}>Previous</button>
                    )}
                    {currentQuestionIndex < questions.length - 1 && (
                        <button style={styles.button} onClick={handleNext}>Next</button>
                    )}
                </div>
            </div>
            <div style={styles.fixedSubmitButton}>
                <button style={styles.submitButton} onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        color: 'black',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden',
    },
    quizBox: {
        paddingBottom: '80px', // Ensure there’s enough space for the fixed submit button
    },
    timer: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '1.2rem',
        zIndex: 10,
    },
    questionContainer: {
        position: 'relative',
        padding: '20px',
    },
    questionBox: {
        backgroundColor: '#333', // Dark background color
        color: 'white', // White text color
        padding: '20px',
        borderRadius: '8px',
        backgroundImage: 'url(https://img.freepik.com/free-vector/3d-style-question-mark-background-solve-puzzle-confusion_1017-50462.jpg?w=740&t=st=1725525721~exp=1725526321~hmac=eb7914268de9e127e4328b9848338ec2f646d26a5512a56de34025db4ff7e882)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    option: {
        marginBottom: '10px',
    },
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#6c757d',
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    submitButton: {
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#4B0082', // Dark Purple
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    fixedSubmitButton: {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'transparent',
    },
    resultBox: {
        textAlign: 'center',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#333',
        boxShadow: '0 0 10px #4B0082, 0 0 20px #4B0082, 0 0 30px #4B0082', // Neon glow effect
    },
    resultText: {
        fontSize: '1.5rem',
        color: 'white'
    },
    playAgainButton: {
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#4B0082', // Dark Purple
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default QuizScreen;
