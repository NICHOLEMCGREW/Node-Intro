const http = require("http");

class Math2 {
    static add(a, b) {
        return a + b;
    }
}

http
.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(
        JSON.stringify({ problem: "1 + 2", answer: Math2.add(1, 3) })
    );
    response.end();
})
.listen(3000, () => {
    console.log("Server listening on port: " + 3000);
});