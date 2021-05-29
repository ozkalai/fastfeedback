import { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Button,
} from "@chakra-ui/core";

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const { register, handleSubmit, watch } = useForm();
  const createSite = (value) => console.log(value);

  return (
    <>
      <Button maxW="200px" variant="solid" size="md" onClick={onOpen}>
        Add your first site
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createSite)}>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                id="site-input"
                placeholder="My site"
                name="name"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                id="link-input"
                placeholder="https://website.com"
                name="url"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
