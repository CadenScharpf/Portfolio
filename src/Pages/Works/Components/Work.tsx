import React from 'react'

interface iWorkProps {
  img: string;
  title: string;
  description: string;
  containerStyle?: React.CSSProperties;
}

const styles: Record<string, React.CSSProperties> = {
  work: {
    overflow: 'hidden',
    position: 'relative', // Add position property
    borderRadius: '25px',
    width: '100%',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '25px',
  },
  overlay: {
    position: 'absolute', // Use absolute positioning
    height: '50%',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center', // Center align the text
    color: 'white', // Set the text color
    backgroundColor: 'rgba(0,0,0,0.5)', // Darken the overlay
    overflow: 'scroll',
    display: 'block'
  },
}

export function Work(props: iWorkProps) {
  return (
    <div className="work" style={{ ...styles.work, ...props.containerStyle }}>
      <img src={props.img} style={styles.img} />
      <div style={styles.overlay}>
        <h2>{props.title}</h2>
        <div>{props.description}</div>
      </div>
    </div>
  )
}
