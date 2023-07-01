export const getRiskColor = (riskLevel: string) => {
  switch (riskLevel) {
    case 'High':
      return '#E73520';
    case 'Medium':
      return '#F6FA70';
    case 'Low':
      return '#00B961';
    default:
      return 'black';
  }
}
