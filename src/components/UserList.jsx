import React from 'react';

function UserList({ users, onRemoveUser }) {
  return (
    <div style={styles.list}>
      {users.map((user, index) => (
        <div key={index} style={styles.user}>
          {user.name} - {user.salary.toFixed(2)} €
          <button
            onClick={() => onRemoveUser(index)}
            style={styles.deleteButton}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  list: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  user: {
    padding: '5px 0',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#E94B35',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
};

export default UserList;
