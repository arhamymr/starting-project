export function extractFragmentIdentifier(url) {
  const parsedUrl = new URL(url);
  return parsedUrl.hash;
}
