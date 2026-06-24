/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import type { ComponentType } from 'react';
import * as SiIcons from 'react-icons/si';
import * as LgIcons from '@meronex/icons/lg';
import { MdBuild } from 'react-icons/md';

export const getSkillIcon = (iconName?: string): ComponentType<{ className?: string }> => {
    if (!iconName) return MdBuild;

    const siIcons = SiIcons as Record<string, ComponentType<{ className?: string }>>;
    const lgIcons = LgIcons as Record<string, ComponentType<{ className?: string }>>;

    return siIcons[iconName] || lgIcons[iconName] || MdBuild;
};
