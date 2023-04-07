// this page will show the project you have clicked on

function App() {
  const [comments, setComments] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleAddComment = comment => {
    setComments([...comments, comment]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Box>
        <h1 className="text-2xl font-bold">Hello, world!</h1>
        <p className="text-gray-800 mt-2">This is the project box. </p>
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
