function NumGen(n)
{
for(let j = 1; j < n + 1; j++)
{
    if (j % 4 == 0 && j % 7 ==0){
        document.write("<br>","fourDiv & sevDiv");
    }else if(j % 4 == 0){
        document.write("<br>","fourDiv")
    }
    else if(j % 7 == 0){
       document.write("<br>","sevDiv");
    }
    else{
       document.write("<br>",j)
    }
}
return n;
}

let N = 50;
NumGen(N);