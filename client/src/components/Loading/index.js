import { useState, useEffect } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const Loader = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };

  useEffect(() => {
    Loader();
  }, []);

  return { loading, Loader };
};

export default useLoading;
