import { Box, Check, Square } from 'react-feather'
import styles from '../../styles/Home.module.css'

export default function QuoteOfTheDay(props) {
    return (
        <div>
            <h3 style={{ color: props.color, fontWeight: 100 }}>{props.qotd?.contents?.quotes[0]?.quote}</h3>
            <h4 style={{ color: props.color, fontWeight: 400 }}>{props.qotd?.contents?.quotes[0]?.author}</h4>
        </div>
    )
}