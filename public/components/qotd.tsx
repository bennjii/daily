import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Check, Square } from 'react-feather'
import styles from '../../styles/Home.module.css'

export default function QuoteOfTheDay(props) {
    const [qotd, setQuoteOfTheDay ] = useState(null);

    useEffect(() => {
        axios
            .get('http://quotes.rest/qod.json')
            .then(e => {
                if(e.data?.contents.quotes) setQuoteOfTheDay(e.data?.contents.quotes)
            })
    }, []);

    return (
        <div>
            <h3 style={{ color: props.color, fontWeight: 100 }}>{qotd?.[0]?.quote}</h3>
            <h4 style={{ color: props.color, fontWeight: 400 }}>{qotd?.[0]?.author}</h4>
        </div>
    )
}