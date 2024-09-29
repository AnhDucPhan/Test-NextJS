
'use client'


import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import ModalAddNew from './create.modal';
import { useState } from 'react';
import UpdateModal from '../components/update.modal'


interface IProps {
  blogs: IBlog[]
}

const AppTable = (props: IProps) => {
  const { blogs } = props
  const [blog,setBlog]=useState<IBlog | null>(null);
  const [showModalUpdate, setShowModalUpdate]=useState<boolean>(false);
  const [showModalAddNew, setShowModalAddNew] = useState<boolean>(false);
  return (
    <>
      <div
        className='mb-3'
        style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ marginTop: '30px' }}>Quản lí nhân sự</h3>
        <Button variant='secondary'
          onClick={() => setShowModalAddNew(true)}
        >Add new</Button>
      </div>
      <Table striped bordered hover style={{ paddingTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map(item => {
            return (
              <tr
                key={item.id}>
                <td>
                  {item.id}
                </td>
                <td>
                  {item.title}
                </td>
                <td>
                  {item.author}
                </td>
                <td>
                  {item.content}
                </td>
                <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  <Button className=''>View</Button>
                  <Button variant='warning' className='mx-3'
                  onClick={()=>{
                    setBlog(item);
                    setShowModalUpdate(true)
                  }}>Edit</Button>
                  <Button variant='danger'>Delete</Button>
                </td>

              </tr>
            )
          })}
        </tbody>
      </Table>
      <ModalAddNew
        showModalAddNew={showModalAddNew}
        setShowModalAddNew={setShowModalAddNew}
      />
      <UpdateModal
      showModalUpdate={showModalUpdate}
      setShowModalUpdate={setShowModalUpdate}
      blog={blog}
      setBlog={setBlog}/>
    </>

  );
}

export default AppTable;