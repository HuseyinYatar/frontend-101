import React from "react";
import { toast } from "react-toastify";
export default function ProductNotFoundPage() {
  return (
    <div>
      ProductNotFoundPage
      <button onClick={() => toast.success("Test Toast")}>Click Me</button>
    </div>
  );
}
