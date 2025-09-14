import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {

  return (
<div>

<div className="bg-slate-200 rounded-xl min-w-[800px]">
    <form className="p-6">
        <label for="fname">First name:</label><br/>
        <Input placeholder="Enter your first name" type="text" id="fname" name="fname" className="w-full bg-slate-100"/><br/>
        <label for="lname">Last name:</label><br/>
        <Input placeholder="Enter your last name" type="text" id="lname" name="lname" className="w-full bg-slate-100"/><br/>

        <label for="lname">Email:</label><br/>
        <Input placeholder="Enter your email" type="email" id="email" name="email" className="w-full bg-slate-100"/><br/>

        <label for="lname">message:</label><br/>
        <Textarea placeholder="Enter your message" id="message" name="message" className="w-full bg-slate-100" /><br />

        <Button type="submit" className="w-full">Submit</Button>
    </form>
</div>

</div>
  );
};

export default ContactForm;
