import React, { useEffect } from 'react'
import { usePageviewGenerator } from './logic'
import Store from '../store'

export const PageviewGenerator: React.FC = () => {
  const { generate, pageview } = usePageviewGenerator()

  useEffect(() => {
    sendDataToStore(pageview)
  }, [pageview])

  const sendDataToStore = (pageview: any) => {
    const store = new Store()
    const data = store.setData([pageview])
    console.log(data, 'store data')
  }

  return (
    <>
      <button style={{ fontSize: 24, marginBottom: 40 }} onClick={generate}>
        Generate pageview
      </button>

      {pageview && (
        <>
          <h3>Last pageview</h3>
          <p>Event ID: {pageview?.id}</p>
          <p>Event date: {pageview?.created_at.toISOString()}</p>
          <p>Page title: {pageview?.page?.title}</p>
          <p>Page description: {pageview?.page?.description}</p>
          <p>Page tags: {pageview.page?.tags?.join(', ')}</p>
          <p>User ID: {pageview?.user?.id}</p>
          <p>User joined: {pageview?.user?.created_at.toISOString()}</p>
        </>
      )}
    </>
  )
}
