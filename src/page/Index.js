import React from 'react';

import { css, styles } from 'linaria';
import constants from '../constants';

const s = css`
    color: ${constants.color};
    text-decoration: underline;
`;

export default ({ }) => <h1 {...styles(s)}>Index!</h1>;
