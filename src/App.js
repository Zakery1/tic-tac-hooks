import React, { useState } from 'react';
import './App.scss';

function checkForWinner(gameBoxes) {
	console.log('gameboxes', gameBoxes)
}

function App() {

	const [turn, changeTurn] = useState('X');
	const [gameBoxes, updateGameBoxes] = useState(Array(9).fill(null));

	const clickEndTurn = () => {
		checkForWinner();
	}

	const checkForWinner = () => {
		if(turn ==='X') {
			console.log('turn ended?')
		}
	}

	const clickBox = (index) => {
		const newBoxData = gameBoxes.slice();

		if(turn === 'X') {
			newBoxData[index] = 'X';
		} else {
			newBoxData[index] = 'O';
		}

		updateGameBoxes(newBoxData);
	}

	const renderBoxes = gameBoxes.map((square, index) => {
		return <div className="box" key={index}>

				<button
					onClick={() => clickBox(index)}
					className="game-button">
					{square}
				</button>
			</div>
	});

	return (
		<div className="App">
			<div className="App-container">
				<p>
					Tic tac toe
       			</p>
				<p>
					If you are {turn}, its your turn
				</p>

				{
					turn === 'X' ? 
						<button onClick={() => changeTurn('O')} >Finish turn</button>
							:
						<button onClick={() => changeTurn('X')}>Finish turn</button>
				}


				<br />
				<div className="zg-game-container">
					<div className="zg-game">
						{renderBoxes}
					</div>
				</div>
			</div>
		</div>
	);
}



export default App;
