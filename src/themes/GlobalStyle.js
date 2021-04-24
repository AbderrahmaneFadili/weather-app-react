import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,*::after,*::before{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

        :root{
          --font:${({ theme }) => theme.font};
          --light-gray:${({ theme }) => theme.lightGray};
          --orange:${({ theme }) => theme.orange};
          --orange-hover:${({ theme }) => theme.orangeHover};
          --dark-gray-hover:${({ theme }) => theme.darkGrayHover};
          --white:${({ theme }) => theme.white};
          --gray:${({ theme }) => theme.gray};
          --dark-gray:${({ theme }) => theme.darkGray};
        }

        html{
            font-family:var(--font);
        }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default GlobalStyle;
