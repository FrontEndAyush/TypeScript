function gettingOBJ({
  name,
  isPaid,
  email,
}: {
  name: string;
  isPaid: boolean;
  email: string;
}): {
  name: string;
  isPaid: boolean;
  email: string;
} {
  return { name, isPaid, email };
}
gettingOBJ({ name: "ayush", isPaid: false, email: "ayushJha@gmail.com" });

export {};
