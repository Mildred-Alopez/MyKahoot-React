import { createContext, useState } from "react";
import { useForm } from "react-hook-form";


export const ContextTest = createContext()

const ContextTestProvider = ({ children }) => {
    //////////Estados\\\\\\\\
    const [preguntasLocal, setPreguntasLocal] = useState(JSON.parse(localStorage.getItem('tests')))
    const [test, setTest] = useState()
    const [correcta, setCorrectas] = useState(0)
    const [incorrecta, setIncorrecta] = useState(0)
    const [finish, setFinish] = useState(false)
    const [cont, setCont] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(59)
    const [show, setShow] = useState(false)
    const [activate, setActivate] = useState({ respuesta1: true, respuesta2: true, respuesta3: true, respuesta4: true })
    const [preguntas, setPreguntas] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [testClient, setTestClient] = useState({})
    
    const [showGame, setShowGame] = useState(true)
    const [count, setCount] = useState(3)

    //////Hook-Form\\\\\\\\\\\\
    const { register, control, handleSubmit, formState: { errors }, setValue, getValues, reset } = useForm({
        defaultValues: {
            pregunta: '',
            respuesta1: '',
            respuesta2: '',
            respuesta3: '',
            respuesta4: '',
            respuestaCorrecta: '',
            autor: '',
            time: '',
            nombreTest: '',
        }
    })

    //////Funciones\\\\\\\\\\\
    const copyLink = (code) => {
        navigator.clipboard.writeText(`${window.location}game/${code}`)
    }

    const cambiarPregunta = (value) => {
        if (test.preguntas.length - 1 > cont) {
            setCont(cont + 1)
        } else {
            setFinish(true)
        }

        if (test.preguntas[cont].respuestaCorrecta == value) {
            setCorrectas(correcta + 1)
        } else {
            setIncorrecta(incorrecta + 1)
        }
    }

    const handleShow = () => setShow(true)

    const onChangeText = (event, onChange, name) => {
        if (event.target.value !== '') {
            activate[name] = false
            setActivate({ ...activate })
        } else {
            activate[name] = true
            setActivate({ ...activate })
        }
        onChange(event.target.value)
    }

    const deleteQuestion = (id) => {
        let eliminado = preguntas.filter((item, index) => index !== id)
        setPreguntas(eliminado)
    }

    const actualizarRespuestaCorrecta = (name) => {
        setValue('respuestaCorrecta', getValues(name))
    }

    const handleClose = () => {
        setShow(false)
        setActivate({
            respuesta1: true,
            respuesta2: true,
            respuesta3: true,
            respuesta4: true
        })
        reset({
            pregunta: '',
            respuesta1: '',
            respuesta2: '',
            respuesta3: '',
            respuesta4: '',
            respuestaCorrecta: '',

        })
    }

    const onSubmit = (data) => {
        if (getValues('respuestaCorrecta')) {
            const { autor, time, nombreTest, ...dataFilter } = data
            setPreguntas([...preguntas, dataFilter])
            handleClose()
        }
    }

    return (
        <>
            <ContextTest.Provider value={{
                preguntasLocal,
                copyLink,
                test,
                setTest,
                correcta,
                setCorrectas,
                incorrecta,
                setIncorrecta,
                cambiarPregunta,
                finish,
                setFinish,
                cont,
                setCont,
                hours,
                setHours,
                minutes,
                setMinutes,
                seconds,
                setSeconds,
                show,
                setShow,
                activate,
                setActivate,
                preguntas,
                setPreguntas,
                handleShow,
                onChangeText,
                deleteQuestion,
                register,
                control,
                handleSubmit,
                errors,
                setValue,
                getValues,
                reset,
                handleClose,
                actualizarRespuestaCorrecta,
                onSubmit,
                notFound,
                setNotFound,
                testClient,
                setTestClient,
            
                showGame,
                setShowGame,
                count,
                setCount
            }}>
                {children}
            </ContextTest.Provider>
        </>
    );
}

export default ContextTestProvider;