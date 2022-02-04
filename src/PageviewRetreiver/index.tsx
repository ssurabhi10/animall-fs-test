import React, { useEffect, useState } from 'react'
import Store from '../store'

export const PageviewRetreiver: React.FC = () => {
  const [data, setData] = useState([])

  const getDataFromStore = () => {
    const store = new Store()
    const pageviews = store.getData()
    setData(pageviews)
    console.log(pageviews, 'store data')
  }

  const DataHeader = () => {
    return (
      <>
        <span>{'Id'}</span>
        <span>{'Data'}</span>
        <span>{'Title'}</span>
        <span>{'Description'}</span>
        <span>{'Tags'}</span>
        <span>{'User Id'}</span>
        <span>{'User Joined'}</span>
      </>
    )
  }

  const DataTable: React.FC<{ pageviews: any }> = ({ pageviews = [] }) => {
    return pageviews.map(
      ({
        id,
        created_at,
        page,
        user
      }: {
        id: string
        created_at: any
        page: { title: string; description: string; tags: [string] }
        user: { id: string; created_at: any }
      }) => {
        const { title = '', description = '', tags = [] } = page
        const { id: userId, created_at: userJoined } = user
        return (
          <div key={id}>
            <span>{id}</span>
            <span>{created_at.toISOString()}</span>
            <span>{title}</span>
            <span>{description}</span>
            <span>{tags?.join(', ')}</span>
            <span>{userId}</span>
            <span>{userJoined.toISOString()}</span>
          </div>
        )
      }
    )
  }

  return (
    <>
      <button
        style={{ fontSize: 24, marginBottom: 40 }}
        onClick={getDataFromStore}
      >
        Pageviews
      </button>
      {data.length ? (
        <div>
          <DataHeader />
          <DataTable pageviews={data} />
        </div>
      ) : null}
    </>
  )
}
