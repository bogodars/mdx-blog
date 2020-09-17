import React from "react"
import { Container, FeatureImage, Content, ContentCard } from '../components'


 const IndexPage = () => {
  return (
 <Container>
   <FeatureImage />
   <Content>
     <ContentCard 
     date="22.12.2020" 
     title="Some title" 
     excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, labore provident ullam consequuntur nemo vitae. Distinctio sit possimus facilis sunt ut quisquam, esse necessitatibus dolore, tempora earum minus, nesciunt et!" 
     slug="/test"
     />
   </Content>
  </Container>
  )
}

export default IndexPage
