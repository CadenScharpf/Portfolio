import React from 'react'
import { SECTION_STYLE } from './SectionStyle'
const styles: Record<string,React.CSSProperties> = {
  techBox: {
    display: 'flex', 
    flexDirection: 'column', 
    border: '3px solid black',
    padding: 10,
    color: 'black',
  }
}
export function Technologies() {

  const frontendIconsPath = './Assets/frontend'; // Path to the folder containing PNG images
  const backendIconsPath = './Assets/backend'; // Path to the folder containing PNG images

 /*  const frontEndIconsFiles = require.context(
    `!!file-loader!${frontendIconsPath}`, // This loaders configuration may vary based on your build setup
    false,
    /\.png$/
  ).keys();

  const backEndIconsFiles = require.context(
    `!!file-loader!${backendIconsPath}`, // This loaders configuration may vary based on your build setup
    false,
    /\.png$/
  ).keys();
 */

  

  
  return (
    <div style={SECTION_STYLE}>
      <div style={{width: '100%'}}><h2 style={{}}>Tech I Use</h2></div>
      <div style={{width: '100%', margin: '1rem 1rem 1rem 1rem'}}>
        <div style={{...styles.techBox}}>
        <h3 style={{margin: 0, color: '#333'}}>These are, but not limited to, the tech I use for building client-side applications</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {/* {frontEndIconsFiles.map((file: string, idx: number) => {
            return <img key={idx} src={file} style={{height: 50, width: 50, margin: 5}} />
          })
          } */}
        </div>
        </div>
      </div>
    </div>
  )
}
