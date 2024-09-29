'use client'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
// import { title } from 'process';
import { toast } from 'react-toastify';
import { mutate } from "swr"
// import { Content } from 'next/font/google';


interface IProps {
    showModalUpdate: boolean;
    setShowModalUpdate: (value: boolean) => void;
    blog: IBlog | null;
    setBlog: (value: IBlog | null) => void;
}


function ModalUpdate(props: IProps) {
    const { showModalUpdate, setShowModalUpdate, blog, setBlog } = props;

    const [id, setId] = useState<number>(0);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    useEffect(() => {
        if (blog && blog.id) {
            setId(blog.id);
            setFirstName(blog.title);
            setLastName(blog.author);
            setPhone(blog.content);

        }
    }, [blog])
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
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: firstName, author: lastName, content: phone })
        }).then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success('Update user succeed!...');
                    handleCloseModal();
                    mutate("http://localhost:8000/blogs");
                }
            });
    }
    const handleCloseModal = () => {
        setFirstName("");
        setLastName("");
        setPhone("");
        setBlog(null);
        setShowModalUpdate(false);
    }

    return (
        <>


            <Modal show={showModalUpdate} onHide={() => handleCloseModal()}
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

export default ModalUpdate;