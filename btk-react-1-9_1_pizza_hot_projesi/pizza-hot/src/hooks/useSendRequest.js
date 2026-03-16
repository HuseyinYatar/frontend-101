import { useState } from "react";
export function useSendRequest(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendData = async (body) => {
    setIsLoading(true);
    setError(null);
    try {
      const request = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!request.ok) throw new Error("The sending data failed");

      const response = await request.json();
      setData(result);
      console.log(result);
      return result;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { sendData, data, isLoading, error };
}
