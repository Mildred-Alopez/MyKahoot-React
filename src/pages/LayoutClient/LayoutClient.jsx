import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ContextTest } from "../../context/ContextTest";
import NotFound from "../../components/NotFound/NotFound";
import './style.css'


const LayoutClient = () => {
    const {
        preguntasLocal,
        notFound,
        setNotFound,
        testClient,
        setTestClient,
    } = useContext(ContextTest)

    const { codigo } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const prueba = preguntasLocal.find((item) => item.codigo == codigo)
        if (!prueba) {
            setNotFound(true)
        } else {
            setTestClient(prueba)
        }
    }, [])

    const start = () => {
        navigate(`/game/${codigo}/start`)
    }

    return (
        <>
            {notFound &&
                <NotFound />
            }
            {!notFound && (
                    <div className="d-flex justify-content-center align-items-center flex-column m-auto gap-2">
                        <h1>Welcome to Kahoot Chango!</h1>
                        <p><span className="fw-bold">The autor game is: </span> {testClient?.autor} </p>
                        <p><span className="fw-bold">Time to take test: </span> {`${testClient?.time} Minutos`}</p>
                        <p><span className="fw-bold">Total questions in test: </span> {testClient?.preguntas?.length} </p>
                        <Button onClick={start} variant="danger">Start</Button>
                    </div>
            )}
        </>
    );
}

export default LayoutClient;