import React, { useState } from 'react';

function UserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && salary) {
      onAddUser(name, salary);
      setName('');
      setSalary('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
        required
      />
      <input
        type="number"
        placeholder="Sueldo"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>
        Agregar
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    flex: 1,
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4A90E2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserForm;
