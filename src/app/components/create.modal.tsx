'use client'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import { title } from 'process';
import { toast } from 'react-toastify';
import { mutate } from "swr"
// import { Content } from 'next/font/google';


interface IProps {
  showModalAddNew: boolean;
  setShowModalAddNew: (v: boolean) => void;
}


function ModalAddNew(props: IProps) {
  const { showModalAddNew, setShowModalAddNew } = props;

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const handleSubmit = () => {
    // console.log('check data form', firstName, lastName, phone)
    // toast.success("Create new user succeed!...");
    if (!firstName) {
      toast.error('Not empty First Name')
      return;
    }
    if (!lastName) {
      toast.error('Not empty Last Name')
      return;
    }
    if (!phone) {
      toast.error('Not empty Phone')
      return;
    }
    fetch(' http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: firstName, author: lastName, content: phone })
    }).then(res => res.json())
      .then(res => {
        if (res) {
          toast.success('Create a new user succeed!...');
          handleCloseModal();
          mutate("http://localhost:8000/blogs");
        }
      });
  }
  const handleCloseModal = () => {
    setFirstName(""),
      setLastName(""),
      setPhone("")
    setShowModalAddNew(false)
  }

  return (
    <>


      <Modal show={showModalAddNew} onHide={() => handleCloseModal()}
        size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='mb-3'>Add a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="..."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="..."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            {/* <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="..." />
      </Form.Group> */}
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Cancle
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddNew;