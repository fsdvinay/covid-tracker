
//inserting country data;
var requestOptions = {
	method: 'GET',
	redirect: 'follow'
  };
  
  fetch("https://api.covid19india.org/data.json", requestOptions)
	.then(response => response.json())
	.then((result) => {
		//last updated
		document.querySelector('.lastUpdated').innerHTML = result.statewise[0].lastupdatedtime;

		document.getElementById('totalConfirmed').innerHTML = result.statewise[0].confirmed;
		document.getElementById('totalActive').innerHTML = result.statewise[0].active;
		document.getElementById('totalDeceased').innerHTML = result.statewise[0].deaths;
		document.getElementById('totalRecovered').innerHTML = result.statewise[0].recovered;
		// document.getElementById('todayConfirmed').innerHTML = '[+' + india.newCasesToday + ']';
		// document.getElementById('todayActive').innerHTML = '[-' + india.newActiveToday + ']';
		// document.getElementById('todayDeceased').innerHTML = '[+' + india.newDeceasedToday + ']';
		// document.getElementById('todayRecovered').innerHTML = '[+' + india.newRecoveredToday + ']';		
	})
	.catch(error => console.log('error', error));






//Accessing paths to add event
let states = document.getElementsByTagName('path');

//adding event using loop
for(let i = 0; i < states.length; i++){
	states[i].addEventListener('mouseover', printDetails)
	states[i].addEventListener('click', printDetails)
}


//accessing place to print figures
let state = document.querySelector('.state');
let total = document.querySelector('.total');
let active = document.querySelector('.active');
let dead = document.querySelector('.dead');
let recovered = document.querySelector('.recovered');



//by default printing the highest values state

var requestOptions = {
	method: 'GET',
	redirect: 'follow'
  };
  fetch("https://api.covid19india.org/data.json", requestOptions)
	.then(response => response.json())
	.then(result => {
				document.querySelector('.stateLastUpdated').innerHTML = result.statewise[1].lastupdatedtime;
				state.innerHTML = result.statewise[1].state;
				total.innerHTML = result.statewise[1].confirmed;
				active.innerHTML = result.statewise[1].active;
				dead.innerHTML = (result.statewise[1].deaths == null) ? 0 : result.statewise[1].deaths;
				recovered.innerHTML = (result.statewise[1].recovered == null) ? 0 : result.statewise[1].recovered;		
	})
	.catch(error => console.log('error', error));




//function to print values
function printDetails(e){
		
		document.getElementById('liveFiguresContainerState').style.display = 'block';

		//increasing stroke of selected state
		for(let i = 0; i < states.length; i++){
			if (states[i].style.strokeWidth = '3px') {
				states[i].style.strokeWidth = '1px';
			}
		}

		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  
		  fetch("https://api.covid19india.org/data.json", requestOptions)
			.then(response => response.json())
			.then(result => {
				document.querySelector('#' + e.target.id).style.strokeWidth = '3px';

				
		//accesing statename & object to insert values into html elements
		let stateObject;

		//checking matching of e.target.id with states to go further
		for(let i = 0; i < result.statewise.length; i++){
			if (document.querySelector('#' + e.target.id).getAttribute('title') == result.statewise[i].state) {
				stateObject = result.statewise[i];
				console.log(stateObject.state);
				console.log(result.statewise[i].state);
			}
		}

		//assigning values to print
		document.querySelector('.stateLastUpdated').innerHTML = stateObject.lastupdatedtime;
		state.innerHTML = e.target.getAttribute('title');
		total.innerHTML = (stateObject == undefined || stateObject.confirmed == null) ? 0 : stateObject.confirmed;
		active.innerHTML = (stateObject == undefined || stateObject.active == null) ? 0 : stateObject.active;
		dead.innerHTML = (stateObject == undefined || stateObject.deaths == null) ? 0 : stateObject.deaths ;
		recovered.innerHTML = (stateObject == undefined || stateObject.recovered == null) ? 0 : stateObject.recovered;
	
			})
			.catch(error => console.log('error', error));


		
		}
	//state data by default
	
	
	
	// filling color in paths based on the cases
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  
	  fetch("https://api.covid19india.org/data.json", requestOptions)
		.then(response => response.json())
		.then(result => {
			let highestNumber = result.statewise[1].confirmed;
			console.log(highestNumber);
			
			let stateNameToFill;
	for(let i = 0; i < result.statewise.length; i++){
		switch (true) {
			case document.querySelector('#' + result.statewise[i].state.replace(/ /g, '').toLowerCase()) == null:
				// console.log(result.statewise[i].state.replace(/ /g, '').toLowerCase());
				break;
			case result.statewise[i].confirmed < highestNumber/5 || result.statewise[i].confirmed == null:
				stateNameToFill = result.statewise[i].state.replace(/ /g, '').toLowerCase();
				document.getElementById(stateNameToFill).style.fill = 'rgb(255, 245, 240)';
				break;
			case result.statewise[i].confirmed < highestNumber/5 * 2:
				stateNameToFill = result.statewise[i].state.replace(/ /g, '').toLowerCase();
				document.getElementById(stateNameToFill).style.fill = 'rgb(253, 213, 195)';
				break;
			case result.statewise[i].confirmed < highestNumber/5 * 3:
				stateNameToFill = result.statewise[i].state.replace(/ /g, '').toLowerCase();
				document.getElementById(stateNameToFill).style.fill = 'rgb(252, 164, 135)';
				break;
			case result.statewise[i].confirmed < highestNumber/5 * 4:
				stateNameToFill = result.statewise[i].state.replace(/ /g, '').toLowerCase();
				document.getElementById(stateNameToFill).style.fill = 'rgb(250, 112, 82)';
				break;
			case result.statewise[i].confirmed < highestNumber:
				stateNameToFill = result.statewise[i].state.replace(/ /g, '').toLowerCase();
				document.getElementById(stateNameToFill).style.fill = 'rgb(232, 57, 44)';
				break;
			case result.statewise[i].confirmed >= highestNumber:
				stateNameToFill = result.statewise[i].state.replace(/ /g, '').toLowerCase();
				document.getElementById(stateNameToFill).style.fill = 'rgb(188, 22, 26)';
				break;
		}
	}


		})
		.catch(error => console.log('error', error));


