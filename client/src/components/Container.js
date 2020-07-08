import React from 'react'
import { Pane } from 'evergreen-ui'

const Container = ({ children, ...rest }) => {
  return (<Pane marginLeft='auto'
    marginRight='auto'
    marginTop={30}
    maxWidth={1200}
    {...rest}
  >
    {children}
  </Pane>)
}

export default Container