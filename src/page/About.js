import React from 'react';

import { css, styles } from 'linaria';

const s = css`
    color: purple;
`;

export default ({ }) => <h1 {...styles(s) }>About!</h1>;
