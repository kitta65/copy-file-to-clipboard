import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [files, setFiles] = useState<chrome.downloads.DownloadItem[]>([]);

  useEffect(() => {
    async function getFiles() {
      const files = await chrome.downloads.search({});
      setFiles(files);
    }
    getFiles();
  }, []);

  return (
    <>
      {files.map((file) => {
        return <p key={file.id}>{file.filename}</p>;
      })}
    </>
  );
}

export default App;
