import { Chart, ArcElement } from 'chart.js';
import { Col } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
Chart.register(ArcElement);

const Graphics = ({ users }) => {
  const data = {
    labels: users?.map((el) => el.name),
    datasets: [
      {
        data: users?.map((el) => el.participation?.percent),
        backgroundColor: users?.map((el) => el.participation?.color),
      },
    ],
  };
  const options = {
    responsive: true,
  };
  return (
    <Col md={3}>
      <Pie data={data} options={options} />
    </Col>
  );
};

export default Graphics;
