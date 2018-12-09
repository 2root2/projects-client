projmodule.controller("dashController",function($scope,$rootScope,$http,$location,$interval){
    $scope.menu="Dashboard";
    $scope.activeTab = 1;
    $scope.selectAllForms = true;
    $scope.search = "";
    $scope.search = "";
    $scope.selecetedProject = 0;
    $scope.selected = null;
    $scope.apiUrl = "http://localhost:8080/api/v1/"

    $http.get($scope.apiUrl+"projects/").
        then(function(data){
        $scope.data = data.data
        });

    $http.get($scope.apiUrl+"forms/").
        then(function(data){
        $scope.Forms = data.data;
    });

    $http.get($scope.apiUrl+"users/").
        then(function(data){
        $scope.Users = data.data;
    });

    function filter_project(aProject) {
        return aProject.id == $scope.selecetedProject;
    }

    $scope.showProjectDetails = function(id) {      
        console.log(id);
        $scope.selecetedProject = id;
        var filteredProjects = $scope.data.filter(filter_project);
        $scope.selected = filteredProjects[0];
    }
            
//     $scope.data_test =  [
//                 {
//         "id": 1,
//         "project": "Project School", 
//         "formsubmitted": "20",
//         "total": "08",
//         "lastupdated": "05 Jun", 
//         "createdon": "May29,2018",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "count": "4", "profile": [
//                         {"firstName": "Virat", "lastName": "Kohli", "age": "31", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263600/263697.20.jpg"
//                         },
//                         {"firstName": "Suresh", "lastName": "Raina", "age": "30", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/202700/202703.1.jpg"
//                         },
//                         {"firstName": "Ajinkya", "lastName": "Rahane", "age": "29", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263600/263694.1.jpg"
//                         }
//                     ]
//                 },
//                 {
//         "id": 2,
//         "project": "Project College",
//         "formsubmitted": "100",
//         "total": "312",
//         "lastupdated": "05 Jun",
//         "createdon": "May29,\n            2018",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting\nindustry. Lorem Ipsum has been the industry standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "count": "309", "profile": [
//                         {"firstName": "Virat", "lastName": "Kohli", "age": "31", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263600/263697.20.jpg"
//                         },
//                         {"firstName": "Suresh", "lastName": "Raina", "age": "30", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/202700/202703.1.jpg"
//                         },
//                         {"firstName": "Ajinkya", "lastName": "Rahane", "age": "29", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263600/263694.1.jpg"
//                         }
//                     ]
//                 },
//                 {
//         "id": 3,
//         "project": "Project University",
//         "formsubmitted": "17",
//         "total": "05",
//         "lastupdated": "05 Jun",
//         "createdon": "May29,\n            2018",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting\nindustry. Lorem Ipsum has been the industry standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "count": "1", "profile": [
//                         {"firstName": "Suresh", "lastName": "Raina", "age": "30", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/202700/202703.1.jpg"
//                         },
//                         {"firstName": "Ajinkya", "lastName": "Rahane", "age": "29", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263600/263694.1.jpg"
//                         },
//                         {"firstName": "MS", "lastName": "Dhoni", "age": "37", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263700/263705.20.jpg"
//                         }
//                     ]
//                 },
//                 {
//         "id": 4,
//         "project": "Project City",
//         "formsubmitted": "12",
//         "total": "04",
//         "lastupdated": "05 Jun",
//         "createdon": "May29,\n            2018",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting\nindustry. Lorem Ipsum has been the industry standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "count": "4", "profile": [
//                         {"firstName": "Virat", "lastName": "Kohli", "age": "31", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263600/263697.20.jpg"
//                         },
//                         {"firstName": "Suresh", "lastName": "Raina", "age": "30", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/202700/202703.1.jpg"
//                         },
//                         {"firstName": "Ajinkya", "lastName": "Rahane", "age": "29", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263600/263694.1.jpg"
//                         }
//                     ]
//                 },
//                 {
//         "id": 5,
//         "project": "Project Bajaaj",
//         "formsubmitted": "20",
//         "total": "08",
//         "lastupdated": "05 Jun",
//         "createdon": "May29,\n            2018",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting\nindustry. Lorem Ipsum has been the industry standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "count": "6", "profile": [
//                         {"firstName": "Suresh", "lastName": "Raina", "age": "30", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/202700/202703.1.jpg"
//                         },
//                         {"firstName": "Ajinkya", "lastName": "Rahane", "age": "29", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263600/263694.1.jpg"
//                         },
//                         {"firstName": "MS", "lastName": "Dhoni", "age": "37", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263700/263705.20.jpg"
//                         }
//                     ]
//                 },
//                 {
//         "id": 6,
//         "project": "Project School",
//         "formsubmitted": "20",
//         "total": "08",
//         "lastupdated": "05 Jun",
//         "createdon": "May29,\n            2018",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting\nindustry. Lorem Ipsum has been the industry standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "count": "4", "profile": [
//                         {"firstName": "Suresh", "lastName": "Raina", "age": "30", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/202700/202703.1.jpg"
//                         },
//                         {"firstName": "Ajinkya", "lastName": "Rahane", "age": "29", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263600/263694.1.jpg"
//                         },
//                         {"firstName": "MS", "lastName": "Dhoni", "age": "37", "imageURL": "http://p.imgci.com/db/PICTURES/CMS/263700/263705.20.jpg"
//                         }
//                     ]
//                 }
//             ];

//     $scope.Forms_test = [
//         {
// "id": 1,
// "name": "Form XYZ",
// "shape": "Point", "updateddate": "Jun04", "createdon": "May29,\n            2018"
// },
// {
// "id": 2,
// "name": "Form MNO",
// "shape": "Point", "updateddate": "Jun02", "createdon": "May29,\n            2018"
// },
// {
// "id": 3,
// "name": "Form XYW", "shape": "Polygon",
// "updateddate": "Jun05",
// "createdon": "May29,\n            2018"
//         },
//         {
// "id": 4,
// "name": "Form PQR",
// "shape": "Polygon", "updateddate": "Jun12", "createdon": "May29,\n            2018"
//         },
// {
// "id": 5,
// "name": "Form ABC",
// "shape": "Polygon", "updateddate": "Jun11", "createdon": "May29,\n2018"
// },
// {
// "id": 6,
// "name": "Form QWERTY", "shape": "Polygon", "updateddate": "Jun04", "createdon": "May29,\n2018"
// }
// ]
});