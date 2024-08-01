import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="flex items-center rounded-md bg-destructive/15 p-3 text-destructive  gap-x-2 text-sm font-semibold">
      <ExclamationTriangleIcon className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
};
