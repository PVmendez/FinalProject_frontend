export const getRiskColor = (riskLevel: string) => {
  const colorMap: { [key: string]: string } = {
    High: '#E73520',
    Medium: '#F6FA70',
    Low: '#00B961',
  };

  if (riskLevel in colorMap) {
    return colorMap[riskLevel];
  }

  return '#CCCCCC';
};

export const getWeekColor = (day: string) => {
  const colorMap: { [key: string]: string } = {
    Monday: '#008FFB',
    Tuesday: '#00E396',
    Wednesday: '#FEB019',
    Thursday: '#FF4560',
    Friday: '#775DD0',
    Saturday: '#546E7A',
    Sunday: '#26a69a'
  };
  if (day in colorMap) {
    return colorMap[day];
  }

  return '#CCCCCC';
}
