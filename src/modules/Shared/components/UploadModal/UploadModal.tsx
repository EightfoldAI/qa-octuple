import React, { forwardRef, FC, Ref } from 'react';
import {
  Grid,
  Modal,
  Stack,
  Button,
  UploadSize,
  ButtonWidth,
  ButtonVariant,
  ModalSize,
  Upload,
} from '@eightfold.ai/octuple';
import { UploadModalProps } from './UploadModal.types';

const { Dropzone } = Upload;

const { useBreakpoint } = Grid;

import styles from './uploadmodal.module.css';

export const UploadModal: FC<UploadModalProps> = forwardRef(
  (props: UploadModalProps, ref: Ref<HTMLDivElement>) => {
    const { onClose, uploadProps, visible, ...rest } = props;
    const screens = useBreakpoint();
    const isDesktop = screens.md;
    return (
      <Modal
        {...rest}
        ref={ref}
        aria-label="Upload your resume"
        body={
          <Stack
            align="center"
            direction="vertical"
            flexGap="m"
            justify="center"
            fullWidth
            style={{ height: '100%', paddingBottom: 100 }}
          >
            <h1>
              Upload your resume and see jobs that match your skills and
              experience
            </h1>
            <Dropzone
              {...uploadProps}
              accept='.doc,.docx,.pdf,.txt'
              fullWidth={!isDesktop}
              classNames={styles.uploadModalDropzone}
              size={UploadSize.Medium}
              style={{ minWidth: !isDesktop ? 200 : 520 }}
            />
            <p style={{ textAlign: 'center' }}>
              Don't have a resume? Use our resume builder.
            </p>
            <Button
              buttonWidth={ButtonWidth.fitContent}
              text="Build your resume"
              variant={ButtonVariant.Secondary}
            />
          </Stack>
        }
        closeButtonProps={{
          ariaLabel: 'Close',
        }}
        modalClassNames={styles.uploadModal}
        onClose={onClose}
        size={ModalSize.fullscreen}
        visible={visible}
      />
    );
  }
);
