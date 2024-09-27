import { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Temporizador from "../Temporizador/Temporizador";
import { ContextTest } from "../../context/ContextTest";
import './style.css'


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
            {finish ? <div>
                <div className="wrappers">
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="cards">
                        <section className="bottoms">
                            <div className="d-flex flex-row  text gap-4">
                                <span className="text-white fs-4">Buenas: {correcta}</span>
                                <span className="text-white fs-4">Malas: {incorrecta}</span>
                            </div>
                        </section>
                    </div>
                </div>
                <button className="buttons">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        viewBox="0 0 20 20"
                        height="20"
                        fill="none"
                        className="svg-icon"
                    >
                        <g strokeWidth="1.5" strokeLinecap="round" stroke="#ff342b">
                            <path
                                d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"
                            ></path>
                            <path
                                d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"
                            ></path>
                        </g>
                    </svg>
                    <span onClick={regresar} className="lable">Home</span>
                </button>
            </div>
                :
                <Container className="text-white mov">
                    <div className="fs-4 ms-2 mt-3">
                        <Temporizador time={test?.time} setFinish={setFinish} />
                    </div>
                    <div className="">
                        <h1 className="text-center movTi ">{test?.preguntas[cont]?.pregunta}</h1>
                        <Row className=" text-center gap-4">
                            <Col md={12} className="d-flex justify-content-center gap-4 ">
                                <Button
                                    onClick={() => cambiarPregunta(test?.preguntas[cont]?.respuesta1)}
                                    variant="primary"
                                    size="lg"
                                    style={{ width: '400px' }} >
                                    <div className="d-flex flex-row gap-5">
                                        <i className="bi bi-diamond-fill po"></i>
                                        <h2 className="po">{test?.preguntas[cont]?.respuesta1}</h2>
                                    </div>

                                </Button>
                                <Button
                                    onClick={() => cambiarPregunta(test?.preguntas[cont]?.respuesta2)}
                                    variant="danger"
                                    size="lg"
                                    style={{ width: '400px' }}>
                                    <div className="d-flex flex-row gap-5">
                                        <i className="bi bi-triangle-fill po"></i>
                                        <h2 className="po">{test?.preguntas[cont]?.respuesta2}</h2>
                                    </div>

                                </Button>
                            </Col>
                            <Col md={12} className="d-flex justify-content-center gap-4 ">
                                <Button
                                    onClick={() => cambiarPregunta(test?.preguntas[cont]?.respuesta3)}
                                    variant="warning"
                                    size="lg"
                                    style={{ width: '400px' }}>
                                    <div className="d-flex flex-row gap-5">
                                        <i className="bi bi-circle-fill po"></i>
                                        <h2 className="po">{test?.preguntas[cont]?.respuesta3}</h2>
                                    </div>

                                </Button>
                                <Button
                                    onClick={() => cambiarPregunta(test?.preguntas[cont]?.respuesta4)}
                                    variant="success"
                                    size="lg"
                                    style={{ width: '400px' }}>
                                    <div className="d-flex flex-row gap-5">
                                        <i className="bi bi-square-fill po"></i>
                                        <h2 className="po">{test?.preguntas[cont]?.respuesta4}</h2>
                                    </div>

                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Container >}
        </>
    );
}

export default MostrarPregunta;