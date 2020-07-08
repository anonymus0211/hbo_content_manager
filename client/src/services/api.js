import axios from 'axios'
import qs from 'qs'

export async function getVideoList(data = {}) {
  const result = await axios.get(`http://localhost:3000/video-content?${qs.stringify(data)}`)
  return result.data
}

export async function getVideo(id) {
  const result = await axios.get(`http://localhost:3000/video-content/${id}`)
  return result.data
}

export async function createVideoContent(data) {
  const result = await axios.post('http://localhost:3000/video-content', data)
  return result.data
}

export async function updateVideoContent(id, data) {
  data = { ...data, Id: id }
  const result = await axios.put(`http://localhost:3000/video-content/${id}`, data)
  return result.data
}