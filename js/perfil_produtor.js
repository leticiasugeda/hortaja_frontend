function carrega(nome){
    var inp='input[name='+nome+']';
    var nm='img[name='+nome+']';

    var foto=document.querySelector(inp).files[0];
    var foto2=document.querySelector(nm);
    var leitor=new FileReader();

    leitor.onloadend=function(){
        foto2.src=leitor.result;

    }
    if(foto){
        leitor.readAsDataURL(foto);

    }else{
        foto2.src=" ";

    }

}
