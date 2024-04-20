type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function getData(user: User): User {
  return { name: "ayush", email: "h", isActive: false };
}
