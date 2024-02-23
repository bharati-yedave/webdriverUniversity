class Contact_us_PO {
  ContactForm_Submission(fname, lname, emailid, comment, $selector, message) {
    cy.get("[name='first_name']").type(fname);
    cy.get("[name='last_name']").type(lname);
    cy.get("[name='email']").type(emailid);
    cy.get("[name='message']").type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(message, { timeout: 6000 });
    cy.screenshot();
    cy.screenshot("Make Contact us form submission");
  }
}
export default Contact_us_PO;
