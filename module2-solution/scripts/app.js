(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var buyCtrl = this;
  
  buyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyItems();
  
  buyCtrl.removeToBuyItem = function(index) {
    ShoppingListCheckOffService.removeToBuyItem(index);
  };
};


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var boughtCtrl = this;
  
  boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtItems();
};


function ShoppingListCheckOffService () {
  var checkOffService = this;
  var toBuyList = [
    {
      name: "tomatoes",
      quantity: "10"
    },
    {
      name: "apples",
      quantity: "2"
    },
    {
      name: "bananas",
      quantity: "8"
    },
    {
      name: "ice creams",
      quantity: "6"
    },
    {
      name: "cake",
      quantity: "1"
    }
  ];
  var alreadyBoughtList = [];
  
  checkOffService.getToBuyItems = function () {
    return toBuyList;
  };
  
  checkOffService.getBoughtItems = function () {
    return alreadyBoughtList;
  };
  
  checkOffService.addBoughtItem = function (name, quantity) {
    var temp = {
      name: name,
      quantity: quantity
    };
    alreadyBoughtList.push(temp);
  };
  
  checkOffService.removeToBuyItem = function (index) {
    var name = toBuyList[index].name;
    var quantity = toBuyList[index].quantity;
    toBuyList.splice(index, 1);
    checkOffService.addBoughtItem(name, quantity);
  };
};



})();