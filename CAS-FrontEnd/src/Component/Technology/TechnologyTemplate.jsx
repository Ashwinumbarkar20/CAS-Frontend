
import styled from 'styled-components'
import React from 'react'

export default function TechnologyTemplate({Technology}) {
  return (
    <Technology_Template>
      {Technology?(<>
<h1>{Technology.Technology_name}</h1>



      </>):("No Data Found")}
    </Technology_Template>
  )
}
const Technology_Template=styled.main`
min-height:90vh;
height:90vh;
`