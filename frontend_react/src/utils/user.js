export const getUser_id = (url) => {
  const userData = localStorage.getItem("user");
  const parsedUser = JSON.parse(userData);
  return parsedUser.id;
};
