/**
 * Created by nm on 7/11/15.
 */
function $id(myId) {
    return document.getElementById(myId);
}

function $changeImage(imgID){
    return document.getElementById(imgID).src = "../images/Steps/no_32.png";
}

function $class(myClass) {
    return document.getElementsByClassName(myClass);
}

var StepsModule = {
    step1: {
        goFurther: function() {/*
         this.checkButton = $('#chkAgree');
         if(this.checkButton.is(':checked')) {
         this.btnTerms.prop('disabled', false);
         this.btnWeeks.prop('disabled', false);
         }
         else {
         this.btnTerms.prop('disabled', true);
         this.btnWeeks.prop('disabled', true);
         }
         */
            if (document.getElementById("chkAgree").checked == true) {
                document.getElementById("btnterms").disabled = false;
                document.getElementById("btnWeeks").disabled = false;
            }
            else {
                document.getElementById("btnterms").disabled = true;
                document.getElementById("btnWeeks").disabled = true;
            }
        }
    },
    route: {
        step1: 'Step1.html',
        step2: 'Step2.html',
        step3: 'Step3.html'
    }
};

/*function setView(step) {
 $('#stepsView').load('../New/'+ step + '.html', function() {
 StepsModule.step1.checkButton = $('#chkAgree');
 StepsModule.step1.btnTerms = $('#btnterms');
 StepsModule.step1.btnWeeks = $('#btnWeeks');
 });
 }*/

// Step 1

function goFurther() {
    if (document.getElementById("chkAgree").checked == true) {
        document.getElementById("btnterms").disabled = false;
        document.getElementById("btnWeeks").disabled = false;
    }
    else {
        document.getElementById("btnterms").disabled = true;
        document.getElementById("btnWeeks").disabled = true;
    }
}


//Step 2

