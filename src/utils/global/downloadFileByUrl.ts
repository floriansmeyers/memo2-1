export function downloadFileByUrl(url: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = 'true';
  document.body.appendChild(link);
  link.click();
  link.parentNode?.removeChild(link);
}
