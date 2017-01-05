// write a test
describe('Todo App', function() {
  // we can select element by model, repeater, binding, id, css, etc
  var todoInput = element(by.model('$ctrl.newTodo.description'));
  var todoList = element(by.repeater('todo in $ctrl.list'));
  var todoItem = element(by.binding('$ctrl.description'));
  var todoFooter = element(by.id('todo-footer'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  describe('initial page load', function() {
    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Todo App');
    });

    it('should display new form and footer and hide list and item', function() {
      expect(todoInput.isPresent()).toBeTruthy();
      expect(todoFooter.isPresent()).toBeTruthy();
      expect(todoList.isPresent()).toBeFalsy();
      expect(todoItem.isPresent()).toBeFalsy();
    });
  });
  

  describe('when nothing todo', function() {
    it('should display todo- form and footer and hide todo- list and item', function() {
      expect(todoInput.isPresent()).toBeTruthy();
      expect(todoFooter.isPresent()).toBeTruthy();
      expect(todoList.isPresent()).toBeFalsy();
      expect(todoItem.isPresent()).toBeFalsy();
    });

    it('should add todo item', function() {
      todoInput.sendKeys('cobaco');
      browser.actions().sendKeys(protractor.Key.ENTER).perform();

      expect(element(by.binding('$ctrl.description'))
        .getText())
        .toEqual('cobaco');

      expect(todoList.isPresent()).toBeTruthy();
      expect(todoItem.isPresent()).toBeTruthy();
    });
  });

  describe('when there is one thing todo', function() {
    beforeEach(function() {
      todoInput.sendKeys('cobaco');
      browser.actions().sendKeys(protractor.Key.ENTER).perform();
    });

    it('should display todo- form, list, item, and footer', function() {
      expect(todoInput.isPresent()).toBeTruthy();
      expect(todoFooter.isPresent()).toBeTruthy();
      expect(todoList.isPresent()).toBeTruthy();
      expect(todoItem.isPresent()).toBeTruthy();
    });

    it('should toggle todo item', function() {
      var completedItem = element(by.css('.completed'));
      var toggleButton = element(by.css('.toggle'));

      expect(completedItem.isPresent()).toBeFalsy();

      toggleButton.click();
      expect(completedItem.isPresent()).toBeTruthy();
    });

    it('should delete todo item', function() {
      const deleteButton = element(by.css('.destroy'));

      expect(todoList.isPresent()).toBeTruthy();
      expect(todoItem.isPresent()).toBeTruthy();
      expect(deleteButton.isPresent()).toBeTruthy();

      // hover on todoItem to make deleteButton visible
      browser.actions().mouseMove(todoItem).perform();
      deleteButton.click();

      expect(todoList.isPresent()).toBeFalsy();
      expect(todoItem.isPresent()).toBeFalsy();
      expect(deleteButton.isPresent()).toBeFalsy();
    });
  });
});
