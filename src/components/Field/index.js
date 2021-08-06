import Input from "./Input"
import Label from "./Label"

// const Text = ({label, name, type, register}) => {
//   return (
//     <Label>
//       {label}
//       <Input type={type} name={name} {...register(name)} />
//     </Label>
//   )
// }

const Text = ({label, name, type, ...rest}) => {
  return (
    <Label>
      {label}
      <Input type={type} name={name} {...rest} />
    </Label>
  )
}

const Field = {Text}

export default Field