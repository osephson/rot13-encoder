const rot13Encoder = (string) => {
  const org = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const enc = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return string.replace(/[a-zA-Z]/g, (c) => enc[org.indexOf(c)]);
};

module.exports = {
  rot13Encoder
};
