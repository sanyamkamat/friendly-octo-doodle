import React from 'react';
import { Builder } from '@builder.io/react';

const testExample = (options: any) => {
  console.log(options)
}

const text = 'default';

export const TestCustomComponent = (props: any) => {

  console.log('INISDE COMPONENT: ,')
  return (
    <>
    <h2>{props.inputVal}</h2>

    </>
  );
};

Builder.registerComponent(TestCustomComponent, {
  name: 'Test Custom Comp',
  inputs: [
    {
      name: 'inputVal',
      type: 'text',
      defaultValue: `${text}`,
    }
  ]
});

// 


  // function CustomComponent(props: any) {
  //   const handleSubmit = () => {
  //     props.builderState.context.handleSubmit();
  //   };
  //   return (
  //     <div onClick={handleSubmit} >
  //       {props.inputVal}
  //       { props?.area?.city}
  //       {props?.area?.count}
  //       {props?.area?.stateCode}
  //     </div>
  //   )
  // }

  // Builder.registerComponent(CustomComponent, {
  //   name: "CustomComponent",
  //   inputs: [
  //      {
  //       name: "inputVal",
  //       type: "string" 
  //      }, {
  //       name: "area",
  //       type: "object",
  //       subFields: [
  //           {
  //               name: "city",
  //               type: "string",
  //               defaultValue: "San Francisco"
  //           },
  //           {
  //               name: "county",
  //               type: "string",
  //               defaultValue: "San Francisco"
  //           },
  //           {
  //               name: "stateCode",
  //               type: "string",
  //               defaultValue: "CA"
  //           },
  //       ]
  //      } 
  //   ]
  // });
