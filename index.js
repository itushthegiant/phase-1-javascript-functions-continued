// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function agenda(shouldDo = 'go to the office') {
    return `This Monday, I will ${shouldDo}.`
}


function wrapAdjective(marking = "*") {
    return function(something = "special") {
        return `You are ${marking}${something}${marking}!`
    }   
}
