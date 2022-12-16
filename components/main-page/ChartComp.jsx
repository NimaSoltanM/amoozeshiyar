import { Paper } from '@mantine/core';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
const data = [
  { name: '3991-1', score: 19.2 },
  { name: '3991-2', score: 17.75 },
  { name: '3991-3', score: 18.1 },
];

const ChartComp = () => {
  return (
    <Paper p='sm' shadow='xl'>
      <LineChart width={614} height={324} data={data}>
        <Line type='monotone' dataKey='score' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Paper>
  );
};

export default ChartComp;
