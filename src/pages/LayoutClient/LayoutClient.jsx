import { useContext, useEffect } from "react";
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
                <div>
                    <div className="e-card playing">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="infotop">
                            <h1 className="mb-5">𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚝𝚘 𝙺𝚊𝚑𝚘𝚘𝚝 𝙲𝚑𝚊𝚗𝚐𝚘!</h1>
                            <p><span className="fw-bold text-warning ">The autor game is: </span> {testClient?.autor} </p>
                            <p><span className="fw-bold text-warning">Time to take test: </span> {`${testClient?.time} Minutos`}</p>
                            <p><span className="fw-bold text-warning">Total questions in test: </span> {testClient?.preguntas?.length} </p>
                            <button className="button" onClick={start}>
                                <span className="button-content">Start </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default LayoutClient;