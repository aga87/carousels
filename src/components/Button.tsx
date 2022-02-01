import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string;
  isActive?: boolean;
  handleClick: () => void;
};

const StyledButton = styled.button.attrs({
  type: 'button'
})<Pick<ButtonProps, 'isActive'>>`
  padding: 5px;
  background-color: ${props => (props.isActive ? 'green' : 'white')};
`;

const Button = ({
  label,
  isActive = false,
  handleClick
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton isActive={isActive} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
