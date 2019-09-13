import Table from 'cli-table';

const speeds = [
  { value: 4.375, name: 'Mobile 2G - Slow (35 Kbps)' },
  { value: 7, name: '56K Dial-Up (49Kbps)' },
  { value: 18.75, name: 'Mobile 2G - Fast (150 Kbps)' },
  { value: 30, name: 'Mobile Edge (240 Kbps)' },
  { value: 96, name: 'Mobile 3G - Slow (780 Kbps)' },
  { value: 187.5, name: 'DSL (1.5Mbps)' },
  { value: 200, name: 'Mobile 3G - Fast (1.6 Mbps)' },
  { value: 625, name: 'Cable (5Mbps)' },
  { value: 2500, name: 'FIOS (20Mbps)' },
];

export default async function display(budget: any) {
  const budgetTable = new Table();
  let total = 0;
  
  const budgetKeys = Object.keys(budget);

  budgetKeys.forEach((key) => {
    const obj:any = {};
    obj[key] = `${budget[key]}kb`

    total += parseFloat(budget[key]);
    
    budgetTable.push(obj);
  });

  const speedsTable = new Table();

  speeds.forEach((speed) => {
    speedsTable.push([
      speed.name,
      `${total / speed.value} secs`,
    ])
  })

  console.log('');
  console.log('*** Your Budget ***');
  console.log(`Total: ${total}`);
  console.log(budgetTable.toString());

  console.log('');
  console.log('*** Loadtimes for budget ***');
  console.log(speedsTable.toString());
}