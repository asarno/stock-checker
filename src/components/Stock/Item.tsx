import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem;
    padding: 1rem;
    
`;

const Label = styled.span`
    color: #9498a0;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
`;

const Text = styled.span`

`;

interface Props {
    label: string;
    text?: string
}
const Item: React.FC<Props> = ({ label, text }) => {
    return (
        <Container>
            <Label>{label}:</Label>
            <Text>{text}</Text>
        </Container>
    )
}

export default Item;