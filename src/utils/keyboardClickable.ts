/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import type { KeyboardEvent } from 'react';

export const createKeyboardClickHandler = (onClick: () => void) => ({
    role: 'button' as const,
    tabIndex: 0,
    onClick,
    onKeyDown: (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
        }
    },
});
