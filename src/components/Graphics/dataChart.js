export const data = (users) => ({
  labels: users?.map((el) => el.fullName),
  datasets: [
    {
      data: users?.map((el) => el.participation?.percent),
      backgroundColor: users?.map((el) => el.participation?.color),
    },
  ],
});
export const options = {
  plugins: {
    legend: {
      labels: {
        color: 'gray',
        font: {
          size: 16,
        },
        padding: 5,
      },
      position: 'right',
      title: {
        display: true,
        text: 'Clcik to hide',
        color: 'black',
        font: {
          size: 18,
        },
        padding: 5,
      },
    },
  },
  responsive: true,
};
