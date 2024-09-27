import { useContext } from "react";
import {  Col, Form, Modal, Row, Table } from "react-bootstrap";
import InputRespuesta from "../../components/InputRespuesta/InputRespuesta";
import { Controller } from 'react-hook-form'
import { ContextTest } from "../../context/ContextTest";
import { useNavigate } from "react-router-dom";
import './style.css'

const CreateTest = () => {
    const {
        show,
        activate,
        preguntas,
        handleShow,
        onChangeText,
        deleteQuestion,
        register,
        control,
        handleSubmit,
        errors,
        handleClose,
        actualizarRespuestaCorrecta,
        onSubmit,
        setPreguntas,
        reset,
    } = useContext(ContextTest)

    const navigate = useNavigate()

    const handleCreatTest = (data) => {
        const { autor, time, nombreTest } = data
        if (preguntas.length <= 0) {
            alert('No puedes guardar')
        } else {
            const Guardar = {
                codigo: Math.random().toString(36).substring(2, 9),
                autor,
                time,
                nombreTest,
                preguntas
            }
            const tests = JSON.parse(localStorage.getItem('tests'))
            if (tests) {
                tests.push(Guardar)
                localStorage.setItem('tests', JSON.stringify(tests))
            } else {
                localStorage.setItem('tests', JSON.stringify([Guardar]))
            }
            alert('se ha guardado con exito')
            reset()
            setPreguntas([])
            navigate('/')
        }
    }


    return (
        <>
            <div className="card">
                <div className="card__content">
                    ℂ𝕣𝕖𝕒𝕣 𝕦𝕟𝕒 𝔼𝕧𝕒𝕝𝕦𝕒𝕔𝕚𝕠𝕟
                </div>
            </div>
            <Form className="mt-5 text-white" >
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <div className="d-flex flex-column">
                                <Form.Label>Nombre del Test</Form.Label>
                                {errors.nombreTest &&
                                    <Form.Text className="text-danger mb-2">{errors.nombreTest.message}</Form.Text>}
                                <Form.Control {...register('nombreTest', { required: 'Este campo no puede estar vacio' })} type="text" placeholder="Nombre del Test" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Autor del Test</Form.Label>
                            <div className="d-flex flex-column">
                                {errors.autor &&
                                    <Form.Text className="text-danger mb-2">{errors.autor.message}</Form.Text>}
                                <Form.Control {...register('autor', { required: 'Este campo no puede estar vacio' })} type="text" placeholder="Autor del Test" />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <div className="d-flex flex-column">
                                <Form.Label>{`Duracion del Test `}
                                    <Form.Text className="text-muted">
                                        (Ingreselo en Minutos)
                                    </Form.Text>
                                </Form.Label>
                                {errors.time &&
                                    <Form.Text className="text-danger mb-2">{errors.time.message}</Form.Text>}
                                <Form.Control {...register('time', { required: 'Este campo no puede estar vacio' })} type="number" placeholder="Duracion del Test" />
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col>
                    <Row>
                        <Col className=" d-flex justify-content-end mb-3">
                            <button className="boton-elegante me-3" onClick={handleSubmit(handleCreatTest)}>
                                Guardar Cambios
                            </button>
                            <button className="boton-elegante" onClick={handleShow}>
                                Crear Pregunta
                            </button>
                            <Modal show={show} onHide={handleClose} >
                                <Modal.Header closeButton>
                                    <Modal.Title>🄲🅁🄴🄰🅁 🄿🅁🄴🄶🅄🄽🅃🄰 <i className="bi bi-pencil-square fs-4 ms-2"></i></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <div className="d-flex flex-column">
                                                <Form.Label className="text-primary">Pregunta <i className="bi bi-question-lg"></i></Form.Label>
                                                {errors.pregunta &&
                                                    <Form.Text className="text-danger mb-2"> {errors.pregunta.message}</Form.Text>}
                                            </div>
                                            <Controller
                                                name="pregunta"
                                                control={control}
                                                rules={{ required: 'Este campo no puede estar vacio' }}
                                                render={({ field }) => (
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Ingrese su pregunta"
                                                        //abro las llaves porque voy a colocar js y ...field me indica  que va a sacar todas las
                                                        //propiedades de ese objeto y las va apasar como propiedades del componente
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <div className="d-flex flex-column">
                                                <Form.Label className="text-success">Respuestas 1 : </Form.Label>
                                                {errors.respuesta1 &&
                                                    <Form.Text className="text-danger mb-2">{errors.respuesta1.message}</Form.Text>}
                                            </div>
                                            <Controller
                                                name={'respuesta1'}
                                                control={control}
                                                rules={{ required: 'Este campo no puede estar vacio' }}
                                                render={({ field: { onChange, name, ref, required } }) => {
                                                    return (
                                                        <InputRespuesta
                                                            activate={activate[name]}
                                                            onChange={(e) => onChangeText(e, onChange, name)}
                                                            inputRef={ref}
                                                            control={control}
                                                            name={name}
                                                            onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                                            nameRadio='respuestaCorrecta'
                                                            rules={required}
                                                        />
                                                    )
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <div className="d-flex flex-column">
                                                <Form.Label className="text-success">Respuestas 2 : </Form.Label>
                                                {errors.respuesta2 &&
                                                    <Form.Text className="text-danger mb-2">{errors.respuesta2.message}</Form.Text>}
                                            </div>
                                            <Controller
                                                name={'respuesta2'}
                                                control={control}
                                                rules={{ required: 'Este campo no puede estar vacio' }}
                                                render={({ field: { onChange, name, ref, required } }) => {
                                                    return (
                                                        <InputRespuesta
                                                            activate={activate[name]}
                                                            onChange={(e) => onChangeText(e, onChange, name)}
                                                            inputRef={ref}
                                                            control={control}
                                                            name={name}
                                                            onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                                            nameRadio='respuestaCorrecta'
                                                            rules={required}
                                                        />
                                                    )
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <div className="d-flex flex-column">
                                                <Form.Label className="text-success">Respuestas 3 : </Form.Label>
                                                {errors.respuesta3 &&
                                                    <Form.Text className="text-danger mb-2">{errors.respuesta3.message}</Form.Text>}
                                            </div>
                                            <Controller
                                                name={'respuesta3'}
                                                control={control}
                                                rules={{ required: 'Este campo no puede estar vacio' }}
                                                render={({ field: { onChange, name, ref, required } }) => {
                                                    return (
                                                        <InputRespuesta
                                                            activate={activate[name]}
                                                            onChange={(e) => onChangeText(e, onChange, name)}
                                                            inputRef={ref}
                                                            control={control}
                                                            name={name}
                                                            onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                                            nameRadio='respuestaCorrecta'
                                                            rules={required}
                                                        />
                                                    )
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <div className="d-flex flex-column">
                                                <Form.Label className="text-success">Respuestas 4 : </Form.Label>
                                                {errors.respuesta4 &&
                                                    <Form.Text className="text-danger mb-2">{errors.respuesta4.message}</Form.Text>}
                                            </div>
                                            <Controller
                                                name={'respuesta4'}
                                                control={control}
                                                rules={{ required: 'Este campo no puede estar vacio' }}
                                                render={({ field: { onChange, name, ref, required } }) => {
                                                    return (
                                                        <InputRespuesta
                                                            activate={activate[name]}
                                                            onChange={(e) => onChangeText(e, onChange, name)}
                                                            inputRef={ref}
                                                            control={control}
                                                            name={name}
                                                            onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                                            nameRadio='respuestaCorrecta'
                                                            rules={required}
                                                        />
                                                    )
                                                }}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button className="boton-elegante" onClick={handleClose}>
                                        Close
                                    </button>
                                    <button className="boton-elegante" onClick={handleSubmit(onSubmit)}>
                                        Save Changes
                                    </button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                    <Table responsive striped bordered hover variant='dark'>
                        <thead>
                            <tr>
                                <th>Pregunta</th>
                                <th>Respuestas</th>
                                <th>Respuesta Correcta</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {preguntas.map((pregunta, index) => (
                                <tr key={index}>
                                    <td>{pregunta.pregunta}</td>
                                    <td>{`${pregunta.respuesta1} , ${pregunta.respuesta2} , ${pregunta.respuesta3} , ${pregunta.respuesta4}`}</td>
                                    <td>{`${pregunta.respuestaCorrecta}`}</td>
                                    <td><button className="boton-elegante" onClick={() => deleteQuestion(index)}>Eliminar</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}

export default CreateTest;