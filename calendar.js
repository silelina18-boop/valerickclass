function createCalendar(year, month) {
  let m = month - 1;
  let d = new Date(year, m);

  let table = `
    <table>
      <caption>${getMonthName(m)} ${year}</caption> 
      <tr>
        <th>пн</th>
        <th>вт</th>
        <th>ср</th>
        <th>чт</th>
        <th>пт</th>
        <th class="weekend">сб</th>
        <th class="weekend">вс</th>
      </tr>
      <tr>
  `;

  for(let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while(d.getMonth() == m) {
    let dayOfWeek = d.getDay(); // 0 - воскресенье, 6 - суббота
    let isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    table += `<td${isWeekend ? ' class="weekend"' : ''}>${d.getDate()}</td>`;
    
    if(getDay(d) % 7 == 6) {
      table += '</tr><tr>';
    }
    d.setDate(d.getDate()+1);
  }

  if(getDay(d) != 0) {
    for(let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';
  return `<div class="calendar-month">${table}</div>`;
}

    function getDay(date) {
      let day = date.getDay();
      if(day == 0) day = 7;
      return day - 1;
    }

    function getMonthName(monthIndex) {
      const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 
        'Май', 'Июнь', 'Июль', 'Август', 
        'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ];
      return months[monthIndex];
    }

    document.addEventListener('DOMContentLoaded', function() {
      let calendarWrapper = document.querySelector('.table');
      let allCalendarsHTML = '';
      
      // Сентябрь 2025 - Май 2026 (9 месяцев)
      for (let month = 9; month <= 12; month++) {
        allCalendarsHTML += createCalendar(2025, month);
      }
      for (let month = 1; month <= 5; month++) {
        allCalendarsHTML += createCalendar(2026, month);
      }
      
      calendarWrapper.innerHTML = allCalendarsHTML;
    });