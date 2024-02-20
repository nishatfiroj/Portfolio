import styled from "styled-components"
import Image from "next/image"

export const Card = styled.div`
  background-color: var(--color-white);
  box-shadow: 1px 3px 6.3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: center;

  /* smaller desktops */
  @media only screen and (min-width: 1200px) {
    padding: 24px;
  }

  /* wide desktops */
  @media only screen and (min-width: 1450px) {
    padding: 32px;
  }
`

export const Caption = styled.p`
  font-size: 12px;
`

export const ResponsiveSectionOne = styled.div`
  display: flex;
  justify-content: center;
  min-height: 600px;
  margin: 16px;
  gap: 16px;

  /* smaller desktops */
  @media only screen and (min-width: 1200px) {
    gap: 42px;
    margin: 24px;
    padding-top: 24px;
  }

  /* wide desktops */
  @media only screen and (min-width: 1450px) {
    gap: 72px;
    margin: 32px;
    padding-top: 32px;
  }
`

export const ResponsiveSelfPortrait = styled(Image)`
  width: 130px;
  height: 100%;

  /* smaller desktops */
  @media only screen and (min-width: 1200px) {
    width: 200px;
  }

  /* wide desktops */
  @media only screen and (min-width: 1450px) {
    width: 300px;
  }
`

export const ResponsiveStamps = styled(Image)`
  width: 120px;
  height: 120px;

  /* smaller desktops */
  @media only screen and (min-width: 1200px) {
    width: 160px;
    height: 160px;
  }

  /* wide desktops */
  @media only screen and (min-width: 1450px) {
    width: 200px;
    height: 200px;
  }
`

export const ResponsiveHandwriting = styled(Image)`
  /* smaller desktops */
  @media only screen and (min-width: 1200px) {
    transform: scale(1.3);
  }

  /* wide desktops */
  @media only screen and (min-width: 1450px) {
    transform: scale(1.5);
  }
`

export const ResponsiveTarotContainer = styled.div`
  display: flex;
  overflow: scroll;
  gap: 48px;
  padding: 0 48px;
  scroll-snap-type: x mandatory;

  /* tablets and up */
  @media only screen and (min-width: 932px) {
    justify-content: center;
    flex-wrap: wrap;
    font-weight: 500;
  }
`
