import toast, { Toaster } from "react-hot-toast";

export const notify = (message: string, type: "success" | "error") => {
  if (type === "error") {
    return toast.error(message, {
      position: "top-center",
    });
  }

  return toast.success(message, {
    position: "top-center",
  });
};

export default function Notification() {
  return (
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: "green",
            color: "white",
          },
        },
        error: {
          style: {
            background: "red",
          },
        },
      }}
    />
  );
}
