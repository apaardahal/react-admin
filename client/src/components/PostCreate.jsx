import React from 'react'
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin'

function PostCreate(props) {
  return (
    <Create title='Create a post' {...props}>
        <SimpleForm>
            <TextInput source='title'/>
            <TextInput source='body'/>
            <DateInput label='Published' source='PublishedAt'/>
        </SimpleForm>
    </Create>
  )
}

export default PostCreate