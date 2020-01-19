let idTaskIdArray = [];
let commentsToTheTasksArray = document.getElementsByClassName('explanation');

let buttonsArray = document.getElementsByClassName('q-btn button-gray explan_open');
for (let i = 0; i < buttonsArray.length; i++){
	idTaskIdArray.push(buttonsArray[i].id);
	buttonsArray[i].onclick=()=>{commentsToTheTasksArray[i].style.display = 'inline-block';};
};