// Write your code here.
import './index.css'

const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon ? WON_IMG : LOSE_IMG
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win0rLoseContainer">
      <img src={imgUrl} alt="win or lose" className="gameResultImage" />
      <div className="resultContainer">
        <h1 className="gameResult">{gameStatus}</h1>
        <p className="bestScore">{scoreLabel}</p>
        <h1 className="gameScore">{score}/12</h1>
        <button type="button" className="playButton" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
