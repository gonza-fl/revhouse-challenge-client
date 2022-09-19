import { ThreeCircles } from 'react-loader-spinner';
const Spinner = () => {
  return (
    <ThreeCircles
      height="250"
      width="250"
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#168ca2"
      innerCircleColor="#0dcaf0"
      middleCircleColor="#8be8fb"
    />
  );
};

export default Spinner;
