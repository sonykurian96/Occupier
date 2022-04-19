import React from 'react'
import { Comment, Image } from 'semantic-ui-react'
import moment from 'moment'

const isOwnMessage = (message, user) => {
  return message.user.id === user.uid ? 'message__self' : ''
}

const isImage = (message) => {
  return message.hasOwnProperty('image') && !message.hasOwnProperty('content')
}

const isCode = (message) =>{
  return typeof message.content === 'string'? message.content.includes("code"):false 
}

const timeFromNow = timestamp => moment(timestamp).fromNow()

const sentence = "code-js: console.log('hello world')99"
const Message = ({ message, user }) => (
  <Comment>
    <Comment.Avatar src={message.user.avatar} />
    <Comment.Content className={isOwnMessage(message, user)}>
      <Comment.Author as="a">{message.user.name}</Comment.Author>
      <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>
      {isImage(message) ?
        <Image src={message.image} className="message__image" /> : isCode(message)? <Image src={require("./sonyTA.png")} className="message__image" />:
        <Comment.Text>{message.content}</Comment.Text>
      }
      {console.log(isCode(message))}

    </Comment.Content>
  </Comment>
)

export default Message

// {isImage(message) ?
//   <Image src={message.image} className="message__image" /> :
//   <Comment.Text>{message.content}</Comment.Text>
// }




