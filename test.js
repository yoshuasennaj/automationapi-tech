const request_url = require("supertest")("http://qa-interview.srcli.xyz/");
const expect = require("chai").expect;


describe("GET, POST Automation API Testing", function () { //deskripsikan function untuk test scenario
    it("/ - Success display main page containing welcome message", async function () { //test case GET dengan endpoint /
        const response = await request_url //await untuk menunggu request endpoint hingga sukses
        .get("/") //tipe http request
        
        
        console.log(response.text);
        console.log(response.body);
        console.log(response.statusCode)
        expect(response.type).to.equal('text/plain');
        expect(response.statusCode).to.equal(302);
    });

    it("/GET login", async function () { //test case GET Login dengan kondisi belum login
        const response = await request_url //await untuk menunggu request endpoint hingga sukses
        .get("/login") //tipe http request
                    
        console.log(response.body);     
    });

    it("/POST login", async function () { //test case POST Login dengan kondisi belum login atau tanpa input credentials
        const response = await request_url //await untuk menunggu request endpoint hingga sukses
        .post("/login") //tipe http request
                
        console.log(response.body);
        });

   
    it("/POST login invalid credentials", async function () { //test case
        let random_password = Math.random().toString(36).substring(7); // MEMBUAT RANDOM KATA
        const response = await request_url //await untuk menunggu request endpoint hingga sukses
        .post("/login") //tipe http request
        .send({ username: "root", password: "" });
                    
        console.log(response.body);
        expect(response.status).to.equal(307);   
        });    

    it("/GET data without login", async function () { //test case GET Data dengan kondisi belum login
        const response = await request_url //await untuk menunggu request endpoint hingga sukses
        .get("/data") //tipe http request
                
        console.log(response.body);
        });   
        
    it("/POST data without login", async function () { //test case POST Data dengan kondisi belum login
        const response = await request_url //await untuk menunggu request endpoint hingga sukses
        .post("/data") //tipe http request
                    
        console.log(response.body);
        });      

    it("/POST login", async function () { //test case POST Login dengan credentials
        const response = await request_url //await untuk menunggu request endpoint hingga sukses
        .post("/login") //tipe http request
        .send({ username: "root", password: "root123" });//data yang dikirim
                        
        console.log(response.body);
        expect(response.status).to.equal(307);  
        });

    it("/GET data with login", async function () { //test case GET Data dengan kondisi login
        const response = await request_url //await untuk menunggu request endpoint hingga sukses
        .get("/data") //tipe http request
                
        const hasil_response = response.body;
        console.log(response.body);
         });

    it("/POST data with login", async function () { //test case POST Data dengan kondisi login
        const response = await request_url //await untuk menunggu request endpoint hingga sukses
        .post("/data") //tipe http request
        
        console.log(response.body);
        });
    
    it("/POST logout", async function () { //test case POST Login dengan credentials
        const response = await request_url //await untuk menunggu request endpoint hingga sukses
        .post("/login") //tipe http request
                        
        console.log(response.body);
        expect(response.status).to.equal(307);  
        });

});
    

