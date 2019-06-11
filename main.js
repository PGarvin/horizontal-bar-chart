'use strict';
(function() {


    //Data here comes from a spreadsheet. Must have both the Name column and a Value column.
    //Data is converted to JSON using Mr. Data Converter: https://shancarter.github.io/mr-data-converter/

    var data = [{
            "Name": "Central Boston",
            "Value": 3006000
        },
        {
            "Name": "Charlestown",
            "Value": 1150000
        },
        {
            "Name": "Jamaica Plain",
            "Value": 750000
        },
        {
            "Name": "Allston",
            "Value": 693806
        },
        {
            "Name": "South Boston",
            "Value": 680000
        },
        {
            "Name": "Brighton",
            "Value": 654500
        },
        {
            "Name": "West Roxbury",
            "Value": 529000
        },
        {
            "Name": "Roslindale",
            "Value": 500500
        },
        {
            "Name": "Roxbury",
            "Value": 472330
        },
        {
            "Name": "Dorchester",
            "Value": 419500
        },
        {
            "Name": "East Boston",
            "Value": 415000
        },
        {
            "Name": "Hyde Park",
            "Value": 370000
        },
        {
            "Name": "Mattapan",
            "Value": 338000
        }
    ];


    // Use a suffix or prefix if you want to include units or any other character after the value, in this example, we use m for millions. But can be left just as var suffix=""
    var prefix = "";
    var suffix = "";
    var largest;
    var main = document.querySelector('#main');

    //The following lines determine what the largest number is the array.
    var arrayValues = [];

    for (var i in data) {
        arrayValues.push(data[i].Value);
    }

    largest = Math.max.apply(Math, arrayValues);

    for (var i = 0; i < data.length; i += 1) {

		//Create row div
		var rows = document.createElement('div');
		rows.setAttribute('class','row');
		rows.setAttribute('id','r'+i);

		//Create Name div
		var Names = document.createElement('div');
		Names.setAttribute('class','Name');
		var NamesText = document.createTextNode(data[i].Name);
		Names.appendChild(NamesText);
		rows.appendChild(Names);

		//Create Value div
		var Value = document.createElement('div');
		Value.setAttribute('class','Value');
		Value.style.width = (data[i].Value*58)/largest+'%';
		rows.appendChild(Value);
		
		//Create span and adding it to Value div
		var span = document.createElement('span');
		Value.appendChild(span);

	
		//Create ValueNumber
		var ValueNumber = document.createElement('div');
		ValueNumber.setAttribute('class','ValueNumber');
		
		//Create the ValueText
		var ValueNumberText = document.createTextNode(nWC(data[i].Value)+''+suffix);
		ValueNumber.appendChild(ValueNumberText);
		rows.appendChild(ValueNumber);
		
		//Append all of this to the div
		main.appendChild(rows);	

    }

    // If you want to highlight a particular chart, change the ID. The first one will be highlighted by default



    function nWC(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }


})();