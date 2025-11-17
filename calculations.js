document.addEventListener('DOMContentLoaded', function() {
  const rows = document.querySelectorAll('tbody tr');
  const initialAmount = 152964;
  
  let currentBalance = initialAmount;
  
  rows.forEach(row => {
      // Добавляем классы к ячейкам
      row.cells[0].className = 'number-cell';
      row.cells[1].className = 'initial-sum';
      row.cells[2].className = 'expenses';
      row.cells[3].className = 'balance';
      
      const expenseCell = row.cells[2];
      const balanceCell = row.cells[3];
      
      const expense = parseInt(expenseCell.textContent.replace(/\s/g, ''));
      currentBalance = currentBalance - expense;
      balanceCell.textContent = formatNumber(currentBalance);
  });
  
  function formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
});