import { useEffect, useState } from "react";

// Helper function to generate simulated timestamps for each period
const formatTimestamp = (date: Date) => {
  return date.toISOString().slice(0, 19).replace('T', ' '); // Format: YYYY-MM-DD HH:MM:SS
}

// Simulated data for different time periods
const simulateChartData = (timePeriod: string) => {
  const currentDate = new Date();
  let newLabels: string[] = [];
  let newDataOne: number[] = [];
  let newDataTwo: number[] = [];

  if (timePeriod === '24h') {
    // Generate hourly data for the last 24 hours
    for (let i = 23; i >= 0; i--) {
      const labelDate = new Date(currentDate);
      labelDate.setHours(currentDate.getHours() - i);
      newLabels.push(formatTimestamp(labelDate)); // Timestamp in PostgreSQL format
      newDataOne.push(Math.floor(Math.random() * 100)); // Random data value
      newDataTwo.push(Math.floor(Math.random() * 100)); // Random data value
    }
  } else if (timePeriod === '7d') {
    // Generate daily data for the last 7 days
    for (let i = 6; i >= 0; i--) {
      const labelDate = new Date(currentDate);
      labelDate.setDate(currentDate.getDate() - i);
      newLabels.push(formatTimestamp(labelDate)); // Timestamp in PostgreSQL format
      newDataOne.push(Math.floor(Math.random() * 100)); // Random data value
      newDataTwo.push(Math.floor(Math.random() * 100)); // Random data value
    }
  } else if (timePeriod === '30d') {
    // Generate daily data for the last 30 days
    for (let i = 29; i >= 0; i--) {
      const labelDate = new Date(currentDate);
      labelDate.setDate(currentDate.getDate() - i);
      newLabels.push(formatTimestamp(labelDate)); // Timestamp in PostgreSQL format
      newDataOne.push(Math.floor(Math.random() * 100)); // Random data value
      newDataTwo.push(Math.floor(Math.random() * 100)); // Random data value
    }
  } else if (timePeriod === 'month') {
    // Generate daily data for the current month
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    for (let i = daysInMonth; i > 0; i--) {
      const labelDate = new Date(currentDate);
      labelDate.setDate(currentDate.getDate() - i);
      newLabels.push(formatTimestamp(labelDate)); // Timestamp in PostgreSQL format
      newDataOne.push(Math.floor(Math.random() * 100)); // Random data value
      newDataTwo.push(Math.floor(Math.random() * 100)); // Random data value
    }
  }

  return {
    labels: newLabels,
    dataOne: newDataOne,
    dataTwo: newDataTwo
  };
}

interface ChartData {
  labels: string[];
  dataOne: number[];
  dataTwo: number[];
}

export default function useFetchingBigChartData(selectedTimePeriod: string): ChartData {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    dataOne: [],
    dataTwo: []
  });

  useEffect(() => {
    const fetchedData = simulateChartData(selectedTimePeriod);
    setChartData(fetchedData);
  }, [selectedTimePeriod]);

  return chartData;
}
