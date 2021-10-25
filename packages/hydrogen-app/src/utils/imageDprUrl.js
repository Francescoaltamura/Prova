const imageDprUrl = (asset, options) => {
  const dpi =
    typeof window === 'undefined' || !window.devicePixelRatio
      ? 1
      : Math.round(window.devicePixelRatio);
  const imgH = options?.height ? options?.height * Math.max(1, dpi) : undefined;
  const imgW = options.width * Math.max(1, dpi);

  const urlParams = new URLSearchParams();
  urlParams.append('fit', 'max');
  urlParams.append('w', imgW.toString());
  if (imgH) {
    urlParams.append('h', imgH.toString());
  }

  return `${asset.url}?${urlParams.toString()}`;
};

export default imageDprUrl;
