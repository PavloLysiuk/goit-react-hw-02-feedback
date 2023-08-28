import { StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatisticsItem>
        <p>Good: {good}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Neutral: {neutral}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Bad: {bad}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Total: {total}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Positive feedback: {positivePercentage}%</p>
      </StatisticsItem>
    </ul>
  );
};
