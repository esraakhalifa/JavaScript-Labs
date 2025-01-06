function GetOccurencesOfCharacter(str)
{

    let CharacterOccurrencesJson = {};

    for ( var i = 0; i < str.length; i++)
    {
        if (str[i] in CharacterOccurrencesJson)
        {
            CharacterOccurrencesJson[str[i]] += 1;
        }
        else 
        {
            CharacterOccurrencesJson[str[i]] = 1;
        }
    }

    return CharacterOccurrencesJson;

}

console.log(GetOccurencesOfCharacter("aaaaaaaashaloulaBouiii"));
console.log(GetOccurencesOfCharacter('aaa'));