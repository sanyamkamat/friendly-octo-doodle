import React from 'react'
import { BuilderContent } from "@builder.io/react"
import '@builder.io/widgets';
import builder from "@config/builder";
import { captureRejectionSymbol } from "events";

export const Navigation = (props: any) => {
    const Flyout = (links: any) => {
        // console.log('LINK GROUP: ', links)
        return (
            links?.navigationLinks?.map((link: any, i: number) => {
                // console.log('LINK: ', link)

                 return <a className='nav-lins' href={link.linkUrl} key={'flyout-' + i}>{link.linkText} </a>

            })
        ) || null;

    }

    // console.log('PROPS: ', props)
    console.log('PROPS: ', props)
    const navigationChunk = props?.siteSettings?.map((item: any,i: number)=> {
        // console.log('ITEM: ', item)
        return (
            <div key={item.id} id={item.id}>test
                <BuilderContent
                    data-test={"123456"}
                    model="site-settings"
                    content={item}
                    key={item.id}
                    >{(data) => <Flyout { ...(data ? data : []) } key={'flyout-'+i}/>
                }</BuilderContent>
            </div>
        )
    })
    return navigationChunk || null;
}

