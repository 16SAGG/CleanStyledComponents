import { styled } from 'styled-components';

export const Span = styled.span`
    ${props => (props.$properties) ? props.$properties : ''}
`;