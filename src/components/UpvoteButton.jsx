import React, { useCallback } from 'react';

const UpvoteButton = ({ issueId }) => {
  const handleUpvote = useCallback(() => {
    // Upvote logic
  }, [issueId]);

  return <button onClick={handleUpvote}>Upvote</button>;
};