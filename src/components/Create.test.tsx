import Create from "./Create";
import { render,screen } from "@testing-library/react";
test('checking input',
    () => { 
        render(<Create/>)
        let checkInput=screen.getByRole("textbox")
        expect(checkInput).toBeInTheDocument();
     })