var faker=require('faker');

const generateTodos=()=>{
    let todos=[];
    for(let i=0;i<50;i++){
        let id=i;
        let firstName=faker.name.firstName();
        let title=faker.lorem.sentence();
        let description=faker.lorem.paragraph();
        let date=new Date();
        todos.push({id, firstName, title, description, date});
    }
    return {todos};
}


module.exports=generateTodos;