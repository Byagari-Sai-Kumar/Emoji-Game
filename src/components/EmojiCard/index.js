// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const clickedOnEmojiImage = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emojiListContainer">
      <button type="button" className="button" onClick={clickedOnEmojiImage}>
        <img src={emojiUrl} alt={emojiName} className="emojiView" />
      </button>
    </li>
  )
}

export default EmojiCard
