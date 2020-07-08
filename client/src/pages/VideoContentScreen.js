import React, { useEffect, useState } from 'react'
import { Pane, Dialog, Spinner, toaster } from 'evergreen-ui'

import axios from 'axios'
import { getVideoList } from '../services/api'
import Card from '../components/Card'
import Container from '../components/Container'
import VideoFilter from '../components/VideoFilter'

const VideoContentScreen = ({ history }) => {
  const [videoContents, setVideoContents] = useState([])
  const [loading, setLoading] = useState(true)
  const [isShown, setIsShown] = useState(false)
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await getVideoList()
        setVideoContents(result)
      } catch (error) {
        toaster.danger(error?.response?.data?.message || 'Internal Server Error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const onEditClickHandler = (id) => () => {
    history.push(`/video-content/${id}/edit`)
  }

  const onDeleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:3000/video-content/${selected}`)
      setSelected(null)
      const result = await getVideoList()
      setVideoContents(result)
      setIsShown(false)
    } catch (error) {
      toaster.danger(error?.response?.data?.message)
    }
  }

  const onDeleteClickHandler = (id) => () => {
    setIsShown(true)
    setSelected(id)
  }

  const onFilterSubmitHandler = async data => {
    try {
      const result = await getVideoList(data)
      setVideoContents(result)
    } catch (err) {

    }
  }

  return (
    <Container>
      <VideoFilter onSubmit={onFilterSubmitHandler}></VideoFilter>
      {
        loading ?
          <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
            <Spinner />
          </Pane>
          : <Pane
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gridGap={30}
            flexDirection="column"
          >
            {videoContents.map((video, idx) => (<Card
              key={idx}
              onEdit={onEditClickHandler}
              onDelete={onDeleteClickHandler}
              {...video} />)
            )}
            <Pane>
              <Dialog
                isShown={isShown}
                title="Danger intent"
                intent="danger"
                onConfirm={onDeleteHandler}
                onCloseComplete={() => setIsShown(false)}
                confirmLabel="Delete Something"
              >
                Dialog content
      </Dialog>
            </Pane>
          </Pane >
      }
    </Container>
  )
}

export default VideoContentScreen