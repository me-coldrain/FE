export const handleFile = async (e: any, setting: any) => {
  await e.preventDefault();
  const reader = await new FileReader();
  const file = await e.target.files[0];
  reader.onloadend = async () => {
    const source = (await reader.result) as string;
    setting(source);
  };
  reader.readAsDataURL(file);
  return file;
};
