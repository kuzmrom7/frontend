const server = {
  port: 8080,
  start: function (host, name) {
    console.log(`Server ${name} running on ${host}:${this.port}`);
  },
};
server.start("http://localhost", "myserver");

const proxy = { port: 443 };
// call
server.start.call(proxy, "http://proxy_pass.com", "fast_proxy");
// apply
server.start.apply(proxy, ["http://proxy_pass_2.com", "fast_proxy_2"]);
// bind
const instance = server.start.bind(
  proxy,
  "http://proxy_pass.com",
  "fast_proxy"
);
instance();

// =========
function Person(name, surname) {
  this.name = name;
  this.surname = surname;

  console.log(this);
}

const p1 = new Person("roman", "k");
