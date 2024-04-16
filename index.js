const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (req.url === '/style.css') {
        const cssPath = path.join(__dirname, 'style.css');
        fs.readFile(cssPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading CSS file');
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            return res.end();
        });
    } else if (req.url === '/script.js') {
        const jsPath = path.join(__dirname, 'script.js');
        fs.readFile(jsPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading JS file');
            }
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.write(data);
            return res.end();
        });
    } else if (req.url.startsWith('/assets/')) {
        const assetPath = path.join(__dirname, req.url);
        fs.readFile(assetPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('Asset not found');
            }
            const extension = path.extname(req.url).slice(1);
            const contentType = {
                'jpg': 'image/jpeg',
                'jpeg': 'image/jpeg',
                'png': 'image/png',
                'gif': 'image/gif'
            }[extension];
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
            return res.end();
        });
    } else if (req.url === '/startAlpha') {
        exec('systemctl --user start minecraft-alpha', (error, stdout, stderr) => {
            if (error) {
                res.writeHead(500);
                return res.end(`Error executing command: ${error.message}`);
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Command executed successfully:\n${stdout}`);
            res.end();
        });
    } else if (req.url === '/restartAlpha') {
        exec('systemctl --user restart minecraft-alpha', (error, stdout, stderr) => {
            if (error) {
                res.writeHead(500);
                return res.end(`Error executing command: ${error.message}`);
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Command executed successfully:\n${stdout}`);
            res.end();
        });
    } else if (req.url === '/stopAlpha') {
        exec('systemctl --user stop minecraft-alpha', (error, stdout, stderr) => {
            if (error) {
                res.writeHead(500);
                return res.end(`Error executing command: ${error.message}`);
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Command executed successfully:\n${stdout}`);
            res.end();
        });
    } else if (req.url === '/startBeta') {
        exec('systemctl --user start minecraft-beta', (error, stdout, stderr) => {
            if (error) {
                res.writeHead(500);
                return res.end(`Error executing command: ${error.message}`);
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Command executed successfully:\n${stdout}`);
            res.end();
        });
    } else if (req.url === '/restartBeta') {
        exec('systemctl --user restart minecraft-beta', (error, stdout, stderr) => {
            if (error) {
                res.writeHead(500);
                return res.end(`Error executing command: ${error.message}`);
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Command executed successfully:\n${stdout}`);
            res.end();
        });
    } else if (req.url === '/stopBeta') {
        exec('systemctl --user stop minecraft-beta', (error, stdout, stderr) => {
            if (error) {
                res.writeHead(500);
                return res.end(`Error executing command: ${error.message}`);
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Command executed successfully:\n${stdout}`);
            res.end();
        });
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});
