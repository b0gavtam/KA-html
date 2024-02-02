function GetNumberFromString()
{
    let szoveg = document.getElementById("txt").value;
    let szamok = "";
    for (let i = 0; i < szoveg.length; i++) {
        if(szoveg[i] == '0' || szoveg[i] == '1' || szoveg[i] == '2' || szoveg[i] == '3' || szoveg[i] == '4' || szoveg[i] == '5' || szoveg[i] == '6' || szoveg[i] == '7' || szoveg[i] == '8' || szoveg[i] == '9') 
        {
            szamok += szoveg[i];
        }
    }
    
    document.getElementById("kesz").innerHTML = szamok;
}