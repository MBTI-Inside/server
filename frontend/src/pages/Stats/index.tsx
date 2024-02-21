import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const Stats = () => {
  const series = [
    {
      data: [
        { x: 'ESTJ', y: 218 },
        { x: 'ISFJ', y: 149 },
        { x: 'INTP', y: 184 },
        { x: 'ESFJ', y: 55 },
        { x: 'ENTP', y: 84 },
        { x: 'ESFP', y: 31 },
        { x: 'ISFP', y: 70 },
        { x: 'ESTP', y: 30 },
        { x: 'ISTJ', y: 44 },
        { x: 'INFP', y: 68 },
        { x: 'INFJ', y: 28 },
        { x: 'ENTJ', y: 19 },
        { x: 'ISTP', y: 29 },
        { x: 'INTJ', y: 13 },
        { x: 'ENTP', y: 58 },
        { x: 'ENFP', y: 3 }
      ]
    }
  ];

  const options: ApexOptions = {
    legend: {
      show: false
    },
    chart: {
      type: 'treemap',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['#000']
    },
    colors: [
      '#3B93A5',
      '#F7B844',
      '#ADD8C7',
      '#EC3C65',
      '#CDD7B6',
      '#C1F666',
      '#D43F97',
      '#1E5D8C',
      '#421243',
      '#7F94B0',
      '#EF6537',
      '#C0ADDB',
      '#C1AFB5',
      '#AA12BB',
      '#F8BAB5',
      '#119BA3'
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <ReactApexChart
        className="w-11/12"
        options={options}
        series={series}
        type="treemap"
        height={400}
      />
    </div>
  );
};

export default Stats;
// 전체 통계를 보여줌
