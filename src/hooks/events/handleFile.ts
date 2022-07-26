export const handleFile = (e: any, setting: any) => {
  e.preventDefault();
  const reader = new FileReader();
  const file = e.target.files[0];
  reader.onloadend = () => {
    const source = reader.result as string;
    setting(source);
  };
  reader.readAsDataURL(file);
  return file;
};
