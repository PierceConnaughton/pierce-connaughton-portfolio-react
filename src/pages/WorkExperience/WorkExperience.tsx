/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { PageHeader, PageContainer, PageMeta } from '../../components';
import { pageSeo } from '../../config/seo';
import WorkExperienceList from "./WorkExperienceList/WorkExperienceList.tsx";

/*
 * WorkExperience component displays a list of work experiences with a brief description.
 * It includes a title and a short introduction.
 */
const WorkExperience: React.FC = () => (
    <PageContainer className="workExperiencePage">
        <PageMeta {...pageSeo.workExperience} />
        {/* Page Header */}
        <PageHeader 
            title="Work Experience"
            description="Production engineering at SITA on aviation baggage systems — event-driven APIs, lost-luggage search, and refund automation. Click a company for full details."
        />
        
        {/* Work Experience List */}
        <WorkExperienceList />
    </PageContainer>
);

export default WorkExperience;
