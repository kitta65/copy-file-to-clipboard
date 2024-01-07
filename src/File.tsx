function File(file: chrome.downloads.DownloadItem) {
  return <p key={file.id}>{file.filename}</p>;
}

export default File;
