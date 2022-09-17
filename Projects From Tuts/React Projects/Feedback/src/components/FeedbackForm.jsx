import Card from './ui/Card';
import Button from './ui/Button';
import { useState, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const { addFeedback, isEditting, updateFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState();

  useEffect(() => {
    if (isEditting.edit === true) {
      setBtnDisabled(false);
      setText(isEditting.item.text);
      setRating(isEditting.item.rating);
    }
  }, [isEditting]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be less than 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditting.edit === true) {
      updateFeedback({ text, rating, id: isEditting.item.id });
    } else {
      addFeedback({ text, rating });
    }

    setText('');
    setRating(0);
    setBtnDisabled(true);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How you rate our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} selected={rating} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
export default FeedbackForm;
