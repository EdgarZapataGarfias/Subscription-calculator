// Your JS code here
//subscription dropdown menu selection
var subTypeElement = document.querySelector("#subscription");
//duration dropdown menu selection
var subDurationElement = document.querySelector("#months");
//result paragraph shown under duration dropdown
var result = document.querySelector(".result");
//default values
var subType = "basic";
var subDuration = 1;

//listening for dropdown menu change
//callback function(eventparameter)
subTypeElement.addEventListener("change", function (e) {
  //assigns subscription value from dropdown to subType
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You chose a ${subDuration} month ${subType} plan for a total of $${total}`;
};
