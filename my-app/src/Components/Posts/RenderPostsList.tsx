import { useContext, useEffect, useState } from 'react'
import { Post, getPosts } from './posts'
import { RenderPost } from './RenderPost'
import { SearchContext } from '../SearchProvider'
import { usePost } from '../../usePost'
import { Select } from '../Select'

export const RenderPostsList = () => {
    const cards = usePost()
   
    return <>
<Select />
    <h3>POSTS</h3>
    {!cards.length && 'Not found'}
     {cards.map(item => <RenderPost post1={item} />)} </>
  }