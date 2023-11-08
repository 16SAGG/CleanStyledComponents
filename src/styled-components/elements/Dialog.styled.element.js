import { styled } from 'styled-components';

export const Dialog = styled.dialog`
    ${props => (props.$properties) ? props.$properties : ''}
`;