import React from 'react';
import { keyframes } from "@emotion/react";
import { styled, Typography, TypographyProps } from "@mui/material";

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const AnimatedTextWrapper = styled("div")(({ theme }) => ({
  display: "inline-block",
  borderRight: `2px solid ${theme.palette.primary.contrastText}`,
  whiteSpace: "nowrap",
  overflow: "hidden",
  animation: `${typing} 4s steps(40, end), ${blink} 0.75s step-end infinite`
}));

interface AnimatedTypographyProps extends TypographyProps {
  children: string;
}

const AnimatedTypography: React.FC<AnimatedTypographyProps> = ({ children, ...props }) => {
  return (
    <Typography {...props}>
      <AnimatedTextWrapper>{children}</AnimatedTextWrapper>
    </Typography>
  );
};

export default AnimatedTypography;
