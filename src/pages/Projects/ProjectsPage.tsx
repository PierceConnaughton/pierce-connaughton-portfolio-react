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
import ProjectList from "./ProjectList/ProjectList.tsx";

/*
 * ProjectsPage component displays a list of projects with a brief description.
 */
const ProjectsPage: React.FC = () => {
    return (
        <PageContainer className="projectsPage">
            <PageMeta {...pageSeo.projects} />
            {/* Page Header */}
            <PageHeader 
                title="Projects"
                description="From production side projects like WrestleGraph to university and learning builds — full-stack apps across Angular, React, Spring, Python, and more."
            />
            
            {/* Project List */}
            <ProjectList />
        </PageContainer>
    );
};

export default ProjectsPage;


