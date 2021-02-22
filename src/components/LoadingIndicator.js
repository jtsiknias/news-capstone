import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress && (
            <div
                style={{
                    width: '100%',
                    height: '100',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Loader type='Oval' color='#2BAD60' height='100' width='100' />
            </div>
        )
    );
};

export default LoadingIndicator;
