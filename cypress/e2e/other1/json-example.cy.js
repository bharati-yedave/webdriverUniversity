/// <reference types='cypress' />
describe("JSON Object", () => {
  it("JSON Object Examples", () => {
    //using object
    const exampleObject = {
      key: "Tim",
      key2: "Jones",
    };
    //using arrayof value
    const exampleArrayOfValue = ["Sophie", "Rose", "Howard"];
    //using combining object+Array
    const users = {
      firstname: "Joe",
      lastname: "Blogs",
      Age: 30,
      students: [
        {
          firstname: "Jim",
          lastname: "Blogs2",
        },
        {
          firstname: "Sarah",
          lastname: "Parker",
        },
      ],
    };
    //using arrayof object
    const exampleArrayOfObject = [
      { key1: "Bharati", key11: "Bharati_Yedave" },
      { key2: "Rahujade" },
      { key3: "29" },
    ];
    //output from object
    cy.log(exampleObject.key);
    cy.log(exampleObject["key2"]);
    //output from arrayvalue
    cy.log(exampleArrayOfValue[0]);
    cy.log(exampleArrayOfValue[1]);
    //output from combination from object and arrayvalue
    cy.log(users.firstname);
    cy.log(users.lastname);
    cy.log(users.Age);
    cy.log(users.students);
    cy.log(users.students[0]);
    cy.log(users.students[1]);
    cy.log(users.students[0].firstname);
    cy.log(users.students[1].lastname);
    cy.log(exampleArrayOfObject);
    cy.log(exampleArrayOfObject[0]);
    cy.log(exampleArrayOfObject[1]);
    cy.log(exampleArrayOfObject[2]);
    cy.log(exampleArrayOfObject[0].key11);
    cy.log(exampleArrayOfObject[1].key2);
    cy.log(exampleArrayOfObject[2].key3);
  });
});