var addClassToShowImageOnly = function(elem){
    var allChildNodes = elem.parentNode.childNodes;

    var result = [].filter.call(allChildNodes, function(items, index){

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function(item){
        item.className= "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected = function(elem){
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "No"){

        document.getElementById('textshow').innerHTML = 'Please Check this help link';
    } else {
        document.getElementById('textshow').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function(items, index){

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function(item){
        item.className= "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected3 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow2').innerHTML = 'Please Check this help link';
    } else {
        document.getElementById('textshow2').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected4 = function(elem){
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes"){
        document.getElementById('textshow3').innerHTML = 'Please Check this help link';
    } else if (elem && elem.innerHTML == "Not Sure") {
        document.getElementById('textshow3').innerHTML = 'Please Check this help link';
    }
    else{
        document.getElementById('textshow3').innerHTML = '';
    }

    var result = [].filter.call(allChildNodes, function(items, index){

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function(item){
        item.className= "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected5 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow4').innerHTML = 'Click here to define Buildings';
    } else {
        document.getElementById('textshow4').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected6 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow5').innerHTML = 'Click here to define Buildings';
    } else {
        document.getElementById('textshow5').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected7 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow6').innerHTML = 'Currently: 5days(s)';
    } else {
        document.getElementById('textshow6').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected8 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow7').innerHTML = 'Click here to define terms';
    } else {
        document.getElementById('textshow7').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected9 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow8').innerHTML = 'Click here to define the maximum consecutive lessons';
    } else {
        document.getElementById('textshow8').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected10 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow9').innerHTML = 'Click here to define the maximum allowed gaps per week';
    } else {
        document.getElementById('textshow9').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected11 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow10').innerHTML = 'Please Check this help link';
    } else {
        document.getElementById('textshow10').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected12 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow11').innerHTML = 'All new classes will be allowed to gaps';
    } else {
        document.getElementById('textshow11').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected13 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow12').innerHTML = 'Please Check this help link';
    } else {
        document.getElementById('textshow12').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected14 = function(elem){
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes"){
        document.getElementById('textshow13').innerHTML = 'Click here to enable 0th period';
    } else if (elem && elem.innerHTML == "Not Sure") {
        document.getElementById('textshow13').innerHTML = 'Click here to enable or disable 0th period';
    }
    else{
        document.getElementById('textshow13').innerHTML = '';
    }

    var result = [].filter.call(allChildNodes, function(items, index){

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function(item){
        item.className= "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected15 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow14').innerHTML = 'Please Check this help link';
    } else {
        document.getElementById('textshow14').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected16 = function(elem){
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes"){
        document.getElementById('textshow15').innerHTML = 'Please Check this help link';
    } else if (elem && elem.innerHTML == "Not Sure") {
        document.getElementById('textshow15').innerHTML = 'Please Check this help link';
    }
    else{
        document.getElementById('textshow15').innerHTML = '';
    }

    var result = [].filter.call(allChildNodes, function(items, index){

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function(item){
        item.className= "dont-show";
    })
    elem.previousElementSibling.className = "";
}

//setView('Step1');


/** Step3 **/



/**Step4**/
function Constraint() {
    if ($id("chkPreparation").checked == true) {
        $id("show").disabled = false;
    }
    else {
        $id("show").disabled = true;
    }
}
    function ConstraintLunch() {
        if ($id("Lunch").checked == true) {
            $id("Lunch1").disabled = false;
            $id("Lunch2").disabled = false;
            $id("chkLunch").disabled = false;
        }
        else {
            $id("Lunch1").disabled = true;
            $id("Lunch2").disabled = true;
            $id("chkLunch").disabled = true;
        }
    }
function LoadChange(){
    if ($id("chkClassTeacher").checked == true){
        $id("BtnChange").disabled = false;
    }
    else {
        $id("BtnChange").disabled = true;
    }
}

function LoadGroupTextBox(){
    if ($id("chkStudent").checked == true){
        $id("groupText1").disabled = false;
        $id("groupText2").disabled = false;
        $id("groupText3").disabled = false;
        $id("groupText4").disabled = false;
        $id("groupText5").disabled = false;
        $id("groupText6").disabled = false;
    }
    else {
        $id("groupText1").disabled = true;
        $id("groupText2").disabled = true;
        $id("groupText3").disabled = true;
        $id("groupText4").disabled = true;
        $id("groupText5").disabled = true;
        $id("groupText6").disabled = true;
    }
}



var Steps = {
    view: function(step) {
        if(step === undefined)
            step = "Step1";
        $( "#stepsView" ).load( "../New/" + step + ".html" );
        this.update();
        console.log("Content loaded");
    },
    update: function() {
        this.data.school = $id('school');
        this.data.academic_year = $id('academic_year')
    },
    data: {
        school: "",
        academic_year: "",
        registration_name: "",
        periods: "",
        no_of_days: undefined

    }
};

Steps.view();


Steps.form = {
  first: {
      school: "",
      academic_year: "",
      registration_name: "",
      periods: "",
      no_of_days: undefined,
      weekend: "",
      update: function(){
          this.first.school = $id('school');
          this.first.academic_year = $id('academic_year');
          this.first.registration_name = $id('registration_name');
          this.first.periods = $id('periods');
          this.first.academic_year = $id('academic_year');
          this.first.weekend = $id('weekend');
      }
  },
  second: {
      checks: [],
      update: function() {
      }
  },
  third: {
      tableData: [],
      update: function() {
          var subjectData = [];
          $('#subjectsEnter tbody tr').each(function(index, data){
              var item = {};
              var a = $(data).children();
              item.name = a[0].innerText;
              item.short = a[1].innerText;
              item.count = a[2].innerText;
              item.timeOff = a[3].innerText;
              Steps.form.third.tableData.push(item);
          });
      }
  },
  fourth: {
      tableData: [],
      update: function() {
          var subjectData = [];
          $('#classesEnter tbody tr').each(function(index, data){
              var item = {};
              var a = $(data).children();
              item.name = a[0].innerText;
              item.short = a[1].innerText;
              item.count = a[2].innerText;
              item.timeOff = a[3].innerText;
              Steps.form.fourth.tableData.push(item);
          });
      }
  },
  five: {
      tableData: [],
      update: function() {
          var subjectData = [];
          $('#classRoomEnter tbody tr').each(function(index, data){
              var item = {};
              var a = $(data).children();
              item.name = a[0].innerText;
              item.short = a[1].innerText;
              item.count = a[2].innerText;
              item.timeOff = a[3].innerText;
              Steps.form.five.tableData.push(item);
          });
      }
  },
  six: {
      tableData: [],
      update: function() {
          var subjectData = [];
          $('#teacherEnter tbody tr').each(function(index, data){
              var item = {};
              var a = $(data).children();
              item.name = a[0].innerText;
              item.short = a[1].innerText;
              item.count = a[2].innerText;
              item.timeOff = a[3].innerText;
              Steps.form.five.tableData.push(item);
          });
      }
  }
};