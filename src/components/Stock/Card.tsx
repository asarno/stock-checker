import React from 'react';
import { FlexColumn, FlexRow } from '../styled';
import Item from './Item';

interface Props {
    info: any;
}

const Card: React.FC<Props> = ({
    info,
}) => {
    return (
        <FlexColumn>
            <FlexRow>
                <Item label="Name" text={info.name} />
                <Item label="Symbol" text={info.symbol} />
                <Item label="Industry" text={info.industry} />
            </FlexRow>
            <FlexRow>
                <Item label="Market Cap" text={info.marketCap} />
                <Item label="P/E Ratio" text={info.peRatio} />
                <Item label="Profit Margin" text={info.profitMargin} />
            </FlexRow>
            <FlexRow>
                <Item label="Number of Shares" text={info.sharesOutstanding} />
                <Item label="Target Price" text={info.targetPrice} />
            </FlexRow>
        </FlexColumn>
    )
}

export default Card;

