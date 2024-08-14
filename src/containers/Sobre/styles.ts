import styled from 'styled-components'

export const GithubtSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px; /* Altura fija por defecto */
  }

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;

    img {
      height: auto; /* Ajusta la altura para mantener la proporción en dispositivos pequeños */
      width: 100%; /* Asegura que la imagen ocupe el ancho del contenedor */
    }
  }
`
