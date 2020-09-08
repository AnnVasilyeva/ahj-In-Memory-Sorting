document.addEventListener('DOMContentLoaded', () => {
  const info = [
    {
      id: 26,
      title: 'Побег из Шоушенка',
      imdb: 9.30,
      year: 1994,
    },
    {
      id: 25,
      title: 'Крёстный отец',
      imdb: 9.20,
      year: 1972,
    },
    {
      id: 27,
      title: 'Крёстный отец 2',
      imdb: 9.00,
      year: 1974,
    },
    {
      id: 1047,
      title: 'Тёмный рыцарь',
      imdb: 9.00,
      year: 2008,
    },
    {
      id: 223,
      title: 'Криминальное чтиво',
      imdb: 8.90,
      year: 1994,
    },
  ];

  const table = document.querySelector('.sorting-table');
  const arrowIcons = table.querySelectorAll('.arrow-icon');

  let tableName = 'normal';
  const arrowUp = '\u{2193}';
  const arrowDown = '\u{2191}';

  function addArrow(index, arrow) {
    arrowIcons.forEach((item) => { item.textContent = ''; });
    arrowIcons[index].textContent = arrow;
  }

  function infoForEach(arr) {
    arr.forEach((item) => {
      const newTr = `<tr class="table-item"><td class="id">${item.id}</td><td class="title">${item.title}</td><td class="year">(${item.year})</td><td class="imdb">imdb: ${item.imdb.toFixed(2)}</td></tr>`;
      table.insertAdjacentHTML('beforeend', newTr);
    });
  }

  infoForEach(info);

  function tableClean() {
    const tableItems = table.getElementsByClassName('table-item');
    tableItems.forEach((item) => {
      item.innerHTML = '';
    });
  }

  setInterval(() => {
    if (tableName === 'normal') {
      tableName = 'increaseId';
      tableClean();

      info.sort((a, b) => a.id - b.id);
      infoForEach(info);
      addArrow(0, arrowUp);
    } else if (tableName === 'increaseId') {
      tableName = 'decreaseId';
      tableClean();

      info.sort((a, b) => b.id - a.id);
      infoForEach(info);
      addArrow(0, arrowDown);
    } else if (tableName === 'decreaseId') {
      tableName = 'increaseTitle';
      tableClean();

      info.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA > titleB) return 1;
        if (titleA < titleB) return -1;
        return 0;
      });
      infoForEach(info);
      addArrow(1, arrowUp);
    } else if (tableName === 'increaseTitle') {
      tableName = 'decreaseTitle';
      tableClean();

      info.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA > titleB) return -1;
        if (titleA < titleB) return 1;
        return 0;
      });
      infoForEach(info);
      addArrow(1, arrowDown);
    } else if (tableName === 'decreaseTitle') {
      tableName = 'increaseYear';
      tableClean();

      info.sort((a, b) => a.year - b.year);
      infoForEach(info);
      addArrow(2, arrowUp);
    } else if (tableName === 'increaseYear') {
      tableName = 'decreaseYear';
      tableClean();

      info.sort((a, b) => b.year - a.year);
      infoForEach(info);
      addArrow(2, arrowDown);
    } else if (tableName === 'decreaseYear') {
      tableName = 'increaseImdb';
      tableClean();

      info.sort((a, b) => a.imdb - b.imdb);
      infoForEach(info);
      addArrow(3, arrowUp);
    } else if (tableName === 'increaseImdb') {
      tableName = 'decreaseImdb';
      tableClean();

      info.sort((a, b) => b.imdb - a.imdb);
      infoForEach(info);
      addArrow(3, arrowDown);

      tableName = 'normal';
    }
  }, 2000);
});
