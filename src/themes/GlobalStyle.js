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
  max-width: 1000px;
  margin: 0 auto;
`;

export default GlobalStyle;
