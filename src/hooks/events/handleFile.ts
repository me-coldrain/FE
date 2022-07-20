export const handleFile = (e: any, setting: any): any => {
  e.preventDefault();
  const reader = new FileReader();
  const formData = new FormData();
  const file = e.target.files[0];
  reader.onloadend = () => {
    const source = reader.result as string;
    setting(source);
  };
  formData.append("photoFile", file);
  reader.readAsDataURL(file);
};
