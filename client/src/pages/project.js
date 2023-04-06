// this page will show the project you have clicked on

import React, { useState } from 'react';

function Box({ children }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      {children}
    </div>
  );
}

function CommentButton({ onClick }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      onClick={onClick}
    >
      Add Comment
    </button>
  );
}

function CommentForm({ onSubmit }) {
  const [comment, setComment] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="w-full p-2 border-gray-400 rounded"
        placeholder="Add a comment"
        value={comment}
        onChange={event => setComment(event.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

function App() {
  const [comments, setComments] = useState([]);

  const handleAddComment = comment => {
    setComments([...comments, comment]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Box>
        <h1 className="text-2xl font-bold">Hello, world!</h1>
        <p className="text-gray-800 mt-2">This is a box that holds text.</p>
        <CommentButton onClick={() => setShowCommentForm(true)} />
        {showCommentForm && (
          <CommentForm onSubmit={handleAddComment} />
        )}
        {comments.map((comment, index) => (
          <p className="text-gray-800 mt-2" key={index}>{comment}</p>
        ))}
      </Box>
    </div>
  );
}

export default App;
