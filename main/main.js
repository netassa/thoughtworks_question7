module.exports = function main(email, suffixes) {
  // Write your code here
  return (email.split("@")[1] == suffixes);
};
