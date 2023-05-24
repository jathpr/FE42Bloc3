import React from 'react';
import ReactDOM from 'react-dom/client';

import { PostCards } from './PostCards';
import {PostsList} from './PostsList'


import './css/app.css';

export const App = () => (
  <div className='container'>
    <div className='posts'>
      <h1>Task 1</h1>
      <div className='first-task'>
        <PostCards postinfo={posts[0]}></PostCards>
        <PostCards postinfo={posts[1]}></PostCards>
				<PostCards postinfo={posts[2]}></PostCards>
      </div>
    </div>
    <div className='second-task'>
    <h1>Task 2</h1>
				<PostsList />
			</div>
  </div>
)

const posts = [
	{
		"id": 1,
		"image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
		"text": "фыв",
		"date": "2021-10-06",
		"lesson_num": 123,
		"title": "фывфывфыв",
		"description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
		"author": 7
	},
	{
		"id": 2,
		"image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
		"text": "Text",
		"date": "2021-10-07",
		"lesson_num": 48,
		"title": "Title",
		"description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
		"author": 7
	},
	{
		"id": 3,
		"image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
		"text": "Hello!",
		"date": "2021-10-07",
		"lesson_num": 23,
		"title": "B-52!",
		"description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
		"author": 97
	}
]