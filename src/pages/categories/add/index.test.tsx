import { render } from "@testing-library/react";
import Add from ".";



//1.bu sayfa render oluyor mu diye test ediliyor
test("add.tsx render without crashing", () => {
    render(
       <Add/>
    );
})

//2. sayfanın başlığında Add Category elementi (h1) var mı diye test ediliyor
test("add.tsx render h1 element", () => {
    const {getByText} = render(
        <Add/>
    );
    getByText("Add Category");
})

//3. sayfada 2 adet input elementi var mı?
test("add.tsx render input elements", () => {
    const {getByLabelText} = render(
        <Add/>
    );
    getByLabelText("Name");
    getByLabelText("Description");
})

//4. sayfada 1 adet button elementi var mı?
test("add.tsx render button element", () => {
    const {getByText} = render(
        <Add/>
    );
    getByText("Save");
})

//5. sayfadaki input elementlerine değer girildiğinde state değişiyor mu?
test("add.tsx input elements change state", () => {
    const {getByLabelText} = render(
        <Add/>
    );
    const nameInput = getByLabelText("Name") as HTMLInputElement;
    const descriptionInput = getByLabelText("Description") as HTMLInputElement;

    nameInput.value = "test name";
    descriptionInput.value = "test description";

    expect(nameInput.value).toBe("test name");
    expect(descriptionInput.value).toBe("test description");
})

//6. buttondaki onclick fonksiyonu çalışıyor mu?
test("add.tsx button onClick function", () => {
    const {getByText} = render(
        <Add/>
    );
    const button = getByText("Save");
    button.click();
})