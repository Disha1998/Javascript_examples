function outer(){
    var a = 50;
        function inner(){
            console.log(a);
        }
        inner();
}
outer();