import styled from "styled-components";

export const DailyWeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const DailyWeatherDate = styled.span`
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const DailyWeatherIcon = styled.img`
  @media screen and (max-width: 768px) {
    width: 140px;
  }
`;

export const DailyWeatherMinMax = styled.span`
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
