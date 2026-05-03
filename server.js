const http=require("http");
const fs=require("fs");
const path=require("path");

const root=__dirname;
const host="127.0.0.1";
const port=process.env.PORT||3000;
const mime={
  ".html":"text/html; charset=UTF-8",
  ".js":"application/javascript; charset=UTF-8",
  ".json":"application/json; charset=UTF-8",
  ".css":"text/css; charset=UTF-8",
  ".svg":"image/svg+xml",
  ".png":"image/png",
  ".jpg":"image/jpeg",
  ".jpeg":"image/jpeg",
  ".gif":"image/gif",
  ".ico":"image/x-icon"
};

const send=(res,status,body,type="text/plain; charset=UTF-8")=>{
  res.writeHead(status,{"Content-Type":type,"Cache-Control":"no-cache"});
  res.end(body);
};

const safePath=pathname=>{
  const clean=decodeURIComponent(pathname.split("?")[0]);
  const rel=clean==="/"?"/index.html":clean;
  const full=path.normalize(path.join(root,rel));
  return full.startsWith(root)?full:null;
};

http.createServer((req,res)=>{
  if(req.url==="/api/profile"){
    const file=path.join(root,"data","profile.json");
    fs.readFile(file,"utf8",(err,data)=>err?send(res,500,JSON.stringify({error:"Failed to load profile data"}),"application/json; charset=UTF-8"):send(res,200,data,"application/json; charset=UTF-8"));
    return;
  }
  const file=safePath(req.url||"/");
  if(!file)return send(res,403,"Forbidden");
  fs.stat(file,(err,stat)=>{
    if(err||!stat.isFile())return send(res,404,"Not found");
    const ext=path.extname(file).toLowerCase();
    fs.readFile(file,(readErr,data)=>readErr?send(res,500,"Server error"):send(res,200,data,mime[ext]||"application/octet-stream"));
  });
}).listen(port,host,()=>console.log(`Mario portfolio live at http://${host}:${port}`));
