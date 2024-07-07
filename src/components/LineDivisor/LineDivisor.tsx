import React from 'react';

interface LineDivisorProps {
    color: string;
}

const LineDivisor: React.FC<LineDivisorProps> = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height:2,
            border: 'none',
            marginTop: "60px"
        }}
    />
);

export default LineDivisor;