import React from 'react'
import { BuilderContent } from "@builder.io/react"
import '@builder.io/widgets';

export const Tester = (props: any) => {
  console.log('PROPS: ', props)
  const navigationChunk = props?.tester?.map((item: any, i: number) => {

    return (
      <div key={item.id} id={item.id}>{
        ((item) => {
          console.log('ITEM: ', item.id, item);
          return <BuilderContent
            model='tester'
            options={{cachebust: true}}
            content={item}
          >{(data, loading, fullData) => {
            // console.debug("data",  data);
            return (<div>
              <p>===================================</p>
              <p>{JSON.stringify(fullData)}</p>
              <div>{JSON.stringify(data)}</div>
              <div>{JSON.stringify(loading)}</div>
            </div>)
          }
          }</BuilderContent>
        })(item)
      }

    </div>
    )
  })
  return navigationChunk || null
}

