import { FormEvent, useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { Card, CardBody, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MasterLogo from "../assets/Master_Logo.png";

const Index = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const currentURL = window.location.href;
    const newURL = `${currentURL}${encodeURIComponent(name)}`;
    navigator.clipboard
      .writeText(newURL)
      .then(() => {
        console.log("URL copied to clipboard:", newURL);
        toast({
          description: "Link Copied. Share to your ❤️",
          status: "success",
          duration: 3000,
        });
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
        toast({
          description: "Failed to copy URL to clipboard",
          status: "error",
          duration: 3000,
        });
      });
  };

  const handlePreview = () => {
    if (name) navigate(name);
    else {
      toast({
        description: "Name is Mandatory.",
        status: "error",
        duration: 3000,

        isClosable: true,
      });
    }
  };

  return (
    <>
      <NavBar />
      <Card>
        <CardBody>
          <div className="Home">
            <div className="img">
              <img src={MasterLogo} style={{ height: "30px" }} />
            </div>
            <div className="opt">
              <form onSubmit={handleSubmit}>
                Name:
                <Input
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  id="first_name"
                  variant="outline"
                  placeholder="Enter Name"
                  size="lg"
                  focusBorderColor="red"
                  required
                />
                <br />
                <br />
                {/* Select Message:
            <Select placeholder="Select option" focusBorderColor="red">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <br /> */}
                <div className="form-btns">
                  <Button type="submit" colorScheme="green">
                    Copy Link
                  </Button>
                  <Button colorScheme="blue" onClick={handlePreview}>
                    Preview
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Index;
