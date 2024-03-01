import styled from "styled-components"

export const ResponsiveiFrame = styled.iframe`
  height: 820px;

  /* smaller desktops */
  @media only screen and (min-width: 1200px) {
    height: 800px;
  }

  /* wide desktops */
  @media only screen and (min-width: 1450px) {
    height: 1000px;
  }
`
