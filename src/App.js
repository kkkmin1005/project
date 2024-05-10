import React, { useState, useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.js';

function App() {
  const [NewPosts, SetNewPosts] = useState([]);

  useEffect(() => {
    // data.js에서 데이터 가져와서 상태 업데이트
    fetch('url')
      .then(res => res.json)
      .then(data => {SetNewPosts(data)})
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행됨

  return (
    <>
      <div className='Posts'>
        <p>신규기업</p>
      </div>

      <div className="box">
        {NewPosts.map((post, index) =>
          <Posts key={index} post={post} />
        )}
      </div>
    </>
  );
}

function Posts({ post }) {
  return (
    <Card style={{ width: '18rem' }} className='Card'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{post.new_company1_name}</Card.Title>
        <Card.Text>
          {post.new_company1_data}
        </Card.Text>
        <Button variant="primary">자세히 보기</Button>
      </Card.Body>
    </Card>
  );
}

export default App;


