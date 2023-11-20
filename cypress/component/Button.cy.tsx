import Button from "@/components/Button";

describe("Button", () => {
    it("renders correctly", () => { 
        cy.mount(<Button>Click me</Button>);
    });
});
