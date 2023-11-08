import { styled } from 'styled-components';

export const P = styled.p`
    ${props => (props.$properties) ? props.$properties : ''}
`;