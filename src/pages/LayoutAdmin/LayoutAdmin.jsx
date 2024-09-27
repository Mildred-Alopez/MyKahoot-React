import { useContext } from 'react';
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ContextTest } from '../../context/ContextTest';


const LayoutAdmin = () => {
 
    const { preguntasLocal, copyLink } = useContext(ContextTest)


    return (
        <>
            <div className='container pt-5'>
                <div className='d-flex justify-content-end mb-4'>
                    <Link
                        to='/create'
                        className='btn btn-primary mt-5'
                    >Crear Test
                    </Link>
                </div>
                <div className='d-flex justify-content-center flex-column mt-5'>
                    <Table responsive striped >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre de la Prueba</th>
                                <th>Duracion</th>
                                <th>Autor</th>
                                <th>Total de preguntas</th>
                                <th>Codigo</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {preguntasLocal.map((item, index) => (
                                < tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nombreTest}</td>
                                    <td>{item.time}</td>
                                    <td>{item.autor}</td>
                                    <td>{item.preguntas?.length}</td>
                                    <td>{item.codigo}</td>
                                    <td><Button onClick={() => copyLink(item.codigo)} variant={'success'}>Copy Link</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div >
        </>
    );
}

export default LayoutAdmin;