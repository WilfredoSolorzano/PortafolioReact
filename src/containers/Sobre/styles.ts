import styled from 'styled-components'

export const GithubtSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;

    img {
      height: auto;
      width: 100%;
    }
  }
`
