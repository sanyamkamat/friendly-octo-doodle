// import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { BuilderComponent, Builder, builder, withChildren, BuilderContent } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { getLayoutProps, getRibbonProps, getCustomCss } from '@lib/get-component-props'
import { Link } from '@components/Link/Link'
import '@components/TestCustomComponent/TestCustomComponent';
import '@components/testerWithChildern';
// import '@components/BetterComponent/BetterComponent';
import '@builder.io/widgets';

const BUILDER_API_KEY = 'e37b966ec695434bb21e97442a4a9f46'
builder.init(BUILDER_API_KEY)

// tells you what paths are being built
export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ abTest: string }>) {

  const abPage =
    (await builder
      .get('ab-test-page', { 
          includeRefs: true
        })
      .toPromise()) || null
    console.log('PAGE PAGE: ', abPage, params)
    //   console.log('PAGE id: ', abPage.id)
    //   console.log('PAGE variationId: ', abPage.variationId)
    //   console.log('PAGE testVariationId: ', abPage.testVariationId)

//   const articlePageTemplate =
//       (await builder
//         .get('article-page')
//         .toPromise()) || null
//         // console.log('TEMPLATE: ', articlePageTemplate)
      

  return {
    props: {
      abPage,
      ...(await getLayoutProps()),
      ...(await getRibbonProps()),
      ...(await getCustomCss()),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

// React Component
export default function Page({
  abPage,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  console.log('PAGE VARIANT: ', abPage)
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  const isLive = !Builder.isEditing && !Builder.isPreviewing

  if (false){//|| (isLive && !router.query.preview)) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="title"></meta>
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BuilderContent model="ab-test-page" options={{includeRefs: true}}>
        {(data, loading) => {
          console.log('data!!: ', data?.testPage)
          
          return (
            <BuilderComponent 
              model={data?.testPage?.model} 
              content={data?.testPage?.value} 
              options={{ includeRefs: true }} >
              This is default component
            </BuilderComponent>
          )
          }}
      </BuilderContent>
    </>
  )
}

 {/* <BuilderContent model="ab-test-page" content={abPage}> { (data, loading) => {
          console.log('VARIANT DATA: ', data) */}
         
              //     }} 
      // </BuilderContent>