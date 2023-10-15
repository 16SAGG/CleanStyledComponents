import { styled } from 'styled-components';

export const Ul = styled.ul`
    ${props => (props.$properties) ? props.$properties : ''}
`;