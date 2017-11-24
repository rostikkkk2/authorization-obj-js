var secret_info = [
  {login: "rostik", password: "1111"},
  {login: "misha", password: "1234"},
  {login: "andrey", password: "2222"},
];

function checkUserLogPassw(log, pass) {
  for (var i = 0; i < secret_info.length; i++) {
    if (secret_info[i].login == log && secret_info[i].password == pass) {
      return true;
    }
  }
  return false;
}

alert(checkUserLogPassw("misha", "1234"));
