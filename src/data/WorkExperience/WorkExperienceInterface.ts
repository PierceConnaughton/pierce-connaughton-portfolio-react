/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

/*
 * WorkExperience interface defines the structure of a work experience object.
 * It includes properties such as company name, job title, start and end dates, and a description of the role.
 */
export interface WorkExperience {
    company: string;
    title: string;
    startDate: string;
    endDate?: string;
    description: string[];
}

/*
 * CompanyExperience interface extends the WorkExperience interface to include location and coordinates.
 * It is used to represent a company with multiple roles.
 */

export interface CompanyExperience {
    company: string;
    location?: string;
    latitude?: number;
    longitude?: number;
    roles: Omit<WorkExperience, 'company' | 'location'>[];
}
