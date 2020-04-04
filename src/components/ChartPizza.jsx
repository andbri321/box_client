import React from "react";
import { Doughnut } from "react-chartjs-2";

const ChartPizza = ({blox,title}) => {
  return (
    <div>
		<h3> {title}</h3>
    	<Doughnut data = {blox} />
    </div>
  );
};

export default ChartPizza;