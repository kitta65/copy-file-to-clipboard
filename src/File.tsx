function File(file: chrome.downloads.DownloadItem) {
  return (
    <p
      key={file.id}
      onClick={() => {
        fetch(`file:///${file.filename}`)
          .then((response) => response.text())
          .then((text) => console.log(text));
      }}
    >
      {file.filename}
    </p>
  );
}

export default File;
