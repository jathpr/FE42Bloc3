import { useContext, useEffect, useState } from 'react'
import { Post, getPosts } from './posts'
import { RenderPost } from './RenderPost'
import { SearchContext } from '../SearchProvider'
import { usePost } from '../../usePost'

export const RenderPostsList = () => {
    const cards = usePost()
   
    return <>
    <h3>POSTS</h3>
     {cards.map(item => <RenderPost post1={item} />)} </>
  }