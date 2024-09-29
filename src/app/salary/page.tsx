'use client'

// import { useRouter } from 'next/navigation'
// import { Button } from 'react-bootstrap';

// const AnhDuc = () => {
//     const router = useRouter()
//     const handleButton = () => {
//         router.push("/")
//     }
//     return (
//         <div>
//             Quản lí bảng lương
//             <div>
//                 <Button variant='success'>Anh Duc</Button>
//                 <button onClick={() => handleButton()}>Back Home</button>
//             </div>
//         </div>
//     )
// }

// export default AnhDuc;

import Table from 'react-bootstrap/Table';
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap';

const AnhDuc = () => {
    const router = useRouter()
    const handleButton = () => {
        router.push("/")
    }
    return (
        <>
            <div>
                <h3>Quản lí bảng lương</h3>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Lương</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Anh</td>
                        <td>Duc</td>
                        <td>10.000.000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mark</td>
                        <td>Eric</td>
                        <td>10.000.000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Anh</td>
                        <td>Duc</td>
                        <td>10.000.000</td>
                    </tr>
                    <div>
                        <button onClick={() => handleButton()}>Back Home</button>
                    </div>
                </tbody>
            </Table>
        </>

    );
}

export default AnhDuc;