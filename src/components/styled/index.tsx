import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FlexRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
`;

const FlexColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Link = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #007aff;
    cursor: pointer;
    margin: 1rem;
`;

export {
    FlexRow,
    FlexColumn,
    Container,
    Link,
}
