 function NumGen(n)
 {
     for(let j = 1; j < n + 1; j++)
     {
        console.log(j + "")
         if (j % 4 == 0)
             console.log("fourDiv");
            if(j % 7 == 0)
            console.log("sevDiv");
     }
     return n;
 }

     let N = 50;
     NumGen(N);
      
