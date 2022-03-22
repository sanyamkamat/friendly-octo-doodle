import React from 'react'
import { BuilderContent } from '@builder.io/react'
import '@builder.io/widgets'

export const Tester = (props: any) => {
  const contentChunk = props?.tester?.map((item: any, i: number) => {

    return (
      <BuilderContent
        model='tester'
        content={item}
        key={item.id}
      >{(data: any) => <div>{JSON.stringify(data)}</div>}</BuilderContent>
    )
  })
  return contentChunk || null
}

