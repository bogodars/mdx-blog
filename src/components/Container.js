import React from "react"
import { ContainerWrapper } from "../styles"
import { Nav, Footer } from "../components"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
