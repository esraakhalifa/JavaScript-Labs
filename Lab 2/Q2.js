function GetOccurencesOfVowels(str)
{
    var VowelOccurrencesJson = 
    {
        'a':0,
        'i':0,
        'o':0,
        'u':0,
        'e':0,
    };
    for ( var i = 0; i < str.length; i++)
    {
        str[i] = str[i].toLowerCase();
        if (str[i] === 'a') VowelOccurrencesJson.a+=1;
        else if (str[i] === 'o') VowelOccurrencesJson.o+=1;
        else if (str[i] === 'u') VowelOccurrencesJson.u+=1;
        else if (str[i] === 'i') VowelOccurrencesJson.e+=1;
        else  VowelOccurrencesJson.u+=1;

    }
    return VowelOccurrencesJson;
}

console.log(GetOccurencesOfVowels("aaaaaaaashaloulaBouiii"));