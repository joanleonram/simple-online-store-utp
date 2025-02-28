import React from "react";
import { Modal } from "antd";

interface ConfirmModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  content: string;
  okText: string;
  cancelText: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  onConfirm,
  onCancel,
  title,
  content,
  okText,
  cancelText,
}) => {
  return (
    <Modal
      title={title}
      open={visible}
      onOk={onConfirm}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      centered
    >
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmModal;
