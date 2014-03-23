/**
 * Created by Oga Okwoche on 3/22/14.
 */



(function(){

    var student1Profile={
        name: 'Peter Pan',
        address:{address:'1 Neverland Road',city:'Fairy Tale',state:' Florida  '},
        GPA:[3.5,2.0,3.2]

    }
    var student2Profile={
        name:'Optimus Prime',
        address:{address:'200 Omega Lock Road',city:'Cybertron',state:'Florida'},
        GPA:[2.0,4.0,3.7]
    }
    console.log('Name: '+student1Profile.name)
    console.log(student1Profile.address)
    console.log(student1Profile.GPA)

    console.log('Name: '+student2Profile.name)
    console.log(student2Profile)
    console.log(student2Profile.GPA)

    var myButton= document.getElementsByClassName('button')



})();