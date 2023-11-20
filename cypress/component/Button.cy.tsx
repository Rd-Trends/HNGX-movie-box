import { ButtonSize } from "@/Type/Button";
import Button from "@/components/Button";

describe("Button", () => {
    it("renders correctly", () => { 
        cy.mount(<Button size={ButtonSize.Small}>Click me</Button>);
    });
});
