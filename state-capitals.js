function myFunction()
{

    var arrState = ["Arizona", "California", "Texas", "New York", "Florida"];
    var arrArizona = ["Phoenix"];
    var arrCalifornia = ["Sacramento"];
    var arrTexas = ["Austin"];
    var arrNewYork = ["Albany"];
    var arrFlorida = ["Tallahassee"];

    var selectedState = (document.getElementById("state").value);
    var displayCapitals = (document.getElementById("Capital"));

    document.getElementById('Capitals').innerHTML="";

    if(selectedState == "AZ"){

        for (i=0; i<arrArizona.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrArizona[i];
        console.log(arrArizona[i]);
        selectoptions.value=arrArizona[i];
        Capitals.appendChild(selectoptions);
        }
    }
    else if(selectedState == "CA"){

        for (i=0; i<arrCalifornia.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = arrCalifornia[i];
            console.log(arrCalifornia[i]);
            selectoptions.value=arrCalifornia[i];
            Capitals.appendChild(selectoptions);
        }
    }
    else if(selectedState == "TE"){

        for (i=0; i<arrTexas.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = arrTexas[i];
            console.log(arrTexas[i]);
            selectoptions.value=arrTexas[i];
            Capitals.appendChild(selectoptions);
        }
    }
    else if(selectedState = "NY"){

        for (i=0; i<arrNewYork.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = arrNewYork[i];
            console.log(arrNewYork[i]);
            selectoptions.value=arrNewYork[i];
            Capitals.appendChild(selectoptions);
        }
    }
    else if(selectedState = "FL"){

        for (i=0; i<arrFlorida.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = arrFlorida[i];
            console.log(arrFlorida[i]);
            selectoptions.value=arrFlorida[i];
            Capitals.appendChild(selectoptions);
        }
    }
}