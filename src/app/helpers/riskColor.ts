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



