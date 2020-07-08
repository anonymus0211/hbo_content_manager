import React, { useState, useEffect, Fragment } from 'react'
import { Pane, Heading, Spinner, toaster } from 'evergreen-ui'
import Container from '../components/Container'
import { getVideo } from '../services/api'
import VideoForm from '../components/VideoForm'

const ShowVideoContentScreen = ({ history, match }) => {
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


  return (
    <Container>
      {loading ?
        <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
          <Spinner />
        </Pane>
        : <Fragment>
          <Heading marginBottom={20} size={600}> Details about {videoContent.Name} </Heading>
          <Pane
            marginBottom={20}
            width={'100%'}
            height={500}
            backgroundImage={`url(${videoContent.BackgroundUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"></Pane>
          <VideoForm readOnly onCancelClick={() => history.push('/')} initialValues={videoContent} />
        </Fragment>
      }
    </Container>
  )
}

export default ShowVideoContentScreen