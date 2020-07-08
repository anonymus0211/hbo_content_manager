import React, { useEffect } from 'react'
import { Pane, Button, TextareaField, TextInputField, SelectField, Text } from 'evergreen-ui'
import { useForm, Controller } from 'react-hook-form'
import ReactDatePicker from "react-datepicker";
import moment from 'moment'

import "react-datepicker/dist/react-datepicker.css";

function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}

const VideoForm = ({ onSubmit, onCancelClick, initialValues = false, readOnly = false }) => {
  const { handleSubmit, errors, control, reset } = useForm({
    defaultValues: {
      Name: '',
      Abstract: '',
      EditedAbstract: '',
      AgeRating: '',
      BackgroundUrl: '',
      Director: '',
      Cast: '',
      Genre: '',
      Category: '',
      ProductionYear: '2020',
      AvailabilityFromUtcIso: new Date()
    }
  })

  useEffect(() => {
    if (initialValues) {
      reset({ ...initialValues, AvailabilityFromUtcIso: moment(initialValues.AvailabilityFromUtcIso).toDate() })
    }
  }, [reset, initialValues])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Pane>
        <Controller
          as={TextInputField}
          control={control}
          label='Name'
          name="Name"
          disabled={readOnly}
          rules={{ required: 'This field is required' }}
          validationMessage={errors.Name && errors.Name.message}
        />
        <Controller
          as={TextareaField}
          control={control}
          label='Abstract'
          name="Abstract"
          disabled={readOnly}
        />
        <Controller
          as={TextareaField}
          control={control}
          disabled={readOnly}
          label='Edited Abstract'
          name="EditedAbstract"
        />
        <Controller
          as={SelectField}
          control={control}
          disabled={readOnly}
          label='Age Rating'
          name="AgeRating"
          rules={{ required: true }}
        >
          <option value="0">0</option>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="18">18</option>
        </Controller>
        <Controller
          as={TextInputField}
          control={control}
          disabled={readOnly}
          label="Background Url"
          name="BackgroundUrl"
          rules={{ required: 'This field is required' }}
          validationMessage={errors.Name && errors.BackgroundUrl.message}
        />
        <Controller
          as={TextInputField}
          control={control}
          disabled={readOnly}
          label="Director"
          name="Director"
          rules={{ required: 'This field is required' }}
          validationMessage={errors.Name && errors.Director.message}
        />
        <Controller
          as={TextInputField}
          control={control}
          disabled={readOnly}
          label="Cast"
          name="Cast"
          rules={{ required: 'This field is required' }}
          validationMessage={errors.Name && errors.Cast.message}
        />
        <Controller
          as={TextInputField}
          control={control}
          disabled={readOnly}
          label="Genre"
          name="Genre"
          rules={{ required: 'This field is required' }}
          validationMessage={errors.Name && errors.Genre.message}
        />
        <Controller
          as={SelectField}
          control={control}
          disabled={readOnly}
          label="Category"
          name="Category"
          defaultValue=""
        >
          <option value=""></option>
          <option value="MOVIE">Movie</option>
          <option value="SERIES">Series</option>
        </Controller>

        <Controller
          as={SelectField}
          control={control}
          disabled={readOnly}
          label="Production Year"
          name="ProductionYear"
          defaultValue="2020"
        >
          {range(121, 1900).map((year, idx) => (<option key={idx} value={year}>{year}</option>))}
        </Controller>

        <Pane>
          <Text display="block" size={400} fontWeight={500}> Availability </Text>
          <Controller
            control={control}
            disabled={readOnly}
            name="AvailabilityFromUtcIso"
            render={({ onChange, onBlur, value }) => (
              <ReactDatePicker
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                showTimeSelect
                dateFormat="Pp"
              />
            )}
          />
        </Pane>

        <Pane marginTop={20} >
          {!readOnly && <Button marginRight={10} type="submit">Submit</Button>}
          <Button type="button" appearance="minimal" onClick={onCancelClick}>Cancel</Button>
        </Pane>


      </Pane>
    </form>
  )
}

export default VideoForm

const obj = {
  "AvailabilityFromUtcIso": "2019-12-21T23:00:00Z",

}