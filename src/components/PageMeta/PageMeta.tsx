/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../../config/seo';

export interface PageMetaProps {
    title: string;
    description: string;
    path?: string;
    noIndex?: boolean;
}

const PageMeta: React.FC<PageMetaProps> = ({ title, description, path = '/', noIndex = false }) => {
    const canonicalUrl = path ? `${SITE_URL}${path}` : SITE_URL;
    const documentTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    return (
        <Helmet>
            <title>{documentTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:title" content={documentTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={DEFAULT_OG_IMAGE} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={SITE_NAME} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={documentTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

            {noIndex && <meta name="robots" content="noindex, nofollow" />}
        </Helmet>
    );
};

export default PageMeta;
