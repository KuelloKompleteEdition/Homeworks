import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
    const { counter, handleAdd } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    return (
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />
            {isLoading ? (
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
            ) : (
                <blockquote className='blockquote text-end'>
                    <p className='mb-1'> {data && data[0]?.quote} </p>
                    <footer className='blockquote-footer'> {data && data[0]?.author} </footer>
                </blockquote>
            )}
            {hasError && (
                <div className='alert alert-danger text-center'>
                    Error: {hasError.message}
                </div>
            )}
            <button className='btn btn-primary' onClick={handleAdd}>Next Quote</button>
        </>
    );
};

export default MultipleCustomHooks;
