/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { PageHeader, PageContainer } from '../../components';
import WorkExperienceList from "./WorkExperienceList/WorkExperienceList.tsx";

/*
 * WorkExperience component displays a list of work experiences with a brief description.
 * It includes a title and a short introduction.
 */
const WorkExperience: React.FC = () => (
    <PageContainer className="workExperiencePage">
        {/* Page Header */}
        <PageHeader 
            title="Work Experience"
            description="Explore my professional journey through various companies and roles. Click on any company to see detailed information about my responsibilities, achievements, and the technologies I worked with."
        />
        
        {/* Work Experience List */}
        <WorkExperienceList />
    </PageContainer>
);

export default WorkExperience;
