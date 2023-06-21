import React from 'react'
import { ContentWindow } from '../../Components/ContentWindow'
import { Carousel } from '../Home/Components'

export function TestPage() {
  return (

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', height: '100%', width: '100%' }}>
            <Carousel style={{height: '50%', width: '50%'}}/>
        </div>
  )
}
