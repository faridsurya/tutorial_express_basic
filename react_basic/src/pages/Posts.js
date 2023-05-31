import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  const getRandomImage = () => {
    const randomId = Math.floor(Math.random() * 100) + 1;
    return `https://picsum.photos/id/${randomId}/200/200`;
  };

  return (
    <div className='container' style={{paddingTop: "80px"}}>
    <Row>
      {posts.map(post => (
        <Col key={post.id} sm={6} md={4} lg={3}>
          <Card className='mb-3'>
            <Card.Img variant="top" src={getRandomImage()} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button variant="primary"  href={`/post/${post.id}`}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default Posts;
