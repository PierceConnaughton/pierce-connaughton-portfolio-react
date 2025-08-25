/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Modal as MuiModal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Modal.module.scss';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

/*
 * Modal component provides a consistent modal layout with close button.
 * Used by Projects and Work Experience pages for consistent styling.
 */
const Modal: React.FC<ModalProps> = ({ open, onClose, children, className }) => (
    <MuiModal open={open} onClose={onClose}>
        <Box 
            className={`${styles.modalBox} ${className || ''}`}
            sx={{
                position: 'relative',
                outline: 'none'
            }}
        >
            <IconButton
                aria-label="close"
                onClick={onClose}
                className={styles.closeButton}
                sx={{
                    position: 'absolute',
                    right: '1rem',
                    top: '1rem',
                    zIndex: 1001
                }}
            >
                <CloseIcon />
            </IconButton>
            {children}
        </Box>
    </MuiModal>
);

export default Modal;
