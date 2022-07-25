import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

function PostEdit(props) {
  return (
    <Edit title='Edit a post' {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='title'/>
            <TextInput source='body'/>
            <DateInput label='Published' source='PublishedAt'/>
        </SimpleForm>
    </Edit>
  )
}

export default PostEdit