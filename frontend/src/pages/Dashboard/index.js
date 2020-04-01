import React from 'react';
import { connect, useSelector } from 'react-redux';

function Dashboard() {
  const users = useSelector((state) => state.user);

  return (
    <div>
      {users && users.map((user) => <h1 key={user.email}>{user.email}</h1>)}
    </div>
  );
}

export default connect()(Dashboard);
