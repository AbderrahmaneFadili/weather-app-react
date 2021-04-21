import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
  width: 19%;
  background: var(--light-gray);
  color: var(--dark-gray);
  padding: 1rem;
`;

export const WeatherDate = styled.span`
  font-weight: 700;
`;

export const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TemperatureImage = styled.img`
  position: relative;
  left: -10px;
`;

export const Temperature = styled.span`
  font-size: 1.8rem;
  position: relative;
  left: -17px;
  font-weight: bold;
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeatherInfoItem = styled.p`
  margin-bottom: 0.2rem;
`;

export const Info = styled.span`
  font-weight: bold;
`;

export const Value = styled.span`
  left: 1rem;
  position: relative;
`;
