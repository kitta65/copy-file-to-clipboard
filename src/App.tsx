import { useEffect, useState } from "react";
import File from "./File.tsx";
import "./App.css";

function App() {
  const [files, setFiles] = useState<chrome.downloads.DownloadItem[]>([]);

  useEffect(
    () => {
      async function getFiles() {
        const files = await chrome.downloads.search({
          limit: 10,
          orderBy: ["-startTime"],
        });
        setFiles(files);
      }
      getFiles();
    },
    // only run after initial render
    // https://react.dev/reference/react/useEffect#specifying-reactive-dependencies
    []
  );

  return <>{files.map((file) => File(file))}</>;
}

export default App;
