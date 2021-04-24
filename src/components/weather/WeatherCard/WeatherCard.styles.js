import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
  width: 19%;
  background: var(--light-gray);
  color: var(--dark-gray);
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const WeatherDate = styled.span`
  font-weight: 700;
`;

export const Name = styled.span`
  color: var(--orange);
  font-size: 1.3rem;
  font-weight: bold;
  display: block;
  margin: 0.7rem 0;
`;

export const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const TemperatureImage = styled.img`
  position: relative;
  left: -10px;
  @media screen and (max-width: 1000px) {
    left: initial;
  }
`;

export const Temperature = styled.span`
  font-size: 1.8rem;
  position: relative;
  left: -17px;
  font-weight: bold;
  @media screen and (max-width: 1000px) {
    left: initial;
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeatherInfoItem = styled.p`
  margin-bottom: 0.2rem;
  @media screen and (max-width: 1000px) {
    font-size: 0.7rem;
  }
`;

export const Info = styled.span`
  font-weight: bold;
`;

export const Value = styled.span`
  left: 1rem;
  position: relative;
`;
