// Uzdevums:
// a) Izveidojiet failu function-sequence.js.
//b) Izveidojiet funkciju intSequence ar diviem parametriem first un last. 
// Funkcijas uzdevums ir izvadīt visus veselos skaitļus no first līdz last (ieskaitot abus galapunktus). 
// Katru skaitli izvadiet atsevišķā rindā, izmantojot while ciklu.



//function intSequence (first, last) 
//{
      //for (let i = first; i <= last; i++)                ----uzdeevums izmantojot for ciklu
    //{
               //console.log(i)
    //}
//};


function intSequence (first, last)        
{
       let i = first
       while (i <= last) 
    {
            console.log(i)                  // -------------------- uzdevums izmantojot while ciklu
            i++
    }
}



console.log(intSequence(5,15));