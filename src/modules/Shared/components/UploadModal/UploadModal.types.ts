import { UploadProps } from '@eightfold.ai/octuple';
import { EventType } from '@eightfold.ai/octuple/lib/components/Panel'; // TODO: Expoxt from octuple

export interface UploadModalProps {
  onClose: (e: EventType) => void;
  uploadProps: UploadProps;
  visible: boolean;
}
