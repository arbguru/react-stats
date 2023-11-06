import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { Date: '14-Sep-2023', React: 114, Angular: 766, 'Angular/React': 37 },
  { Date: '18-Sep-2023', React: 114, Angular: 771, 'Angular/React': 37 },
  { Date: '25-Sep-2023', React: 114, Angular: 772, 'Angular/React': 37 },
  { Date: '04-Oct-2023', React: 120, Angular: 771, 'Angular/React': 38 },
  { Date: '18-Oct-2023', React: 139, Angular: 773, 'Angular/React': 38 },
  { Date: '27-Oct-2023', React: 141, Angular: 773, 'Angular/React': 38 },
  { Date: '06-Nov-2023', React: 141, Angular: 779, 'Angular/React': 38 },
];

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>React</th>
            <th>Angular</th>
            <th>Angular/React</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Date}</td>
              <td>{row.React}</td>
              <td>{row.Angular}</td>
              <td>{row['Angular/React']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Chart = () => {
  return (
    <div>
      <LineChart width={600} height={400} data={data}>
        <XAxis dataKey="Date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="React" stroke="red" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Angular" stroke="blue" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Angular/React" stroke="green" activeDot={{ r: 8 }} />
      </LineChart>
      <br />
      <br />
      <Table />
    </div>
  );
};

export default Chart;
