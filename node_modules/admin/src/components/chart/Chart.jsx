import "./chart.scss";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Enero", Total: 1200 },
  { name: "Febrero", Total: 2100 },
  { name: "Marzao", Total: 800 },
  { name: "Abril", Total: 1600 },
  { name: "Mayo", Total: 900 },
  { name: "Junio", Total: 1700 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart flex-4 shadow-lg rounded-lg p-5 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="title text-xl font-semibold mb-4">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" stroke="#00000" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Bar dataKey="Total" fill="#34d399" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
