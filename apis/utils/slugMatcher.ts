const slugMatcher = (url: string, slugs: string[]) => {
  let newURL = url;

  slugs.forEach(data => {
    newURL = newURL.replace(/(:[\w-]+)/, data);
  });

  return newURL;
};

export default slugMatcher;
