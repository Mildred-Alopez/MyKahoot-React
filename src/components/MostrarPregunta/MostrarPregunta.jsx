import { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Temporizador from "../Temporizador/Temporizador";
import { ContextTest } from "../../context/ContextTest";


const MostrarPregunta = () => {
    const {
        preguntasLocal,
        test,
        setTest,
        cambiarPregunta,
        finish,
        setFinish,
        cont,
        correcta,
        incorrecta,
    } = useContext(ContextTest)

    const { codigo } = useParams()

    const navigate = useNavigate()

    const regresar = () => {
        navigate('/')
    }

    useEffect(() => {
        const prueba = preguntasLocal.find((item) => item.codigo == codigo)
        setTest(prueba)
    }, [])

    return (
        <>
            {finish ? <Container>
                <div className="w-25 d-flex flex-row gap-5 m-auto mt-5 p-5 card">
                    <span className="text-success">Buenas: {correcta}</span>
                    <span className="text-danger">Malas: {incorrecta}</span>
                </div>
                <Button onClick={regresar}>Home</Button>
            </Container>
                :
                <Container>
                    <div className="fs-4 ms-2 mt-3">
                        <Temporizador time={test?.time} setFinish={setFinish} />
                    </div>
                    <div className="mt-5">
                        <h1 className="text-center mb-5  fw-bold fst-italic">{test?.preguntas[cont]?.pregunta}</h1>
                        <Row className=" text-center gap-4">
                            <Col md={12} className="d-flex justify-content-center gap-4 ">
                                <Button
                                    onClick={() => cambiarPregunta(test?.preguntas[cont]?.respuesta1)}
                                    variant="primary"
                                    size="lg"
                                    style={{ width: '300px' }} >
                                    {test?.preguntas[cont]?.respuesta1}
                                </Button>
                                <Button
                                    onClick={() => cambiarPregunta(test?.preguntas[cont]?.respuesta2)}
                                    variant="danger"
                                    size="lg"
                                    style={{ width: '300px' }}>
                                    {test?.preguntas[cont]?.respuesta2}
                                </Button>
                            </Col>
                            <Col md={12} className="d-flex justify-content-center gap-4 ">
                                <Button
                                    onClick={() => cambiarPregunta(test?.preguntas[cont]?.respuesta3)}
                                    variant="warning"
                                    size="lg"
                                    style={{ width: '300px' }}>
                                    {test?.preguntas[cont]?.respuesta3}
                                </Button>
                                <Button
                                    onClick={() => cambiarPregunta(test?.preguntas[cont]?.respuesta4)}
                                    variant="success"
                                    size="lg"
                                    style={{ width: '300px' }}>
                                    {test?.preguntas[cont]?.respuesta4}
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Container >}
        </>
    );
}

export default MostrarPregunta;