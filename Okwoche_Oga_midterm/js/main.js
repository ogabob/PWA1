/*
	* Mid Terms for PWA-1
*/




//Global variables

(function (){
   // document.getElementById('student1Profile')

    var student1Profile={
        name:'Oga Okwoche',
        address:{address:'1939 American Way',city:'Hoboken',state:'Maryland'},
        GPA:[3.1,4.0,2.2] }
    console.log("name: "+student1Profile.name)
    console.log("address: "+ student1Profile.address.address+" "+ student1Profile.address.city+" "+student1Profile.address.state)
    console.log("GPA: "+student1Profile.GPA)

    var student2Profile={
        name:'Paul Silas',
        address:{address:'1220 Hollis Ferry Road',city:'liverpool',state:'New Jersey'},
        GPA:[2.5 , 3.0 , 2.4]}
    var time=new Date();
    var average1 = (student1Profile.GPA[0]+student1Profile.GPA[1]+student1Profile.GPA[2])/student1Profile.GPA.length





    document.getElementById('name').innerHTML="Name: "+student1Profile.name//display to the html
    document.getElementById('address').innerHTML="Address: "+ student1Profile.address.address+" "+ student1Profile.address.city+" "+student1Profile.address.state//display to the html
    document.getElementById('gpa').innerHTML="GPA: "+student1Profile.GPA//display to the html
    document.getElementById('date').innerHTML= time//display to the html
    document.getElementById('gpaavg').innerHTML= "GPA Average: "+average1//display to the html
    var clickNext=document.getElementById('info_btn')


    var clickNext=document.getElementById('info_btn')


    document.getElementById('info_btn').onclick=function clickNext(info_btn){

        console.log("name: "+student2Profile.name)
        console.log("address: "+ student2Profile.address.address+" "+ student2Profile.address.city+" "+student2Profile.address.state)
        console.log("GPA: "+student2Profile.GPA)
        //document.getElementsByTagName('a').text= "done"


        document.getElementById('name').innerHTML="Name: "+student2Profile.name//display to the html
        document.getElementById('address').innerHTML="Address: "+ student2Profile.address.address+" "+ student2Profile.address.city+" "+student2Profile.address.state//display to the html
        document.getElementById('gpa').innerHTML="GPA: "+student2Profile.GPA//display to the html
        document.getElementById('date').innerHTML= time//display to the html
        document.getElementById('gpaavg').innerHTML= "GPA Average: "+all2Average//display to the html
        document.getElementById('info_btn').disabled=true
        document.getElementsByTagName('a').innerHTML="Done"

    }




    function average(){

        var average2= (student2Profile.GPA[0]+student2Profile.GPA[1]+student2Profile.GPA[2])/student2Profile.GPA.length//average for 2nd student profile
        //return average1
        return average2
    }

    var all2Average=average()

    console.log(all2Average)

   // document.getElementsByTagName('a').innerHTML="Done"

    //window.removeEventListener('next',clickNext ,false)

    //document.getElementById('info_btn').disabled=true
    //document.getElementById('next').onclick=function(){
    //document.getElementById('next').value= "done"
    //}




    //var showDone= document.getElementById.('done')
    //document.removeEventListener('done',done,false)

    //console.log('Far')









}());