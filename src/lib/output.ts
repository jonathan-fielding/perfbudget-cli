import { writeFileSync } from 'fs';

function sumObjectValues(obj: any) {
  const keys = Object.keys(obj);
  let total = 0;

  keys.forEach((key) => {
    total += obj[key];
  })

  return total;
}

function buildJson(budget: any) {
  const total = sumObjectValues(budget);

  return `[
    {
      "resourceSizes": [
        {
          "resourceType": "document",
          "budget": ${budget.html}
        },
        {
          "resourceType": "script",
          "budget": ${budget.javascript}
        },
        {
          "resourceType": "image",
          "budget": ${budget.images}
        },
        {
          "resourceType": "stylesheet",
          "budget": ${budget.css}
        },
        {
          "resourceType": "media",
          "budget": ${budget.video}
        },
        {
          "resourceType": "font",
          "budget": ${budget.fonts}
        },
        {
          "resourceType": "total",
          "budget": ${total}
        }
      ]
    }
  ]`;
}

export default (budget: any, path: string) => {
  const json = buildJson(budget);

  writeFileSync(path, json);
  return;
}