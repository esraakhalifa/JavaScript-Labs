function FindLongestWord(sentence)
{
    var max = 0;
    var LongestWord;
    words = sentence.split(' ');
    for (var i = 0; i < words.length; i++)
    {
        if (words[i].length > max) 
        {
            max = words[i].length;
            LongestWord = words[i];
        }
    }
    return LongestWord;

}

console.log(FindLongestWord('Web deveelopment tutorial'));