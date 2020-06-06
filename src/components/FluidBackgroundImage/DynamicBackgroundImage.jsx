import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

const FluidBackgroundImageLazy = React.lazy(() => import('./FluidBackgroundImage'))
const RawBackgroundImageLazy = React.lazy(() => import('./RawBackgroundImage'))

const DynamicBackgroundImage = (props) => {
  const detectMobile = () => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ]

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    })
  }
  const isSSR = typeof window === "undefined"
  const isMobile = !isSSR && detectMobile()
  const { imagePath } = props

  const fluidImage = () => {
    const { images } = useStaticQuery(graphql`
        query {
          images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        } 
      `)
    return images.edges.find(image => image.node.relativePath === imagePath)
  }

  if(isMobile) {
    return (
      <>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <FluidBackgroundImageLazy image={fluidImage()}/>
          </React.Suspense>
        )}
      </>
    )
  } else {
    return (
      <>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <RawBackgroundImageLazy imagePath={imagePath}/>
          </React.Suspense>
        )}
      </>
    )
  }
}

export default DynamicBackgroundImage