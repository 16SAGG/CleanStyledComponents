import { styled } from 'styled-components';

export const Input = styled.input`
    ${props => (props.$properties) ? props.$properties : ''}
`;