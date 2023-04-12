function genToken()
{
    const LIMIT = 30
    // characters
    const lowers =  ['a','b','c','d','e','f','g','h', 'i', 'j','k','l','m','n','o','p','q', 'r','s','t','u','v','w','x','y','z'];
    const uppers = ['A','B','C','D','E','F','G','H', 'I', 'J','K','L','M','N','O','P','Q', 'R','S','T','U','V','W','X','Y','Z'];
    const numbers = [0,1,2,3,4,5,6,7,8,9];
     //gera com todas as opções
   const newToken = [];
     
     for(let i= 0; i < LIMIT ;i++)
     {
       const opt = Math.floor(((Math.random()*3)+1));
       
        switch(opt)
        {
          case 1://gera letras com minúsculo
            const n = Math.floor((Math.random()*25)+1);
            
            const index = lowers[n];
            newToken.push(index);
            
            
            
            break
          
          case 2:// gera com letras maiúsculas
          const o = Math.floor((Math.random() * 25) + 1);
          
          const index2 = uppers[o];
          newToken.push(index2);
            
            
            break;
          
          case 3://gera com numeros
            
            const m = Math.floor((Math.random() * 9));
            
            const index3 = numbers[m];
            newToken.push(index3);
            break;
            
       
        }
        
        
     }

     const TOKEN = newToken.join('');

     return TOKEN;
}

module.exports = genToken;