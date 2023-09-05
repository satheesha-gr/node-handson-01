const http = require("http")

const data = [
    {name: "Satheesh", age: 23, course: "MERN", batch: "EA23"},
    {name: "Rakshith", age: 24, course: "MERN", batch: "EA21"},
    {name: "Bharath", age: 25, course: "MEAN", batch: "EA25"},
    {name: "Kushal", age: 24, course: "MEAN", batch: "EA28"},
    {name: "Nikith", age: 25, course: "MEAN", batch: "EA21"},
    {name: "Madhu", age: 26, course: "MEVN", batch: "EA20"}
];

const serverListener = (req, res) => {
    const url = req.url

    if(url === '/') {
        res.write('<h1>What is Node Js?</h1>')
        res.write('<ul>')
            res.write('<li>Node is a runtime environment for executing JS code.</li>')
            res.write('<li>Essentially, Node is a C++ program that embeds Chromes v8 engine, the fastest JS engine in the world.</li>')
            res.write('<li>We use Node to build fast and scalable networking applications. Its a perfect choice for building Restful services.</li>')
            res.write('<li>Node applications are single-threaded. That means a single thread is used to serve all clients.</li>')
        res.write('</ul>')
        return res.end()
    }

    else if(url === '/data') {
        const sdata = JSON.stringify(data)
        res.write(sdata)
        res.end()
    }
}

const server = http.createServer(serverListener)

const port = 3000

server.listen(port,()=>{
    try {
        console.log("server running successfully");
    }
    catch(err) {
        console.log('Error');
    }
})