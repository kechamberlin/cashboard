import { DonutChart } from '@mantine/charts';

const CreditScorePage = () => {
  return (
    <>
      <h2>Credit Score</h2>
      <p>Credit Score Page</p>
      <DonutChart
        data={[
          { name: 'Poor', value: 579, color: 'red.1' },
          { name: 'Fair', value: 669, color: 'orange.1' },
          { name: 'Good', value: 739, color: 'yellow.1' },
          { name: 'Very Good', value: 799, color: 'green.3' },
          { name: 'Exceptional', value: 850, color: 'green.9' },
        ]}
        thickness={35}
        strokeWidth={3}
        tooltipDataSource='segment'
        w={'100%'}
        startAngle={180}
        endAngle={0}
        chartLabel={799}
        // withTooltip={false}
        withLabelsLine
        withLabels
      />
    </>
  );
};

export default CreditScorePage;
