import * as React from 'react'
import { Button } from '@chakra-ui/react'

const textShadow = '0 0 1px rgba(0, 0, 0, .3)'

interface Props {
  showToast: React.MouseEventHandler<HTMLButtonElement>
  handleClearTasks: React.MouseEventHandler<HTMLButtonElement>
}

const FormButtons: React.FC<Props> = ({ showToast, handleClearTasks }) => {
  return (
    <>
      <Button
        bg="cyan.600"
        color="text.white"
        type="submit"
        _hover={{ bg: 'cyan.800' }}
        w={['100%', '100%', '100%', '8em']}
        mb={[1, 1, 1, 0]}
        mr={[0, 0, 0, 1]}
        onClick={showToast}
        fontFamily="montserrat"
        sx={{ textShadow: textShadow }}
      >
        Create
      </Button>

      <Button
        bg="cyan.600"
        color="text.white"
        type="button"
        _hover={{ bg: 'cyan.800' }}
        w={['100%', '100%', '100%', '8em']}
        onClick={handleClearTasks}
        sx={{ textShadow: textShadow }}
      >
        Clear tasks
      </Button>
    </>
  )
}

export default FormButtons
