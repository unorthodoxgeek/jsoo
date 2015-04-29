var FormController = function(){
  var self = this;
  this.constructor = function(){
    self.first_name = $("#first_name");
    self.last_name = $("#last_name");
    self.full_name = $("#full_name");
    self.first_name.change(self.updateFullName);
    self.last_name.change(self.updateFullName);
  }

  this.updateFullName = function(){
    var fullName = ""
    fullName += self.first_name.val();
    fullName += " "
    fullName += self.last_name.val();
    self.full_name.val(fullName);
  }

  this.constructor();
}

new FormController();