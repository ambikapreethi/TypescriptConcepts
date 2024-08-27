// The for loop statement creates a loop. 
// It consists of three optional expressions separated by semicolons (;) and enclosed in parentheses:

// example 1:
for(let i=0;i<6;i++)
{
    console.log(`for loop: ${i}`);
}

// (optional block : for loop without initialisation)
var p=0;
for(;p<4;p++)
    {
        console.log(`for loop without initialisation: ${p}`);
    }

// (for loop without condition)
for(var p=0;;p++)     
    {
        console.log(`for loop without condition: ${p}`);
        if(p>4)
        break;
    }

// (for loop without 3 expressions)
var p=0;
for(;;)     
    {
        console.log(`for loop without 3 expressions: ${p}`);
        p++;
        if(p>4)
        break;
    }