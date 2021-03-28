import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Flex,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react'

import { uploadFromBlobAsync } from './storage'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles?.[0]

    if (!file) {
      return
    }

    setIsLoading(true)
    setError(null)
    setMessage(null)

    try {
      await uploadFromBlobAsync({
        blobUrl: URL.createObjectURL(file),
        name: `${file.name}_${Date.now()}`,
      })
    } catch (e) {
      setIsLoading(false)
      setError(e.message)
      return
    }

    setIsLoading(false)
    setMessage('File was uploaded 👍')
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <Flex
        bg="#dadada"
        w={250}
        h={250}
        justify="center"
        align="center"
        p={50}
        m={2}
        borderRadius={5}
        textAlign="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isLoading ? (
          <Spinner />
        ) : isDragActive ? (
          <Text>Drop the files here...</Text>
        ) : (
          <Text>Drag 'n' drop some files here, or click to select files</Text>
        )}
      </Flex>
      {(error || message) && (
        <Alert
          status={error ? 'error' : 'success'}
          w={250}
          borderRadius={5}
          m={2}
        >
          <AlertIcon />
          <AlertDescription w={200}>{error || message}</AlertDescription>
        </Alert>
      )}
    </>
  )
}

export default App
