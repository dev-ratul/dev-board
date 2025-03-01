

document
    .getElementById('shop-btn')
    .addEventListener('click', function(){
        alert("Board Update Successfully")
        
        let innerValue= getIdByInnerText('taskAssignedNumber');
        let sub= innerValue-1;
        document.getElementById('taskAssignedNumber').innerText= sub;

        // complete task
        let completeTask= getIdByInnerText('completeTask');
        let sum= completeTask+1;
        document.getElementById('completeTask').innerText= sum
        
    })