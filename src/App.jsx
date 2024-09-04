import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import ExpenseCalculator from './components/ExpenseCalculator';

function App() {
  const [users, setUsers] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const addUser = (name, salary) => {
    setUsers([...users, { name, salary: parseFloat(salary) }]);
  };

  const handleExpenseChange = (expense) => {
    setTotalExpense(parseFloat(expense));
  };

  const removeUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Proporcionalizador de Gastos</h1>
      <UserForm onAddUser={addUser} />
      <UserList users={users} onRemoveUser={removeUser} />
      <ExpenseCalculator
        users={users}
        totalExpense={totalExpense}
        onExpenseChange={handleExpenseChange}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    color: '#4A90E2',
  },
};

export default App;
