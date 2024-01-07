chrome.downloads.onChanged.addListener((delta) => {
  // check status
  if (
    !delta.state ||
    delta.state.previous !== "in_progress" ||
    delta.state.current !== "complete"
  ) {
    return;
  }

  chrome.downloads
    .search({ id: delta.id })
    .then((items) => {
      const item = items[0];
      if (!item.filename.endsWith(".csv")) {
        throw `${item.filename} is not a csv`;
      }
      if (
        item.totalBytes < 0 ||
        10 * 1024 ** 2 < item.totalBytes // 10 MB
      ) {
        throw `${item.filename} is too large or unknown`;
      }
      return fetch(`file:///${items[0].filename}`);
    })
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((error) => console.log(error));
});