//TABLE

var requestOptions = {
	method: 'GET',
	redirect: 'follow'
  };
  
  fetch("https://api.covid19india.org/data.json", requestOptions)
	.then(response => response.json())
	.then(result => {
		let output = '';
		for(let i = 1; i < result.statewise.length; i++){
			output += `<tr>
					  <td>${result.statewise[i].state}</td>
					  <td class="tableNumber">${result.statewise[i].confirmed}</td>
					  <td class="tableNumber">${result.statewise[i].active}</td>
					  <td class="tableNumber">${result.statewise[i].recovered}</td>
					  <td class="tableNumber">${result.statewise[i].deaths}</td>
					  </tr>`
		}
		document.querySelector('table').innerHTML += output;
	})
	.catch(error => console.log('error', error));

// District

setTimeout(() => {
	let stateDistricts = document.getElementsByTagName('tr');
	for(let i = 1; i < stateDistricts.length; i++){
		stateDistricts[i].addEventListener('click', printStateDistricts)
	}
	function printStateDistricts(e){
		let ParentElement = e.target.parentNode.parentNode;
		let stateName = e.target.parentNode.children[0].innerHTML;
		console.log(stateName);

		// onclick closing the district data if already open
		let openedDistricts = document.querySelectorAll(`.${stateName.replace(/ /g, '')}`);
		if(openedDistricts.length > 0){
			for(let i = 0; i < openedDistricts.length; i++){
				ParentElement.removeChild(openedDistricts[i]);
			}
			return false
		}
		
		let stateElement = e.target.parentNode.nextSibling;
			stateElement.setAttribute('class','before')

		//distict heading
		let districtHead = document.createElement('tr');
			districtHead.setAttribute('class',`head ${stateName.replace(/ /g, '')}`);
		districtHead.innerHTML = `<td class="headText">DISTRICT</td>
								  <td class="headText" style="color: crimson;">CON</td>`
		
		ParentElement.insertBefore(districtHead, stateElement);

		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  
		  fetch("https://api.covid19india.org/state_district_wise.json", requestOptions)
			.then(response => response.json())
			.then(result => {
				for(x in result){
					if(stateName == x){
						let districtWiseData = result[x].districtData
						for(y in districtWiseData){
							let trElement = document.createElement('tr')
								trElement.setAttribute('class',`district ${stateName.replace(/ /g, '')}`);
								
							let output = `<td>${y}</td>
										  <td>${result[x].districtData[y].confirmed}</td>`;

							trElement.innerHTML = output;
							
							ParentElement.insertBefore(trElement,stateElement);
							
						}
					}
					
				}
				
				

				
			})
			.catch(error => console.log('error', error));
	}
	
},1000)



// making short form table heading

let winWid = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(winWid <= 920){
	document.querySelector('#con').innerHTML = 'CON';
	document.querySelector('#act').innerHTML = 'ACT';
	document.querySelector('#rec').innerHTML = 'REC';
	document.querySelector('#ded').innerHTML = 'DED';
}
