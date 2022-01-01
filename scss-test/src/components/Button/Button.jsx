import React from "react";
import "./Button.scss";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const fullWidthStyle = css`
  ${(props) => {
    return (
      props.fullWidth &&
      css`
        width: 100%;
        justify-content: center;
        & + & {
          margin-left: 0;
          margin-top: 1rem;
        }
      `
    );
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  midium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.75rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const StyledButton = styled.button`
  //
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  align-items: center;
  cursor: pointer;
  padding: 0 1rem;

  & + & {
    margin-left: 1rem;
  }

  ${colorStyles};
  ${sizeStyles};
  ${fullWidthStyle}
`;

const Button = ({ children, color, size, outline, fullWidth, ...rest }) => {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "blue",
};
export default Button;
