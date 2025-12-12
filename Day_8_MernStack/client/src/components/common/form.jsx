import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export default function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) {
  function renderInputByComponentType(getControls) {
    let element = null;
    const value = formData[getControls.name] || "";
    switch (getControls.componentType) {
      case "input":
        element = (
          <Input
            name={getControls.name}
            placeholder={getControls.placeholder}
            id={getControls.name}
            type={getControls.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControls.name]: event.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControls.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControls.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControls.options && getControls.options.length > 0
                ? getControls.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            name={getControls.name}
            placeholder={getControls.placeholder}
            id={getControls.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControls.name]: event.target.value,
              })
            }
          />
        );
        break;
      default:
        element = (
          <Input
            name={getControls.name}
            placeholder={getControls.placeholder}
            id={getControls.name}
            type={getControls.type}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControls.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div key={controlItem.name} className="grid w-full gap-1.5">
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}
