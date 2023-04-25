import React, { ReactNode } from 'react';
import './Title.css';

export const Title = (text: { children: string }) => (<h1 className='title'>{text.children}</h1>)

