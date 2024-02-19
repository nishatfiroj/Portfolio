import styled from "styled-components"

export const ResponsivePaperContainer = styled.div`
  /* smaller desktops */
  @media only screen and (min-width: 1200px) {
    margin: 48px;
    transform: scale(1.1);
  }
`

export const ResponsivePaperContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-inline-end: auto;
  margin-inline-start: auto;
  padding: 0 24px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
