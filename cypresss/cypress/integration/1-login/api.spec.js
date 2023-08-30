///<reference types="cypress"/>
describe('validate the basic GET, POST, PUT, DELETE API',function(){
    it('validate the GET API',function(){
cy.request({
    method:"GET",
    url:"https://reqres.in/api/users?page=2",

}).then(function(res){
expect(res.status).to.eql(200)
})
    })
    it('validate the GET API',function(){

    })
    it('validate the GET API',function(){

    })
    it('validate the GET API',function(){

    })
})