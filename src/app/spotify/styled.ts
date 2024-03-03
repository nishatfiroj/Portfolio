import styled from "styled-components"

export const ResponsiveImageCardContainer = styled.div`
  display: flex;
  overflow: scroll;
  gap: 48px;

  scroll-snap-type: x mandatory;
  text-align: center;

  /* tablets and up */
  @media only screen and (min-width: 932px) {
    justify-content: center;
    flex-wrap: wrap;
    font-weight: 500;
  }
`
