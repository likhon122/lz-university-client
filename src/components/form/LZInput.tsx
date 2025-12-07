import { Input } from "antd";
import { Controller } from "react-hook-form";

type TLZInputProps = {
  type: string;
  name: string;
  label?: string;
};

const LZInput = ({ type, name, label }: TLZInputProps) => {
  return (
    <div style={{
        marginBottom:"20px"
    }}>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        render={({ field }) => <Input type={type} id={name} {...field} />}
      />
    </div>
  );
};

export default LZInput;
