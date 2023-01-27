import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

const UserLists = ({ Users }) => {
    
  return (
    <div>
      {Users.map((user,i) => (
        <Card key={i} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {user.age}
            </Card.Subtitle>
            <Card.Link as={Link} to={`/Profile/${user.id}`}>GO TO PROFILE</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UserLists;
