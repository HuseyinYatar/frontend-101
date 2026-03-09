import { useState } from "react";

export function Loading() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-border" role="status"></div>
    </div>
  );
}
