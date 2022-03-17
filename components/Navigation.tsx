
import { BuilderContent } from "@builder.io/react"
import '@builder.io/widgets';
import builder from "@config/builder";
import { captureRejectionSymbol } from "events";

export const Navigation = (props: any) => {
    // console.log('NAVIGATION: ', props)
    // const handleHover = (e: any) => {
    //     // builder.track
    //     // e.stopPropagation;
    //     // e.target.children[0]?.style?.display === 'none' ? e.target.children[0].style.display = 'flex' : e.target.children[0].style.display = 'none';
    // }

    // const createNewAuthor = async(url = 'https://builder.io/api/v1/write/author') => {
    //     const data = '{ data: { name: "Tim" } }'

    //     console.log('create');
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             Authorization: 'Bearer bpk-0209a684b0634c38bcf15808f0487182'
    //         },
    //         body: JSON.stringify(data)
    //     }); 
    //     // console.log('RESPONSE: ', response);
    //     //return response.json();
    // }

    // const dataObject = {
        // data: {
        //     url: '/write-api/success',
        //     urlPath: '/write-api/success'
        // },
        // query: [
        //     {
        //       "property": "urlPath",
        //       "operator": "is", // can be `startsWith` to match any urls that starts with value
        //       "value": "/write-api/success" // must start with /
        //     }
        //   ] 
    //     name: 'Goop',
    //     data: {
    //        userName: 'Anu',
    //        review: 'Testing',
    //        productSlug: 'demo-product',
    //        date: new Date(),
    //        rating: 4,
    //     //    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flower_July_2011-2_1_cropped.jpg/1200px-Flower_July_2011-2_1_cropped.jpg"
    //      },
    //     published: 'published'
    //    }
    //    const postData = async (url: string, data: any) => {
    //      const response = await fetch(url, {
    //        body: JSON.stringify(data),
    //        headers: {
    //          Authorization: "Bearer bpk-0209a684b0634c38bcf15808f0487182",
    //          "Content-Type": "application/json"
    //        },
    //     //    method: "PATCH"
    //        method: "POST"
    //      })
     
    //      return response.json();
    //    }

    // const handleClick = (e: any) => {
    //     console.log('click', e)
    //     // postData('https://builder.io/api/v1/write/page/54a07d88ced34b6880988d311573fd70', dataObject)
    //     //  .then((data) => {
    //     //    console.log('data: ', data);
           
    //     //  }) 
    // }  
    
    // return <BuilderContent content={props.siteSettings} model="site-settings">{ (data: any) => {
    //         return <>
    //             <ul onClick={handleClick} style={{display: 'flex', padding: 0, listStyle: 'none', justifyContent: 'center'}}>
    //                 {
    //                     data?.navigationLinks?.map((link: any) => {
    //                         return <div key={link.linkUrl} onMouseEnter={handleHover} onMouseLeave={handleHover} style={{ position: 'relative', padding: '20px', cursor: 'pointer' }}>
    //                             {link.linkText}
    //                             <ul style={{ display: 'none', position: "absolute", flexDirection: 'column', left: '20px', zIndex: 1000, background: 'white', padding: 0}}>
    //                                 {link.subLinks?.map((sublink: any) => {
    //                                     return <a key={sublink.linkUrls} href={sublink.linkUrl } style={{ textDecoration: 'none', color: 'black', padding: '5px', border: '1px solid black' }}>
    //                                         {sublink.linkText}
    //                                     </a>
    //                                 })}
    //                             </ul>
    //                         </div>
    //                     })
    //                 }
    //             </ul>
                
    //             {props.children}
    //         </>
    // }}</BuilderContent>

    const Flyout = (links: any) => {
        // console.log('LINK GROUP: ', links)
        return (
            links?.navigationLinks?.map((link: any) => {
                // console.log('LINK: ', link)
                    
                return <a className="nav-lins" href={link.linkUrl}>{link.linkText}</a>

            })
        ) || null;
    
    }

    // console.log('PROPS: ', props)
    const navigationChunk = props?.siteSettings?.map((item: any,i: number)=> {
        // console.log('ITEM: ', item)
        return (
            <>
            <BuilderContent
                model="site-settings"
                content={item}
                key={item.id}
                >{(data) => <Flyout { ...(data ? data : []) } key={'flyout-'+i}/>
            }</BuilderContent>
            </>
        )
    })
    return navigationChunk || null;

}

