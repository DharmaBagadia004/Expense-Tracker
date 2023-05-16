import React from "react";
import { useGlobalContext } from "../../Context/globalContext";
import '../../Styles/History.css'

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return(
        <div className="HistoryStyled">
            <h2>Recent history</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return(
                    <div key={_id}className="history-item">
                        <p style={{
                            color : type ==='expense' ? 'red' : 'green'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color : type ==='expense' ? 'red' : 'green'
                        }}>
                            {
                                type === 'expense' ? `-${amount}` : `+${amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default History