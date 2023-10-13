import { styled } from 'styled-components';

export const Button = styled.button`
    ${props => (props.$properties) ? props.$properties : ''}
`;