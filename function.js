function intSequence (first, last)
{
    for (let i = first; i <= last; i++)
    {
        console.log(i)
    }
}

//console.log(intSequence(5, 8));
//console.log(intSequence(1, 10));   ja lieto sitos tad sanak pec pedeja skaitla undefined
//console.log(intSequence(7, 16));

intSequence(5, 8);
intSequence(1, 10);   //ja lieto sito tad nesanak beigas undefined, tatad funkciju var izsaukt bez console.log, ja vina jau ir ieksa console.log
intSequence(7, 16);