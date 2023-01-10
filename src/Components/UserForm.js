import FormInput from "./FormInput";

const UserForm = props => {
    return <form>
        <FormInput type="text" name="Username" />
        <FormInput type="number" name="Age" />
        <button type="submit"></button>
    </form>
}

export default UserForm;