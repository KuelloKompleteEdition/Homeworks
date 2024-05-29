import React from 'react';
import { useFetch } from '../hooks/useFetch';

const FetchComponent = ({ count }) => {
    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${count}`;
    const { data, isLoading, hasError } = useFetch(url);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (hasError) {
        return <div>Error: {hasError}</div>
    }

    return (
        <blockquote>
            {data && data.map((quote, index) => (
                <p key={index}>{quote.quote} - <em>{quote.author}</em></p>
            ))}
        </blockquote>
    )
}

export default FetchComponent;
