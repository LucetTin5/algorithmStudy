function decString(s) {
  return s
    .split("")
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join("");
}

function decString2(s) {
  return s.split("").sort().reverse().join("");
}

console.log(decString2("abceqZea"));
