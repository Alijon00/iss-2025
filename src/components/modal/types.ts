export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export interface ContactFormData {
  message: string;
  email?: string;
}

export interface QuizAnswers {
  q1?: string;
  q2?: string;
}