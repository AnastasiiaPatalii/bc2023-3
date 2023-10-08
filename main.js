const fs = require('fs');

// Функція для аналізу JSON та запису результатів у файл
function analyzeJSON(jsonData) {
  const results = [];

  for (const item of jsonData) {
    const stockCode = item.StockCode;
    const valCode = item.ValCode;
    const attraction = item.Attraction;

    const resultString = `${stockCode}-${valCode}-${attraction}`;
    results.push(resultString);
  }

  return results.join('\n');
}

// Читання JSON файлу
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка читання файлу:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const resultString = analyzeJSON(jsonData);

    // Запис результатів у файл output.txt
    fs.writeFile('output.txt', resultString, (err) => {
      if (err) {
        console.error('Помилка запису у файл:', err);
        return;
      }
      console.log('Результати аналізу збережено у файлі output.txt');
    });
  } catch (parseError) {
    console.error('Помилка парсингу JSON:', parseError);
  }
});
