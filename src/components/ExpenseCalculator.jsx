import React from 'react';

function ExpenseCalculator({ users, totalExpense, onExpenseChange }) {
  const totalSalary = users.reduce((acc, user) => acc + user.salary, 0);

  // Función para calcular la parte a pagar y el porcentaje
  const calculateExpenseShare = (salary) => {
    const share = totalExpense * (salary / totalSalary);
    const percentage = (salary / totalSalary) * 100;
    return {
      share: share ? share.toFixed(2) : '0.00',
      percentage: percentage ? percentage.toFixed(2) : '0.00',
    };
  };

  return (
    <div style={styles.container}>
      <input
        type="number"
        placeholder="Cantidad Gastada"
        value={totalExpense}
        onChange={(e) => onExpenseChange(e.target.value)}
        style={styles.input}
      />
      <div style={styles.results}>
        {users.map((user, index) => {
          const { share, percentage } = calculateExpenseShare(user.salary);
          return (
            <div key={index} style={styles.result}>
              {user.name} debe pagar: {share} €
              <span style={styles.percentage}>({percentage}%)</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  results: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  result: {
    padding: '5px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  percentage: {
    color: '#28a745', // Color verde para el porcentaje
    marginLeft: '10px', // Margen izquierdo para separar del importe
  },
};

export default ExpenseCalculator;
