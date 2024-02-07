import {View, Button, Text, Image, StyleSheet, Pressable, Dimensions} from 'react-native';
import { getISOWeek, format } from 'date-fns';
import { fr } from 'date-fns/locale';
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

  
export default function Chart({delay}) {
  const allDays = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."];
  const currentDate = new Date();
  switch (delay) {
    case 'jours':
      const currentDayIndex = allDays.findIndex(day => format(currentDate, 'EEE', { locale: fr }) === day);
      console.log(currentDayIndex)
      const daysCount = allDays.length;
      const shiftedDays = Array.from({ length: 5 }, (_, i) => allDays[(currentDayIndex + i - 1 + daysCount) % daysCount]);

      labelsDelay = shiftedDays;
      break;
    case 'semaines':
      const currentWeekNumber = getISOWeek(currentDate);
      const last5Weeks = Array.from({ length: 5 }, (_, i) => currentWeekNumber - i);
      const weekLabels = last5Weeks.map(weekNumber => `Sem ${weekNumber}`);

      labelsDelay = weekLabels.reverse();
      break;
    case 'mois':
      const allMonths = ["Janv.", "Févr.", "Mars", "Avri.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Octo.", "Nove.", "Déce."];
      const currentMonthIndex = allMonths.findIndex(month => format(currentDate, 'MMMM', { locale: fr }) === month);
      const monthsCount = allMonths.length;
      const shiftedMonths = Array.from({ length: 5 }, (_, i) => allMonths[(currentMonthIndex + i - 2 + monthsCount) % monthsCount]);
        
      labelsDelay= shiftedMonths
      break;
  
    default:
      break;
  }
  const data = {
    labels: labelsDelay,
    datasets: [
      {
        data: [2500, 7300, 4300, 10000,12222],
        color: (opacity = 1) => `rgba(0, 180, 236, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    
  };
  return (
      <LineChart
        data={data}
        width={Dimensions.get('window').width * 1}
        height={230}
        withDots= {false}
        chartConfig={chartConfig}
        bezier
        style={{
          borderRadius: 16,
        }}
      />
    
  )
}

