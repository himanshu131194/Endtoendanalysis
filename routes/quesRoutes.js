module.exprts = (app) =>{
    app.get('/upload-questions', function(){
         console.log("upload questions");
         res.send('Upload new questions');
    })
}
