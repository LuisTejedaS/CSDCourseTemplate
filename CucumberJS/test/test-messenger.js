var expect  = require('chai').expect;
const Messenger = require('../lib/messenger');
 


describe('Messenger', function() {
    describe ('Get a friendly message', function() {
        it('return a nice message', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessage();
            //Assert
            expect(message).to.equal("Hello World!");
             done();
        });
    });
 
});