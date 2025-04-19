'use client';

import * as React from 'react';
import { useToast } from '@/hooks/use-toast';

type ToastProps = {
  id: string;
  title?: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
};

export type Toast = ToastProps;

type ToasterToast = ToastProps & {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const useToast = () => {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  const toast = ({ title, description, variant, ...props }: ToastProps) => {
    const id = props.id || String(Date.now());
    const newToast = {
      id,
      title,
      description,
      variant: variant || 'default',
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) {
          setToasts((toasts) => toasts.filter((t) => t.id !== id));
        }
      },
    };

    setToasts((toasts) => [...toasts, newToast]);

    return {
      id,
      dismiss: () => {
        setToasts((toasts) => toasts.filter((t) => t.id !== id));
      },
      update: (props: ToastProps) => {
        setToasts((toasts) =>
          toasts.map((t) => (t.id === id ? { ...t, ...props } : t))
        );
      },
    };
  };

  return {
    toast,
    toasts,
    dismiss: (id: string) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
  };
};

export type ToastActionElement = React.ReactElement;
