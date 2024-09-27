import { useContext } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ContextTest } from '../../context/ContextTest';
import './style.css'

const LayoutAdmin = () => {

    const { preguntasLocal, copyLink } = useContext(ContextTest)

    return (
        <>
            <div className="m2 tit">
                <div className="logo">
                    Cuestionarios
                </div>
            </div>
            <div className='caja'>
                <div className='d-flex justify-content-end mb-4'>
                    <Link to='/create'>
                        <button className="cssbuttons-io">
                            <span>
                                Crear Test
                            </span>
                        </button>
                    </Link>
                </div>
                <div className='d-flex justify-content-center flex-column mt-5'>
                    <Table responsive striped bordered hover variant='dark'>
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
                            {preguntasLocal?.map((item, index) => (
                                < tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nombreTest}</td>
                                    <td>{item.time}</td>
                                    <td>{item.autor}</td>
                                    <td>{item.preguntas?.length}</td>
                                    <td>{item.codigo}</td>
                                    <td><button onClick={() => copyLink(item.codigo)} className='booton'>Copy Link</button></td>
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