export const getRiskColor = (riskLevel: string) => {
  switch (riskLevel) {
    case 'High':
      return 'red';
    case 'Medium':
      return 'yellow';
    case 'Low':
      return 'green';
    default:
      return 'black';
  }
}
