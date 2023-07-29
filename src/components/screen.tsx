const StartScreen = ({ handleScreenChange }) => {
    return (
        <div>
            <h1>Welcome to the Game</h1>
            <button onClick={() => handleScreenChange('questionScreen')}>Start</button>
        </div>
    );
};

export default StartScreen;
