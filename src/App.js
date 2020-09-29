import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const containerStyle = {
  background: '#dadada',
  width: 250,
  height: 250,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 50,
  textAlign: 'center',
}

function App() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div style={containerStyle} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  )
}

export default App
