const express = require("express");
const app = express();
const bodyP = require("body-parser");
const compiler = require("compilex");
const options = { stats: true };
compiler.init(options);

app.use(bodyP.json());
app.use("/codemirror-5.65.18", express.static("C:/Users/ABISHEK/OneDrive/Desktop/Projects/Online-Compiler/codemirror-5.65.18"));
app.get("/", function (req, res) {
    res.sendFile("C:/Users/ABISHEK/OneDrive/Desktop/Projects/Online-Compiler/index.html");
});

app.post("/compile", function (req, res) {
    var code = req.body.code;
    var input = req.body.input;
    var lang = req.body.lang;
    try {
        if (lang === "Cpp") {
            var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
            if (!input) {
                compiler.compileCPP(envData, code, function (data) {
                    res.send(data.output ? data : { output: "error" });
                });
            } else {
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    res.send(data.output ? data : { output: "error" });
                });
            }
        } else if (lang === "Java") {
            var envData = { OS: "windows", options: { timeout: 10000 } };
            if (!input) {
                compiler.compileJava(envData, code, function (data) {
                    res.send(data.output ? data : { output: "error" });
                });
            } else {
                compiler.compileJavaWithInput(envData, code, input, function (data) {
                    res.send(data.output ? data : { output: "error" });
                });
            }
        } else if (lang === "Python") {
            var envData = { OS: "windows", options: { timeout: 10000 } };
            if (!input) {
                compiler.compilePython(envData, code, function (data) {
                    res.send(data.output ? data : { output: "error" });
                });
            } else {
                compiler.compilePythonWithInput(envData, code, input, function (data) {
                    res.send(data.output ? data : { output: "error" });
                });
            }
        } else if (lang === "JavaScript") {
            var envData = { OS: "windows", options: { timeout: 10000 } };
            compiler.compileNodeJS(envData, code, function (data) {
                res.send(data.output ? data : { output: "error" });
            });
        } else {
            res.send({ output: "Unsupported language" });
        }
    } catch (error) {
        res.send({ output: "error", details: error.message });
    }
});

app.listen(8000, function () {
    console.log("Server is running on port 8000");
});
