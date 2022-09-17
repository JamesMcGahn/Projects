import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isEditting, setisEditing] = useState({ item: {}, edit: false });
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'test',
      rating: 2,
    },
  ]);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = (item) => {
    setFeedback(feedback.map((feedbackItem) => (feedbackItem.id === item.id ? item : feedbackItem)));
    setisEditing({
      item: {},
      edit: false,
    });
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setisEditing({
      item,
      edit: true,
    });
  };

  return <FeedbackContext.Provider value={{ feedback, updateFeedback, deleteFeedback, addFeedback, editFeedback, isEditting }}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
