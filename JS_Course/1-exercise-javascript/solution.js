const data = require('./database.js')

const today = new Date();
const seven_days_ago = new Date(today);

seven_days_ago.setDate(seven_days_ago.getDate() - 7);

const sevenDaysPretty = seven_days_ago
  .toDateString()
  .split(" ")
  .splice(1, 2)
  .join(" ");

const todayPretty = today.toDateString().split(" ")[2];

let salesmanStats = {};
let textMessage = `💥 Weekly Sales (${sevenDaysPretty} 👉 ${todayPretty})
`;

const getAllSalesman = data.map(item => item.json.fields.SalesmanName);
const uniqueSalesman = [...new Set(getAllSalesman)];

for (let salesman of uniqueSalesman) {
  const filteredSalesman = data.filter(
    item => item.json.fields["SalesmanName"] === salesman
  );

  const totalSalesofSalesman = filteredSalesman.reduce(
    (prev, cur) => prev + cur.json.fields.Cash,
    0
  );

  salesmanStats = { ...salesmanStats, [salesman]: totalSalesofSalesman };
}

let leaderboard = [];
for (let salesman in salesmanStats) {
  leaderboard = [...leaderboard, [salesman, salesmanStats[salesman]]];
}

leaderboard.sort(function(a, b) {
  return b[1] - a[1];
});

leaderboard[0][0] = `🏆${leaderboard[0][0]}`;

let index = 0;

for (let [salesPerson, revenue] of leaderboard) {
  index += 1;
  textMessage += `
  ${index}\. ${salesPerson.split(" ")[0]} 💵 \$${revenue.toLocaleString("en")}
  `;
  salesmanStats = { ...salesmanStats, message: textMessage };
}

console.log(leaderboard);

console.log([{ json: salesmanStats }]);

// 
