import React from 'react'
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink}   from '@chakra-ui/react'
function TestAnalyticTitle() {
    return (
        
 <>
          <Breadcrumb>
  <BreadcrumbItem textDecoration="none" >
    <BreadcrumbLink  textDecoration="none" href="#">Test Analytics</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem  >
    <BreadcrumbLink textDecoration="none"  href="#">Test Session Id - 148</BreadcrumbLink>
  </BreadcrumbItem>  
        </Breadcrumb>
 
 </>
    )
}

export default TestAnalyticTitle
