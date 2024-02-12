import {View, Button, Text, Image, StyleSheet, Pressable, Dimensions} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  
  
  const chartConfig = {
    backgroundGradientFrom: "#0000",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#0000",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 180, 250, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false ,// optional
    
    
  };

  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        data: [2500, 5000, 7300, 9800, 4300, 10000],
        color: (opacity = 1) => `rgba(0, 180, 236, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    
  };
export default function Chart() {
  return (
      <LineChart
        data={data}
        width={Dimensions.get('window').width * 1}
        height={170}
        withDots= {false}
        chartConfig={chartConfig}
        bezier
        style={{
          borderRadius: 16,
        }}
      />
    
  )
}

