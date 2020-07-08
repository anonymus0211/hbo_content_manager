import React from 'react'
import { toaster } from 'evergreen-ui'
import Container from '../components/Container'
import VideoForm from '../components/VideoForm'
import { createVideoContent } from '../services/api'

const NewVideoContentScreen = ({ history }) => {
  const onSubmitHandler = async (data) => {
    try {
      const result = await createVideoContent(data)
      history.push(`/video-content/${result.Id}`)
    } catch (error) {
      toaster.danger(error?.response?.data?.message || 'Internal Server Error')
    }
  }

  return (
    <Container>
      <VideoForm onSubmit={onSubmitHandler} onCancelClick={() => history.push('/')} />
    </Container>
  )
}

export default NewVideoContentScreen