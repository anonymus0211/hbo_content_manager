import React from 'react'
import { Link } from 'react-router-dom'
import { Pane, Button, Card as ECard, Badge, Paragraph } from 'evergreen-ui'
const Card = ({ Id, BackgroundUrl, Abstract, Name, Category, Genre, onEdit, onDelete }) => {
  return (<ECard elevation={2}>
    <Link to={`/video-content/${Id}`}>
      <Pane
        width={'100%'}
        height={380}
        backgroundImage={`url(${BackgroundUrl})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"></Pane>
    </Link>
    <Pane
      margin={10}
    >
      <Link to={`/video-content/${Id}`}>{Name}</Link>
      <Pane>
        <Pane marginBottom={10} marginTop={5}>
          <Badge color="neutral" isSolid marginRight={8}>{Category}</Badge>
          <Badge color="green" isSolid marginRight={8}>{Genre}</Badge>
        </Pane>
        <Paragraph marginBottom={20}>{Abstract}</Paragraph>
        <Pane>
          <Button appearance="primary" intent="none" onClick={onEdit(Id)}>Edit</Button>
          <Button appearance="primary" intent="danger" onClick={onDelete(Id)} marginLeft={10}>Delete</Button>
        </Pane>
      </Pane>
    </Pane>
  </ECard>)
}

export default Card