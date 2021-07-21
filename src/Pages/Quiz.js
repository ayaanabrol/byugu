import React, { useState } from 'react';

export default function App() {
	const questions = [
        {
			questionText: 'Can you walk in a straight line?',
			answerOptions: [
				{ answerText: 'Yes,Completely', isCorrect: true },
				{ answerText: 'Yes,but I stumbled ', isCorrect: false },
				{ answerText: 'Sort of but its hard', isCorrect: false },
				{ answerText: 'No way i can barely move!', isCorrect: false },
			],
		},
		{
			questionText: 'Can you remember your last drink?',
			answerOptions: [
				{ answerText: 'I havent even started', isCorrect: true },
				{ answerText: 'Yes,I stopped hours ago ', isCorrect: false },
				{ answerText: 'No,I cant even remember , the name of the place ', isCorrect: false },
				{ answerText: 'Last drink? I never stopped', isCorrect: false },
			],
		},
		{
			questionText: 'How well can you touch your finger to your nose?',
			answerOptions: [
				{ answerText: 'Perfectly,no trouble here!', isCorrect: true },
				{ answerText: 'Pretty good,but it was a little difficult', isCorrect: false },
				{ answerText: 'Barely , are you sure I have a nose?', isCorrect: false },
				{ answerText: 'I cant feel my face ', isCorrect: false },
			],
		},
		{
			questionText: 'How much have you drank? ',
			answerOptions: [
				{ answerText: 'I havent had any alchohol ', isCorrect: true },
				{ answerText: 'I had 1 drink', isCorrect: true },
				{ answerText: 'I had 2 or 3 drinks', isCorrect: false },
				{ answerText: 'I had 4 or 5 drinks ', isCorrect: false },
        { answerText: 'I have no idea but it was a laptop ', isCorrect: false }
			],
		},
    	{
			questionText: 'What is 12 x 2 ? ',
			answerOptions: [
				{ answerText: '144 ', isCorrect: true },
				{ answerText: '24', isCorrect: true },
				{ answerText: '120', isCorrect: false },
				{ answerText: 'I no speak math! ', isCorrect: false },

			],
		},
    	{
			questionText: 'What sounds like a good idea right now? ',
			answerOptions: [
				{ answerText: 'Going home I am bored  ', isCorrect: true },
				{ answerText: 'Keep this party rolling ', isCorrect: false},
				{ answerText: 'I need to sit down ', isCorrect: false },
				{ answerText: 'Throwing up ,passing out in that order ', isCorrect: false },
 
			],
		},
    	{
			questionText: 'Can you name 5 different politicians? ',
			answerOptions: [
				{ answerText: 'Easy I can name the entire executive branch ', isCorrect: true },
				{ answerText: 'Yes , but barely ', isCorrect: false},
				{ answerText: 'I can name 3 or 4', isCorrect: false },
				{ answerText: 'I dont even know my own name', isCorrect: false },
			],
		},
    	{
			questionText: 'What sounds like the best meal right now? ',
			answerOptions: [
				{ answerText: 'Waffle House  ', isCorrect: true },
				{ answerText: 'Taco Bell ', isCorrect: true },
				{ answerText: 'Pasta', isCorrect: true },
				{ answerText: 'Water please ', isCorrect: true },
        { answerText: 'I will barf if i eat', isCorrect: false }
			],
		},
    	{
			questionText: 'There is an emergency who are you going to call? ',
			answerOptions: [
				{ answerText: '911', isCorrect: true },
				{ answerText: 'My lawyer', isCorrect: false },
				{ answerText: 'Ghostbusters', isCorrect: false },
				{ answerText: 'I lost my phone ', isCorrect: false },			],
		},
    	{
			questionText: 'In your opinion how drunk are you? ',
			answerOptions: [
				{ answerText: 'Not at all ', isCorrect: true },
				{ answerText: 'Just getting started', isCorrect: false},
				{ answerText: 'Just the way I like', isCorrect: false },
				{ answerText: 'I am feeling really ,really ,really good', isCorrect: false },
        { answerText: 'Knerd repus am I  ( I am drunk!!!!) ', isCorrect: false }
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length} if you did not score ten out of ten we dont advise you to drive
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}