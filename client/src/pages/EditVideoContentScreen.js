import React, { useState, useEffect } from 'react'
import { Heading, toaster, Spinner, Pane } from 'evergreen-ui'
import Container from '../components/Container'
import VideoForm from '../components/VideoForm'
import { getVideo, updateVideoContent } from '../services/api'

const EditVideoContentScreen = ({ history, match }) => {
  const [videoContent, setVideoContent] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideoContent = async () => {
      setLoading(true)
      try {
        const content = await getVideo(match.params.id)
        setVideoContent(content)
      } catch (error) {
        toaster.danger(error?.response?.data?.message || 'Internal Server Error')
      } finally {
        setLoading(false)
      }
    }
    fetchVideoContent()
  }, [match.params.id])

  const onSubmitHandler = async (data) => {
    try {
      const result = await updateVideoContent(match.params.id, data)
      history.push(`/video-content/${result.Id}`)
    } catch (error) {
      toaster.danger(error?.response?.data?.message || 'Internal Server Error')
    }
  }

  return (
    <Container>
      <Heading size={600}> Edit </Heading>
      {loading ?
        <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
          <Spinner />
        </Pane>
        :
        <VideoForm onSubmit={onSubmitHandler} onCancelClick={() => history.push('/')} initialValues={videoContent} />
      }
    </Container>
  )
}

export default EditVideoContentScreen