import { styled } from 'styled-components';

export const Li = styled.li`
    ${props => (props.$properties) ? props.$properties : ''}
`;