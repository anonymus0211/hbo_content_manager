import React from 'react'
import { useHistory } from 'react-router-dom'
import { Heading, Pane, Button } from "evergreen-ui"
import Container from './Container'

const Header = () => {
  const history = useHistory()
  const onClick = () => history.push('/video-content/new')
  return (
    <Pane padding={16} background="tint2" borderRadius={3} >
      <Container display="flex" flex={1} marginTop={0}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>Content Manager</Heading>
        </Pane>
        <Pane>
          <Button appearance="primary" onClick={onClick}>New Video Content</Button>
        </Pane>
      </Container>
    </Pane>
  )
}

export default Header