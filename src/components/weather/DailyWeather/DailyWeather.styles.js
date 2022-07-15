import styled from "styled-components";

export const DailyWeatherWrapper = styled.div`
  width: 100%;
  background: var(--light-gray);
  margin-top: 1rem;
  padding: 2rem 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 992px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
