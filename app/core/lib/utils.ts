export const objectToFormData = (obj: object | any) => {
  var formData = new FormData();
  for (var key in obj) {
    console.log(key, obj[key]);
    const isFile = obj[key][0] && obj[key][0] instanceof File;
    const value = isFile ? obj[key][0] : JSON.stringify(obj[key]);
    formData.append(key, value);
  }
  console.log(formData);
};
