import { useContext, useEffect, useState } from "react";
import MostrarPregunta from "../../components/MostrarPregunta/MostrarPregunta";
import './style.css'
import { ContextTest } from "../../context/ContextTest";


const StartGame = () => {
    const {
        showGame,
        setShowGame,
        count,
        setCount
    } = useContext(ContextTest)

    useEffect(() => {
        function myCallBack() {
            setCount(count - 1)
        }
        if (count > 0) {
            let intervalID = setInterval(myCallBack, 1000)
            setTimeout(() => {
                clearInterval(intervalID)
            }, 1000)
        } else {
            setShowGame(false)
        }
    }, [count])

    return (
        <>
            {showGame && (
                <div className="d-flex justify-content-center align-items-center flex-column start">
                    <div className="loader mt-5 star">
                        <span className="loader-text">Empezando....</span>
                    </div>
                    <div className="loaderCircle margin">
                        <div className="intern font-monospace">{count}
                        </div>
                        <div className="external-shadow">
                            <div className="central">
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!showGame && <MostrarPregunta />}
        </>
    );
}

export default StartGame;