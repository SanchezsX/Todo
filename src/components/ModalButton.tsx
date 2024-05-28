import { useContext, useState } from 'react'
import TodoContext from '@/context/TodoContext'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from '@nextui-org/react'

const ModalButton = ({ Plus }: { Plus?: boolean }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [inputValue, setInputValue] = useState('')
  const { handleAddTask, TodoBoardTypes } = useContext(TodoContext)
  const [localCategory, setLocalCategory] = useState<
    'Todays' | 'This week' | 'Eventually'
  >('Todays')

  const handleAdd = () => {
    handleAddTask(inputValue, localCategory)
    setInputValue('')
    onOpenChange()
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <>
      {!Plus ? (
        <Button
          onPress={onOpen}
          color="primary"
          className="font-semibold text-[#111827]"
        >
          Add Todo
        </Button>
      ) : (
        <Button
          onPress={onOpen}
          radius="full"
          size="sm"
          className=" text-primary bg-transparent  text-[25px]"
        >
          +
        </Button>
      )}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="bg-secondary">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                What do you want to do?
              </ModalHeader>
              <ModalBody>
                <input
                  type="text"
                  placeholder="to do?"
                  className="rounded-[15px] p-3 focus:outline-none bg-[#3c3c3f] border-white/10 border-2 mb-5"
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  value={inputValue}
                />
                <h3 className="font-bold text-[19px]">
                  When do you want to do this?
                </h3>
                <Tabs
                  color="primary"
                  key="1123"
                  aria-label="Tabs colors"
                  radius="sm"
                  variant="bordered"
                  classNames={{
                    tabContent:
                      'group-data-[selected=true]:text-[#3c3c3f] font-semibold ',
                  }}
                  onSelectionChange={(value) =>
                    setLocalCategory(
                      value as 'Todays' | 'This week' | 'Eventually'
                    )
                  }
                >
                  {TodoBoardTypes.map((type) => (
                    <Tab
                      key={type}
                      title={type}
                    />
                  ))}
                </Tabs>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  className="font-semibold text-[#111827]"
                  onPress={handleAdd}
                >
                  add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalButton
