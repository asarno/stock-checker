import React, { useState } from 'react';
import { useIsMobile } from '../../hooks/media-queries';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { DayPrice } from '../../api/stocks';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface Props {
    data?: DayPrice[];
    isValid: boolean;
}


// This function breaks up pricing data into 1 week, 1 month, & 3 months
// Disclaimer - would normally use moment or some other calendar library for exact dates, but for the purpose of this demo, I assumed months were 30 days.
function transformData(data: any, time: number) {
    let newData = data;
    const endIndex = time === 0 ? 7 : time === 1 ? 30 : 90;
    newData = data.slice(0, endIndex);
    return newData;
}

const Graph: React.FC<Props> = ({ data, isValid }) => {
    const [timeLength, setTimeLength] = useState(0);

    const lineData = isValid ? transformData(data, timeLength) : [];

    const isMobile = useIsMobile();

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setTimeLength(newValue);
    };

    return (
        <>
            <Tabs
                value={timeLength}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                style={{
                    marginTop: '1rem',
                    marginBottom: '1rem',
                }}
            >
                <Tab label="1W" />
                <Tab label="1M" />
                <Tab label="3M" />
            </Tabs>
            <LineChart
                width={isMobile ? 300 : 600}
                height={300}
                data={lineData}
                margin={{
                    top: 10, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="open" stroke="#82ca9d" />
            </LineChart>
        </>
    )
}

export default Graph;