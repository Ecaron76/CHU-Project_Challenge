import {View, Button, Text, Image, StyleSheet, Pressable, Dimensions} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  const screenWidth = Dimensions.get("window").width*0.;
  const chartConfig = {
    backgroundGradientFrom: "#0000",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#0000",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 180, 236, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(0, 180, 236, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    
  };
export default function Chart() {
  return (
    <LineChart
        data={data}
        width={screenWidth}
        height={130}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
    />
  )
}

