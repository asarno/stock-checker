import React from 'react';
import styled from 'styled-components';

import Loader from '../Loader';
import Graph from './Graph';
import Card from './Card';

import { useStock } from '../../hooks/stocks';
import { useIsMobile } from '../../hooks/media-queries';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: rgba(0, 41, 83, 0.2) 0px 1px 3px 0px;
    position: relative;
    padding: 1.125rem 1.5rem;
    margin-bottom: 4rem;
    top: 15vh;
`;

interface Props {
    symbol: string;
}

const Stock: React.FC<Props> = ({ symbol }) => {
    const { isValid, data } = useStock(symbol);
    const isMobile = useIsMobile();
    const isLoading = !data;

    if (isLoading) {
        return (

            <Loader isLoading />
        )
    }
    console.log('woo', JSON.stringify(data, null, 2))
    return (
        <Container
            className="animated fadeIn"
        >
            <Card
                info={data?.info}
            />
            { !isMobile &&
                <Graph
                    data={data?.pricing}
                    isValid={isValid}
                />
            }
        </Container>
    )
}

export default Stock;