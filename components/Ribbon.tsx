import { builder, BuilderComponent, Builder } from '@builder.io/react'
import '@builder.io/widgets';

const BUILDER_API_KEY = 'f0ded9b4e1a44260ab6286f916d2eed8'
builder.init(BUILDER_API_KEY)

export const getStaticProps = async (context: any) => {

  const content = await builder.get('ribbon').promise() || null;

  return { 
    props: { content }, 
    revalidate: true,
    notFound: !content
  }
}

export default function BuilderRibbon({ ribbon }: any) {
  // console.log('BUILDERRIBBON: ', ribbon)
    return (
      <div className="this-is-in-builder-ribbon">

        <BuilderComponent
            model="ribbon"
            content={ribbon}
            // options={{
            //   query: { "data.isFooterContent": "true" }
            // }}
            ></BuilderComponent>
      </div>
    )

}


// Register your components for use in the visual editor!
// https://www.builder.io/blog/drag-drop-react
export const SiteRibbon = (props: any) => {
    return <div className="this is the className">{props.text} <a href={props.linkUrl}>{props.linkText}</a></div>

}

Builder.registerComponent(SiteRibbon, { 
  name: 'Site Ribbon',
  inputs: [
      { 
        name: 'text', 
        type: 'text'
      }, {
        name: 'linkUrl', 
        type: 'url'
      }, {
        name: 'linkText', 
        type: 'text'
      }]
})
