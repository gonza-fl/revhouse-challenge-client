import { Chart, ArcElement, Legend, Tooltip, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { data, options } from './dataChart';
Chart.defaults.color = '#212529';
Chart.register(ArcElement, Legend, Tooltip, Title);

const Graphics = ({ users }) => {
  
  return (
    <Doughnut
      data={data(users)}
      options={options}
    />
  );
};

export default Graphics;
