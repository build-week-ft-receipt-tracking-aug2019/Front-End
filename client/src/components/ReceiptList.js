import React, {useEffect, useState} from "react":
import axios from 'axios';
import ReceiptCard from './ReceiptCard.js';

export default function ReceiptList(){
    const [receipt, setReceipt] = useState([]);


    useEffect(()=>{
        axios
        .get("//axios")
        .then(res =>{
            console.log('receipt', res.data.results);
            setReceipt(res.data.results);
        })

        .catch(error =>{
            console.log(error);
        })
    }, []);

    return (
        <section className="receipt-view">
        {receipt.map(recp =>{
            return<ReceiptCard key={recp.id} recp={recp}/>
        })}
        </section>

    )
}