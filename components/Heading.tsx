import { Builder } from '@builder.io/react'
import React from 'react'

export const Heading = (props: { title: Object; }) => {
  console.log(props.title)
  // --> returns a localized object:
  // {
  //   Default: "Default Heading"
  //   en-CA: "CA Heading"
  //   en-UK: "UK Heading"
  //   en-US: "US Heading"
  // }

  // const locale = 'fr-FR';
  return (
    <div style={{'width': '50vw'}}>
      <h1>HELLO</h1>
      <h1>{JSON.stringify(props.title)}</h1>
      <h1>{props.title ? props.title : 'BLAH'}</h1>
    </div>
  )
}

Builder.registerComponent(Heading,
  {
    name: 'Heading',
    inputs: [
      {
        localized: true,
        name: 'title',
        type: 'text',
        defaultValue: 'Hello'
      },
      {
        localized: true,
        name: 'image-file',
        type: 'file',
      }
    ]
  })
