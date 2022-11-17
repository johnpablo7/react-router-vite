export const userlist = [];

userlist.push({
  name: "juan",
  role: {
    admin: true,
    editor: true,
    client: false,
  },
});

userlist.push({
  name: "freddy",
  role: {
    admin: true,
    editor: true,
    client: false,
  },
});

userlist.push({
  name: "oscar",
  role: {
    admin: true,
    editor: true,
    client: false,
  },
});

userlist.push({
  name: "editor",
  role: {
    admin: false,
    editor: true,
    client: false,
  },
});

userlist.push({
  name: "cliente",
  role: {
    admin: false,
    editor: false,
    client: true,
  },
});
