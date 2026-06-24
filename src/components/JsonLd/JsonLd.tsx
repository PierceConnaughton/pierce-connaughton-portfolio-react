/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
    data: Record<string, unknown>;
}

const JsonLd: React.FC<JsonLdProps> = ({ data }) => (
    <Helmet>
        <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
);

export default JsonLd;
