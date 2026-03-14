import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils.js";

export default function FaceExpression() {
  
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);
  const hasInit = useRef(false);
  
  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {

    init({ landmarkerRef, videoRef, streamRef, hasInit });

    return () => {

      if (landmarkerRef.current) landmarkerRef.current.close();

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    }

  }, [])

  return (
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        style={{ width: "400px", borderRadius: "12px" }}
        playsInline
      />
      <h2>{expression}</h2>
      <button onClick={() => detect(
        { landmarkerRef, videoRef, setExpression }
      )}>Detect Expression</button>
    </div>
  );
}