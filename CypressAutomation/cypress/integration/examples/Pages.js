//test case is called as spec file

/// <reference types="Cypress" />

describe('First test suite', function()
{
  it('Login for Multientity', function()
  {
      //test steps will come here
      cy.visit("https://multientity.sensehq.com/dashboard");
      cy.get('[data-it-email="true"]').type('nidhi@sensehq.com');
      cy.get(2000);
      cy.get('[data-it-password="true"]').type('Nidhu@1213');
      cy.get(2000);
      cy.get('.auth__button___yhEo4').click();
      cy.wait(15000);
      cy.get('[data-qa-id="select-pages-page"]').click();
      cy.wait(20000);

      //PAGES CREATION:

      cy.get('.Button-module__primary___HcLL6').click();  cy.get(3000); //Create a Landing Page button
      cy.get('.configuration__formContainer___bSRuv > :nth-child(1) > .Input-module__box___BkvHA > input').type('Demo for Automation');                                                                               cy.wait(3000);
      cy.get('textarea').type('Automation Testing');  
      cy.get(':nth-child(4) > .Input-module__wrapper___RAZu8 > .Input-module__box___BkvHA > input').click(); //click on subdomain
      cy.get(':nth-child(2) > .Menu-module__optionTextContainer___bcWQs > .Menu-module__optionTextLabel___vSYVx > .Truncate-module__truncateLineClamp___RLPLx').click(); //selecting subdomain                                                                                                                                                                    cy.wait(3000);
      cy.get('.configuration__inlineInputRow___Hl0Nj > [data-testid="Dropdown"] > .Input-module__wrapper___RAZu8 > .Input-module__box___BkvHA > .typography-module__centerAlignFlex___Ry8ww > .fa-regular').click();      cy.wait(2000); //Selecting brand
      cy.get('.Menu-module__menuCard___LBd61 > :nth-child(5)').click();                                                                                                                                                   cy.wait(2000);
      //cy.get('.date-picker__datePicker___pbEDg').click();
      //cy.get('.Checkbox-module__inputCheckbox___UdYdV').click(); //to uncheck the checkbox
      //cy.get('.Checkbox-module__inputCheckbox___UdYdV').click(); //to again check the checkbox
      cy.get('.SearchInput-module__searchInputWrapper___yO4BH > .Input-module__wrapper___RAZu8 > .Input-module__box___BkvHA > input').type('Form');                                                                                             cy.wait(2000);
      cy.get('.Menu-module__menuCard___LBd61 > :nth-child(10)').click();                                           cy.wait(2000);
      cy.get('.Panel-module__panelFooterActions___RB5JS > .Button-module__button___WQEgW').click();
      cy.wait(20000);
     // cy.get('[data-qa="sidebar-module-form"]').drag('[data-qa="stage-row-selector"]') //to drag and drop the form
     //cy.xpath('[data-qa="sidebar-module-form"]').drag('[data-qa="stage-row-selector"]') //to drag and drop the form
     // cy.frameLoaded("#id-of-an-iframe");
     //cy.frameLoaded['beefree-2159478__bee-plugin-frame']
     //cy.iframe().xpath("//body/div[@id='root']/div[@class='App browserName--Chrome browserVersion--112']/div[@class='app__main Bee_appMain__2StFN Bee_appMainFull__zNRpw']/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[11]/div[1]/div[1]").eq(0).click();  //click on link inside iFrame

//XPath for frame2 = //iframe[@id='beefree-4913658__bee-plugin-frame'];
//XPath for inspectedElement = //body/div[@id='root']/div[contains(@class,'App browserName--Chrome browserVersion--112')]/div[contains(@class,'app__main Bee_appMain__2StFN Bee_appMainFull__zNRpw')]/div[contains(@class,'Stage_rightSidebar__3_I-O Stage_stageFullWidth__1AOpq')]/div[contains(@class,'ScrollablePanel_scrollbar__rG0Fb undefined')]/div/div[contains(@class,'Stage_stageInner__3qmQ4 stageInner')]/div[contains(@class,'undefined stageContainerWrapper')]/div[contains(@class,'undefined stageContainer')]/div[contains(@class,'undefined stageContent')]/div[@id='20-null-null']/div[contains(@class,'row-container row-labels row-labels--cs StageRow_rowLabels__ZYA4h')]/div[contains(@class,'row-content row-content--desktop StageRow_rowContent__3QqQw')]/div[1];
     cy.get(':nth-child(1) > .Toggle-module__container___oDWyz > .Toggle-module__toggleWrap___s9rqg > .Toggle-module__toggle___cLaYw').click();                                                                           cy.wait(3000);
     cy.get(':nth-child(1) > .Toggle-module__container___oDWyz > .Toggle-module__toggleWrap___s9rqg > .Toggle-module__toggle___cLaYw').click();                                                                           cy.wait(2000);     
     cy.get(':nth-child(3) > .Toggle-module__container___oDWyz > .Toggle-module__toggleWrap___s9rqg > .Toggle-module__toggle___cLaYw').click();                                                                           cy.wait(3000);
     cy.get(':nth-child(3) > .Toggle-module__container___oDWyz > .Toggle-module__toggleWrap___s9rqg > .Toggle-module__toggle___cLaYw').click();                                                                           cy.wait(2000);
     cy.get('.Button-module__secondary___Lbq1b > .Button-module__buttonRow___uPKN5 > :nth-child(1) > .Truncate-module__truncateLineClamp___RLPLx').click();                                                               cy.wait(3000);
     cy.get('.Button-module__primary___HcLL6 > .Button-module__buttonRow___uPKN5 > div > .Truncate-module__truncateLineClamp___RLPLx').click();                                                                           cy.wait(5000);
     cy.get('.Input-module__box___BkvHA > input').type('ndtest11');                                                                                                                                                        cy.wait(2000);
     cy.get('.typography-module__bodySmall___JMOKr').click();                                                                                                                                                             cy.wait(5000);
     cy.get('.Modal-module__modalFooterActions___YcQyd > .Button-module__button___WQEgW').click();                                                                                                    


     //FORM CREATION:

     cy.wait(10000);
     cy.get(':nth-child(2) > .Tab-module__iconTextWrap___uGnU_ > .typography-module__buttonTextMedium___vGVw3').click();                                                                                                  cy.wait(3000);
     //cy.get('.Button-module__button___WQEgW').click();   
     cy.get('.forms__filterRightRow___dEaFH > .Button-module__button___WQEgW').click();                                                                                                                                                                cy.wait(3000);
     cy.get(':nth-child(3) > .Input-module__box___BkvHA > input').type('Demo of Form Creation');                                                                                                                        cy.wait(3000);
     cy.get('[data-testid="Dropdown"] > .Input-module__wrapper___RAZu8 > .Input-module__box___BkvHA > input').click();                                          
     cy.get('.Menu-module__optionTextLabel___vSYVx > .Truncate-module__truncateLineClamp___RLPLx').click();                                                                                                               cy.wait(2000);
     //First Attribute
     cy.get('.forms__formContainer___oquGp > .Button-module__button___WQEgW').click();
     cy.get('.forms__rowWithSpaceBetween___Borzw > [data-testid="Dropdown"] > .Input-module__wrapper___RAZu8 > .Input-module__box___BkvHA > input').click(); 
          //FirstName                                                             cy.wait(3000);
     cy.get(':nth-child(1) > .Menu-module__optionTextContainer___bcWQs > .Menu-module__optionTextLabel___vSYVx > .Truncate-module__truncateLineClamp___RLPLx').click();                                                   cy.wait(2000);
     cy.get('.forms__rowWithSpaceBetween___Borzw > .Button-module__button___WQEgW').click();
          //mandatory check box
     cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > .Checkbox-module__checkboxSquare___SGuoz > .Checkbox-module__inputCheckbox___UdYdV').click();                                                                cy.wait(2000);
     //Second Attribute Added
     cy.get('.forms__formContainer___oquGp > .Button-module__button___WQEgW').click();
     //cy.get('.Button-module__buttonRow___uPKN5 > :nth-child(2) > .Truncate-module__truncateLineClamp___RLPLx').click();
     cy.get('.forms__rowWithSpaceBetween___Borzw > [data-testid="Dropdown"] > .Input-module__wrapper___RAZu8 > .Input-module__box___BkvHA > input').click();                                                              cy.wait(2000);
     cy.get(':nth-child(5) > .Menu-module__optionTextContainer___bcWQs > .Menu-module__optionTextLabel___vSYVx > .Truncate-module__truncateLineClamp___RLPLx').click();                                                   cy.wait(3000);
          //Phone
     cy.get('.forms__rowWithSpaceBetween___Borzw > .Button-module__button___WQEgW').click();
          //hidden check box
     cy.get(':nth-child(8) > :nth-child(2) > :nth-child(2) > .Checkbox-module__checkboxSquare___SGuoz > .Checkbox-module__inputCheckbox___UdYdV').click();                                                               cy.wait(2000);
          //deleting the second added attribute
     cy.get(':nth-child(8) > .forms__rowWithSpaceBetween___Borzw > .typography-module__centerAlignFlex___Ry8ww > .fa-regular').click();
     // Again Adding the second attribute
     cy.get('.forms__formContainer___oquGp > .Button-module__button___WQEgW > .Button-module__buttonRow___uPKN5').click();                                                                                               cy.wait(2000);
     cy.get('.forms__rowWithSpaceBetween___Borzw > [data-testid="Dropdown"] > .Input-module__wrapper___RAZu8 > .Input-module__box___BkvHA > input').click();                                                             cy.wait(2000);
     cy.get(':nth-child(5) > .Menu-module__optionTextContainer___bcWQs > .Menu-module__optionTextLabel___vSYVx > .Truncate-module__truncateLineClamp___RLPLx').click(); //select Phone from the drop-down
     cy.get('.forms__rowWithSpaceBetween___Borzw > .Button-module__button___WQEgW').click(); 
    //Save and Create
     cy.wait(2000);
     cy.get('.Panel-module__panelFooterActions___RB5JS > .Button-module__primary___HcLL6').click();


    //LEAD CREATION

     cy.get('[data-qa-id="select-people-page"]').click();
     cy.wait(5000);
     cy.get(':nth-child(3) > .Tab-module__iconTextWrap___uGnU_ > .typography-module__buttonTextMedium___vGVw3').click();
     //cy.get(':nth-child(3) > .buttons__button___tRI9m > .buttons__buttonRow___ct0zk > .buttons__textContainerCenter___bpBxV').click();   
     cy.get('.leads__filterContainer___S2Ztd > :nth-child(2) > .Button-module__button___WQEgW').click();                                                                                cy.wait(2000);
     //cy.get('.Button-module__button___WQEgW').click();                                                                                                                                                                   cy.wait(3000);
     cy.get('.leads__panelBodyContainer___VsHF4 > :nth-child(1) > .Input-module__box___BkvHA > input').type('Leads1');                                                                                                   cy.wait(2000);
     cy.get(':nth-child(2) > .Input-module__box___BkvHA > input').type('Testing11');                                                                                                                                      cy.wait(2000);
     cy.get(':nth-child(3) > .Input-module__box___BkvHA > input').type('nidhi@sensehq.com');                                                                                                                             cy.wait(2000);
     cy.get(':nth-child(5) > .Input-module__box___BkvHA > input').type('+15102555247');    
     cy.get('.leads__footerContent___laQSq > .Button-module__primary___HcLL6').click();                                                                                                                              cy.wait(2000);
     //cy.get('.Panel-module__panelFooterActions___RB5JS > .Button-module__primary___HcLL6').click();









     //cy.get('.forms__formContainer___oquGp > .Button-module__button___WQEgW');
     //cy.wait(6000);
     //cy.get('.forms__rowWithSpaceBetween___Borzw > [data-testid="Dropdown"] > .Input-module__wrapper___RAZu8 > .Input-module__box___BkvHA > input').click();
     //cy.get(':nth-child(2) > .Menu-module__optionTextContainer___bcWQs > .Menu-module__optionTextLabel___vSYVx > .Truncate-module__truncateLineClamp___RLPLx').click();
     //cy.get('.forms__rowWithSpaceBetween___Borzw > .Button-module__button___WQEgW').click();
          //hidden check box
     //cy.get(':nth-child(9) > :nth-child(2) > :nth-child(2) > .Checkbox-module__checkboxSquare___SGuoz > .Checkbox-module__inputCheckbox___UdYdV').click();
     //cy.get(':nth-child(3) > .Input-module__wrapper___RAZu8 > .Input-module__box___BkvHA > input').type('sense');
     //Deleting Third Attribute
     //cy.get(':nth-child(9) > .forms__rowWithSpaceBetween___Borzw > .typography-module__centerAlignFlex___Ry8ww > .fa-regular').click();
     //cy.get('.Panel-module__panelFooterActions___RB5JS > .Button-module__primary___HcLL6').click();
    

})

})
