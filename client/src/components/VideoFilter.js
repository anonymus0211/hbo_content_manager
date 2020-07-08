import React from 'react'
import { TextInputField, Pane, Button, SelectField } from 'evergreen-ui'
import { useForm, Controller } from 'react-hook-form'

const VideoFilter = ({ onSubmit }) => {

  const { handleSubmit, control } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Pane>
        <Controller
          as={SelectField}
          control={control}
          label="Category"
          name="Category"
          defaultValue=""
          display="inline-block"
        >
          <option value=""></option>
          <option value="MOVIE">Movie</option>
          <option value="SERIES">Series</option>
        </Controller>
        <Controller
          as={TextInputField}
          control={control}
          label='Name'
          name="Name"
          marginLeft={15}
          display="inline-block"
        >
        </Controller>
        <Button marginLeft={15} display="inline-block" type="submit">Filter</Button>
      </Pane>
    </form>
  )
}

export default VideoFilter