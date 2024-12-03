// Simulated Date Labels for 3 months (1 hour intervals)
export const dateLables: string[] = []; // Explicitly define as an array of strings
const startDate = new Date('2024-12-01T00:00:00');
let currentDate = startDate;

// Loop through 3 months (approx. 90 days * 24 hours = 2160 hours)
for (let i = 0; i < 2160; i++) {
  dateLables.push(currentDate.toISOString().slice(0, 19).replace('T', ' '));
  currentDate.setHours(currentDate.getHours() + 1); // Increment by 1 hour
}

// Simulated Chart Data 1 for 3 months (using random data for simulation)
export const fakeChartDataOne: number[] = []; // Explicitly define as an array of numbers
for (let i = 0; i < 2160; i++) {
  // Simulate data between 20 and 100 for dataOne
  fakeChartDataOne.push(Math.floor(Math.random() * (100 - 20 + 1)) + 20);
}

// Simulated Chart Data 2 for 3 months (using random data for simulation)
export const fakeChartDataTwo: number[] = []; // Explicitly define as an array of numbers
for (let i = 0; i < 2160; i++) {
  // Simulate data between 15 and 80 for dataTwo
  fakeChartDataTwo.push(Math.floor(Math.random() * (80 - 15 + 1)) + 15);
}
