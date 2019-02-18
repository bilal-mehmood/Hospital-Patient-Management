// step 1 and checking the field is showing by querySelector
const PatientForm = document.getElementById('patient-form');
let patientName = document.querySelector("input[name = 'patientName']");
let dateOfAppointment = document.querySelector("input[name = 'dateOfAppointment']");
let illness = document.querySelector("input[name = 'illness']");
let doctorName = document.querySelector("input[name = 'doctorName']");
let tableTbodySelector = document.querySelector('#patientData').querySelector('tbody');


// step 2 submiting and first checking by console value is showing on console.log
PatientForm.addEventListener('submit', (event) => {
	event.preventDefault();
	template(patientName.value, dateOfAppointment.value, illness.value, doctorName.value,)

	// step 3 create td and tr
	// calling the template function
	// template();

	// let tr = document.createElement('tr');
	// let tdPatientName = document.createElement('td');
	// let tddateOfAppointment = document.createElement('td');
	// let tdIllness = document.createElement('td');
	// let tdDoctorName = document.createElement('td');
	// let btnDel = document.createElement('button');
	// btnDel.setAttribute("class", "btn btn-danger")
	// let tdDel = document.createElement('td');

	// step 4 adding data to field 
	// tdPatientName.textContent = patientName.value;
	// tddateOfAppointment.textContent = dateOfAppointment.value;
	// tdIllness.textContent = illness.value;
	// tdDoctorName.textContent = doctorName.value;
	// btnDel.textContent = 'Delete';

	// step 5 appending child to parent div or table or etc
	// tr.appendChild(tdPatientName);
	// tr.appendChild(tddateOfAppointment);
	// tr.appendChild(tdIllness);
	// tr.appendChild(tdDoctorName);
	// tdDel.appendChild(btnDel);
	// tr.appendChild(tdDel);
	// tableTbodySelector.appendChild(tr);
});

function template(patientName, dateAppointment, illness, docName){

	// step 3 create td and tr
	let tr = document.createElement('tr');
	let tdPatientName = document.createElement('td');
	let tddateOfAppointment = document.createElement('td');
	let tdIllness = document.createElement('td');
	let tdDoctorName = document.createElement('td');
	let btnDel = document.createElement('button');
	btnDel.setAttribute("class", "btn btn-danger")
	let tdDel = document.createElement('td');

	// step 4 adding data to field 
	tdPatientName.textContent = patientName.value;       			//patientName is parameter
	tddateOfAppointment.textContent = dateAppointment.value; 		//dateAppointment is parameter
	tdIllness.textContent = illness.value;							//illness is parameter
	tdDoctorName.textContent = docName.value;						//docName is parameter
	btnDel.textContent = 'Delete';

	// step 5 appending child to parent div or table or etc
	tr.appendChild(tdPatientName);
	tr.appendChild(tddateOfAppointment);
	tr.appendChild(tdIllness);
	tr.appendChild(tdDoctorName);
	tdDel.appendChild(btnDel);
	tr.appendChild(tdDel);
	tableTbodySelector.appendChild(tr);

}




