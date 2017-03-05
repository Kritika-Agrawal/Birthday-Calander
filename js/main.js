	/* Author - Kritika Agrawal */
	
	//preloading textarea with sample data
	window.onload =  function(){
		var sampleData = [
				    {
				      "name": "Tyrion Lannister",
				      "birthday": "12/02/1978"
				    }, {
				      "name": "Cersei Lannister",
				      "birthday": "11/30/1975"
				    }, {
				      "name": "Daenerys Targaryen",
				      "birthday": "11/24/1991"
				    }, {
				      "name": "Arya Stark",
				      "birthday": "11/25/1996"
				    }, {
				      "name": "Jon Snow",
				      "birthday": "12/03/1989"
				    }, {
				      "name": "Sansa Stark",
				      "birthday": "12/08/1992"
				    }, {
				      "name": "Jorah Mormont",
				      "birthday": "12/13/1968"
				    }, {
				      "name": "Jaime Lannister",
				      "birthday": "12/06/1975"
				    }, {
				      "name": "Sandor Clegane",
				      "birthday": "11/07/1969"
				    }, {
				      "name": "Tywin Lannister",
				      "birthday": "10/12/1951"
				    }, {
				      "name": "Theon Greyjoy",
				      "birthday": "12/31/1989"
				    }, {
				      "name": "Samwell Tarly",
				      "birthday": "12/07/1990"
				    }, {
				      "name": "Joffrey Baratheon",
				      "birthday": "06/12/1992"
				    }, {
				      "name": "Catelyn Stark",
				      "birthday": "12/03/1962"
				    }, {
				      "name": "Bran Stark",
				      "birthday": "12/02/1995"
				    }, {
				      "name": "Petyr Baelish",
				      "birthday": "11/20/1974"
				    }, {
				      "name": "Robb Stark",
				      "birthday": "11/28/1986"
				    }, {
				      "name": "Brienne of Tarth",
				      "birthday": "11/27/1985"
				    }, {
				      "name": "Margaery Tyrell",
				      "birthday": "12/02/1989"
				    }, {
				      "name": "Stannis Baratheon",
				      "birthday": "09/14/1971"
				    }, {
				      "name": "Davos Seaworth",
				      "birthday": "02/13/1973"
				    }, {
				      "name": "Tormund Giantsbane",
				      "birthday": "12/14/1974"
				    }, {
				      "name": "Jeor Mormont",
				      "birthday": "11/01/1955"
				    }, {
				      "name": "Eddard Stark",
				      "birthday": "12/02/1963"
				    }, {
				      "name": "Khal Drogo",
				      "birthday": "12/05/1980"
				    }, {
				      "name": "Ramsay Bolton",
				      "birthday": "12/05/1976"
				    }, {
				      "name": "Robert Baratheon",
				      "birthday": "12/02/1965"
				    }, {
				      "name": "Daario Naharis",
				      "birthday": "12/02/1985"
				    }, {
				      "name": "Viserys Targaryen",
				      "birthday": "12/06/1984"
				    },
				    {
				      "name": "Geor Mormont",
				      "birthday": "11/01/1955"
				    }, {
				      "name": "Xddard Stark",
				      "birthday": "12/02/1963"
				    }, {
				      "name": "Khal Arogo",
				      "birthday": "12/09/1980"
				    }, {
				      "name": "Ramsay Volton",
				      "birthday": "12/23/1976"
				    }, {
				      "name": "Robert   Qaratheon",
				      "birthday": "10/13/1965"
				    }, {
				      "name": "Aaario Aaharis",
				      "birthday": "12/05/1985"
				    }, {
				      "name": "Viserys Vargaryen",
				      "birthday": "12/09/1984"
				    },
				    {
				      "name": "Xddard Xtark",
				      "birthday": "12/06/1963"
				    },
				    {
				      "name": "Sddard Mtark",
				      "birthday": "12/04/1963"
				    },
				    {
				      "name": "Lddard Ltark",
				      "birthday": "12/03/1963"
				    },
				    {
				      "name": "Xddard Xtark",
				      "birthday": "12/06/1963"
				    },
				    {
				      "name": "Sddard Mtark",
				      "birthday": "12/04/1963"
				    },
				    {
				      "name": "Lddard Ltark",
				      "birthday": "12/03/1963"
				    },
				    {
				      "name": "Xddard Xtark",
				      "birthday": "12/06/1963"
				    },
				    {
				      "name": "Sddard Mtark",
				      "birthday": "12/04/1963"
				    },
				    {
				      "name": "Lddard Ltark",
				      "birthday": "12/03/1963"
				    },
				    {
				      "name": "Xddard Xtark",
				      "birthday": "12/06/1963"
				    },
				    {
				      "name": "Sddard Mtark",
				      "birthday": "12/04/1963"
				    },
				    {
				      "name": "Lddard Ltark",
				      "birthday": "12/03/1963"
				    },
				    {
				      "name": "Xddard Xtark",
				      "birthday": "12/06/1963"
				    },
				    {
				      "name": "Sddard Mtark",
				      "birthday": "12/04/1963"
				    },
				    {
				      "name": "Lddard Ltark",
				      "birthday": "12/03/1963"
				    },
				    {
				      "name": "Xddard Xtark",
				      "birthday": "12/06/1963"
				    },
				    {
				      "name": "Sddard Mtark",
				      "birthday": "12/04/1963"
				    },
				    {
				      "name": "Lddard Ltark",
				      "birthday": "12/03/1963"
				    }
				   
				];
		document.getElementById("user-input").value = JSON.stringify(sampleData);
	}
	
	// registering click of update button
	document.getElementById("update").addEventListener('click', function(event){
		var currentBirthdayDetails = document.getElementsByClassName('day-details');
		var birthdayData = document.getElementById('user-input').value;
		var year = document.getElementById('year').value;
		
		//validate the input 
		if(!isValidJson(birthdayData)){
			alert("Please enter valid json.");
			return false;
		}
		
		if(!isValidYear(year)){
			alert("Please enter valid year.");
			return false;
		}
			
		birthdayData = JSON.parse(birthdayData);
				
		if(!Array.isArray(birthdayData)){
			alert("Please enter a json array.");
			return false;
		
		}
		
		if(!isValidSchema(birthdayData)){
			
			return false;
		}
		
		// clear day details
		for(var i = 0 ; i < currentBirthdayDetails.length ; i++)
		{		
			currentBirthdayDetails[i].innerHTML = "";
		};
		
		//result having day-initials details for the input data
		var result = findDayOfWeek(birthdayData, year);
		
		//size of the day calender box
		var boxSize = 100;
		for(var day in  result){
					
			if(!isNaN(day)){
				var length = getLength(result[day]);
				// condition to check no birthday on a day
				if(length <1){
					var dayEmptyImage = document.createElement("IMG");
					document.getElementById("day-"+day).classList.add("day-empty");
					dayEmptyImage.setAttribute("src", "image/day-empty.png");
					dayEmptyImage.setAttribute("width", boxSize);
					dayEmptyImage.setAttribute("height", boxSize);
					document.getElementById("day-"+day).appendChild(dayEmptyImage);
				}
				var totalNoOfInitials = Math.pow(Math.ceil(Math.sqrt(length)),2); 
				var boxHeight = boxSize/Math.sqrt(totalNoOfInitials) +"px"; // height of a single tile in a day calender
				var boxWidth = boxSize/Math.sqrt(totalNoOfInitials) +"px"; // weight of a single tile in a day calender
				var count = 0;
				
				// fill a day calender with birtday data 
				for(var initials in result[day]){
					for(var i in result[day][initials]){
						var content = document.getElementById("day-"+day)
						var node = document.createTextNode(result[day][initials][i]);	
						var temp = document.createElement("div");
						if(count > 8){
							count = 0;
						}
						temp.setAttribute("class","initials node-"+ count);
						temp.style.width = boxWidth;
						temp.style.height = boxHeight;
						temp.style.lineHeight = boxHeight;
						temp.appendChild(node);
						content.appendChild(temp);
						count++;
					}
					
				}
			}
		}
	});
	
	// function to count no. of birthday on a day
	var getLength = function(result){
		var length = 0;
		for(var initials in result){
			for(var i in result[initials]){
				length++;		
			}
		}
		return length;
	};
	
	
	var findDayOfWeek = function(){
		// function to get intital from a given name
		var getInitial = function(name){
			var nameArray = name.split(/\s+/);
			//intial will have first letter of the starting two parts of a name given if exist
			if(nameArray.length==1)
				return (nameArray[0][0]).toUpperCase(); // return only one letter if name have only 1 part
			else if(nameArray.length>1){
				return (nameArray[0][0]+nameArray[1][0]).toUpperCase();
			}
		};
		
		var getDateFromFullDate = function(date){
			var dateArray = date.split("/");
			return dateArray;
		};
		
		// function to find no. of days between two dates
		var noOfDays = function(first, second){
			 return Math.round((second-first)/(1000*60*60*24));
		}
		return function(birthdayData, year){
			year = parseInt(year);
			var result = { 0 : {},
					1 : {},
					2 : {},
					3 : {},
					4 : {},
					5 : {},
					6 :{}
				     };
			var firstDate;
			var secondDate;
			var id = 0;
			var date = new Date();
			birthdayData.forEach(function(item){
				var initial = getInitial(item.name);
				var getDate = getDateFromFullDate(item.birthday);
				date.setFullYear(year, parseInt(getDate[0])-1, parseInt(getDate[1]));
                var getBirhdayOffset = date.getDay();
				firstDate = new Date(parseInt(getDate[2]), parseInt(getDate[0])-1, parseInt(getDate[1]));
				secondDate = new Date(year, parseInt(getDate[0])-1, parseInt(getDate[1]));
				id = noOfDays(firstDate, secondDate);
				// -ive id of result shows that the person has not even born yet so not showing him.
				if(id>=0){
					if(result[getBirhdayOffset]["" + id]){
						result[getBirhdayOffset]["" + id][initial] = initial;//if two person having same initials have birthday on same day(including year) only one will be shown
					}
					else{
						result[getBirhdayOffset]["" + id] = {};
						result[getBirhdayOffset]["" + id][initial] = initial;
					}
				}
			});
			return result;
		}
	}();
	
	// funcction to check valid json or not
	var isValidJson = function(birthdayData){
		var jsonArray = [];
		try{
			jsonArray = JSON.parse(birthdayData);
			return true;
		}
		catch(e){
		
			return false;
		}
		
	};
	
	// function to check a string is a valid year or not min-0 max-275759 (max value that Date object of javascript takes) 
	var isValidYear = function(year){
		if(year.trim()==""){
			return false;
		}
		else if(year >=0 && year <= 275759){
			return true;
		}
		else{
			return false;
		}
	};
	
	// parameters to be passed in the input array
	var jsonSchema = ["name", "birthday"];
	var isValidSchema = function(birthdayData){
		var inputKeys = [];
		var birthday;
		var birthdayObject = new Date();
		var nameRegx = /^([a-zA-Z]+[ ]*[a-zA-Z]*)+$/;
		
		for(var i = 0 ; i < birthdayData.length ; i++){
			inputKeys = Object.keys(birthdayData[i]);
			if(inputKeys.length!=jsonSchema.length){
				alert("Please enter valid properties");
				return false;
			}
			for(var j = 0; j < inputKeys.length ; j++){
				if(jsonSchema[j] !=inputKeys[j]){
					alert("Please enter valid properties");
					return false;
				}
				if(inputKeys[j] == "name"){
					if((birthdayData[i][inputKeys[j]]).trim() == ""){// empty name string not allowed
						alert("please provide a valid name");
						return false;
					}
					if(!nameRegx.test(birthdayData[i][inputKeys[j]])){ // to check a correct name
						alert("please provide a valid name");
						return false;
					}
				
				}
				
				if(inputKeys[j] == "birthday"){ // to check a valid date
					birthday = birthdayData[i][inputKeys[j]].split("/");
					if(birthday.length!=3){
						alert("Please enter valid date for : "+birthdayData[i]["name"]);
						return false;
					}
					birthdayObject.setFullYear(birthday[2], birthday[0]-1,birthday[1]);
					
					if( birthdayObject == 'Invalid Date'){
						alert("Please enter valid date for : "+birthdayData[i]["name"]);
						return false;
					}
					
					if(!(birthday[2] == birthdayObject.getFullYear() && birthday[1] == birthdayObject.getDate() && birthday[0] == birthdayObject.getMonth()+1)){
						alert("Please enter valid date for : "+birthdayData[i]["name"]);
						return false;
					}
				}
				
			}
			
		} 
		return true;
	}
	