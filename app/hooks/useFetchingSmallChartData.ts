import { useEffect, useState } from "react";

const formatTimestamp = (date: Date) => {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

const simulateChartData = () => {
  const currentDate = new Date();
  let newLabels: string[] = [];
  let newDataOne: number[] = [];
  let newDataTwo: number[] = [];

    for (let i = 6; i >= 0; i--) {
      const labelDate = new Date(currentDate);
      labelDate.setDate(currentDate.getDate() - i);
      newLabels.push(formatTimestamp(labelDate));
      newDataOne.push(Math.floor(Math.random() * 100));
      newDataTwo.push(Math.floor(Math.random() * 100));
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

export default function useFetchingSmallChartData(): ChartData {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    dataOne: [],
    dataTwo: []
  });

  useEffect(() => {
    const fetchedData = simulateChartData();
    setChartData(fetchedData);
  }, []);

  return chartData;
}
