import * as inquirer from 'inquirer';

async function validateNumber(input: any) {
  const number = parseFloat(input)
  if (isNaN(number)) {
    console.log('');
    console.log('Please enter a number');
    return;
  }

  return true;
}

export default async function create() {
  const config = await inquirer.prompt([{
    message: 'How many seconds should your site load in?',
    name: 'seconds',
    validate: validateNumber,
  }, {
    message: 'What connection speed',
    name: 'speed',
    type: 'list',
    choices: [
      { value: 4.375, name: 'Mobile 2G - Slow (35 Kbps)' },
      { value: 7, name: '56K Dial-Up (49Kbps)' },
      { value: 18.75, name: 'Mobile 2G - Fast (150 Kbps)' },
      { value: 30, name: 'Mobile Edge (240 Kbps)' },
      { value: 96, name: 'Mobile 3G - Slow (780 Kbps)' },
      { value: 187.5, name: 'DSL (1.5Mbps)' },
      { value: 200, name: 'Mobile 3G - Fast (1.6 Mbps)' },
      { value: 625, name: 'Cable (5Mbps)' },
      { value: 2500, name: 'FIOS (20Mbps)' },
    ],
  }]);

  const budget = config.seconds * config.speed;
  let avaliableBudget = budget;

  console.log(`Your total budget is ${budget}kb`);

  const html = await inquirer.prompt([{
    message: `How many kb do you want to assign to HTML? (avaliable: ${avaliableBudget})?`,
    name: 'kb',
    validate: validateNumber,
  }]);

  avaliableBudget = avaliableBudget - html.kb;

  const css = await inquirer.prompt([{
    message: `How many kb do you want to assign to CSS? (avaliable: ${avaliableBudget})?`,
    name: 'kb',
    validate: validateNumber,
  }]);

  avaliableBudget = avaliableBudget - css.kb;

  const javascript = await inquirer.prompt([{
    message: `How many kb do you want to assign to JavaScript? (avaliable: ${avaliableBudget})?`,
    name: 'kb',
    validate: validateNumber,
  }]);

  avaliableBudget = avaliableBudget - javascript.kb;

  const images = await inquirer.prompt([{
    message: `How many kb do you want to assign to images? (avaliable: ${avaliableBudget})?`,
    name: 'kb',
    validate: validateNumber,
  }]);

  avaliableBudget = avaliableBudget - images.kb;

  const fonts = await inquirer.prompt([{
    message: `How many kb do you want to assign to fonts? (avaliable: ${avaliableBudget})?`,
    name: 'kb',
    validate: validateNumber,
  }]);

  avaliableBudget = avaliableBudget - fonts.kb;

  const video = await inquirer.prompt([{
    message: `How many kb do you want to assign to video? (avaliable: ${avaliableBudget})?`,
    name: 'kb',
    validate: validateNumber,
  }]);

  return {
    css: css.kb,
    html: html.kb,
    javascript: javascript.kb,
    fonts: fonts.kb,
    images: images.kb,
    video: video.kb,
  };
}