import React, { useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([1, 2, 3]);

  function onNormalTest() {
    setPosts([]);
    setPosts([...posts, ...[4, 5, 6]]);
  }

  function onSpecialTest() {
    setPosts([]);
    setPosts(oldPost => [...oldPost, ...[4, 5, 6]]);
  }

  return (
    <div>
      <button onClick={onNormalTest}>TEST NORMAL SET</button>
      <button onClick={onSpecialTest}>TEST SPECIAL SET</button>
      <span>{posts}</span>
    </div>
  );
};

export default App;
