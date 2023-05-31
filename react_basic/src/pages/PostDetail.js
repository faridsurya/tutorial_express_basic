import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = response.data;
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Generate a random image URL
  const imageUrl = `https://source.unsplash.com/400x200/?nature,${id}`;

  return (
    <div className='container' style={{paddingTop: '80px'}}>
<Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default PostDetail;
