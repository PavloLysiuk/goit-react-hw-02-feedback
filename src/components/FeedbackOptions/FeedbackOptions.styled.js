import { styled } from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const OptionBtn = styled.button`
  padding: 8px 12px;
  margin-bottom: 16px;

  text-align: center;
  font-size: 12px;
  text-transform: uppercase;

  color: white;

  border-radius: 4px;
  border: none;
  background-color: #40bfff;

  box-shadow: 0 1px 4px rgba(50, 100, 150, 0.25);

  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #0099e6;
  }
`;
