"use client"

import { ReactNode } from "react"
import { BaseContainer } from "./styled"
import { StyledComponentsRegistry } from "../styled-components-registry"

export default function Base({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <BaseContainer>{children}</BaseContainer>
    </StyledComponentsRegistry>
  )
}
