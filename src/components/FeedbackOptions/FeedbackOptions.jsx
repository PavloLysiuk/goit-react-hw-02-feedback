import { OptionBtn, ButtonsWrapper } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsWrapper>
      {options.map(option => {
        return (
          <OptionBtn key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </OptionBtn>
        );
      })}
    </ButtonsWrapper>
  );
};
